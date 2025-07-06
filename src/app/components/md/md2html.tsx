import { remark } from 'remark';
import html from 'remark-html';
import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'
import { marked } from 'marked'

const postsDirectory = './src/app/markdown'

export default async function getPostData(name:string) {
  const fullPath = path.join(postsDirectory, `${name}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');


  const matterResult = matter(fileContents);


  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString()
 
  return {
    name,
    html: <div dangerouslySetInnerHTML={{__html: contentHtml}} className="flex flex-col gap-5 markdown"></div>,
    ...matterResult.data,
  };
}