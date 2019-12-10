# 无法加载ps1文件

## 操作

```sh
yarn global add @vue/cli
vue -V
```

## 报错

::: danger 报错
vue : 无法加载文件 %AppData%\Local\Yarn\bin\vue.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
vue -V
CategoryInfo : SecurityError: (:) []，PSSecurityException
FullyQualifiedErrorId : UnauthorizedAccess
:::

## 解决

::: tip 解决
以管理员身份打开PowerShell
输入Set-ExecutionPolicy RemoteSigned，执行策略更改
:::
