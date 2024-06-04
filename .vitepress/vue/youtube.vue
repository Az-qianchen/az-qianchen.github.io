<template>
  <div v-if="url" class="video-responsive">
    <iframe
      width="100%"
      height="400"
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
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
  /*设置圆角*/
  border-radius: 10px;
}
</style>
