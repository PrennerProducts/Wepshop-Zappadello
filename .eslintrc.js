module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms', 'plugin:prettier/recommended'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'no-console': 'off', // Dies sollte Konsolenwarnungen deaktivieren, setze es auf "error" oder 2, um sie zu verbieten.
    'import/no-unresolved': 'error', // Stellt sicher, dass alle Importe aufgelöst werden können
    'import/no-absolute-path': 'error', // Verbietet absolute Pfade, die zu Fehlern führen könnten
    'simple-import-sort/imports': 'error', // Fügt die Regel für simple-import-sort hinzu
    'simple-import-sort/exports': 'error', // Fügt die Regel für simple-import-sort hinzu
  },
}
