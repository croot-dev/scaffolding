/** @type {import('prettier').Config} */
const tossConfig = require('@toss/prettier-config');

module.exports = {
  ...tossConfig,
  plugins: [
    ...(tossConfig.plugins || []),
    require('prettier-plugin-organize-imports'),
  ],
};
  