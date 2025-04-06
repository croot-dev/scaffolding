import tailwindPlugin from 'prettier-plugin-tailwindcss';

/** @type {import("prettier").Config} */
export default {
  plugins: [tailwindPlugin],
  tailwindFunctions: ['clsx', 'cn'],
};
