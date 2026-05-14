import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const repoRoot = resolve(import.meta.dirname, '..');

// Regression for Copilot review feedback on PR #23: shared @keyframes live
// in a document-wide namespace; the extension must not register them under
// generic names that could collide with the host page's animations.
describe('Animation keyframes are namespaced under `dima*`', () => {
  it('content.js only declares @keyframes prefixed with `dima`', () => {
    const src = readFileSync(resolve(repoRoot, 'content.js'), 'utf8');
    // Match real declarations only: `@keyframes name {`. The trailing `{` is
    // what tells us this is CSS in a template literal and not prose in a
    // French comment ("les @keyframes utilisés par l'extension").
    const declared = [...src.matchAll(/@keyframes\s+([A-Za-z_][\w-]*)\s*\{/g)].map(
      (m) => m[1]
    );
    expect(declared.length).toBeGreaterThan(0);
    const unprefixed = declared.filter((name) => !name.startsWith('dima'));
    expect(unprefixed).toEqual([]);
  });

  it('uiManager.js only references animations prefixed with `dima`', () => {
    const src = readFileSync(resolve(repoRoot, 'modules/uiManager.js'), 'utf8');
    // Match `animation: <name> <duration> ...` shorthand. We require the
    // name to be followed by whitespace + at least one more token to avoid
    // catching CSS property names alone (e.g. `transition: all`).
    const refs = [...src.matchAll(/animation:\s*([A-Za-z_][\w-]*)\s+\S/g)].map(
      (m) => m[1]
    );
    expect(refs.length).toBeGreaterThan(0);
    const unprefixed = refs.filter((name) => !name.startsWith('dima'));
    expect(unprefixed).toEqual([]);
  });
});
