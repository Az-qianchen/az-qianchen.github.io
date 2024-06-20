---
# https://vitepress.dev/reference/default-theme-home-page
# 标记为 home 的页面将会被渲染成首页
layout: home
# 页面顶部配置
hero:
  name: "Tuclink"
  text: "突触递质"
  tagline: Just dream , wake or die
  # 头图
  image:
    src: \ico\512.png
    alt: VitePress
  actions:
    - theme: brand # brand/alt 两种不同样式
      text: 😕 开发 »
      link: /zh/post/dev/DEV-1
    - theme: brand
      text: 🫤 博客 »
      link: /zh/post/shader/Shader-1

# 展示卡片
features:
  - title: 游戏介绍
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon: 😶
    link: zh/post/game
    linkText: more

  - title: 期望规划
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon: 😶‍🌫️
    link: zh/post/future
    linkText: more

  - title: 关于我们
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon: 🙃
    link: zh/post/about/team
    linkText: more
pageinfo: false
---

---

<script setup>
  import { ref } from "vue";
  import BackgroundShader from "../../.vitepress/theme/vue/BackgroundShader.vue";
</script>

<BackgroundShader />