<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";
import Comments from "./vue/comments.vue";
import Music from "./vue/music.vue";
import { useData } from "vitepress";
const { frontmatter, title } = useData();

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
        <Comments />
      </div>
    </template>
    <template #layout-bottom>
      <Music />
    </template>
  </Layout>
</template>
