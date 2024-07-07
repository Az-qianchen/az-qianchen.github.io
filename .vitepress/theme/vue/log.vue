<template>
  <h2 :id="title" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="'#' + title"></a>
    <span style="float: right; color: var(--vp-c-text-2); font-size: 18px;">
      <span class="i-line-md:calendar" style="display: inline-block; width: 22px; height: 22px; vertical-align: middle; position: relative; top: -1px;">
      </span>
      {{ date }}
    </span>
  </h2>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
</style>
