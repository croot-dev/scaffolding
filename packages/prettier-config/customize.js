import tailwindPlugin from 'prettier-plugin-tailwindcss';

/**
 * @param {import('prettier').Config & { tailwind?: boolean }} options
 * @returns {import('prettier').Config}
 */
export default function customize(options = {}) {
  const { tailwind = false, plugins = [], ...rest } = options;

  return {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    tabWidth: 2,
    bracketSpacing: true,
    arrowParens: 'avoid',
    plugins: tailwind ? [tailwindPlugin, ...plugins] : plugins,
    ...rest,
  };
}
