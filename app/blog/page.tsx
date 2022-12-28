import PostPreview from "../../components/PostPreview";
import getPostsMetadata from "../../getters/getPostMetadata";

export default function BlogPage() {
    const postMetadata = getPostsMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))

    return <>        
        <div>
            <h1>Blog Page</h1>
            {postPreviews}
        </div>
    </>
}