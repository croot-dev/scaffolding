/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "auto",
  plugins: [require("prettier-plugin-organize-imports")],
};
