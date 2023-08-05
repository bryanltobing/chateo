module.exports = {
  extends: [
    'universe',
    'universe/native',
    'universe/node',
    'universe/web',
    'plugin:react-hooks/recommended',
    'universe/shared/typescript-analysis',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', argsIgnorePattern: '^_' }],
  },
};
