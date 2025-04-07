import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import lit from "eslint-plugin-lit";

export default [
  js.configs.recommended,
  lit.configs.recommended,
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
