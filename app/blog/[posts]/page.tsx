import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostsMetadata from '../../../pages/api/getPostsMetadata';

const getPostContent = (slug: string) => {
    const postData = fs.readFileSync(`staticData/posts/${slug}.md`, "utf8");
    const matterResult = matter(postData);
    // only return content below the metadata using matter
    return matterResult;
}

// generate static slugs at build time based on path to posts md files
// for nonserver usage (free and static)
export const generateStaticParams = async () => {
    const posts = getPostsMetadata();
    return posts.map((post) => ({
        posts: post.slug
    }))
}

export default function PostPage(props: any) {
    const slug = props.params.posts;
    const post = getPostContent(slug)

    return <>        
        <div>
            <div className="text-center post-title">
                <h1>{post.data.title}</h1>
                <p>{post.data.subtitle}</p> 
                <p>{post.data.date}</p> 
            </div>
            <br/>
            <article className="prose lg:prose-xl mx-auto">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    </>
}