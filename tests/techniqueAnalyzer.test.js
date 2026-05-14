import { describe, it, expect, beforeAll } from 'vitest';
import { loadScript } from './helpers/loadScript.js';

beforeAll(() => {
  loadScript('modules/techniqueAnalyzer.js');
});

function makeAnalyzer({ pageType = 'general', enhancedKeywords = {}, techniques = [], contextPatterns = {} } = {}) {
  return new window.TechniqueAnalyzer(
    { enhancedKeywords: true, minKeywordLength: 3, debugMode: false },
    enhancedKeywords,
    contextPatterns,
    techniques,
    pageType
  );
}

// Instances are created inside each `it` (or just-in-time) so they capture
// the post-beforeAll window.TechniqueAnalyzer reference, not the undefined
// reference at describe-collection time.
let a;
beforeAll(() => {
  a = makeAnalyzer();
});

describe('TechniqueAnalyzer.calculateRiskLevel', () => {
  const cases = [
    [0, 'Faible'],
    [14, 'Faible'],
    [15, 'Modéré'],
    [29, 'Modéré'],
    [30, 'Élevé'],
    [49, 'Élevé'],
    [50, 'Très Élevé'],
    [74, 'Très Élevé'],
    [75, 'Critique'],
    [100, 'Critique'],
  ];
  for (const [score, expected] of cases) {
    it(`returns ${expected} for score ${score}`, () => {
      expect(a.calculateRiskLevel(score)).toBe(expected);
    });
  }
});

describe('TechniqueAnalyzer.getColor', () => {
  it('maps scores to canonical hex bands', () => {
    expect(a.getColor(0)).toBe('#27ae60');
    expect(a.getColor(20)).toBe('#f39c12');
    expect(a.getColor(40)).toBe('#e67e22');
    expect(a.getColor(60)).toBe('#d35400');
    expect(a.getColor(90)).toBe('#c0392b');
  });
});

describe('TechniqueAnalyzer.escapeRegex', () => {
  it('escapes regex metacharacters', () => {
    expect(a.escapeRegex('a.b*c?')).toBe('a\\.b\\*c\\?');
    expect(a.escapeRegex('(hello|world)')).toBe('\\(hello\\|world\\)');
  });
});

describe('TechniqueAnalyzer.findKeywordMatches', () => {
  it('matches whole words only for single tokens', () => {
    expect(a.findKeywordMatches('shocking news', ['shocking']).length).toBe(1);
    // "shock" should NOT match inside "shocking" due to word boundaries.
    expect(a.findKeywordMatches('shocking news', ['shock']).length).toBe(0);
  });

  it('matches multi-word expressions as substrings', () => {
    expect(a.findKeywordMatches('vous ne croirez pas ça', ['vous ne croirez pas']).length).toBe(1);
  });

  it('is case-insensitive', () => {
    expect(a.findKeywordMatches('SHOCKING news', ['shocking']).length).toBe(1);
  });

  it('counts repeated occurrences', () => {
    expect(a.findKeywordMatches('alerte alerte alerte', ['alerte']).length).toBe(3);
  });
});

describe('TechniqueAnalyzer.calculateContextualWeight', () => {
  it('boosts TE0153 on news pages', () => {
    expect(a.calculateContextualWeight({ index: 'TE0153' }, 'news')).toBe(1.4);
  });
  it('boosts TE0221 strongly on social pages', () => {
    expect(a.calculateContextualWeight({ index: 'TE0221' }, 'social')).toBe(1.6);
  });
  it('falls back to 1.0 for unknown technique/page combos', () => {
    expect(a.calculateContextualWeight({ index: 'TE9999' }, 'news')).toBe(1.0);
    expect(a.calculateContextualWeight({ index: 'TE0153' }, 'unknown')).toBe(1.0);
  });
});

describe('TechniqueAnalyzer.calculateDynamicWeight', () => {
  it('escalates with occurrence count', () => {
    expect(a.calculateDynamicWeight({ index: 'TE9999' }, 0)).toBe(1.0);
    expect(a.calculateDynamicWeight({ index: 'TE9999' }, 3)).toBeCloseTo(1.1);
    expect(a.calculateDynamicWeight({ index: 'TE9999' }, 5)).toBeCloseTo(1.2);
    expect(a.calculateDynamicWeight({ index: 'TE9999' }, 10)).toBeCloseTo(1.4);
  });
  it('applies the critical-technique bonus', () => {
    // TE0221 critical at >=2 occurrences -> 1.1 * 1.1
    expect(a.calculateDynamicWeight({ index: 'TE0221' }, 3)).toBeCloseTo(1.21, 5);
  });
});

describe('TechniqueAnalyzer.performAnalysis', () => {
  it('analyses only techniques (TE), not tactics (TA)', () => {
    const techniques = [
      {
        index: 'TA0011',
        type: 'tactic',
        nom: 'Tactic A',
        phase: 'Detect',
        mots_cles: ['scandal'],
      },
      {
        index: 'TE0153',
        type: 'technique',
        nom: 'Clickbait',
        phase: 'Detect',
        mots_cles: ['shocking'],
        weight: 1.0,
      },
    ];
    const a = makeAnalyzer({ techniques });
    const res = a.performAnalysis('Title', 'A shocking story');
    expect(res.detectedTechniques.every((t) => t.index.startsWith('TE'))).toBe(true);
    expect(res.detectedTechniques.length).toBeGreaterThan(0);
  });

  it('caps the global score at 100', () => {
    const techniques = [
      {
        index: 'TE0001',
        type: 'technique',
        nom: 'Flood',
        phase: 'Detect',
        mots_cles: ['danger'],
        weight: 5.0,
      },
    ];
    const a = makeAnalyzer({ techniques });
    const res = a.performAnalysis('', 'danger '.repeat(200));
    expect(res.globalScore).toBeLessThanOrEqual(100);
    expect(res.globalScore).toBe(100);
  });

  it('returns Faible risk and a green color for clean content', () => {
    const techniques = [
      {
        index: 'TE0001',
        type: 'technique',
        nom: 'Flood',
        phase: 'Detect',
        mots_cles: ['danger'],
        weight: 1.0,
      },
    ];
    const a = makeAnalyzer({ techniques });
    const res = a.performAnalysis('Hello', 'Nothing alarming here');
    expect(res.globalScore).toBe(0);
    expect(res.riskLevel).toBe('Faible');
    expect(res.riskColor).toBe('#27ae60');
  });
});
