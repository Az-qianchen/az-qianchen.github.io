import type { DefaultTheme } from "vitepress";
import fs from "fs";
import path from "path";
import process from "process";

export default {
  "/zh/post/shader/": [
    {
      text: "shader",
      items: searchFiles("/zh/post/shader"),
    },
  ],
  "/zh/post/dev/": [
    {
      text: "dev",
      items: searchFiles("/zh/post/dev"),
    },
  ],
  "/zh/post/collect/": [
    {
      text: "collect",
      items: searchFiles("/zh/post/collect"),
    },
  ],
};

function searchFiles(searchPath: string): DefaultTheme.SidebarItem[] {
  const absolutePath = process.cwd() + "/docs" + searchPath;
  const files = fs.readdirSync(absolutePath);
  const items: DefaultTheme.SidebarItem[] = [];
  files.forEach((file: string) => {
    const name = path.parse(file).name;
    items.push({
      text: name,
      link: `${searchPath}/${name}`,
    });
  });
  return items;
}
