import { describe, it, expect, beforeAll, beforeEach, vi } from 'vitest';
import { loadScript } from './helpers/loadScript.js';

beforeAll(() => {
  loadScript('modules/uiManager.js');
});

const SIZE = { width: 120, height: 40 };
const VIEW = { width: 1000, height: 800 };

let ui;
beforeAll(() => {
  ui = new window.UIManager({ debugMode: false });
});

// ---------------------------------------------------------------------------
// Logique pure de contrainte au viewport.
// Aucune dépendance au layout: happy-dom ne calcule pas de mise en page, donc
// c'est le seul endroit du drag où un test mesure quelque chose de réel.
// ---------------------------------------------------------------------------
describe('UIManager.clampToViewport', () => {
  it('leaves an in-bounds position untouched', () => {
    expect(ui.clampToViewport(300, 200, SIZE, VIEW)).toEqual({ left: 300, top: 200 });
  });

  it('pins to the right edge minus the margin when overflowing horizontally', () => {
    // 1000 - 120 - 4 = 876
    expect(ui.clampToViewport(5000, 100, SIZE, VIEW).left).toBe(876);
  });

  it('pins to the bottom edge minus the margin when overflowing vertically', () => {
    // 800 - 40 - 4 = 756
    expect(ui.clampToViewport(100, 5000, SIZE, VIEW).top).toBe(756);
  });

  it('pins to the margin on negative coordinates', () => {
    expect(ui.clampToViewport(-500, -500, SIZE, VIEW)).toEqual({ left: 4, top: 4 });
  });

  it('falls back to the margin when the viewport is smaller than the badge', () => {
    const tiny = { width: 50, height: 20 };
    expect(ui.clampToViewport(400, 400, SIZE, tiny)).toEqual({ left: 4, top: 4 });
  });

  it('honours a custom margin', () => {
    // 1000 - 120 - 20 = 860
    expect(ui.clampToViewport(5000, 0, SIZE, VIEW, 20)).toEqual({ left: 860, top: 20 });
  });

  it('is defensive about missing or non-finite inputs', () => {
    expect(ui.clampToViewport(NaN, NaN, SIZE, VIEW)).toEqual({ left: 4, top: 4 });
    expect(ui.clampToViewport(undefined, null, SIZE, VIEW)).toEqual({ left: 4, top: 4 });
    // No size / no viewport: everything collapses onto the margin.
    expect(ui.clampToViewport(300, 300, undefined, undefined)).toEqual({ left: 4, top: 4 });
  });

  it('keeps the badge visible when it sits exactly on the edge', () => {
    expect(ui.clampToViewport(876, 756, SIZE, VIEW)).toEqual({ left: 876, top: 756 });
    expect(ui.clampToViewport(877, 757, SIZE, VIEW)).toEqual({ left: 876, top: 756 });
  });
});

// ---------------------------------------------------------------------------
// Comportements observables sans layout: arbitrage clic/déplacement, écriture
// et relecture de la position, nettoyage des listeners.
// ---------------------------------------------------------------------------
function analysisFixture() {
  return {
    globalScore: 42,
    riskLevel: 'Élevé',
    riskColor: '#c0392b',
    detectedTechniques: [],
    contentLength: 100,
  };
}

function buildBadge(instance) {
  instance.createButton(analysisFixture());
  return document.getElementById('dima-btn');
}

function pointer(type, props = {}) {
  return new window.PointerEvent(type, {
    pointerId: 1,
    bubbles: true,
    cancelable: true,
    clientX: 0,
    clientY: 0,
    ...props,
  });
}

