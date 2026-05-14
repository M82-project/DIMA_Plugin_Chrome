import globals from 'globals';

export default [
  {
    ignores: ['node_modules/**', 'coverage/**', 'dist/**'],
  },
  // Source: content scripts run in the browser, share globals via window.X = X.
  // Most cross-file references go through `window.X`, but a few files use the
  // bare global name (e.g. `if (typeof copycopDomains !== 'undefined')`), so
  // we treat the data exports as readable globals at the project scope.
  // We do NOT list the same names in `globals` AND let the source files
  // redeclare them with `const` — that would trip no-redeclare; instead we
  // rely on each declaration being the canonical one and disable no-redeclare.
  {
    files: ['content.js', 'modules/**/*.js', 'data/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        ...globals.browser,
        chrome: 'readonly',
        browser: 'readonly',
        module: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],
      // `const fooDomains = [...]` at top-level is read across files via the
      // shared global object — we can't predeclare them without redeclare.
      // Detection of typos relies on the test suite rather than this rule.
      'no-undef': 'off',
      'no-redeclare': 'off',
      'no-console': 'off',
      'no-empty': ['warn', { allowEmptyCatch: true }],
      eqeqeq: ['warn', 'smart'],
      'no-implicit-globals': 'off',
    },
  },
  // Tests + tooling: Node + Vitest globals.
  {
    files: ['tests/**/*.js', 'vitest.config.js', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        // Vitest globals (test, expect, describe, beforeAll, beforeEach, etc.).
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        vi: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],
    },
  },
];
