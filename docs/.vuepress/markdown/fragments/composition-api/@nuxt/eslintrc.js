module.exports = {
  // ...
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'no-unused-vars': 'off'
  }
  // ...
}
