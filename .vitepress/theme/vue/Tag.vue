<script setup lang="ts">
import { VPButton } from "vitepress/theme";
import { getTags } from "../utils/posts.mts";
import { Tag } from "../utils/posts.mts";
import { useRouter, useData, useRoute } from "vitepress";
import { ref, computed, watch } from "vue";
import { useUrlSearchParams } from "@vueuse/core";

const tags: Tag[] = getTags();
const router = useRouter();
const { lang } = useData();
const route = useRoute();

const queryParams = useUrlSearchParams("history");
const selectedTag = ref<Tag>({
  name: "",
  description: "",
  posts: [],
});

const setSelectedTag = (tag: Tag) => {
  selectedTag.value = tag;
  router.go(`${lang.value}/tags/?tag=${tag.name}`);
};
const goToPost = (path) => {
  router.go(path);
};
selectedTag.value =
  tags.find((tag) => tag.name === queryParams.tag) || selectedTag.value;
</script>
<template>
  <div class="text-3xl font-bold">标签</div>
  <!-- 标签列表 -->
  <div class="flex flex-wrap mt-6 mb-6">
    <div
      v-for="tag in tags"
      :key="tag.name"
      :class="['TagBtn', tag.name === selectedTag.name ? 'selected' : '']"
      @click="setSelectedTag(tag)"
    >
      {{ tag.name }}
      <sup class="font-bold">{{ tag.posts.length }}</sup>
    </div>
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
    <div class="text-lg mt-1 mb-4 ml-10">
      {{ selectedTag.description }}
    </div>
  </div>

  <!-- 文章列表 -->
  <div v-for="tag in tags" :key="tag.name">
    <div v-show="tag.name === selectedTag.name">
      <dev
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
        <div class="article-container flex flex-row gap-2">
          <!-- 文章作者 -->
          <div class="flex flex-row items-center">
            <div class="article-meta">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
              {{ post.frontmatter.author }}
            </div>
          </div>
          ·
          <!-- 文章阅读时长 -->
          <div class="flex flex-row items-center">
            <div class="article-meta">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="12" r="9"></circle>
                <polyline points="12 7 12 12 15 15"></polyline></svg
              >{{ post.frontmatter.read_time }}分钟
            </div>
          </div>
          ·
          <!-- 文章字数 -->
          <div class="flex flex-row items-center">
            <div class="article-meta">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-file-text"
                style="user-select: text"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  style="user-select: text"
                ></path>
                <polyline
                  points="14 2 14 8 20 8"
                  style="user-select: text"
                ></polyline>
                <line
                  x1="16"
                  y1="13"
                  x2="8"
                  y2="13"
                  style="user-select: text"
                ></line>
                <line
                  x1="16"
                  y1="17"
                  x2="8"
                  y2="17"
                  style="user-select: text"
                ></line>
                <polyline
                  points="10 9 9 9 8 9"
                  style="user-select: text"
                ></polyline></svg
              >{{ post.frontmatter.word_count }}字
            </div>
          </div>
          ·
          <!-- 文章创建日 -->
          <div class="flex flex-row items-center">
            <div class="article-meta">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-calendar"
                style="user-select: text"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                  style="user-select: text"
                ></rect>
                <line
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="6"
                  style="user-select: text"
                ></line>
                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="6"
                  style="user-select: text"
                ></line>
                <line
                  x1="3"
                  y1="10"
                  x2="21"
                  y2="10"
                  style="user-select: text"
                ></line></svg
              >{{ post.frontmatter.date }}
            </div>
          </div>
        </div>
      </dev>
    </div>
  </div>
</template>

<style scoped>
.my-1 {
  font-size: 14px;
}
.article-container {
  flex-wrap: wrap;
}

.article-meta {
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.article-meta svg {
  width: 14px; /* 减小宽度 */
  height: 14px; /* 减小高度 */
  margin: 4px 6px 0px 0px; /* 添加右边距 */
}
.dark .TagBtn {
  background: rgba(128, 128, 128, 0.2);
}
.dark .TagBtn.selected,
.dark .TagBtn:hover {
  background: rgba(128, 128, 128, 0.6);
}
.TagBtn {
  will-change: transform;
  /* border: 2px solid var(--vp-02); */
  font-weight: bold;
  margin: 0.3rem 0.3rem 0.3rem 0.3rem;
  padding: 0rem 0.8rem 0.3rem 1rem;
  border-radius: 100px;
  backdrop-filter: blur(10px);
  transition: transform 0.5s, color 0.5s, background-color 0.5s,
    border-color 0.5s;
  color: var(--vp-c-text-1);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  background: rgba(128, 128, 128, 0.2);
  cursor: pointer;
}
.TagBtn.selected {
  color: var(--vp-c-brand-1);
  background: rgba(128, 128, 128, 0.1);
  transition: transform 0.25s, color 0.25s, background-color 0.25s,
    border-color 0.25s;
}
.TagBtn:hover {
  /* border-color: var(--vp-c-brand-1); */
  transition: transform 0.25s, color 0.25s, background-color 0.25s,
    border-color 0.25s;
  color: var(--vp-c-brand-1);
  background: rgba(128, 128, 128, 0.1);
  transform: scale(1.1);
}
.divider {
  border-top: 3px dashed var(--vp-c-gray-1);
}

.dark .TagListItem {
  background: rgba(128, 128, 128, 0.2);
}

.dark .TagListItem:hover {
  background: rgba(128, 128, 128, 0.6);
}

.TagListItem {
  will-change: transform;
  padding: 1.1rem;
  border-radius: 0.5rem;
  color: var(--vp-c-text-2);
  margin: 0.5rem;

  cursor: pointer;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(128, 128, 128, 0.2);
  background: rgba(128, 128, 128, 0.2);
  backdrop-filter: blur(10px);
  transition: transform 0.5s, background-color 0.5s, border-color 0.5s;
}
.TagListItem:hover {
  transition: transform 0.25s, color 0.25s, background-color 0.25s,
    border-color 0.25s;
  transform: scale(1.04);
  background: rgba(128, 128, 128, 0.1);
}
.TagListItem .title {
  color: var(--vp-c-text-1);
}
.TagListItem:hover .title {
  color: var(--vp-c-brand-1);
}
</style>
