/**
 * @type {import('lint-staged').Config}
 */
const config = {
  '{app,src}/**/*.{ts,tsx}': 'prettier --write',
};

module.exports = config;
