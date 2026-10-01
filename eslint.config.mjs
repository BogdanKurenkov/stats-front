import nextPlugin from "@next/eslint-plugin-next";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import security from "eslint-plugin-security";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "next-env.d.ts"],
  },

  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      "@typescript-eslint": typescriptPlugin,
      "react-hooks": reactHooks,
      security: security,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      "react-hooks/rules-of-hooks": "error",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],

      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-param-reassign": "error",
      "no-throw-literal": "error",
      "no-unneeded-ternary": "error",
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "warn",
      "no-console": ["error", { allow: ["warn", "error"] }],

      "security/detect-eval-with-expression": "error",
      "security/detect-child-process": "warn",
      "security/detect-non-literal-fs-filename": "warn",
      "security/detect-object-injection": "off",

      "jsx-a11y/alt-text": "error",

      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
    },
  },

  prettierConfig,
];
