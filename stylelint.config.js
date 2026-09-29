export default {
  extends: ['stylelint-config-standard'],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'color-no-invalid-hex': true,
    'property-no-unknown': true,
    'declaration-block-no-duplicate-properties': true,
    'no-empty-source': null,

    'media-query-no-invalid': null,
    'function-no-unknown': [
      true,
      { ignoreFunctions: ['theme', 'css', 'styled', 'props'] },
    ],
  },
  ignoreFiles: ['node_modules/**', '.next/**', 'out/**'],
};