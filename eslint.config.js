import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist/**", "docs/**", "node_modules/**", "coverage/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
        NodeJS: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "prefer-const": "error",
      "@typescript-eslint/no-var-requires": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["./dist", "./dist/*", "../dist", "../dist/*", "**/dist", "**/dist/*"],
              message: "Imports from /dist directory are not allowed. Import from source files instead.",
            },
          ],
        },
      ],
    },
  },
];
