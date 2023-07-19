module.exports = {
  extends: [
    'universe',
    'universe/native',
    'universe/node',
    'universe/web',
    'plugin:react-hooks/recommended',
    'universe/shared/typescript-analysis',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
