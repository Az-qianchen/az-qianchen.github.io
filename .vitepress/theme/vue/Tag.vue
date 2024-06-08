<script setup lang="ts">
import { VPButton } from "vitepress/theme";
import { getTags } from "../utils/posts.mts";
import { useRouter } from "vitepress";
const tags: Tag[] = getTags();
const router = useRouter();
const clickHandler = (name) => {
  router.go(`tags/${name}`);
};
</script>
<template>
  <div class="grid-auto-cols-1 gap-4">
    <button
      v-for="tag in tags"
      :key="tag.name"
      class="TagBtn"
      @click="clickHandler(tag.name)"
    >
      {{ tag.name }}
      <sup class="font-bold">{{ tag.posts.length }}</sup>
    </button>
  </div>
</template>

<style scoped>
.TagBtn {
  /* border: 2px solid var(--vp-02); */
  font-weight: bold;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  backdrop-filter: blur(10px);
  transition: transform 0.5s, color 0.5s, background-color 0.5s,
    border-color 0.5s;
  color: var(--vp-c-text-1);
  background: var(--vp-02);
}
.TagBtn:hover {
  /* border-color: var(--vp-c-brand-1); */
  transition: transform 0.25s, color 0.25s, background-color 0.25s,
    border-color 0.25s;
  color: var(--vp-c-brand-1);
  background: var(--vp-06);
  transform: scale(1.1);
}
</style>
