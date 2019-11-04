# mac os 下安装node.js

::: tip 前提
干净的Mac OS系统
:::

1. 使用 [`n-install`](https://github.com/mklement0/n-install) 安装 [`n`](https://github.com/tj/n) 以及 [`node.js`](https://nodejs.org/zh-cn/)。

执行以下命令：
```bash
sudo curl -L https://git.io/n-install | bash -s -- -y latest
```
::: tip
latest： node.js最新版本，你也可以替换为lts（长期支持版本）或者具体的版本号（例如：12.7.0）
:::

命令执行结果如下：
```bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0
  n-install: ERROR:
  GNU Make not found, which is required for operation.
  On FreeBSD and PC-BSD, for instance, you can download it with `sudo pkg install gmake`.
100 39430  100 39430    0     0  14418      0  0:00:02  0:00:02 --:--:-- 39469
  (23) Failed writing body
```

2. 出现报错是因为干净的系统里面没有 `Xcode`，这里我们选择 `安装` 和 `同意`，等待安装完成。

![eMPq6x.png](https://s2.ax1x.com/2019/07/27/eMPq6x.png)
![eMisHO.png](https://s2.ax1x.com/2019/07/27/eMisHO.png)
![eMicUe.png](https://s2.ax1x.com/2019/07/27/eMicUe.png)
![eMiob8.png](https://s2.ax1x.com/2019/07/27/eMiob8.png)

3. 接下来我们再重新执行安装命令，不出意外的话，安装成功。

命令执行结果如下：
```bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0
100 39430  100 39430    0     0   4533      0  0:00:08  0:00:08 --:--:--  8053
-- Cloning https://github.com/tj/n to '/Users/caipeng/n/n/.repo'...
-- Running local n installation to '/Users/caipeng/n/bin'...
-- Shell initialization file '/Users/caipeng/.bash_profile' updated.
-- Installing helper scripts in '/Users/caipeng/n/bin'...
-- Installing the requested Node.js version(s)...
   1 of 1: latest...

  installing : node-v12.7.0
       mkdir : /Users/caipeng/n/n/versions/node/12.7.0
       fetch : https://nodejs.org/dist/v12.7.0/node-v12.7.0-darwin-x64.tar.gz
   installed : v12.7.0

=== n successfully installed.
  The active Node.js version is: v12.7.0

  Run `n -h` for help.
  To update n later, run `n-update`.
  To uninstall, run `n-uninstall`.

  IMPORTANT: OPEN A NEW TERMINAL TAB/WINDOW or run `. ~/.bash_profile` before using n and Node.js.
===
```

4. 尝试执行 `node -v` 命令。
```bash
node -v
```
结果：
```bash
-bash: node: command not found
```
::: tip 提示
出现错误是因为 `bash` 没有加载最新的环境变量，重新打开 `bash` 就可以了。
:::

5. 重新打开 `bash`，再次尝试执行 `node -v` 命令。

结果：
```bash
v12.7.0
```

6. 尝试执行 `npm -v` 命令。

结果：
```bash
v6.10.0
```

7. 安装成功。
