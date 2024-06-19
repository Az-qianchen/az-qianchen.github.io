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
// 引入 aplayer CSS 文件
import "aplayer/dist/APlayer.min.css";
// 组件挂载完成时
onMounted(async () => {
  // 加载 APlayer 脚本
  const aplayerScript = document.createElement("script");
  aplayerScript.src = new URL(
    "../../../node_modules/aplayer/dist/APlayer.min.js",
    import.meta.url
  ).href;
  document.body.appendChild(aplayerScript);

  // 等待 APlayer 脚本加载完成
  await new Promise((resolve) => {
    aplayerScript.onload = resolve;
  });

  // 加载 Meting 脚本
  const metingScript = document.createElement("script");
  metingScript.src = new URL(
    "../../../node_modules/meting/dist/Meting.min.js",
    import.meta.url
  ).href;
  document.body.appendChild(metingScript);

  // 等待 Meting 脚本加载完成
  await new Promise((resolve) => {
    metingScript.onload = resolve;
  });
});
</script>

<style>
.musice-container {
  /* 控制堆叠顺序，置顶 */
  z-index: 1000;
}
</style>
