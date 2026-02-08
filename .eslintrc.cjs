module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    /* ---------- General ---------- */
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'prefer-const': 'error',

    /* ---------- TypeScript ---------- */
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',

    /* ---------- Next.js ---------- */
    '@next/next/no-img-element': 'warn',
  },
};
