---
tags: ["技巧"] # 标签
author: "仟尘"  # 作者
title: "FFmpeg 音频转换脚本"  # 标题
date: "2024-03-19"  # 日期

description: "FFmpeg 音频转换" # 页面描述、面向搜索引擎用户
Keywords: "FFmpeg,Audio,音频,教程" # 网站关键词（SEO）

---
---
```
set FFMPEG_PATH=C:\Users\Qianchen\Music\comp\ffmpeg.exe

@echo off
setlocal enabledelayedexpansion

set SRC_DIR=C:\Users\Qianchen\Music\comp\comp_in
set DST_DIR=C:\Users\Qianchen\Music\comp\comp_out

for %%i in ("%SRC_DIR%\*.wav") do (
  set FILENAME=%%~ni
  set EXTENSION=%%~xi
  set OUTPUT=!DST_DIR!\!FILENAME!.ogg
  
  "%FFMPEG_PATH%" -i "%%i" -vn -c:a libvorbis -qscale:a 5 "!OUTPUT!"
)
```
**FFMPEG_PATH**：变量指向 ffmpeg.exe 的路径。

**SRC_DIR**：变量指向待转换的音频文件所在目录。

**DST_DIR**：变量指向转换后的音频文件存放目录。

本脚本实现的了将 WAV 格式的音频文件转换为 OGG 格式的音频文件的功能，如有其他的需要可进行自行的调整

![imagen](https://image.gcores.com/5ec4d3b9aa8085171c7694285d798c35-1929-927.png?x-oss-process=image/resize,limit_1,m_lfit,w_700/quality,q_90/format,webp/watermark,image_d2F0ZXJtYXJrLnBuZw,g_se,x_10,y_10)