# Tests

Suite de tests unitaires Vitest pour le plugin DIMA.

## Lancement

```bash
npm install
npm test               # un seul run
npm run test:watch     # mode watch pour le dev
npm run test:coverage  # avec rapport de couverture (text + html + lcov)
npm run lint           # ESLint
npm run ci             # lint + tests (= ce que tourne GitHub Actions)
```

## Structure

| Fichier | Couvre |
|---|---|
| [`contentExtractor.test.js`](contentExtractor.test.js) | `cleanText` (préservation Unicode), `detectPageType`, `extractTitle`, `shouldSkipElement` |
| [`techniqueAnalyzer.test.js`](techniqueAnalyzer.test.js) | `calculateRiskLevel`, `getColor`, `findKeywordMatches` (frontières de mot, multi-mots, multi-occurrences), pondération contextuelle / dynamique, `performAnalysis` |
| [`suspiciousSitesManager.test.js`](suspiciousSitesManager.test.js) | `checkSite` (exact/contains/pattern), formats Storm1516 (X/Twitter, Telegram, plateforme inconnue), `extractSocialHandle`, `getRiskConfig`, gating console.log derrière `DIMA_DEBUG` |
| [`uiManager.test.js`](uiManager.test.js) | `escapeHtml` (XSS defense), `sanitizeHexColor`, `isSafeHttpUrl`, `adjustColor` (overflow/underflow), `generateTooltip` |
| [`manifest.test.js`](manifest.test.js) | JSON valide, MV3, chaque fichier déclaré (content_scripts, icons, web_accessible_resources) existe sur disque |

## Loader (`helpers/loadScript.js`)

Les scripts du plugin sont des content scripts qui font `window.X = X` à la fin. Le helper utilise un eval indirect dans l'environnement happy-dom de Vitest — les classes s'exposent sur `window` exactement comme dans Chrome, sans modification de la source.

`chrome.runtime.getURL` est stubbé puisque ce global n'existe pas hors extension.

## CI

Workflows GitHub Actions associés :
- [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) — lint + test sur chaque push/PR
- [`.github/workflows/release.yml`](../.github/workflows/release.yml) — sur tag `vX.Y.Z` : lint + test + zip + draft release
