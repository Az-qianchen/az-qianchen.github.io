---
tags: ["工具"] # 标签
author: "仟尘" # 作者
title: "Cloudflare 开发相关" # 标题
date: "2024-11-28" # 日期

description: "Cloudflare 开发相关的记录笔记" # 页面描述、面向搜索引擎用户
head:
  - - meta
    - name: Keywords
      content: "tips,Cloudflare,editor" # 网站关键词（SEO）
---
> 官方文档：[链接](https://developers.cloudflare.com/)

KV
``` js
// Worker
  // 添加键值
  await env.BotaKV.put('KEY1', 'VALUE1');
  await env.BotaKV.put('KEY2', 'VALUE2');
  await env.BotaKV.put('KEY3', 'VALUE3');
  await env.BotaKV.put('KEY4', 'VALUE4');
  // 删除键值
  const deleteKV = await env.BotaKV.delete('KEY');
  // 获取键值
  const getKV = await env.BotaKV.get('KEY');
  // 列举键值,prefix 筛选前缀，limit 限制数量，cursor 下一页
  const listKV = await env.BotaKV.list({ prefix: "KEY",limit: 2});
  const cursor = listKV.cursor;
  const next_value = await env.BotaKV.list({ cursor: cursor });
  console.log(next_value);

// Durable Objects
await this.env.BotaKV.put('KEY1', 'VALUE1');
```