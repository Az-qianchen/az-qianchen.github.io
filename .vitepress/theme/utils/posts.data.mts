import { createContentLoader } from "vitepress";
import readingTime from "reading-time";

// 计算阅读时间和字数的函数
function getReadingTime(text: string) {
  const stats = readingTime(text);
  return {
    read_time: Math.ceil(stats.minutes), // 以分钟为单位的阅读时间
    word_count: stats.words, // 文章字数
  };
}

// 创建内容加载器
export default createContentLoader(["zh/post/**/*.md", "en/post/**/*.md"], {
  includeSrc: true, // 包含原始 markdown 源
  transform(rawData) {
    return rawData.map((page) => {
      const src = page.src ?? ""; // 确保 src 是字符串
      const { read_time, word_count } = getReadingTime(src);
      return {
        ...page,
        frontmatter: {
          ...page.frontmatter,
          read_time,
          word_count,
        },
      };
    });
  },
});
