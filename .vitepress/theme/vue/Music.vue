<template>
  <div id="music-container" class="musice-container">
    <meting-js
      :server="server"
      :type="type"
      :id="id"
      lrc-type="0"
      fixed="false"
      list-folded="true"
      order="random"
      list-max-height="340px"
      mini="false"
      mutex="true"
    >
    </meting-js>
  </div>
</template>
<!--
id='外链播放器id',必须参数
type=[song=单曲, playlist=歌单, album=专辑, search=搜索结果, artist=艺术家],必须参数
server=[netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐],必须参数
fixed=启用固定模式，固定在左下角,默认false
mini=启用迷你模式,默认false
preload=[none,metadata,auto]
mutex=[互斥锁，默认true],默认false
order=[random=随机播放,list=列表播放]
loop=[all=全部循环, one=循环一次 ,none=不循环]
volume=[音量，默认0.7]
lrc-type=[歌词类型，默认0]
list-folded=[列表是否折叠，默认false]
list-max-height=列表最大高度,默认340px
storage-name=本地存储存储密钥，用于存储播放器设置,默认metingjs
-->
<script setup>
import { onMounted, defineProps } from "vue";
// 引入 aplayer CSS 文件
import "aplayer/dist/APlayer.min.css";

// 定义组件的 props
const props = defineProps({
  lrcType: {
    type: Number,
    default: 0
  },
  listFolded: {
    type: Boolean,
    default: true
  },
  // fixed = 启用固定模式，固定在左下角
  fixed: {
    type: Boolean,
    default: false
  },
  // server=[netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐]
  server: {
    type: String,
    default: "netease"
  },
  // type=[song=单曲, playlist=歌单, album=专辑, search=搜索结果, artist=艺术家]
  type: {
    type: String,
    default: "playlist"
  },
  id: {
    type: String,
    default: "6806979872"
  }
});

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

<style scoped>
.musice-container {
  /* 控制堆叠顺序，置顶 */
  z-index: 1000;
}
</style>