describe('badge drag: click vs drag arbitration', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    chrome.storage.local.get = async () => ({});
    chrome.storage.local.set = async () => undefined;
  });

  it('opens the report on a plain click', () => {
    const instance = new window.UIManager({ debugMode: false });
    instance.showModal = vi.fn();
    const badge = buildBadge(instance);

    badge.dispatchEvent(pointer('pointerdown', { clientX: 100, clientY: 100 }));
    badge.dispatchEvent(pointer('pointerup', { clientX: 100, clientY: 100 }));
    badge.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));

    expect(instance.showModal).toHaveBeenCalledTimes(1);
  });

  it('ignores a sub-threshold jitter and still counts as a click', () => {
    const instance = new window.UIManager({ debugMode: false });
    instance.showModal = vi.fn();
    const badge = buildBadge(instance);

    badge.dispatchEvent(pointer('pointerdown', { clientX: 100, clientY: 100 }));
    // 2px total: below MOVE_THRESHOLD (4px).
    badge.dispatchEvent(pointer('pointermove', { clientX: 101, clientY: 101 }));
    badge.dispatchEvent(pointer('pointerup', { clientX: 101, clientY: 101 }));
    badge.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));

    expect(instance.showModal).toHaveBeenCalledTimes(1);
  });

  it('swallows the click that terminates a real drag', () => {
    const instance = new window.UIManager({ debugMode: false });
    instance.showModal = vi.fn();
    const badge = buildBadge(instance);

    badge.dispatchEvent(pointer('pointerdown', { clientX: 100, clientY: 100 }));
    badge.dispatchEvent(pointer('pointermove', { clientX: 260, clientY: 300 }));
    badge.dispatchEvent(pointer('pointerup', { clientX: 260, clientY: 300 }));
    badge.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));

    expect(instance.showModal).not.toHaveBeenCalled();
  });

  it('re-arms after a drag: the next plain click opens the report again', () => {
    const instance = new window.UIManager({ debugMode: false });
    instance.showModal = vi.fn();
    const badge = buildBadge(instance);

    badge.dispatchEvent(pointer('pointerdown', { clientX: 100, clientY: 100 }));
    badge.dispatchEvent(pointer('pointermove', { clientX: 260, clientY: 300 }));
    badge.dispatchEvent(pointer('pointerup', { clientX: 260, clientY: 300 }));
    badge.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));

    badge.dispatchEvent(pointer('pointerdown', { clientX: 260, clientY: 300 }));
    badge.dispatchEvent(pointer('pointerup', { clientX: 260, clientY: 300 }));
    badge.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));

    expect(instance.showModal).toHaveBeenCalledTimes(1);
  });
});

describe('badge drag: positioning side effects', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    chrome.storage.local.get = async () => ({});
    chrome.storage.local.set = async () => undefined;
  });

  it('switches from right-anchored to left-anchored on pointerdown', () => {
    const instance = new window.UIManager({ debugMode: false });
    const badge = buildBadge(instance);

    expect(badge.style.getPropertyValue('right')).toBe('20px');

    badge.dispatchEvent(pointer('pointerdown', { clientX: 100, clientY: 100 }));

    expect(badge.style.getPropertyValue('right')).toBe('auto');
    expect(badge.style.getPropertyValue('left')).toMatch(/px$/);
  });

  it('suspends the CSS transition during the drag and restores it after', () => {
    const instance = new window.UIManager({ debugMode: false });
    const badge = buildBadge(instance);
    const before = badge.style.getPropertyValue('transition');

    expect(before).not.toBe('');

    badge.dispatchEvent(pointer('pointerdown', { clientX: 100, clientY: 100 }));
    expect(badge.style.getPropertyValue('transition')).toBe('none');

    badge.dispatchEvent(pointer('pointerup', { clientX: 100, clientY: 100 }));
    expect(badge.style.getPropertyValue('transition')).toBe(before);
    expect(badge.style.getPropertyPriority('transition')).toBe('important');
  });

  it('moves with the arrow keys and accelerates with Shift', () => {
    const instance = new window.UIManager({ debugMode: false });
    const badge = buildBadge(instance);

    badge.dispatchEvent(
      new window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true })
    );
    const small = parseFloat(badge.style.getPropertyValue('left'));

    badge.dispatchEvent(
      new window.KeyboardEvent('keydown', {
        key: 'ArrowRight',
        shiftKey: true,
        bubbles: true,
        cancelable: true,
      })
    );
    const large = parseFloat(badge.style.getPropertyValue('left'));

    expect(large - small).toBe(20);
  });

  it('does not hijack keys it has no business handling', () => {
    const instance = new window.UIManager({ debugMode: false });
    instance.showModal = vi.fn();
    const badge = buildBadge(instance);

    const event = new window.KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true,
    });
    badge.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
  });
});

