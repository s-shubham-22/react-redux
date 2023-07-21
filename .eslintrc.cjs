export default {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    semi: [
      'error',
      'always'
    ],
    quotes: [
      'error',
      'single'
    ],
    indent: [
      'error',
      4
    ],
    'no-console': 'off',
    'max-len': [
      'error',
      {
        code: 80
      }
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'global-require': 'off',
    camelcase: 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false
      }
    ]
  },
}
