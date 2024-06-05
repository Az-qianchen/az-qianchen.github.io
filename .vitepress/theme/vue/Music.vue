<template>
  <div id="music-container" class="musice-container">
    <meting-js
      lrc-type="0"
      order="random"
      list-max-height="340px"
      list-folded="true"
      fixed="false"
      server="netease"
      type="playlist"
      id="6806979872"
    >
    </meting-js>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
// 组件挂载完成时
onMounted(() => {
  // 创建一个新的 <link>
  const aplayerLink = document.createElement("link");
  aplayerLink.rel = "stylesheet";
  aplayerLink.href =
    "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css";
  // 将元素添加到 <head>
  document.head.appendChild(aplayerLink);

  const aplayerScript = document.createElement("script");
  aplayerScript.src =
    "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js";
  document.body.appendChild(aplayerScript);

  const metingScript = document.createElement("script");
  metingScript.src = "https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js";
  document.body.appendChild(metingScript);
});
</script>

<style>
.musice-container {
  /* 控制堆叠顺序，置顶 */
  z-index: 1000;
}
</style>