describe('badge drag: position persistence', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    chrome.storage.local.get = async () => ({});
    chrome.storage.local.set = async () => undefined;
  });

  it('writes the position to storage after a drag, debounced', async () => {
    vi.useFakeTimers();
    const set = vi.fn(async () => undefined);
    chrome.storage.local.set = set;

    const instance = new window.UIManager({ debugMode: false });
    const badge = buildBadge(instance);

    badge.dispatchEvent(pointer('pointerdown', { clientX: 100, clientY: 100 }));
    badge.dispatchEvent(pointer('pointermove', { clientX: 260, clientY: 300 }));
    badge.dispatchEvent(pointer('pointerup', { clientX: 260, clientY: 300 }));

    // Debounced: nothing written yet.
    expect(set).not.toHaveBeenCalled();

    vi.advanceTimersByTime(250);
    expect(set).toHaveBeenCalledTimes(1);
    expect(set.mock.calls[0][0]).toHaveProperty('dima:badgePosition');

    vi.useRealTimers();
  });

  it('does not write anything when the badge was merely clicked', async () => {
    vi.useFakeTimers();
    const set = vi.fn(async () => undefined);
    chrome.storage.local.set = set;

    const instance = new window.UIManager({ debugMode: false });
    const badge = buildBadge(instance);

    badge.dispatchEvent(pointer('pointerdown', { clientX: 100, clientY: 100 }));
    badge.dispatchEvent(pointer('pointerup', { clientX: 100, clientY: 100 }));

    vi.advanceTimersByTime(250);
    expect(set).not.toHaveBeenCalled();

    vi.useRealTimers();
  });

  it('collapses a burst of keyboard moves into a single write', async () => {
    vi.useFakeTimers();
    const set = vi.fn(async () => undefined);
    chrome.storage.local.set = set;

    const instance = new window.UIManager({ debugMode: false });
    const badge = buildBadge(instance);

    for (let i = 0; i < 10; i += 1) {
      badge.dispatchEvent(
        new window.KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true, cancelable: true })
      );
    }

    vi.advanceTimersByTime(250);
    expect(set).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });

  it('restores a stored position on creation', async () => {
    chrome.storage.local.get = async () => ({ 'dima:badgePosition': { left: 321, top: 123 } });

    const instance = new window.UIManager({ debugMode: false });
    const badge = buildBadge(instance);

    // restorePosition() is async: let the microtask queue drain.
    await Promise.resolve();
    await Promise.resolve();

    expect(badge.style.getPropertyValue('left')).toBe('321px');
    expect(badge.style.getPropertyValue('top')).toBe('123px');
    expect(badge.style.getPropertyValue('right')).toBe('auto');
  });

  it('ignores a malformed stored position', async () => {
    chrome.storage.local.get = async () => ({ 'dima:badgePosition': { left: 'nope', top: null } });

    const instance = new window.UIManager({ debugMode: false });
    const badge = buildBadge(instance);

    await Promise.resolve();
    await Promise.resolve();

    // Untouched: still anchored to the right as originally styled.
    expect(badge.style.getPropertyValue('right')).toBe('20px');
  });

  it('survives a storage backend that throws', async () => {
    chrome.storage.local.get = async () => {
      throw new Error('storage unavailable');
    };

    const instance = new window.UIManager({ debugMode: false });
    expect(() => buildBadge(instance)).not.toThrow();

    await Promise.resolve();
    await Promise.resolve();

    expect(document.getElementById('dima-btn')).not.toBeNull();
  });
});
