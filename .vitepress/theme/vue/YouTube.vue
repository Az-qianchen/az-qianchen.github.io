<template>
  <div v-if="url" class="video-responsive">
    <iframe width="100%" :src="url" frameborder="0" allowfullscreen />
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
const url = computed(() => `https://www.youtube.com/embed/${props.id}`);
</script>

<style>
.video-responsive {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 56.25%;
  border-radius: 10px;
}

.video-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
