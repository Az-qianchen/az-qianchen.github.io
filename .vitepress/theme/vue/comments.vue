<script setup lang="ts">
// https://aiktb.dev/blog/giscus-with-vitepress
import { useData } from "vitepress";

const { title } = useData();
</script>

<template>
  <div :key="title" class="giscus">
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="Az-qianchen/Tuclink"
      data-repo-id="R_kgDOLdBkxQ"
      data-category="Polls"
      data-category-id="DIC_kwDOLdBkxc4Cdypd"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-lang="zh-CN"
      data-theme="transparent_dark"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    />
  </div>
</template>
