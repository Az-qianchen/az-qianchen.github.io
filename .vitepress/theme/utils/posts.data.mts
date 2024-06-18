import { createContentLoader } from "vitepress";
import readingTime from "reading-time";
import { convert } from "html-to-text";

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
  // includeSrc: true, // 包含原始 markdown 源
  render: true, // html 渲染
  transform(rawData) {
    return rawData.map((page) => {
      const text = convert(page.html, { wordwrap: false }) ?? ""; // 确保 text 是字符串
      page.excerpt = text.slice(0, 75) + "..."; // 从文章内容中提取摘要
      const { read_time, word_count } = getReadingTime(text);
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
