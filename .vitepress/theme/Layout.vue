<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";
import Comments from "./vue/comments.vue";
import Music from "./vue/music.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <Comments />
    </template>
    <template #layout-bottom>
      <Music />
    </template>
  </Layout>
</template>
