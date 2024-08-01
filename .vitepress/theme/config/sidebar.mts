import type { DefaultTheme } from "vitepress";
import fs from "fs";
import path from "path";
import process from "process";
import matter from "gray-matter";

const dev = [
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
];

const share = [
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
];

const article = [
  {
    collapsed: false,
    text: "日志",
    items: [
      {
        collapsed: true,
        text: "2024 年",
        items: [
          {
            text: "7 月",
            link: "/zh/post/log/2024/07",
          },
          {
            text: "8 月",
            link: "/zh/post/log/2024/08",
          },
        ],
      },
    ],
  },
  {
    collapsed: false,
    text: "文章",
    items: searchFiles("/zh/post/article"),
  },
];

export default {
  "/zh/post/log/": article,
  "/zh/post/article/": article,

  "/zh/post/dev/": dev,
  "/zh/post/policy/": dev,

  "/zh/post/tool/": share,
  "/zh/post/shader/": share,
  "/zh/post/collect/": share,
  "/zh/post/picture/": share,
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
  "/zh/post/about/": [
    {
      collapsed: false,
      text: "关于",
      items: searchFiles("/zh/post/about"),
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
  const items: { text: string; link: string; weight: number }[] = [];

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

      const weight = data.weight !== undefined ? data.weight : Infinity; // 默认 weight 为 Infinity
      const name = path.parse(file).name;
      items.push({
        text: title,
        link: `${searchPath}/${name}`,
        weight: weight,
      });
    }
  });

  // 按照 weight 进行排序，数字越小排越前
  items.sort((a, b) => a.weight - b.weight);

  return items.map((item) => ({ text: item.text, link: item.link }));
}
