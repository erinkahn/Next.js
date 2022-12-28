import fs from "fs";
import matter from 'gray-matter';
import { PostMetadata } from "../interfaces/PostMetadata";

const getPostsMetadata = (): PostMetadata[] => {
	const mdDataFiles = fs.readdirSync("data/posts/").filter((file) => file.endsWith(".md"));

	// get gray-matter data from each post md file
    const posts = mdDataFiles.map((fileName) => {
        const fileContents = fs.readFileSync(`data/posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            subtitle: matterResult.data.subtitle,
            date: matterResult.data.date,
            slug: fileName.replace(".md", ""),
        }
    })  
	return posts;
};

export default getPostsMetadata;