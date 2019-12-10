# react食用eslint的正确姿势

## 所需依赖
```bash
yarn add babel-eslint babel-loader eslint eslint-config-standard eslint-config-standard-react eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-standard -D
```

## javascript版本
`.eslintrc.js`
```js
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
```

## typescript版本

`.eslintrc.js`
```js
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
```

`vscode配置`
全局：`setting.json`
项目：`.vscode/setting.json`
```json
{
  "eslint.validate": [
    "javascript",
		"javascriptreact",
    {
			"language": "html",
			"autoFix": true
    },
    {
			"language": "vue",
			"autoFix": true
    },
    {
			"language": "typescript",
			"autoFix": true
    },
    {
			"language": "typescriptangular",
			"autoFix": true
    },
    {
			"language": "typescriptreact",
			"autoFix": true
    }
  ]
}
```
