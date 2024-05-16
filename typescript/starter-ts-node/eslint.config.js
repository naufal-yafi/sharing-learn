import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-tabs': 'error',
      semi: ['error', 'always'],
      'comma-dangle': 'off',
      indent: [
        'error',
        2,
        {
          flatTernaryExpressions: true,
          offsetTernaryExpressions: true,
          ignoredNodes: ['TemplateLiteral *'],
        },
      ],
      'no-trailing-spaces': 'error',
      'no-multi-spaces': 'error',
      quotes: 'off',
      '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/prefer-function-type': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    ignores: ['dist/**/*', 'node_modules/**/*'],
  },
);
