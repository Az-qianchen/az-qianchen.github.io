---
tags: ["工具"] # 标签
author: "仟尘" # 作者
title: "VS Code 相关技巧" # 标题
date: "2024-07-2" # 日期

description: "VS Code 相关插件推荐和技巧记录" # 页面描述、面向搜索引擎用户
head:
  - - meta
    - name: Keywords
      content: "tips,vscode,editor" # 网站关键词（SEO）
---
> 官网下载：[链接](https://code.visualstudio.com/)

VS Code 是一款轻量的代码编辑器，且通过插件支持可以提供强大的功能扩展

[官方快捷键文档 WIN EN PDF](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

[官方快捷键文档 MAC EN PDF](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

[官方快捷键文档 Linux EN PDF](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

## 相关技巧
### 快捷键
| 功能     | 快捷键                   |
| ------ | --------------------- |
| 查找文件   | Ctrl + P              |
| 内容查找   | Ctrl + F              |
| 全局内容查找   | Shift + Ctrl + F              |
| 内容替换   | Ctrl + H              |
| 全局内容替换   | Shift + Ctrl + H              |
| 内容注释   | Ctrl + /              |
| 命令面板   | Ctrl + Shift + P |
| 删除当前行 | Ctrl + Shift + K |
| 代码格式化  | Shift + Alt + F       |
| 代码上下移动 | Alt + Up/Down         |
| 复制一行代码 | Shift + Alt + UP/Down |
| 删除左边内容 | Ctrl + Backspace     |
| 删除右边内容 | Ctrl + Delete       |
| 快速选中内容 | Ctrl + Shift + Lift/Right       |
> 注：`Shift + Ctrl + F` 会和微软拼音输入法快捷键冲突
> 1. 右下角输入法切换按钮右键打开面板
> 2. `设置 > 按键 > 简体/繁体中文输入切换` 进行关闭

---
### 自动格式化
1. 打开设置
2. 搜索 `editor.formatOnSave`
3. 勾选保存时格式化
4. 打开设置
5. 搜索 `editor.defaultFormatter`
6. 选择格式化程序
推荐安装使用 Prettier 插件
[Prettier](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.prettier-vscode)

### 隐藏文件
1. 打开设置
2. 搜索 `files.exclude`
3. 添加规则

> 例：以下规则可以排除所有 . 开头的文件
```
  **/.*
```
[Toggle Excluded Files](https://marketplace.visualstudio.com/items?itemName=amodio.toggle-excluded-files)
该插件可以快速切换显隐

---

### 变量重命名
选中变量，按 `F2`

---

### 多光标
多光标可以在多个位置同时进行输入
1. 按住 `Alt` 鼠标左键点击添加光标
2. 选中变量，按 `Ctrl + D`
3. 按住 `Ctrl + Shift + Alt` 点击上下方向键

---

### 块选择
可以以方形选区的方式选取内容
按住 `Shift + Alt` 鼠标左键点击拖拽选取

---

### 自动删除行尾空格
1. 打开设置
2. 搜索 `files.trim trailing whitespace`
3. 开启相应设置

---

### 光标动画
默认的光标是无动画直接跳转的，可通过设置开启光标动画，让光标线性的运动
1. 打开设置
2. 搜索 `editor.cursor smooth caret animation`
3. 开启相应设置

---

### 自动保存
默认情况下需要 `Ctrl + S` 手动保存

通过左上角 `文件 > 自动保存` 可以开启实时的自动保存

---

### 全屏模式
可以将代码窗口全屏显示，减少额外干扰

先按下 `Ctrl + Z` 再按下 `Z` 进入全屏模式

按两下 `Esc` 退出全屏模式

---

### 折叠
先按下 `Ctrl + K` 再按下 `Ctrl + 0` 折叠全部代码块

先按下 `Ctrl + K` 再按下 `Ctrl + j` 展开全部代码块

先按下 `Ctrl + K` 再按下 `Ctrl + [` 折叠当前代码块

先按下 `Ctrl + K` 再按下 `Ctrl + ]` 展开当前代码块

---

### Markdown 预览
直接打开预览 `Ctrl+Shift+V`

新开页面预览 先按下 `Ctrl + K` 再按下 `V` 展开当前代码块

或是右键菜单找到 `MPE:打开侧边预览`

VS Code 提供了基础的 Markdown 预览功能，想要更强大的 Markdown 支持可以安装 [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) 和 [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) 插件

---
### 禁用预览
VS Code 打开新的文件页时，如果旧文件页没有进行过编辑会被覆盖，会造成标签页管理混乱因此最好禁用
1. 打开设置
2. 搜索 `workbench.editor.enable preview`
3. 进行关闭

---
### 字体连字
例如[JetBrains Mono](https://github.com/JetBrains/JetBrainsMono)等字体可以提供部分符号连接的功能，从而在编程时让一些内容变的更加的整洁
![](https://github.com/JetBrains/JetBrainsMono/raw/master/images/ligatures-1@2x.gif)
1. 打开设置
2. 搜索 `editor.font family`
3. 在其中添加 `JetBrains Mono` 如 `JetBrains Mono, Consolas, 'Courier New', monospace`
4. 搜索 `editor.font ligatures`
5. 点击 `在 settings.json 中编辑`
6. 将 `editor.fontLigatures` 设置为 `true`

---

### 自动高亮
VS Code 默认会自动高亮光标放置的变量，但是容易与真正的选区产生阅读干扰，关闭方法如下
1. 打开设置
2. 搜索 `editor.occurrences highlight`
3. 进行设置

## 插件推荐

### 项目管理
[Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
该插件可以进行项目文件夹的快速切换和开启

---

### GitHub 仓库浏览
[GitHub Repositories](https://marketplace.visualstudio.com/items?itemName=GitHub.remotehub)
可以快速的对 GitHub 仓库进行浏览，无需对项目进行克隆

---

### 远程连接
[Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)
可以远程连接服务器，或设备进行开发，进行代码编辑，终端控制，文件浏览，文件传输等等

---

### 中文翻译
[Chinese Language Pack](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)
对 VS code 进行汉化

---

### Docker
[Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
可视化的进行 Docker 镜像容器等进行管理
