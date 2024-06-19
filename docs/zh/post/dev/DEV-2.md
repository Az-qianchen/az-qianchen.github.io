---
tags: ["DEV-SB"] # 标签
author: "仟尘" # 作者
title: "游戏 UI 演示 - Godot：SB 开发快照" # 标题
date: "2024-03-27" # 日期

description: "游戏内的 UI 演示" # 页面描述、面向搜索引擎用户
head:
  - - meta
    - name: Keywords
      content: "Godot,UI" # 网站关键词（SEO）
---
---
### 介绍

Super Ball 功能开发切片

本视频主要演示了游戏内的 UI 交互，欢迎进行任何形式的反馈

<billbill id="BV11H4y1H7BG"/>

整体的思路是希望能让 UI 内容的切换选择可以尽可能的快捷，聚合

目前阶段做了一些比较基础的美术设计，核心还是先以功能实现为主

暴露了大部分 Godot 自带的画质调节选项，音频管线的控制等等

---

### 语言适配问题

进行了简单的英语适配，就是遇到了一个在中文环境开发时最初没考虑到的问题

![imagen](https://image.gcores.com/bd854d6ccd65a1ea372b6a73b4dbcbca-3842-2090.png?x-oss-process=image/resize,limit_1,m_lfit,w_1050/quality,q_90/format,webp/watermark,image_d2F0ZXJtYXJrLnBuZw,g_se,x_10,y_10)

侧边的按键采用了竖形排列，在汉语或东亚文化圈中竖型排列的方式并不少见，但是如果使用其他的语言，竖型排列就会遇到困难

不仅是 Godot 本身没有暴露竖型语言的排列方法，实现需要额外的开发成本，可读性也会大大降低

于是还是单独的做了另一版英文按键的排列方式，并实现了语言更改时的切换

![imagen](https://image.gcores.com/9e85d5567b22e74b305e3711dd442742-3842-2090.png?x-oss-process=image/resize,limit_1,m_lfit,w_1050/quality,q_90/format,webp/watermark,image_d2F0ZXJtYXJrLnBuZw,g_se,x_10,y_10)

只是还有一个问题，按键文字会影响按钮的大小，若某一种语言某个单词的长度特别长又会导致按钮大小的失衡，就比如图中的 Control 按键

可能比较简单的解决方式就是留出足够的空间，至少在 IU 设计时这需要考虑在内（每每此时就爱死了中文方块字的特性，可以很规整的控制文字的长度，简直强迫症的福音）

---

### 按钮音频问题

在最初为按钮添加音效时不太想的好采用怎样的实现方案，因为 Godot 目前在 UI 音频配置方面还没有一套内置的方案，如果可以结合进目前 Godot 的 UI 主题系统中就完美了（虽然 Calinou 已经进行了实现只是合并乐观估计也得到 4.4 版本了）

最后还是决定借助在上一篇文章中介绍过的插件 [Resonate](https://github.com/hugemenace/resonate) 为每种 UI 控件单独写一个脚本，并添加到每个 UI 控件上，相对来说会清晰一些，也方便对已有 UI 控件的升级

其他更多的就是寻找合适的音效了，又算是一个体力活，不过在后续发现 [itch](https://itch.io/game-assets/tag-sound-effects) 还是有挺多 UI 音效包的，也许就不用面临自己辛苦找半天，效果还不统一的问题了

---

### 总结

UI 的实现，整体也属于技术方面并不存在太大的难度，但是相对来说会比较繁琐的一类

总体来说目前的 UI 实现都是使用 Godot 自带的 UI 控件，不得不说 Godot 的 UI 系统还是很方便强大的，除了一些小Bug

比如若使用 Godot 的 tr() 函数用于内容翻译，在切换多语言时就无法自动刷新，需要手动重新生成（当然这点可能不算 Bug）

1. 在使用 OptionButton 控件时，选项小窗无法和 UI 界面做到统一的分辨率
2. 如果移动或是设置了显隐操作，选项小窗也无法跟随 OptionButton 一起变化，需要额外的手动适配
3. 主题设置方面也存在一些问题

（主要还是 PopupMenu 的问题 [问题报告](https://github.com/godotengine/godot/issues/54030)）

![imagen](https://image.gcores.com/4b94d70406e270ef3956cbc2cc1dadbc-1081-588.png?x-oss-process=image/resize,limit_1,m_lfit,w_700/quality,q_90/format,webp/watermark,image_d2F0ZXJtYXJrLnBuZw,g_se,x_10,y_10)