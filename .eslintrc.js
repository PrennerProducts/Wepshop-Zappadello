module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off', // Dies sollte Konsolenwarnungen deaktivieren, setze es auf "error" oder 2, um sie zu verbieten.
    'import/no-unresolved': 'error', // Stellt sicher, dass alle Importe aufgelöst werden können
    'import/no-absolute-path': 'error', // Verbietet absolute Pfade, die zu Fehlern führen könnten
  },
}
