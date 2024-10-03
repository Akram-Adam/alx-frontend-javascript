module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true
    },
    extends: [
      "eslint:recommended",
      "plugin:jest/recommended"
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module"
    },
    rules: {
      // Your custom rules (you can add or modify these)
      "no-console": "warn",
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  };
  