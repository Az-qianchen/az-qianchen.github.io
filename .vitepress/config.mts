import { defineConfig } from "vitepress";
// 导入导航栏配置文件
import nav from "./config/nav.mts";
// 导入侧边栏配置文件
import sidebar from "./config/sidebar.mjs";
// 导入头部配置
import head from "./config/head.mjs";
// 引入 PWA 插件
import { withPwa } from "@vite-pwa/vitepress";
import pwa from "./config/pwa.mts";
// 导入 UnoCSS 插件
import UnoCSS from "unocss/vite";
// 导入 markdown-it-footnote 插件
import MarkdownItFootnote from "markdown-it-footnote";
// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    // URL 不生成 .html 后缀
    cleanUrls: true,
    // 页面 head 配置
    head: head,
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
        label: "简体中文",
        lang: "zh",
        link: "/zh/",
        themeConfig: {
          docFooter: {
            prev: "«上一页",
            next: "下一页»",
          },
          lastUpdatedText: "上次更新",
          darkModeSwitchLabel: "切换暗黑模式",
          lightModeSwitchTitle: "切换到明亮模式",
          darkModeSwitchTitle: "切换到暗黑模式",
          outlineTitle: "文章目录",
        },
      },
      en: {
        label: "English",
        lang: "en",
        link: "/en/",
      },
    },
    // 主题配置
    themeConfig: {
      outline: "deep",

      docFooter: {
        prev: "上一页",
        next: "下一页",
      },
      // 国际化
      i18nRouting: false,
      // 网站左上角标题
      siteTitle: "Tuclink",
      // 图标
      logo: "/ico/64.png",
      // https://vitepress.dev/reference/default-theme-config
      // 导航栏配置
      nav: nav,
      // 侧边栏配置
      sidebar: sidebar,

      // 社交链接
      socialLinks: [
        // { icon: 'github', link: 'https://b23.tv/Dy49jbs'},
        {
          icon: {
            svg: '<svg viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><rect fill="none" x="1.3333" y="6" width="21.333" height="15.333" rx="4" ry="4"/><path d="m8 12.4v1.2"/><path d="m16 12.4v1.2"/><path d="m5.8853 2.6667L8.552 5.3334"/><path d="m18.115 2.6667-2.6667 2.6667"/></svg>',
          },
          link: "https://b23.tv/Dy49jbs",
        },
        {
          icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="none" d="M4 4h16c1.1.0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1.0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline fill="none" points="22,6 12,13 2,6"/></svg>',
          },
          link: "mailto:feedback@tuclink.com",
        },
      ],
      // 页脚内容
      footer: {
        message:
          'Tuclink <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>',
        copyright: "© 2024 突触递质 - Page",
      },
      // 搜索功能
      search: {
        provider: "local",
      },
    },
    // // 路由重写
    rewrites: {
      // "zh/index.md": "index.md",
      // "zh/posts/(.*)": "posts/(.*)",
    },
    // pwz 配置
    pwa: pwa,
    vite: {
      plugins: [UnoCSS()],
    },
    markdown: {
      math: true,
      image: {
        // 默认禁用图片懒加载
        lazyLoading: true,
      },
      config: (md) => {
        // 使用更多的 Markdown-it 插件！
        md.use(MarkdownItFootnote);
      },
    },
  })
);
