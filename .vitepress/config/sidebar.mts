import type { DefaultTheme } from "vitepress";
import fs from "fs";
import path from "path";
import process from "process";
import matter from "gray-matter";

export default {
  "/zh/nav/": [
    {
      collapsed: true,
      text: "导航",
      items: searchFiles("/zh/nav"),
    },
  ],
  "/zh/post/story/": [
    {
      collapsed: true,
      text: "故事",
      items: searchFiles("/zh/post/story"),
    },
  ],
  "/zh/post/article/": [
    {
      collapsed: true,
      text: "文章",
      items: searchFiles("/zh/post/article"),
    },
  ],
  "/zh/post/dev/": [
    {
      collapsed: true,
      text: "开发",
      items: searchFiles("/zh/post/dev"),
    },
    {
      collapsed: true,
      text: "政策",
      items: searchFiles("/zh/post/policy"),
    },
  ],
  "/zh/post/policy/": [
    {
      collapsed: true,
      text: "开发",
      items: searchFiles("/zh/post/dev"),
    },
    {
      collapsed: true,
      text: "政策",
      items: searchFiles("/zh/post/policy"),
    },
  ],
  "/zh/post/tool/": [
    {
      collapsed: true,
      text: "材质",
      items: searchFiles("/zh/post/shader"),
    },
    {
      collapsed: true,
      text: "干货",
      items: searchFiles("/zh/post/collect"),
    },
    {
      collapsed: true,
      text: "工具",
      items: searchFiles("/zh/post/tool"),
    },
    {
      collapsed: true,
      text: "图片",
      items: searchFiles("/zh/post/picture"),
    },
  ],
  "/zh/post/shader/": [
    {
      collapsed: true,
      text: "材质",
      items: searchFiles("/zh/post/shader"),
    },
    {
      collapsed: true,
      text: "干货",
      items: searchFiles("/zh/post/collect"),
    },
    {
      collapsed: true,
      text: "工具",
      items: searchFiles("/zh/post/tool"),
    },
    {
      collapsed: true,
      text: "图片",
      items: searchFiles("/zh/post/picture"),
    },
  ],
  "/zh/post/collect/": [
    {
      collapsed: true,
      text: "材质",
      items: searchFiles("/zh/post/shader"),
    },
    {
      collapsed: true,
      text: "干货",
      items: searchFiles("/zh/post/collect"),
    },
    {
      collapsed: true,
      text: "工具",
      items: searchFiles("/zh/post/tool"),
    },
    {
      collapsed: true,
      text: "图片",
      items: searchFiles("/zh/post/picture"),
    },
  ],
  "/zh/post/picture/": [
    {
      collapsed: true,
      text: "材质",
      items: searchFiles("/zh/post/shader"),
    },
    {
      collapsed: true,
      text: "干货",
      items: searchFiles("/zh/post/collect"),
    },
    {
      collapsed: true,
      text: "分享",
      items: searchFiles("/zh/post/tool"),
    },
    {
      collapsed: true,
      text: "图片",
      items: searchFiles("/zh/post/picture"),
    },
  ],
};

function searchFiles(searchPath: string): DefaultTheme.SidebarItem[] {
  const absolutePath = process.cwd() + "/docs" + searchPath;
  const files = fs.readdirSync(absolutePath);
  const items: DefaultTheme.SidebarItem[] = [];

  files.forEach((file: string) => {
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
      // text: name,
      // link: `${searchPath}/${name}`,
      text: title,
      link: `${searchPath}/${path.parse(file).name}`,
    });
  });
  return items;
}
