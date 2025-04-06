import tseslint from 'typescript-eslint';

/** @type {import('eslint').FlatConfig[]} */
const tsConfig = tseslint.config({
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
});

export default tsConfig;
