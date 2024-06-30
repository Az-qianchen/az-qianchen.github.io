import type { ContentData } from "vitepress";
import { data as posts } from "./posts.data.mts";

export interface Tag {
  name: string;
  description: string;
  posts: ContentData[];
}
const getTags = (): Tag[] => {
  let tags: Tag[] = [];
  posts.map((post) => {
    if (!post.frontmatter.tags) return;
    post.frontmatter.tags.map((tag) => {
      let tagIndex = tags.findIndex((t) => t.name === tag);
      if (tagIndex === -1) {
        const tagDesc = tagsDesc.find((t) => t.name === tag);
        tags.push({
          name: tag,
          description: tagDesc ? tagDesc.desc : "",
          posts: [post],
        });
      } else {
        tags[tagIndex].posts.push(post);
      }
    });
  });
  // 找出最近10篇文章（按date），放到“最近文章”标签下
  let recentPosts = posts
    .concat()
    .filter((post) => post.frontmatter.hidden !== true)
    .sort((a, b) => {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    })
    .slice(0, 10);
  tags.unshift({
    name: "最近文章",
    description: "最近发布的文章",
    posts: recentPosts,
  });

  return tags;
};

const getTag = (tagName: string) => {
  let tags = getTags();
  return tags.find((tag) => tag.name === tagName);
};

export { getTags, getTag };

const tagsDesc = [
  {
    name: "文章",
    desc: "所谓浪漫，就是毫无意义的追寻",
  },
  {
    name: "干货",
    desc: "一些知识的整理",
  },
  {
    name: "DEV-SB",
    desc: "Super Ball 开发快照",
  },
  {
    name: "图片",
    desc: "收集&拍摄的图片&照片",
  },
  {
    name: "工具",
    desc: "分享各类优质的工具、网站",
  },
  {
    name: "Hugo",
    desc: "Hugo 相关的一些笔记",
  },
  {
    name: "协议",
    desc: "Super Ball 相关协议",
  },
  {
    name: "故事",
    desc: "一个科幻故事",
  },
  {
    name: "Shader",
    desc: "一些 Godot 着色器分享",
  },
  {
    name: "技巧",
    desc: "一些零碎的技巧和问题的解决方案",
  },
];
