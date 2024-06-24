import type { DefaultTheme } from "vitepress";
import fs from "fs";
import path from "path";
import process from "process";
import matter from "gray-matter";

export default {
  "/zh/nav/": [
    {
      collapsed: false,
      text: "导航",
      items: searchFiles("/zh/nav"),
    },
  ],
  "/zh/post/story/": [
    {
      collapsed: false,
      text: "故事",
      items: searchFiles("/zh/post/story"),
    },
  ],
  "/zh/post/article/": [
    {
      collapsed: false,
      text: "文章",
      items: searchFiles("/zh/post/article"),
    },
  ],
  "/zh/post/dev/": [
    {
      collapsed: false,
      text: "开发",
      items: searchFiles("/zh/post/dev"),
    },
    {
      collapsed: false,
      text: "政策",
      items: searchFiles("/zh/post/policy"),
    },
  ],
  "/zh/post/policy/": [
    {
      collapsed: false,
      text: "开发",
      items: searchFiles("/zh/post/dev"),
    },
    {
      collapsed: false,
      text: "政策",
      items: searchFiles("/zh/post/policy"),
    },
  ],
  "/zh/post/tool/": [
    {
      collapsed: false,
      text: "材质",
      items: searchFiles("/zh/post/shader"),
    },
    {
      collapsed: false,
      text: "干货",
      items: searchFiles("/zh/post/collect"),
    },
    {
      collapsed: false,
      text: "工具",
      items: searchFiles("/zh/post/tool"),
    },
    {
      collapsed: false,
      text: "图片",
      items: searchFiles("/zh/post/picture"),
    },
  ],
  "/zh/post/shader/": [
    {
      collapsed: false,
      text: "材质",
      items: searchFiles("/zh/post/shader"),
    },
    {
      collapsed: false,
      text: "干货",
      items: searchFiles("/zh/post/collect"),
    },
    {
      collapsed: false,
      text: "工具",
      items: searchFiles("/zh/post/tool"),
    },
    {
      collapsed: false,
      text: "图片",
      items: searchFiles("/zh/post/picture"),
    },
  ],
  "/zh/post/collect/": [
    {
      collapsed: false,
      text: "材质",
      items: searchFiles("/zh/post/shader"),
    },
    {
      collapsed: false,
      text: "干货",
      items: searchFiles("/zh/post/collect"),
    },
    {
      collapsed: false,
      text: "工具",
      items: searchFiles("/zh/post/tool"),
    },
    {
      collapsed: false,
      text: "图片",
      items: searchFiles("/zh/post/picture"),
    },
  ],
  "/zh/post/picture/": [
    {
      collapsed: false,
      text: "材质",
      items: searchFiles("/zh/post/shader"),
    },
    {
      collapsed: false,
      text: "干货",
      items: searchFiles("/zh/post/collect"),
    },
    {
      collapsed: false,
      text: "分享",
      items: searchFiles("/zh/post/tool"),
    },
    {
      collapsed: false,
      text: "图片",
      items: searchFiles("/zh/post/picture"),
    },
  ],
  "/zh/post/tips/": [
    {
      collapsed: false,
      text: "技巧",
      items: searchFiles("/zh/post/tips"),
    },
  ],
};

function searchFiles(searchPath: string): DefaultTheme.SidebarItem[] {
  const absolutePath = process.cwd() + "/docs" + searchPath;
  const files = fs.readdirSync(absolutePath);
  const items: DefaultTheme.SidebarItem[] = [];

  files.forEach((file: string) => {
    // 只处理 .md 文件
    if (path.extname(file) === ".md") {
      const filePath = path.join(absolutePath, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      let title = data.title || path.parse(file).name; // 使用 frontmatter 中的 title，如果没有则使用文件名
      const maxTitleLength = 14; // 设置最大标题长度
      // 截断标题并添加省略号
      if (title.length > maxTitleLength) {
        title = title.substring(0, maxTitleLength) + "...";
      }

      const name = path.parse(file).name;
      items.push({
        text: title,
        link: `${searchPath}/${name}`,
      });
    }
  });
  return items;
}
