import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import { loadScript } from './helpers/loadScript.js';

beforeAll(() => {
  loadScript('modules/contentExtractor.js');
});

describe('ContentExtractor.cleanText', () => {
  let ce;
  beforeEach(() => {
    ce = new window.ContentExtractor({ debugMode: false });
  });

  it('preserves Latin text with French accents', () => {
    expect(ce.cleanText('Élections présidentielles à Paris')).toBe(
      'Élections présidentielles à Paris'
    );
  });

  it('preserves Cyrillic / Chinese / Arabic scripts', () => {
    // Regression test: the previous ASCII \w regex stripped non-Latin scripts,
    // which was the exact content the plugin is meant to analyse.
    expect(ce.cleanText('Здравствуй мир')).toBe('Здравствуй мир');
    expect(ce.cleanText('你好世界')).toBe('你好世界');
    expect(ce.cleanText('مرحبا بالعالم')).toBe('مرحبا بالعالم');
  });

  it('strips HTML tag delimiters', () => {
    expect(ce.cleanText('hello <script>alert(1)</script> world')).toBe(
      'hello scriptalert(1)script world'
    );
  });

  it('collapses whitespace', () => {
    expect(ce.cleanText('a    b\n\t  c')).toBe('a b c');
  });

  it('returns empty string for null/undefined/empty', () => {
    expect(ce.cleanText('')).toBe('');
    expect(ce.cleanText(null)).toBe('');
    expect(ce.cleanText(undefined)).toBe('');
  });
});

describe('ContentExtractor.detectPageType', () => {
  let ce;
  beforeEach(() => {
    ce = new window.ContentExtractor({ debugMode: false });
  });

  // happy-dom's window.location is read-only at the host level but the
  // module reads `window.location.href` so we can shadow it.
  const at = (href) => {
    Object.defineProperty(window, 'location', {
      value: { href },
      writable: true,
      configurable: true,
    });
  };

  const cases = [
    // [url, expected]
    ['https://news.example.com/article', 'news'],
    ['https://example.com/news/foo', 'news'],
    ['https://example.fr/actualites/abc', 'news'],
    ['https://example.com/article/foo', 'news'],
    ['https://example.com/blog/post-1', 'blog'],
    ['https://twitter.com/user', 'social'],
    ['https://x.com/user', 'social'],
    ['https://m.facebook.com/profile', 'social'],
    ['https://example.com/products/12', 'commerce'],
    ['https://example.com/shopping-cart', 'commerce'],
    ['https://shop.example.com/', 'commerce'],
    ['https://example.com/about', 'general'],
    // Regression: 'businessnews' contains 'news' as substring but not as word.
    ['https://businessnews.example.com/foo', 'general'],
    // Regression: path-level 'news' wins, even if hostname is unrelated.
    ['https://buyer-news.example.com/article', 'news'],
    // Copilot review feedback (PR #23): /articles/ and /blogs/ must match
    // their singular stems — matchWord previously left them in 'general'.
    ['https://example.com/articles/foo', 'news'],
    ['https://example.com/blogs/post', 'blog'],
    ['https://blogs.example.com/foo', 'blog'],
  ];

  for (const [url, expected] of cases) {
    it(`classifies ${url} as ${expected}`, () => {
      at(url);
      expect(ce.detectPageType()).toBe(expected);
    });
  }
});

describe('ContentExtractor.extractTitle', () => {
  let ce;
  beforeEach(() => {
    ce = new window.ContentExtractor({ debugMode: false });
    document.head.innerHTML = '';
    document.body.innerHTML = '';
  });

  it('uses document.title as a primary source', () => {
    document.title = 'My Article';
    expect(ce.extractTitle()).toContain('My Article');
  });

  it('also pulls og:title and twitter:title', () => {
    // happy-dom: setting document.title injects a <title> into <head>, so we
    // must set the head innerHTML FIRST, then set document.title, otherwise
    // overwriting head wipes the <title> element.
    document.head.innerHTML = `
      <meta property="og:title" content="OG Title">
      <meta name="twitter:title" content="Twitter Title">
    `;
    document.title = 'Doc Title';
    const title = ce.extractTitle();
    expect(title).toContain('Doc Title');
    expect(title).toContain('OG Title');
    expect(title).toContain('Twitter Title');
  });

  it('caps title at 500 chars', () => {
    document.title = 'x'.repeat(1000);
    expect(ce.extractTitle().length).toBeLessThanOrEqual(500);
  });
});

describe('ContentExtractor.shouldSkipElement', () => {
  let ce;
  beforeEach(() => {
    ce = new window.ContentExtractor({ debugMode: false });
    document.body.innerHTML = '';
  });

  it('skips classic structural / ad classes', () => {
    document.body.innerHTML = `
      <div class="advertisement">ad</div>
      <nav>nav</nav>
      <div class="cookie-banner">cookie</div>
    `;
    expect(ce.shouldSkipElement(document.querySelector('.advertisement'))).toBe(true);
    expect(ce.shouldSkipElement(document.querySelector('nav'))).toBe(true);
    expect(ce.shouldSkipElement(document.querySelector('.cookie-banner'))).toBe(true);
  });

  it('does not skip editorial content', () => {
    document.body.innerHTML = `<article><p class="lead">Hello world</p></article>`;
    expect(ce.shouldSkipElement(document.querySelector('p.lead'))).toBe(false);
  });

  it('skips elements with ad data attributes', () => {
    document.body.innerHTML = `<div data-ad-slot="1234">sponsored</div>`;
    expect(ce.shouldSkipElement(document.querySelector('[data-ad-slot]'))).toBe(true);
  });

  it('uses precise boundaries: "advert" does NOT match "advertise" or "headvertise"', () => {
    // getSkipPattern builds `(^|[-_])${skip}([-_]|$)`, so an "advert" rule
    // only matches a full word/segment ("ad-advert" yes, "advertise" no).
    // This is the correct behaviour — we lock it so a future regex change
    // can't silently turn it into a noisy substring match.
    document.body.innerHTML = `
      <div class="advertise">editorial term — should NOT skip</div>
      <div class="headvertise">unrelated word — should NOT skip</div>
      <div class="my-advert-banner">real ad slot — should skip</div>
      <div class="advertisement">real ad class — should skip</div>
    `;
    expect(ce.shouldSkipElement(document.querySelector('.advertise'))).toBe(false);
    expect(ce.shouldSkipElement(document.querySelector('.headvertise'))).toBe(false);
    expect(ce.shouldSkipElement(document.querySelector('.my-advert-banner'))).toBe(true);
    expect(ce.shouldSkipElement(document.querySelector('.advertisement'))).toBe(true);
  });
});
