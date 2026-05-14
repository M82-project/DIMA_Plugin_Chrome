import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const repoRoot = resolve(import.meta.dirname, '..');

// Regression for Copilot second-pass feedback on PR #23: the suspicious-
// sites manager must initialise synchronously. The previous setTimeout(100)
// caused content.js's checkDependencies() to fail on the first tick, which
// guaranteed a >=100ms delay AND a "waiting for deps" log on every page.

describe('SuspiciousSitesManager initialises synchronously', () => {
  const src = readFileSync(
    resolve(repoRoot, 'modules/Suspicioussitesmanager.js'),
    'utf8'
  );

  it('no setTimeout call wraps the bootstrap (so checkSuspiciousSite is live immediately)', () => {
    // We search only the bootstrap section (everything after the class
    // closing brace `}` followed by `if (typeof window`). Inside the class
    // implementation a setTimeout could legitimately appear in future
    // helpers — we only want to ban a deferred init. We also strip line
    // comments so the historical note explaining why setTimeout was removed
    // doesn't trip the assertion.
    const bootstrap = src.split(/}\s*\n\s*\/\/ Initialisation/)[1];
    expect(bootstrap, 'bootstrap section not found').toBeDefined();
    const withoutComments = bootstrap.replace(/\/\/.*$/gm, '');
    // Look specifically for the call form, not the word.
    expect(withoutComments).not.toMatch(/setTimeout\s*\(/);
  });

  it('publishes window.checkSuspiciousSite at module evaluation time', async () => {
    // Smoke check: load the module via the same eval-in-happy-dom helper
    // the other suites use, and verify the symbol exists right after.
    const { loadScript } = await import('./helpers/loadScript.js');
    loadScript('modules/Suspicioussitesmanager.js');
    expect(typeof window.checkSuspiciousSite).toBe('function');
  });
});
