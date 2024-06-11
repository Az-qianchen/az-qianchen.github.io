import { PwaOptions } from '@vite-pwa/vitepress';
import { HeadConfig } from 'vitepress';
const pwa: PwaOptions = {
  // "development" 或 "production" 开发模式会提供更详细的日志和调试信息
  mode: "development",
  // 表示自动更新 Service Worker
  registerType: "autoUpdate",
  // 如何注入 Service Worker 注册脚本
  injectRegister: "script-defer",
  // includeAssets: ["favicon.svg"],
  // 核心配置
  manifest: {
    name: "突触递质",
    short_name: "突触递质",
    theme_color: "#ffffff",
    icons: [
      {
        src: "ico/256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "ico/512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "ico/512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
  workbox: {
    globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
  },
  experimental: {
    includeAllowlist: true,
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallback: "/",
  },
};

export default pwa;