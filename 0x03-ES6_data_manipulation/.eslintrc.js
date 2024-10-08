module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true
    },
    extends: ["eslint:recommended", "plugin:jest/recommended"],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module"
    },
    rules: {
        "no-console": "warn",          // Warn when using console statements
        "prefer-const": "error",       // Enforce const for variables that are not reassigned
        "no-unused-vars": "error",     // Error on unused variables
        "indent": ["error", 2],        // Enforce 2 spaces for indentation
        "semi": ["error", "always"],   // Enforce semicolons at the end of statements
        "quotes": ["error", "single"]  // Enforce single quotes for strings
      }
  };
  