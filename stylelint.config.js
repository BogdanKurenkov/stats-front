export default {
  extends: ["stylelint-config-standard"],
  customSyntax: "postcss-styled-syntax",
  rules: {
    "color-no-invalid-hex": true,
    "property-no-unknown": true,
    "declaration-block-no-duplicate-properties": true,
    "no-empty-source": null,
    "no-descending-specificity": null,
    "keyframes-name-pattern": null,
    "media-query-no-invalid": null,
    "property-no-vendor-prefix": null,
    "length-zero-no-unit": null,
    "value-keyword-case": [
      "lower",
      {
        ignoreKeywords: ["currentColor"],
      },
    ],
    "function-no-unknown": [
      true,
      { ignoreFunctions: ["theme", "css", "styled", "props"] },
    ],
    "alpha-value-notation": null,
    "color-function-alias-notation": null,
    "color-function-notation": null,
  },
  ignoreFiles: ["node_modules/**", ".next/**", "out/**"],
};
