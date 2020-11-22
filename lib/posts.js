import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const fileNames = fs.readdirSync(postsDirectory);

export const getSortedPostsData = () => {
  // Get file names under /posts
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? a : -1));
};

// list the file names for all posts to be used as the [id] param
export const getAllPostsById = () => {
  return fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, "") },
  }));
};

export const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...data,
  };
};
