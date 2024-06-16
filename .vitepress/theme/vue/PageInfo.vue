<script setup>
import { data as posts } from "../utils/posts.data.mts";
import { useData, useRouter } from "vitepress";

const { frontmatter, title, page, lang } = useData();
const post = posts.find((p) => p.frontmatter.title === frontmatter.value.title);
if (!post) {
  console.error(`Post not found: ${page.value.filePath}`);
}
// 格式化日期
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const router = useRouter();
const queryTag = (tag) => {
  router.go(`${lang.value}/tags/?tag=${tag}`);
};
</script>

<template>
  <h1>{{ frontmatter.title }}</h1>
  <div class="article-meta">
    <span v-if="frontmatter.author" class="article-meta">
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
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg
      >{{ frontmatter.author }}</span
    >

    <span v-if="post.frontmatter.read_time" class="article-meta">
      ·<svg
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
      >{{ post.frontmatter.read_time }} 分钟</span
    >

    <span v-if="post.frontmatter.word_count" class="article-meta">
      ·<svg
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
        <polyline points="14 2 14 8 20 8" style="user-select: text"></polyline>
        <line x1="16" y1="13" x2="8" y2="13" style="user-select: text"></line>
        <line x1="16" y1="17" x2="8" y2="17" style="user-select: text"></line>
        <polyline
          points="10 9 9 9 8 9"
          style="user-select: text"
        ></polyline></svg
      >{{ post.frontmatter.word_count }} 字</span
    >

    <span v-if="frontmatter.date" class="article-meta">
      ·<svg
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
        <line x1="16" y1="2" x2="16" y2="6" style="user-select: text"></line>
        <line x1="8" y1="2" x2="8" y2="6" style="user-select: text"></line>
        <line
          x1="3"
          y1="10"
          x2="21"
          y2="10"
          style="user-select: text"
        ></line></svg
      >{{ formatDate(frontmatter.date) }}
    </span>

    <span v-if="frontmatter.Translated" class="article-meta">
      ·<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 5h7"></path>
        <path d="M7 4c0 4.846 0 7 .5 8"></path>
        <path
          d="M10 8.5c0 2.286 -2 4.5 -3.5 4.5s-2.5 -1.135 -2.5 -2c0 -2 1 -3 3 -3s5 .57 5 2.857c0 1.524 -.667 2.571 -2 3.143"
        ></path>
        <path d="M12 20l4 -9l4 9"></path>
        <path d="M19.1 18h-6.2"></path>
      </svg>
      未实现
    </span>

    <span v-if="frontmatter.tags" class="article-meta items-center">
      ·<span class="i-mdi-tag-multiple-outline"></span>
      <span v-for="tag in frontmatter.tags">
        <button @click="queryTag(tag)" class="hover:underline-gray">
          {{ tag }}
        </button>
      </span>
    </span>
  </div>
  <hr />
</template>

<style scoped>
hr {
  border: 1px solid var(--vp-c-divider);
  margin-bottom: 1.5rem;
}

h1 {
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
}
.article-meta {
  color: var(--vp-c-text-2);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 1rem;
}
.i-mdi-tag-multiple-outline {
  margin: 0px 6px 0px 8px !important; /* 添加右边距 */
  width: 16px; /* 减小宽度 */
  height: 16px; /* 减小高度 */
  transform: scale(1.3);
}

.article-meta button {
  transform: scale(1.2) translateY(-0.8px);
  margin: 0px 6px 0px 0px; /* 添加右边距 */
  transition: color 0.5s;
}

.article-meta button:hover {
  color: var(--vp-c-brand-1);
  transition: color 0.25s;
}
.article-meta svg {
  width: 16px; /* 减小宽度 */
  height: 16px; /* 减小高度 */
  margin: 4px 6px 0px 6px; /* 添加右边距 */
}
.article-meta span {
  margin: 0px 4px 0px 4px; /* 添加右边距 */
}
</style>
