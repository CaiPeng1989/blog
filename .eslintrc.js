module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-unused-vars': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
