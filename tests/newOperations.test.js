import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadScript } from './helpers/loadScript.js';

const repoRoot = resolve(import.meta.dirname, '..');

// Bases ajoutées à partir de github.com/tripkrant/IO-Campaign-Collections.
const OPERATIONS = [
  { file: 'AfricaPolitology', global: 'africaPolitologyDomains', count: 5, sample: 'gr-group.site' },
  { file: 'BorderlessGroup', global: 'borderlessGroupDomains', count: 11, sample: 'firstopdesign.com' },
  { file: 'ChinaNewsServiceNetwork', global: 'chinaNewsServiceNetworkDomains', count: 36, sample: 'oushinet.com' },
  { file: 'CopycopStorm1516', global: 'copycopStorm1516Domains', count: 34, sample: 'aktuell-nachricht.de' },
  { file: 'DiversAutres', global: 'diversAutresDomains', count: 41, sample: 'mind-force.net' },
];

function domainsIn(file) {
  const src = readFileSync(resolve(repoRoot, 'data/databases', file), 'utf8');
  return [...src.matchAll(/domain:\s*"([^"]+)"/g)].map((m) => m[1].toLowerCase());
}

beforeAll(() => {
  for (const op of OPERATIONS) loadScript(`data/databases/${op.file}.js`);
  loadScript('modules/Suspicioussitesmanager.js');
});

describe.each(OPERATIONS)('Base $file', (op) => {
  it('expose ses domaines sur window', () => {
    expect(window[op.global]).toHaveLength(op.count);
  });

  it('est enregistrée comme source par le gestionnaire', () => {
    const m = new window.SuspiciousSitesManager();
    expect(m.sources.get(op.file)?.count).toBe(op.count);
  });

  it('détecte un domaine de l\'opération (avec et sans www)', () => {
    const m = new window.SuspiciousSitesManager();
    for (const url of [`https://${op.sample}/article`, `https://www.${op.sample}/`]) {
      const res = m.checkSite(url);
      expect(res.isSuspicious, url).toBe(true);
      expect(res.siteInfo.domain).toBe(op.sample);
    }
  });

  it('ne contient aucun domaine déjà présent dans une autre base', () => {
    const own = new Set(domainsIn(`${op.file}.js`));
    const others = readdirSync(resolve(repoRoot, 'data/databases'))
      .filter((f) => f.endsWith('.js') && f !== `${op.file}.js`);
    const dups = others.flatMap((f) => domainsIn(f).filter((d) => own.has(d)).map((d) => `${d} (${f})`));
    expect(dups).toEqual([]);
  });

  it('est déclarée dans manifest.json avant le gestionnaire', () => {
    const js = JSON.parse(readFileSync(resolve(repoRoot, 'manifest.json'), 'utf8')).content_scripts[0].js;
    const idx = js.indexOf(`data/databases/${op.file}.js`);
    expect(idx).toBeGreaterThanOrEqual(0);
    expect(idx).toBeLessThan(js.indexOf('modules/Suspicioussitesmanager.js'));
  });
});
