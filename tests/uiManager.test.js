import { describe, it, expect, beforeAll } from 'vitest';
import { loadScript } from './helpers/loadScript.js';

beforeAll(() => {
  loadScript('modules/uiManager.js');
});

function makeUi() {
  return new window.UIManager({ debugMode: false });
}

// Lazy-init: `window.UIManager` only exists after `beforeAll`.
let ui;
beforeAll(() => {
  ui = makeUi();
});

describe('UIManager.escapeHtml', () => {
  it('escapes the five canonical HTML metacharacters', () => {
    expect(ui.escapeHtml('<script>alert("XSS")</script>')).toBe(
      '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
    );
    expect(ui.escapeHtml("It's & she said")).toBe('It&#39;s &amp; she said');
  });

  it('returns empty string for null/undefined', () => {
    expect(ui.escapeHtml(null)).toBe('');
    expect(ui.escapeHtml(undefined)).toBe('');
  });

  it('coerces non-strings to strings', () => {
    expect(ui.escapeHtml(42)).toBe('42');
    expect(ui.escapeHtml(true)).toBe('true');
  });
});

describe('UIManager.sanitizeHexColor', () => {
  it('accepts valid #RRGGBB', () => {
    expect(ui.sanitizeHexColor('#abcdef')).toBe('#abcdef');
    expect(ui.sanitizeHexColor('#ABCDEF')).toBe('#ABCDEF');
    expect(ui.sanitizeHexColor('#123456')).toBe('#123456');
  });

  it('rejects shorthand, missing #, named colors, and CSS injection payloads', () => {
    expect(ui.sanitizeHexColor('#abc')).toBe('#c0392b');
    expect(ui.sanitizeHexColor('abcdef')).toBe('#c0392b');
    expect(ui.sanitizeHexColor('red')).toBe('#c0392b');
    // No CSS injection — a malicious string is replaced by the fallback.
    expect(ui.sanitizeHexColor('#fff; background: url(x)')).toBe('#c0392b');
    expect(ui.sanitizeHexColor(null)).toBe('#c0392b');
    expect(ui.sanitizeHexColor(undefined)).toBe('#c0392b');
    expect(ui.sanitizeHexColor(42)).toBe('#c0392b');
  });
});

describe('UIManager.isSafeHttpUrl', () => {
  it('accepts http and https URLs', () => {
    expect(ui.isSafeHttpUrl('https://example.com/foo')).toBe(true);
    expect(ui.isSafeHttpUrl('http://example.com/foo')).toBe(true);
  });

  it('rejects javascript:, data:, file:, and malformed inputs', () => {
    expect(ui.isSafeHttpUrl('javascript:alert(1)')).toBe(false);
    expect(ui.isSafeHttpUrl('data:text/html,xxx')).toBe(false);
    expect(ui.isSafeHttpUrl('file:///etc/passwd')).toBe(false);
    expect(ui.isSafeHttpUrl('not a url')).toBe(false);
    expect(ui.isSafeHttpUrl(null)).toBe(false);
    expect(ui.isSafeHttpUrl(undefined)).toBe(false);
  });
});

describe('UIManager.adjustColor', () => {
  it('returns a 7-char #RRGGBB string', () => {
    const out = ui.adjustColor('#3498db', -20);
    expect(out).toMatch(/^#[0-9a-f]{6}$/);
  });

  it('clamps without underflow on black', () => {
    expect(ui.adjustColor('#000000', -50)).toBe('#000000');
  });

  it('clamps without overflow on white', () => {
    expect(ui.adjustColor('#ffffff', 50)).toBe('#ffffff');
  });
});

describe('UIManager.generateTooltip', () => {
  it('renders score, risk level and the top techniques', () => {
    const ui = makeUi();
    ui.analysisResults = {
      globalScore: 42,
      riskLevel: 'Élevé',
      detectedTechniques: [
        { nom: 'Clickbait' },
        { nom: 'Appel à l’autorité' },
        { nom: 'Urgence' },
        { nom: 'Quatrième' },
      ],
      contentLength: 1234,
    };
    ui.suspiciousSiteCheck = { isSuspicious: false };
    const t = ui.generateTooltip();
    expect(t).toContain('DIMA Score: 42');
    expect(t).toContain('Élevé');
    expect(t).toContain('Clickbait');
    expect(t).toContain('4 techniques détectées');
    expect(t).not.toContain('Quatrième'); // only top 3 are listed
  });

  it('appends a suspicious-site warning when applicable', () => {
    const ui = makeUi();
    ui.analysisResults = { globalScore: 5, riskLevel: 'Faible', detectedTechniques: [], contentLength: 0 };
    ui.suspiciousSiteCheck = { isSuspicious: true };
    expect(ui.generateTooltip()).toContain('SITE SUSPECT');
  });
});
