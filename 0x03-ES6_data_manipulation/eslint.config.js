export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',          // Warn when using console statements
      'prefer-const': 'error',       // Enforce const for variables that are not reassigned
      'no-unused-vars': 'off',     // Error on unused variables
      'indent': ['error', 2],        // Enforce 2 spaces for indentation
      'semi': ['error', 'always'],   // Enforce semicolons at the end of statements
      'quotes': ['error', 'single']  // Enforce single quotes for strings
    }
  }
];
