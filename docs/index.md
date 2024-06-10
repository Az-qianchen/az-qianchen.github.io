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
      text: 😕AA
      link: posts/markdown-examples
    - theme: brand
      text: 🫤BB
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

---

<script setup>
  import { ref } from "vue";
  import BackgroundShader from "../.vitepress/theme/vue/BackgroundShader.vue";
  import PhotoSwipe from "../.vitepress/theme/vue/PhotoSwipe.vue";

  const images = ref([
  {
    largeURL:
      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
    thumbnailURL:
      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
    width: 1875,
    height: 2500,
  },
  {
    largeURL:
      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
    thumbnailURL:
      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
    width: 1669,
    height: 2500,
  },
  {
    largeURL:
      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
    thumbnailURL:
      'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
    width: 2500,
    height: 1666,
  },
]);
</script>

<BackgroundShader />

<PhotoSwipe :images="images" />

![](https://s2.loli.net/2024/05/29/3u6HrJnqkTmE2ZM.png){zoom}
![](https://s2.loli.net/2024/05/11/AxytJQVb3EDwfiZ.jpg){zoom}
![](https://i0.hdslb.com/bfs/article/3704e7940594cb6fc607e6a705c465ab293123360.png@0c.webp){zoom}
