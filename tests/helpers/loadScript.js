import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const repoRoot = resolve(import.meta.dirname, '..', '..');

// Les fichiers du plugin sont des content scripts: ils déclarent des classes
// puis font `window.Class = Class`. Pour les charger dans Vitest+happy-dom on
// utilise un `eval` indirect (qui exécute en scope global) — les classes
// elles-mêmes restent locales mais l'assignation à `window.*` retourne la
// référence dans le `window` global de happy-dom, qui est aussi `globalThis`.
//
// Important: `chrome` n'existe pas en environnement de test, mais uiManager.js
// y fait référence au top-level (`_extensionAPI = browser ?? chrome`). On le
// stubbe avant chaque appel à loadScript pour éviter ReferenceError.
export function loadScript(relativePath) {
  ensureExtensionApiStub();
  const src = readFileSync(resolve(repoRoot, relativePath), 'utf8');
  (0, eval)(src);
}

function ensureExtensionApiStub() {
  if (typeof globalThis.chrome === 'undefined') {
    globalThis.chrome = {
      runtime: {
        getURL: (path) => `chrome-extension://test/${path}`,
      },
    };
  }
}

// Réinitialise les globals injectés par les scripts entre deux suites
// quand on veut un état propre. Sinon, happy-dom recycle son window.
export function resetGlobals(keys) {
  for (const key of keys) {
    delete globalThis[key];
    if (typeof globalThis.window !== 'undefined') {
      delete globalThis.window[key];
    }
  }
}
