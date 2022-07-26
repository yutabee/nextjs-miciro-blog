import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

//postフォルダのファイル名を取得>currentdirectoryにjoinする
const postsDirectory = path.join(process.cwd(), 'posts');

//mdファイルのデータを取り出す
export function getPostsData() { 
   const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, ''); //ファイル名(id)  

        //マークダウンファイルを文字列として読み込む
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        //metDataを読み込む->オブジェクトへ
        const matterResult = matter(fileContents);

        //idとデータを返す
        return {
            id,
            ...matterResult.data,    //スプレッド構文で展開
        };
    });

    return allPostsData;
}

//getStaticPathでreturnで使うpathを取得する
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            },
        };
    });
}

//idに基づいてブログ投稿データを返す
export const getPostData =  async (id)=>{
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContent);

    const blogContent = await remark()
        .use(html)
        .process(matterResult.content);  
    
    const blogContentHTML = blogContent.toString();

    return {
        id,
        blogContentHTML,
        ...matterResult.data,
    };
}