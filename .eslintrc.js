'use strict';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/semi': 'warn',
    curly: 'warn',
    eqeqeq: 'warn',
    'no-throw-literal': 'warn',
    semi: 'error',
    'quote-props': [ 2, 'as-needed'],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }]
  },
  ignorePatterns: [
    'out',
    'dist',
    '**/*.d.ts'
  ]
};
