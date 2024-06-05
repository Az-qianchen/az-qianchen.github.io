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
      text: 😕
      link: posts/markdown-examples
    - theme: brand
      text: 🫤
      link: posts/api-examples

# 展示卡片
features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon: 🤨
    link: posts/api-examples
    linkText: more

  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon: 😯
    link: posts/api-examples
    linkText: AA

  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon: 😟
    # link: /api-examples
    # linkText: AA
---

<script setup>
  import BackgroundShader from "../.vitepress/theme/vue/BackgroundShader.vue";
</script>

<BackgroundShader />