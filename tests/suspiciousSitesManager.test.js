import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import { loadScript } from './helpers/loadScript.js';

beforeAll(() => {
  loadScript('modules/Suspicioussitesmanager.js');
});

function makeManager(seed = {}) {
  const m = new window.SuspiciousSitesManager();
  // Replace any auto-loaded sources with a clean controlled seed.
  m.sources = new Map();
  m.allSites = [];
  for (const [name, sites] of Object.entries(seed)) {
    m.sources.set(name, { domains: sites, metadata: {}, count: sites.length });
    m.allSites.push(...sites);
  }
  return m;
}

describe('SuspiciousSitesManager.checkSite (domain formats)', () => {
  it('exact match handles bare host and www', () => {
    const m = makeManager({
      Test: [{ domain: 'badnews.example', matchType: 'exact', riskLevel: 'high' }],
    });
    expect(m.checkSite('https://badnews.example/foo').isSuspicious).toBe(true);
    expect(m.checkSite('https://www.badnews.example/foo').isSuspicious).toBe(true);
    expect(m.checkSite('https://goodnews.example/foo').isSuspicious).toBe(false);
  });

  it('contains match recognises subdomain placement', () => {
    const m = makeManager({
      Test: [{ domain: 'rt.com', matchType: 'contains', riskLevel: 'high' }],
    });
    expect(m.checkSite('https://news.rt.com/article').isSuspicious).toBe(true);
    expect(m.checkSite('https://rt.com/article').isSuspicious).toBe(true);
    expect(m.checkSite('https://example.com/').isSuspicious).toBe(false);
  });

  it('pattern match uses regex (case-insensitive)', () => {
    const m = makeManager({
      Test: [{ domain: '^pravda-[a-z]+\\.com$', matchType: 'pattern', riskLevel: 'high' }],
    });
    expect(m.checkSite('https://pravda-fr.com/').isSuspicious).toBe(true);
    expect(m.checkSite('https://PRAVDA-DE.COM/').isSuspicious).toBe(true);
    expect(m.checkSite('https://pravda.com/').isSuspicious).toBe(false);
  });

  it('returns the matched site info and a risk config', () => {
    const m = makeManager({
      Test: [{ domain: 'badnews.example', matchType: 'exact', riskLevel: 'critical', reason: 'r', source: 's' }],
    });
    const res = m.checkSite('https://badnews.example/');
    expect(res.isSuspicious).toBe(true);
    expect(res.siteInfo.reason).toBe('r');
    expect(res.riskConfig.label).toBe('Risque Critique');
  });
});

describe('SuspiciousSitesManager.checkSite (social formats)', () => {
  it('matches Storm1516 native handles on X/Twitter', () => {
    const m = makeManager({
      Test: [{ platform: 'X/Twitter', handle: '@JimFergusonUK', url: 'https://x.com/JimFergusonUK', riskLevel: 'high' }],
    });
    expect(m.checkSite('https://x.com/JimFergusonUK').isSuspicious).toBe(true);
    expect(m.checkSite('https://twitter.com/jimfergusonuk').isSuspicious).toBe(true);
    expect(m.checkSite('https://x.com/SomeoneElse').isSuspicious).toBe(false);
  });

  it('matches Telegram channels (with and without /s/ prefix)', () => {
    const m = makeManager({
      Test: [{ platform: 'Telegram', handle: '@badchannel', riskLevel: 'high' }],
    });
    expect(m.checkSite('https://t.me/badchannel').isSuspicious).toBe(true);
    expect(m.checkSite('https://t.me/s/badchannel').isSuspicious).toBe(true);
    expect(m.checkSite('https://t.me/goodchannel').isSuspicious).toBe(false);
  });

  it('does not match a social handle on the wrong platform', () => {
    const m = makeManager({
      Test: [{ platform: 'X/Twitter', handle: '@Jim', riskLevel: 'high' }],
    });
    expect(m.checkSite('https://t.me/Jim').isSuspicious).toBe(false);
  });

  it('warns on unknown platforms but does not throw', () => {
    const m = makeManager({
      Test: [{ platform: 'UnknownPlat', handle: '@x', riskLevel: 'high' }],
    });
    expect(() => m.checkSite('https://example.com/x')).not.toThrow();
    expect(m.checkSite('https://example.com/x').isSuspicious).toBe(false);
  });
});

describe('SuspiciousSitesManager.extractSocialHandle', () => {
  let m;
  beforeEach(() => {
    m = makeManager({});
  });

  it('extracts Twitter handles', () => {
    expect(m.extractSocialHandle('https://twitter.com/Alice', 'twitter')).toBe('Alice');
    expect(m.extractSocialHandle('https://x.com/Bob/status/1', 'twitter')).toBe('Bob');
  });

  it('extracts YouTube handles with the @ prefix', () => {
    expect(m.extractSocialHandle('https://youtube.com/@channel', 'youtube')).toBe('channel');
  });

  it('returns null when the URL host does not match the social platform', () => {
    expect(m.extractSocialHandle('https://example.com/Alice', 'twitter')).toBe(null);
  });
});

describe('SuspiciousSitesManager.getRiskConfig', () => {
  it('returns canonical configs per level', () => {
    const m = makeManager({});
    expect(m.getRiskConfig('critical').label).toBe('Risque Critique');
    expect(m.getRiskConfig('high').label).toBe('Risque Élevé');
    expect(m.getRiskConfig('medium').label).toBe('Vigilance Requise');
    expect(m.getRiskConfig('low').label).toBe('À Surveiller');
  });

  it('defaults to "low" config for unknown levels', () => {
    const m = makeManager({});
    expect(m.getRiskConfig('weird-level').label).toBe('À Surveiller');
  });
});

describe('SuspiciousSitesManager logging', () => {
  it('does not console.log when window.DIMA_DEBUG is falsy', () => {
    // Regression: gate verbose logs so the extension does not spam every host
    // page console when running on <all_urls>.
    const originalLog = console.log;
    const calls = [];
    console.log = (...args) => calls.push(args);
    try {
      const m = new window.SuspiciousSitesManager(); // re-init in test env
      m.log('should be silent');
    } finally {
      console.log = originalLog;
    }
    expect(calls.length).toBe(0);
  });

  it('logs through the gate when DIMA_DEBUG is set', () => {
    const originalLog = console.log;
    const calls = [];
    console.log = (...args) => calls.push(args);
    window.DIMA_DEBUG = true;
    try {
      const m = new window.SuspiciousSitesManager();
      m.log('this one is allowed');
    } finally {
      console.log = originalLog;
      window.DIMA_DEBUG = false;
    }
    expect(calls.some((args) => String(args[0]).includes('this one is allowed'))).toBe(true);
  });
});
