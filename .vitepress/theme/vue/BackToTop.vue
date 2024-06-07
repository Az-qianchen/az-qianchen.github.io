<template>
  <div>
    <!-- 返回顶部链接 -->
    <a
      v-if="show"
      href="#top"
      aria-label="go to top"
      title="Go to Top (Alt + G)"
      class="top-link"
      id="top-link"
      accesskey="g"
      @click.prevent="handleBackToTop"
    >
      <span class="topInner">
        <!-- 阅读进度 -->
        <svg
          class="topSvg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 6"
          fill="currentColor"
        >
          <path d="M12 6H0l6-6z" />
        </svg>
        <span id="read_progress">{{ readProgress }}</span>
        <!-- 阅读进度 -->
      </span>
      <!-- 阅读进度 -->
    </a>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

// 控制返回顶部按钮显示的状态
const show = ref(false);

// 存储阅读进度的百分比
const readProgress = ref(0);

// 返回顶部函数
function handleBackToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 更新阅读进度并控制按钮显示
function updateProgress() {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
  const progress = ((scrollTop / (scrollHeight - clientHeight)) * 100).toFixed(
    0
  );
  readProgress.value = Number(progress);
  // 如果滚动高度超过450px，显示返回顶部按钮，否则隐藏
  show.value = scrollTop > 450;
}

onMounted(() => {
  window.addEventListener("scroll", updateProgress);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateProgress);
});
</script>

<style scoped>
.top-link {
  position: fixed;
  right: 40px;
  bottom: 60px;
  width: 44px;
  height: 44px;
  background-color: var(--vp-02);
  backdrop-filter: blur(10px);
  color: var(--vp-c-text-2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.5s, opacity 0.5s;
  z-index: 9999;
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0));
  border: 2px solid var(--vp-02);
}

.top-link:hover {
  background-color: var(--vp-06);
  transition: background-color 0.25s;
}

.topInner {
  display: grid;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  justify-items: center;
}

.topSvg {
  color: var(--vp-c-text-2);
  height: 10px;
  padding: 1px;
  margin-bottom: -4px;
  transition: color 0.5s;
}

#read_progress {
  font-size: 0.7em;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
}

.top-link:hover .topSvg,
.top-link:hover #read_progress {
  color: var(--vp-c-brand-1);
  transition: color 0.25s;
}
</style>
