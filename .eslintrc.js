module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': error,
    'class-methods-use-this': off,
    'no-param-reassign': off,
    camelcase: off,
    'no-unused-vars': [error, { argsIgnorePattern: next }],
  },
};
