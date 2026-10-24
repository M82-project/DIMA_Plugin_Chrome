import { describe, it, expect, beforeAll } from 'vitest';
import { loadScript } from './helpers/loadScript.js';

// Charge la base réelle puis le gestionnaire, dans l'ordre du manifest.
beforeAll(() => {
  loadScript('data/databases/AfricanInitiative.js');
  loadScript('modules/Suspicioussitesmanager.js');
});

describe('Base African Initiative', () => {
  it('expose les domaines sur window', () => {
    expect(Array.isArray(window.africanInitiativeDomains)).toBe(true);
    expect(window.africanInitiativeDomains).toHaveLength(21);
  });

  it('est enregistrée comme source par le gestionnaire', () => {
    const m = new window.SuspiciousSitesManager();
    expect(m.sources.has('AfricanInitiative')).toBe(true);
    expect(m.sources.get('AfricanInitiative').count).toBe(21);
  });

  it('détecte les domaines de l\'opération (avec et sans www)', () => {
    const m = new window.SuspiciousSitesManager();
    for (const url of [
      'https://africadaily.africa/article/1',
      'https://www.afrinz.ru/',
      'https://perspectivesahelienne.org/news',
    ]) {
      const res = m.checkSite(url);
      expect(res.isSuspicious, url).toBe(true);
      expect(res.siteInfo.tags).toContain('AfricanInitiative');
      expect(res.riskConfig).toBeTruthy();
    }
  });

  it('ne signale pas un domaine sans rapport', () => {
    const m = new window.SuspiciousSitesManager();
    expect(m.checkSite('https://africa.example/').isSuspicious).toBe(false);
  });
});
