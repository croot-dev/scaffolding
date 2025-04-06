import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').FlatConfig} */
export default {
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
