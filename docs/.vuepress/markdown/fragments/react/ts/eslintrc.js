module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true
  },
  extends: [
    'react-app',
    'standard',
    'standard-react',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      tsx: true,
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
}
