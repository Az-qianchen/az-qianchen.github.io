---
pageinfo: false
comments: false
title: 团队成员
date: "2024-06-28" # 日期
description: "团队成员" # 页面描述、面向搜索引擎用户
head:
  - - meta
    - name: Keywords
      content: "介绍" # 网站关键词（SEO）
zoom: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://image.tuclink.com/image/2024.06/logo.jpg.1718701971',
    name: '仟尘',
    title: '制作人',
    links: [
      { icon: {
        svg: '<svg viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><rect fill="none" x="1.3333" y="6" width="21.333" height="15.333" rx="4" ry="4"/><path d="m8 12.4v1.2"/><path d="m16 12.4v1.2"/><path d="m5.8853 2.6667L8.552 5.3334"/><path d="m18.115 2.6667-2.6667 2.6667"/></svg>',
          },
        link: "https://b23.tv/Dy49jbs" },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="none" d="M4 4h16c1.1.0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1.0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline fill="none" points="22,6 12,13 2,6"/></svg>',
          },
        link: "mailto:feedback@tuclink.com" }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/38809414?v=4',
    name: 'ikamusume7',
    title: '开发者',
    links: [
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 42"><defs><mask id="ipTWebPage0"><g fill="none"><rect width="40" height="32" x="4" y="8" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3"/><path fill="#555" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"/><circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWebPage0)"/></svg>',
        }, 
      link: 'https://ikamusume7.org/' }
    ]
  },
]
</script>

# 团队成员

<VPTeamMembers size="small" :members="members" />

## 仟尘
- 目前主要在进行 Super Ball 的游戏制作
- 图文类的内容会在[网站](https://post.tuclink.com/)上更新
- 视频类内容主要会在发布 [billbill](https://space.bilibili.com/3493262625081631)