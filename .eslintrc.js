module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["deprecation", "react"],
  rules: {
    "deprecation/deprecation": "error",
  },
};
