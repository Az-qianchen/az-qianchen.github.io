import { data as posts } from "./posts.data.mts";

interface Post {
  url: string;
  frontmatter: { title: string };
}
interface Tag {
  name: string;
  posts: Post[];
}
const getTags = (): Tag[] => {
  let tags: Tag[] = [];
  posts.map((post) => {
    if (!post.frontmatter.tags) return;
    post.frontmatter.tags.map((tag) => {
      let tagIndex = tags.findIndex((t) => t.name === tag);
      if (tagIndex === -1) {
        tags.push({
          name: tag,
          posts: [{ url: post.url, frontmatter: post.frontmatter }],
        });
      } else {
        tags[tagIndex].posts.push({
          url: post.url,
          frontmatter: post.frontmatter,
        });
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
