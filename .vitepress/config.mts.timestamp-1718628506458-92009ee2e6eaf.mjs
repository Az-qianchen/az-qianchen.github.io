// .vitepress/config.mts
import { defineConfig } from "file:///D:/Work/VitePress/node_modules/vitepress/dist/node/index.js";

// .vitepress/config/nav.mts
var nav_default = [
  { text: "Home", link: "/zh" },
  { text: "Examples", link: "/zh/posts/markdown-examples" },
  {
    text: "\u4E0B\u62C9\u83DC\u5355",
    items: [
      {
        text: "Markdown Examples",
        link: "/zh/posts/markdown-examples"
      }
    ]
  },
  {
    text: "\u6807\u7B7E",
    link: "/zh/tags/"
  }
];

// .vitepress/config/sidebar.mts
var sidebar_default = [
  {
    text: "Examples",
    items: [
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" },
      { text: "Markdown Examples", link: "posts/markdown-examples" },
      { text: "Runtime API Examples", link: "posts/api-examples" }
    ]
  }
];

// .vitepress/config/head.mts
var head = [
  // 网站图标
  ["link", { rel: "icon", href: "/ico/64.png" }],
  // 谷歌分析
  ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-X1S233BKKP" }],
  ["script", {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-X1S233BKKP');
    `]
];
var head_default = head;

// .vitepress/config.mts
import { withPwa } from "file:///D:/Work/VitePress/node_modules/@vite-pwa/vitepress/dist/index.mjs";

// .vitepress/config/pwa.mts
var pwa = {
  // "development" 或 "production" 开发模式会提供更详细的日志和调试信息
  mode: "development",
  // 表示自动更新 Service Worker
  registerType: "autoUpdate",
  // 如何注入 Service Worker 注册脚本
  injectRegister: "script-defer",
  // includeAssets: ["favicon.svg"],
  // 核心配置
  manifest: {
    name: "\u7A81\u89E6\u9012\u8D28",
    short_name: "\u7A81\u89E6\u9012\u8D28",
    theme_color: "#ffffff",
    icons: [
      {
        src: "ico/256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "ico/512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "ico/512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  },
  workbox: {
    globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"]
  },
  experimental: {
    includeAllowlist: true
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallback: "/"
  }
};
var pwa_default = pwa;

// .vitepress/config.mts
import UnoCSS from "file:///D:/Work/VitePress/node_modules/unocss/dist/vite.mjs";
var config_default = withPwa(
  defineConfig({
    // URL 不生成 .html 后缀
    cleanUrls: true,
    // 页面 head 配置
    head: head_default,
    // 语言
    lang: "zh",
    // 标题
    title: "Tuclink",
    // 描述
    description: "Tuclink web",
    // 存储 Markdown 页面的目录
    srcDir: "docs",
    // 最后更新
    // lastUpdated: true,
    // 多语言配置
    locales: {
      root: {
        label: "\u7B80\u4F53\u4E2D\u6587",
        lang: "zh",
        link: "/zh/",
        themeConfig: {
          docFooter: {
            prev: "\xAB\u4E0A\u4E00\u9875",
            next: "\u4E0B\u4E00\u9875\xBB"
          },
          lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0",
          darkModeSwitchLabel: "\u5207\u6362\u6697\u9ED1\u6A21\u5F0F",
          lightModeSwitchTitle: "\u5207\u6362\u5230\u660E\u4EAE\u6A21\u5F0F",
          darkModeSwitchTitle: "\u5207\u6362\u5230\u6697\u9ED1\u6A21\u5F0F",
          outlineTitle: "\u6587\u7AE0\u76EE\u5F55"
        }
      },
      en: {
        label: "English",
        lang: "en",
        link: "/en/"
      }
    },
    // 主题配置
    themeConfig: {
      outline: "deep",
      docFooter: {
        prev: "\u4E0A\u4E00\u9875",
        next: "\u4E0B\u4E00\u9875"
      },
      // 国际化
      i18nRouting: false,
      // 网站左上角标题
      siteTitle: "Tuclink",
      // 图标
      logo: "/ico/64.png",
      // https://vitepress.dev/reference/default-theme-config
      // 导航栏配置
      nav: nav_default,
      // 侧边栏配置
      sidebar: sidebar_default,
      // 社交链接
      socialLinks: [
        // { icon: 'github', link: 'https://b23.tv/Dy49jbs'},
        {
          icon: {
            svg: '<svg viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><rect fill="none" x="1.3333" y="6" width="21.333" height="15.333" rx="4" ry="4"/><path d="m8 12.4v1.2"/><path d="m16 12.4v1.2"/><path d="m5.8853 2.6667L8.552 5.3334"/><path d="m18.115 2.6667-2.6667 2.6667"/></svg>'
          },
          link: "https://b23.tv/Dy49jbs"
        },
        {
          icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="none" d="M4 4h16c1.1.0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1.0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline fill="none" points="22,6 12,13 2,6"/></svg>'
          },
          link: "mailto:feedback@tuclink.com"
        }
      ],
      // 页脚内容
      footer: {
        message: 'Tuclink <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>',
        copyright: "\xA9 2024 \u7A81\u89E6\u9012\u8D28 - Page"
      },
      // 搜索功能
      search: {
        provider: "local"
      }
    },
    // // 路由重写
    rewrites: {
      // "zh/index.md": "index.md",
      // "zh/posts/(.*)": "posts/(.*)",
    },
    // pwz 配置
    pwa: pwa_default,
    vite: {
      plugins: [UnoCSS()]
    },
    markdown: {
      math: true,
      image: {
        // 默认禁用图片懒加载
        lazyLoading: true
      }
    }
  })
);
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIiwgIi52aXRlcHJlc3MvY29uZmlnL25hdi5tdHMiLCAiLnZpdGVwcmVzcy9jb25maWcvc2lkZWJhci5tdHMiLCAiLnZpdGVwcmVzcy9jb25maWcvaGVhZC5tdHMiLCAiLnZpdGVwcmVzcy9jb25maWcvcHdhLm10cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFdvcmtcXFxcVml0ZVByZXNzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFdvcmtcXFxcVml0ZVByZXNzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovV29yay9WaXRlUHJlc3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xuLy8gXHU1QkZDXHU1MTY1XHU1QkZDXHU4MjJBXHU2ODBGXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XG5pbXBvcnQgbmF2IGZyb20gXCIuL2NvbmZpZy9uYXYubXRzXCI7XG4vLyBcdTVCRkNcdTUxNjVcdTRGQTdcdThGQjlcdTY4MEZcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL2NvbmZpZy9zaWRlYmFyLm1qc1wiO1xuLy8gXHU1QkZDXHU1MTY1XHU1OTM0XHU5MEU4XHU5MTREXHU3RjZFXG5pbXBvcnQgaGVhZCBmcm9tIFwiLi9jb25maWcvaGVhZC5tanNcIjtcbi8vIFx1NUYxNVx1NTE2NSBQV0EgXHU2M0QyXHU0RUY2XG5pbXBvcnQgeyB3aXRoUHdhIH0gZnJvbSBcIkB2aXRlLXB3YS92aXRlcHJlc3NcIjtcbmltcG9ydCBwd2EgZnJvbSBcIi4vY29uZmlnL3B3YS5tdHNcIjtcbi8vIFx1NUJGQ1x1NTE2NSBVbm9DU1MgXHU2M0QyXHU0RUY2XG5pbXBvcnQgVW5vQ1NTIGZyb20gXCJ1bm9jc3Mvdml0ZVwiO1xuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgd2l0aFB3YShcbiAgZGVmaW5lQ29uZmlnKHtcbiAgICAvLyBVUkwgXHU0RTBEXHU3NTFGXHU2MjEwIC5odG1sIFx1NTQwRVx1N0YwMFxuICAgIGNsZWFuVXJsczogdHJ1ZSxcbiAgICAvLyBcdTk4NzVcdTk3NjIgaGVhZCBcdTkxNERcdTdGNkVcbiAgICBoZWFkOiBoZWFkLFxuICAgIC8vIFx1OEJFRFx1OEEwMFxuICAgIGxhbmc6IFwiemhcIixcbiAgICAvLyBcdTY4MDdcdTk4OThcbiAgICB0aXRsZTogXCJUdWNsaW5rXCIsXG4gICAgLy8gXHU2M0NGXHU4RkYwXG4gICAgZGVzY3JpcHRpb246IFwiVHVjbGluayB3ZWJcIixcbiAgICAvLyBcdTVCNThcdTUwQTggTWFya2Rvd24gXHU5ODc1XHU5NzYyXHU3Njg0XHU3NkVFXHU1RjU1XG4gICAgc3JjRGlyOiBcImRvY3NcIixcbiAgICAvLyBcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcbiAgICAvLyBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgICAvLyBcdTU5MUFcdThCRURcdThBMDBcdTkxNERcdTdGNkVcbiAgICBsb2NhbGVzOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIGxhYmVsOiBcIlx1N0I4MFx1NEY1M1x1NEUyRFx1NjU4N1wiLFxuICAgICAgICBsYW5nOiBcInpoXCIsXG4gICAgICAgIGxpbms6IFwiL3poL1wiLFxuICAgICAgICB0aGVtZUNvbmZpZzoge1xuICAgICAgICAgIGRvY0Zvb3Rlcjoge1xuICAgICAgICAgICAgcHJldjogXCJcdTAwQUJcdTRFMEFcdTRFMDBcdTk4NzVcIixcbiAgICAgICAgICAgIG5leHQ6IFwiXHU0RTBCXHU0RTAwXHU5ODc1XHUwMEJCXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYXN0VXBkYXRlZFRleHQ6IFwiXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXCIsXG4gICAgICAgICAgZGFya01vZGVTd2l0Y2hMYWJlbDogXCJcdTUyMDdcdTYzNjJcdTY2OTdcdTlFRDFcdTZBMjFcdTVGMEZcIixcbiAgICAgICAgICBsaWdodE1vZGVTd2l0Y2hUaXRsZTogXCJcdTUyMDdcdTYzNjJcdTUyMzBcdTY2MEVcdTRFQUVcdTZBMjFcdTVGMEZcIixcbiAgICAgICAgICBkYXJrTW9kZVN3aXRjaFRpdGxlOiBcIlx1NTIwN1x1NjM2Mlx1NTIzMFx1NjY5N1x1OUVEMVx1NkEyMVx1NUYwRlwiLFxuICAgICAgICAgIG91dGxpbmVUaXRsZTogXCJcdTY1ODdcdTdBRTBcdTc2RUVcdTVGNTVcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBlbjoge1xuICAgICAgICBsYWJlbDogXCJFbmdsaXNoXCIsXG4gICAgICAgIGxhbmc6IFwiZW5cIixcbiAgICAgICAgbGluazogXCIvZW4vXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gXHU0RTNCXHU5ODk4XHU5MTREXHU3RjZFXG4gICAgdGhlbWVDb25maWc6IHtcbiAgICAgIG91dGxpbmU6IFwiZGVlcFwiLFxuXG4gICAgICBkb2NGb290ZXI6IHtcbiAgICAgICAgcHJldjogXCJcdTRFMEFcdTRFMDBcdTk4NzVcIixcbiAgICAgICAgbmV4dDogXCJcdTRFMEJcdTRFMDBcdTk4NzVcIixcbiAgICAgIH0sXG4gICAgICAvLyBcdTU2RkRcdTk2NDVcdTUzMTZcbiAgICAgIGkxOG5Sb3V0aW5nOiBmYWxzZSxcbiAgICAgIC8vIFx1N0Y1MVx1N0FEOVx1NURFNlx1NEUwQVx1ODlEMlx1NjgwN1x1OTg5OFxuICAgICAgc2l0ZVRpdGxlOiBcIlR1Y2xpbmtcIixcbiAgICAgIC8vIFx1NTZGRVx1NjgwN1xuICAgICAgbG9nbzogXCIvaWNvLzY0LnBuZ1wiLFxuICAgICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgICAgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXHU5MTREXHU3RjZFXG4gICAgICBuYXY6IG5hdixcbiAgICAgIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlx1OTE0RFx1N0Y2RVxuICAgICAgc2lkZWJhcjogc2lkZWJhcixcblxuICAgICAgLy8gXHU3OTNFXHU0RUE0XHU5NEZFXHU2M0E1XG4gICAgICBzb2NpYWxMaW5rczogW1xuICAgICAgICAvLyB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9iMjMudHYvRHk0OWpicyd9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgc3ZnOiAnPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHJlY3QgZmlsbD1cIm5vbmVcIiB4PVwiMS4zMzMzXCIgeT1cIjZcIiB3aWR0aD1cIjIxLjMzM1wiIGhlaWdodD1cIjE1LjMzM1wiIHJ4PVwiNFwiIHJ5PVwiNFwiLz48cGF0aCBkPVwibTggMTIuNHYxLjJcIi8+PHBhdGggZD1cIm0xNiAxMi40djEuMlwiLz48cGF0aCBkPVwibTUuODg1MyAyLjY2NjdMOC41NTIgNS4zMzM0XCIvPjxwYXRoIGQ9XCJtMTguMTE1IDIuNjY2Ny0yLjY2NjcgMi42NjY3XCIvPjwvc3ZnPicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vYjIzLnR2L0R5NDlqYnNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IHtcbiAgICAgICAgICAgIHN2ZzogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjFcIiBzdHJva2U9XCJjdXJyZW50Y29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTQgNGgxNmMxLjEuMCAyIC45IDIgMnYxMmMwIDEuMS0uOSAyLTIgMkg0Yy0xLjEuMC0yLS45LTItMlY2YzAtMS4xLjktMiAyLTJ6XCIvPjxwb2x5bGluZSBmaWxsPVwibm9uZVwiIHBvaW50cz1cIjIyLDYgMTIsMTMgMiw2XCIvPjwvc3ZnPicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsaW5rOiBcIm1haWx0bzpmZWVkYmFja0B0dWNsaW5rLmNvbVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIC8vIFx1OTg3NVx1ODExQVx1NTE4NVx1NUJCOVxuICAgICAgZm9vdGVyOiB7XG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgJ1R1Y2xpbmsgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MvYmxvYi9tYWluL0xJQ0VOU0VcIj5NSVQgTGljZW5zZTwvYT4nLFxuICAgICAgICBjb3B5cmlnaHQ6IFwiXHUwMEE5IDIwMjQgXHU3QTgxXHU4OUU2XHU5MDEyXHU4RDI4IC0gUGFnZVwiLFxuICAgICAgfSxcbiAgICAgIC8vIFx1NjQxQ1x1N0QyMlx1NTI5Rlx1ODBGRFxuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gLy8gXHU4REVGXHU3NTMxXHU5MUNEXHU1MTk5XG4gICAgcmV3cml0ZXM6IHtcbiAgICAgIC8vIFwiemgvaW5kZXgubWRcIjogXCJpbmRleC5tZFwiLFxuICAgICAgLy8gXCJ6aC9wb3N0cy8oLiopXCI6IFwicG9zdHMvKC4qKVwiLFxuICAgIH0sXG4gICAgLy8gcHd6IFx1OTE0RFx1N0Y2RVxuICAgIHB3YTogcHdhLFxuICAgIHZpdGU6IHtcbiAgICAgIHBsdWdpbnM6IFtVbm9DU1MoKV0sXG4gICAgfSxcbiAgICBtYXJrZG93bjoge1xuICAgICAgbWF0aDogdHJ1ZSxcbiAgICAgIGltYWdlOiB7XG4gICAgICAgIC8vIFx1OUVEOFx1OEJBNFx1Nzk4MVx1NzUyOFx1NTZGRVx1NzI0N1x1NjFEMlx1NTJBMFx1OEY3RFxuICAgICAgICBsYXp5TG9hZGluZzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFdvcmtcXFxcVml0ZVByZXNzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxXb3JrXFxcXFZpdGVQcmVzc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxuYXYubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Xb3JrL1ZpdGVQcmVzcy8udml0ZXByZXNzL2NvbmZpZy9uYXYubXRzXCI7ZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHsgdGV4dDogXCJIb21lXCIsIGxpbms6IFwiL3poXCIgfSxcclxuICB7IHRleHQ6IFwiRXhhbXBsZXNcIiwgbGluazogXCIvemgvcG9zdHMvbWFya2Rvd24tZXhhbXBsZXNcIiB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU0RTBCXHU2MkM5XHU4M0RDXHU1MzU1XCIsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJNYXJrZG93biBFeGFtcGxlc1wiLFxyXG4gICAgICAgIGxpbms6IFwiL3poL3Bvc3RzL21hcmtkb3duLWV4YW1wbGVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJcdTY4MDdcdTdCN0VcIixcclxuICAgIGxpbms6IFwiL3poL3RhZ3MvXCIsXHJcbiAgfSxcclxuXTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3JrXFxcXFZpdGVQcmVzc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcV29ya1xcXFxWaXRlUHJlc3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcc2lkZWJhci5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1dvcmsvVml0ZVByZXNzLy52aXRlcHJlc3MvY29uZmlnL3NpZGViYXIubXRzXCI7ZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHRleHQ6IFwiRXhhbXBsZXNcIixcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgdGV4dDogXCJNYXJrZG93biBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL21hcmtkb3duLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlJ1bnRpbWUgQVBJIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvYXBpLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIk1hcmtkb3duIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvbWFya2Rvd24tZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiUnVudGltZSBBUEkgRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9hcGktZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiTWFya2Rvd24gRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9tYXJrZG93bi1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJSdW50aW1lIEFQSSBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL2FwaS1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJNYXJrZG93biBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL21hcmtkb3duLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlJ1bnRpbWUgQVBJIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvYXBpLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIk1hcmtkb3duIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvbWFya2Rvd24tZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiUnVudGltZSBBUEkgRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9hcGktZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiTWFya2Rvd24gRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9tYXJrZG93bi1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJSdW50aW1lIEFQSSBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL2FwaS1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJNYXJrZG93biBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL21hcmtkb3duLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlJ1bnRpbWUgQVBJIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvYXBpLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIk1hcmtkb3duIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvbWFya2Rvd24tZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiUnVudGltZSBBUEkgRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9hcGktZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiTWFya2Rvd24gRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9tYXJrZG93bi1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJSdW50aW1lIEFQSSBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL2FwaS1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJNYXJrZG93biBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL21hcmtkb3duLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlJ1bnRpbWUgQVBJIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvYXBpLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIk1hcmtkb3duIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvbWFya2Rvd24tZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiUnVudGltZSBBUEkgRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9hcGktZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiTWFya2Rvd24gRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9tYXJrZG93bi1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJSdW50aW1lIEFQSSBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL2FwaS1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJNYXJrZG93biBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL21hcmtkb3duLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlJ1bnRpbWUgQVBJIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvYXBpLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIk1hcmtkb3duIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvbWFya2Rvd24tZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiUnVudGltZSBBUEkgRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9hcGktZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiTWFya2Rvd24gRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9tYXJrZG93bi1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJSdW50aW1lIEFQSSBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL2FwaS1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJNYXJrZG93biBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL21hcmtkb3duLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlJ1bnRpbWUgQVBJIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvYXBpLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIk1hcmtkb3duIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvbWFya2Rvd24tZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiUnVudGltZSBBUEkgRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9hcGktZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiTWFya2Rvd24gRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9tYXJrZG93bi1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJSdW50aW1lIEFQSSBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL2FwaS1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJNYXJrZG93biBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL21hcmtkb3duLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlJ1bnRpbWUgQVBJIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvYXBpLWV4YW1wbGVzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIk1hcmtkb3duIEV4YW1wbGVzXCIsIGxpbms6IFwicG9zdHMvbWFya2Rvd24tZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiUnVudGltZSBBUEkgRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9hcGktZXhhbXBsZXNcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiTWFya2Rvd24gRXhhbXBsZXNcIiwgbGluazogXCJwb3N0cy9tYXJrZG93bi1leGFtcGxlc1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJSdW50aW1lIEFQSSBFeGFtcGxlc1wiLCBsaW5rOiBcInBvc3RzL2FwaS1leGFtcGxlc1wiIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcV29ya1xcXFxWaXRlUHJlc3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFdvcmtcXFxcVml0ZVByZXNzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXGhlYWQubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Xb3JrL1ZpdGVQcmVzcy8udml0ZXByZXNzL2NvbmZpZy9oZWFkLm10c1wiO2ltcG9ydCB7IEhlYWRDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xyXG5cclxuY29uc3QgaGVhZDogSGVhZENvbmZpZ1tdID0gW1xyXG4gICAgLy8gXHU3RjUxXHU3QUQ5XHU1NkZFXHU2ODA3XHJcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2ljby82NC5wbmcnIH1dLFxyXG4gICAgLy8gXHU4QzM3XHU2QjRDXHU1MjA2XHU2NzkwXHJcbiAgICBbJ3NjcmlwdCcsIHsgYXN5bmM6ICcnLCBzcmM6ICdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctWDFTMjMzQktLUCcgfV0sXHJcbiAgICBbJ3NjcmlwdCcsIHt9LCBgXHJcbiAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgIGd0YWcoJ2NvbmZpZycsICdHLVgxUzIzM0JLS1AnKTtcclxuICAgIGBdXHJcbiAgXTtcclxuICAvLyBcdTRGN0ZcdTc1MjhcdTU2RkVcdTVFOEFcclxuICAvLyBoZWFkLnB1c2goWydtZXRhJywgeyBuYW1lOiAncmVmZXJyZXInLCBjb250ZW50OiBcIm5vLXJlZmVycmVyXCIgfV0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFdvcmtcXFxcVml0ZVByZXNzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxXb3JrXFxcXFZpdGVQcmVzc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxwd2EubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Xb3JrL1ZpdGVQcmVzcy8udml0ZXByZXNzL2NvbmZpZy9wd2EubXRzXCI7aW1wb3J0IHsgUHdhT3B0aW9ucyB9IGZyb20gJ0B2aXRlLXB3YS92aXRlcHJlc3MnO1xyXG5pbXBvcnQgeyBIZWFkQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJztcclxuY29uc3QgcHdhOiBQd2FPcHRpb25zID0ge1xyXG4gIC8vIFwiZGV2ZWxvcG1lbnRcIiBcdTYyMTYgXCJwcm9kdWN0aW9uXCIgXHU1RjAwXHU1M0QxXHU2QTIxXHU1RjBGXHU0RjFBXHU2M0QwXHU0RjlCXHU2NkY0XHU4QkU2XHU3RUM2XHU3Njg0XHU2NUU1XHU1RkQ3XHU1NDhDXHU4QzAzXHU4QkQ1XHU0RkUxXHU2MDZGXHJcbiAgbW9kZTogXCJkZXZlbG9wbWVudFwiLFxyXG4gIC8vIFx1ODg2OFx1NzkzQVx1ODFFQVx1NTJBOFx1NjZGNFx1NjVCMCBTZXJ2aWNlIFdvcmtlclxyXG4gIHJlZ2lzdGVyVHlwZTogXCJhdXRvVXBkYXRlXCIsXHJcbiAgLy8gXHU1OTgyXHU0RjU1XHU2Q0U4XHU1MTY1IFNlcnZpY2UgV29ya2VyIFx1NkNFOFx1NTE4Q1x1ODExQVx1NjcyQ1xyXG4gIGluamVjdFJlZ2lzdGVyOiBcInNjcmlwdC1kZWZlclwiLFxyXG4gIC8vIGluY2x1ZGVBc3NldHM6IFtcImZhdmljb24uc3ZnXCJdLFxyXG4gIC8vIFx1NjgzOFx1NUZDM1x1OTE0RFx1N0Y2RVxyXG4gIG1hbmlmZXN0OiB7XHJcbiAgICBuYW1lOiBcIlx1N0E4MVx1ODlFNlx1OTAxMlx1OEQyOFwiLFxyXG4gICAgc2hvcnRfbmFtZTogXCJcdTdBODFcdTg5RTZcdTkwMTJcdThEMjhcIixcclxuICAgIHRoZW1lX2NvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgIGljb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IFwiaWNvLzI1Ni5wbmdcIixcclxuICAgICAgICBzaXplczogXCIyNTZ4MjU2XCIsXHJcbiAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCJpY28vNTEyLnBuZ1wiLFxyXG4gICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcImljby81MTIucG5nXCIsXHJcbiAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgcHVycG9zZTogXCJhbnkgbWFza2FibGVcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB3b3JrYm94OiB7XHJcbiAgICBnbG9iUGF0dGVybnM6IFtcIioqLyoue2NzcyxqcyxodG1sLHN2ZyxwbmcsaWNvLHR4dCx3b2ZmMn1cIl0sXHJcbiAgfSxcclxuICBleHBlcmltZW50YWw6IHtcclxuICAgIGluY2x1ZGVBbGxvd2xpc3Q6IHRydWUsXHJcbiAgfSxcclxuICBkZXZPcHRpb25zOiB7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgc3VwcHJlc3NXYXJuaW5nczogdHJ1ZSxcclxuICAgIG5hdmlnYXRlRmFsbGJhY2s6IFwiL1wiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwd2E7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUSxTQUFTLG9CQUFvQjs7O0FDQVosSUFBTyxjQUFRO0FBQUEsRUFDcFMsRUFBRSxNQUFNLFFBQVEsTUFBTSxNQUFNO0FBQUEsRUFDNUIsRUFBRSxNQUFNLFlBQVksTUFBTSw4QkFBOEI7QUFBQSxFQUN4RDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGOzs7QUNoQitSLElBQU8sa0JBQVE7QUFBQSxFQUM1UztBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLHFCQUFxQixNQUFNLDBCQUEwQjtBQUFBLE1BQzdELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxxQkFBcUI7QUFBQSxNQUMzRCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sMEJBQTBCO0FBQUEsTUFDN0QsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHFCQUFxQjtBQUFBLE1BQzNELEVBQUUsTUFBTSxxQkFBcUIsTUFBTSwwQkFBMEI7QUFBQSxNQUM3RCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0scUJBQXFCO0FBQUEsTUFDM0QsRUFBRSxNQUFNLHFCQUFxQixNQUFNLDBCQUEwQjtBQUFBLE1BQzdELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxxQkFBcUI7QUFBQSxNQUMzRCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sMEJBQTBCO0FBQUEsTUFDN0QsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHFCQUFxQjtBQUFBLE1BQzNELEVBQUUsTUFBTSxxQkFBcUIsTUFBTSwwQkFBMEI7QUFBQSxNQUM3RCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0scUJBQXFCO0FBQUEsTUFDM0QsRUFBRSxNQUFNLHFCQUFxQixNQUFNLDBCQUEwQjtBQUFBLE1BQzdELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxxQkFBcUI7QUFBQSxNQUMzRCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sMEJBQTBCO0FBQUEsTUFDN0QsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHFCQUFxQjtBQUFBLE1BQzNELEVBQUUsTUFBTSxxQkFBcUIsTUFBTSwwQkFBMEI7QUFBQSxNQUM3RCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0scUJBQXFCO0FBQUEsTUFDM0QsRUFBRSxNQUFNLHFCQUFxQixNQUFNLDBCQUEwQjtBQUFBLE1BQzdELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxxQkFBcUI7QUFBQSxNQUMzRCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sMEJBQTBCO0FBQUEsTUFDN0QsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHFCQUFxQjtBQUFBLE1BQzNELEVBQUUsTUFBTSxxQkFBcUIsTUFBTSwwQkFBMEI7QUFBQSxNQUM3RCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0scUJBQXFCO0FBQUEsTUFDM0QsRUFBRSxNQUFNLHFCQUFxQixNQUFNLDBCQUEwQjtBQUFBLE1BQzdELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxxQkFBcUI7QUFBQSxNQUMzRCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sMEJBQTBCO0FBQUEsTUFDN0QsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHFCQUFxQjtBQUFBLE1BQzNELEVBQUUsTUFBTSxxQkFBcUIsTUFBTSwwQkFBMEI7QUFBQSxNQUM3RCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0scUJBQXFCO0FBQUEsTUFDM0QsRUFBRSxNQUFNLHFCQUFxQixNQUFNLDBCQUEwQjtBQUFBLE1BQzdELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxxQkFBcUI7QUFBQSxNQUMzRCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sMEJBQTBCO0FBQUEsTUFDN0QsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHFCQUFxQjtBQUFBLE1BQzNELEVBQUUsTUFBTSxx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
