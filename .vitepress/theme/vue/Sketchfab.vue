<template>
  <div v-if="url" class="modal-content">
    <div class="video-responsive">
      <iframe
        width="100%"
        height="400px"
        title="Madrona Invasives"
        frameborder="0"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        :src="url"
      ></iframe>
    </div>
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
  () => `https://sketchfab.com/models/${props.id}/embed?ui_theme=dark`
);
</script>

<style>
.modal-content {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 100%;
}
</style>
