<script setup lang="ts">
import { VPButton } from "vitepress/theme";
import { getTags } from "../utils/posts.mts";
import { Tag } from "../utils/posts.mts";
import { useRouter, useData } from "vitepress";
import { ref } from "vue";
import { useUrlSearchParams } from "@vueuse/core";

const tags: Tag[] = getTags();
const router = useRouter();
const { lang } = useData();

const selectedTag = ref<Tag>({ name: "", description: "", posts: [] });
const setSelectedTag = (tag: Tag) => {
  // selectedTag.value = tag;
  router.go(`${lang.value}/tags/?tag=${tag.name}`);
};
const goToPost = (path) => {
  router.go(path);
};

const params = useUrlSearchParams("history");
selectedTag.value = tags.find((tag) => tag.name === params.tag) || {
  name: "",
  description: "",
  posts: [],
};
</script>
<template>
  <div class="text-3xl font-bold">标签</div>
  <!-- 标签列表 -->
  <div class="grid-auto-cols-1 gap-4">
    <button
      v-for="tag in tags"
      :key="tag.name"
      :class="['TagBtn', tag.name === selectedTag.name ? 'selected' : '']"
      @click="setSelectedTag(tag)"
    >
      {{ tag.name }}
      <sup class="font-bold">{{ tag.posts.length }}</sup>
    </button>
  </div>

  <!-- 分割线 -->
  <div class="divider"></div>

  <!-- 当前选择的标签名和描述 -->
  <div v-if="selectedTag.name !== ''">
    <div class="flex flex-row items-center mt-4">
      <div
        v-show="selectedTag.name !== ''"
        class="i-mdi-tag-outline mr-2"
        style="width: 2rem; height: 2rem"
      ></div>
      <div class="text-3xl font-bold">{{ selectedTag.name }}</div>
    </div>
    <div class="text-lg mt-1 mb-4 ml-10">{{ selectedTag.description }}</div>
  </div>

  <!-- 文章列表 -->
  <div v-for="tag in tags" :key="tag.name">
    <div v-show="tag.name === selectedTag.name">
      <button
        v-for="post in tag.posts"
        class="TagListItem flex flex-col w-full"
        @click="goToPost(post.url)"
      >
        <!-- 文章标题 -->
        <div class="title font-bold text-2xl">
          {{ post.frontmatter.title }}
        </div>
        <!-- 文章描述 -->
        <div class="my-1">
          {{ post.frontmatter.description }}
        </div>
        <div class="flex flex-row gap-2">
          <!-- 文章创建日 -->
          <div class="flex flex-row items-center">
            <div class="i-ic-outline-calendar-month"></div>
            <div class="">
              {{ post.frontmatter.date }}
            </div>
          </div>
          <!-- 文章字数 -->
          <div class="flex flex-row items-center">
            <div class="i-ic-outline-article"></div>
            <div>{{ post.frontmatter.word_count }}字</div>
          </div>
          <!-- 文章阅读时长 -->
          <div class="flex flex-row items-center">
            <div class="i-ic-outline-access-time"></div>
            <div>{{ post.frontmatter.read_time }}分钟</div>
          </div>
          <!-- 文章作者 -->
          <div class="flex flex-row items-center">
            <div class="i-ic-outline-person"></div>
            <div>
              {{ post.frontmatter.author }}
            </div>
          </div>
        </div>
      </button>
    </div>
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
.TagBtn.selected {
  color: var(--vp-c-brand-1);
  background: var(--vp-06);
}
.TagBtn:hover {
  /* border-color: var(--vp-c-brand-1); */
  transition: transform 0.25s, color 0.25s, background-color 0.25s,
    border-color 0.25s;
  color: var(--vp-c-brand-1);
  background: var(--vp-06);
  transform: scale(1.1);
}
.divider {
  border-top: 3px dashed var(--vp-c-gray-1);
}
.TagListItem {
  padding: 1.1rem;
  border-radius: 0.5rem;
  background: var(--vp-c-gray-1);
  color: var(--vp-c-text-1);
  margin: 0.5rem;
  box-shadow: 2px 5px 5px var(--vp-c-indigo-soft);
}
.TagListItem:hover {
  transition: transform 0.5s, color 0.5s, background-color 0.5s,
    border-color 0.5s;
  transform: scale(1.03);
}
.TagListItem:hover .title {
  color: var(--vp-c-brand-1);
}
</style>
