import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
// 引入默认主题
import DefaultTheme from "vitepress/theme";
// 引入 CSS 文件
import "./custom.css";
// 引入 UnoCSS
import "virtual:uno.css";
// 引入自定义布局
import Layout from "./Layout.vue";
// 引入图片查看组件
import mediumZoom from "medium-zoom";
// 引入全局组件
import BillBill from "./vue/BillBill.vue";
import YouTube from "./vue/YouTube.vue";
import Sketchfab from "./vue/Sketchfab.vue";
export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component("billbill", BillBill);
    app.component("youtube", YouTube);
    app.component("sketchfab", Sketchfab);
  },
  // 图片查看器
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom("[zoom]", { background: "rgba(0, 0, 0, 0.8)" }); // 带标签的触发
      mediumZoom(".main img:not([no-zoom])", {
        background: "rgba(0, 0, 0, 0.8)",
      }); // 不带标签的触发
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};

// 再导出为默认主题
// export default DefaultTheme;
