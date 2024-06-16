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
  return tags;
};

const getTag = (tagName: string) => {
  let tags = getTags();
  return tags.find((tag) => tag.name === tagName);
};

export { getTags, getTag };

const tagsDesc = [
  {
    name: "tag1",
    desc: "tag1的描述",
  },
  {
    name: "tag2",
    desc: "tag2的描述",
  },
  {
    name: "tag3",
    desc: "tag3的描述",
  },
];
