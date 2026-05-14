import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import { loadScript } from './helpers/loadScript.js';

// Regression for Copilot review feedback on PR #23: the floating score
// badge must be reachable by keyboard users and announce itself to screen
// readers. We exercise the real createButton() so any regression on the
// ARIA attributes or the keydown handler is caught.

beforeAll(() => {
  loadScript('modules/uiManager.js');
});

describe('Floating badge — keyboard accessibility', () => {
  let ui;
  let opened;

  beforeEach(() => {
    document.body.innerHTML = '';
    ui = new window.UIManager({ debugMode: false });
    // Stub showModal so we can observe activation without touching the
    // full modal pipeline (we only care that the badge fires it).
    opened = 0;
    ui.showModal = () => { opened += 1; };
    // Stub suspicious-site lookup to a clean negative.
    window.checkSuspiciousSite = () => ({ isSuspicious: false });
    ui.createButton({
      globalScore: 42,
      riskLevel: 'Élevé',
      riskColor: '#e67e22',
      detectedTechniques: [],
      contentLength: 0,
    });
  });

  const badge = () => document.getElementById('dima-btn');

  it('renders the badge with role=button and tabindex=0', () => {
    const b = badge();
    expect(b).not.toBeNull();
    expect(b.getAttribute('role')).toBe('button');
    expect(b.getAttribute('tabindex')).toBe('0');
  });

  it('exposes an aria-label that includes the score and risk level', () => {
    const label = badge().getAttribute('aria-label');
    expect(label).toContain('42');
    expect(label).toContain('Élevé');
  });

  it('hides the decorative brain emoji from screen readers', () => {
    const span = badge().querySelector('span[aria-hidden="true"]');
    expect(span).not.toBeNull();
    expect(span.textContent).toBe('🧠');
  });

  it('activates on Enter', () => {
    const e = new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
    badge().dispatchEvent(e);
    expect(opened).toBe(1);
  });

  it('activates on Space and prevents default scroll', () => {
    const e = new window.KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true });
    badge().dispatchEvent(e);
    expect(opened).toBe(1);
    expect(e.defaultPrevented).toBe(true);
  });

  it('does not activate on unrelated keys', () => {
    const e = new window.KeyboardEvent('keydown', { key: 'a', bubbles: true });
    badge().dispatchEvent(e);
    expect(opened).toBe(0);
  });
});
