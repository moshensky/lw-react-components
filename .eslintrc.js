/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  rules: {
    // TODO: fixme
    '@typescript-eslint/ban-types': 'off',
    // TODO: fixme
    '@typescript-eslint/ban-ts-comment': 'off',
    // TODO: fixme
    '@typescript-eslint/explicit-function-return-type': 'off',
    // TODO: fixme
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    // TODO: fixme
    '@typescript-eslint/no-explicit-any': 'off',
    // TODO: fixme
    '@typescript-eslint/ban-ts-ignore': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // TODO: no console, deprecated, functional (no let, readonly, no mutation), no-shadowed-variable
    // no floating promises,  no-expression-statement,
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': ['warn', {
      name: 'react-redux',
      importNames: ['useSelector', 'useDispatch'],
      message: 'Use typed hooks `useAppDispatch` and `useAppSelector` instead.'
    }]
  },
  settings: {
    react: {
      version: '16.12.0'
    }
  }
};