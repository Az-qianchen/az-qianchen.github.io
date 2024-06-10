<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";
import Comments from "./vue/Comments.vue";
import Music from "./vue/Music.vue";
import BackToTop from "./vue/BackToTop.vue";
import PageInfo from "./vue/PageInfo.vue";
import { useData } from "vitepress";
const { frontmatter, title } = useData();
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template
      v-if="frontmatter.layout !== 'home' || frontmatter.layout != 'page'"
      #doc-before
    >
      <PageInfo />
    </template>
    <template #doc-after>
      <BackToTop />
      <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
        <Comments />
      </div>
    </template>
    <template #layout-bottom>
      <Music />
    </template>
  </Layout>
</template>
