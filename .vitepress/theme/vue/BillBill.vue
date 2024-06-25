<template>
  <div v-if="url" class="video-responsive">
    <iframe
      :src="url"
      scrolling="no"
      frameborder="no"
      allowfullscreen="true"
      class="video-iframe"
    ></iframe>
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
  padding-top: 56.25%;
  border-radius: 14px;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
