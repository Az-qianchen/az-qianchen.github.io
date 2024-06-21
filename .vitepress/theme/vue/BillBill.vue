<template>
  <div v-if="url" class="video-responsive">
    <iframe
      :src="url"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
      style="position:absolute; height: 100%; width: 100%;high_quality=1;danmaku=0"
    >
    </iframe>
  </div>
</template>

<script setup>
// 接收参数
import { computed } from "vue";
// 传递参数
const props = defineProps({
  id: {
    // 指定 prop 的类型
    type: String,
    // 必须填入该 prop
    required: true,
  },
});
// 处理返回值
const url = computed(
  () =>
    `https://player.bilibili.com/player.html?bvid=${props.id}&p=1&autoplay=0`
);
</script>

<style scoped>
.video-responsive {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 56.25%;
  border-radius: 10px;
}
.video-iframe {
  border-radius: 10px;
}
</style>
