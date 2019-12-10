module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true
  },
  extends: [
    'standard',
    'standard-react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ]
}
