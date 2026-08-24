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
| [`badgeDrag.test.js`](badgeDrag.test.js) | Badge de score déplaçable : `clampToViewport` (logique pure de contrainte au viewport), arbitrage clic/déplacement au seuil de 4 px, bascule `right`→`left`, suspension de la transition CSS pendant le drag, pas clavier (2 px, 20 px avec Shift), persistance debouncée de la position dans `chrome.storage.local` |
| [`manifest.test.js`](manifest.test.js) | JSON valide, MV3, chaque fichier déclaré (content_scripts, icons, web_accessible_resources) existe sur disque |

## Loader (`helpers/loadScript.js`)

Les scripts du plugin sont des content scripts qui font `window.X = X` à la fin. Le helper utilise un eval indirect dans l'environnement happy-dom de Vitest — les classes s'exposent sur `window` exactement comme dans Chrome, sans modification de la source.

`chrome.runtime.getURL` est stubbé puisque ce global n'existe pas hors extension. Le stub expose aussi `chrome.storage.local` (`get`/`set`), où le badge persiste sa position ; les tests qui veulent observer ces appels remplacent les deux méthodes par des `vi.fn()`.

## Ce que happy-dom ne peut pas tester

happy-dom construit l'arbre DOM mais **ne calcule aucune mise en page** : `getBoundingClientRect()` renvoie toujours des zéros. Tout ce qui dépend d'une position ou d'une taille réelle — géométrie du drag, collision avec les bords — ne peut donc pas être vérifié ici sans fabriquer de fausses mesures, auquel cas le test validerait ses propres stubs.

D'où le découpage de `badgeDrag.test.js` : la logique de calcul est isolée dans `clampToViewport()`, une fonction pure qui reçoit taille et viewport en paramètres et se teste exhaustivement ; le reste des tests porte sur des comportements observables sans layout (quel handler s'exécute, quelle propriété CSS est posée, quel appel au storage part). Le rendu visuel du déplacement se vérifie en chargeant l'extension dans Chrome, pas ici.

## CI

Workflows GitHub Actions associés :
- [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) — lint + test sur chaque push/PR
- [`.github/workflows/release.yml`](../.github/workflows/release.yml) — sur tag `vX.Y.Z` : lint + test + zip + draft release
