import PostPreview from "../../components/PostPreview";
import getPostsMetadata from "../../pages/api/getPostsMetadata";

export default function BlogPage() {
    const postMetadata = getPostsMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))

    return <>        
        <div className="text-center">
            <h1 className="mb-7">Blog Page (static metadata)</h1>
            <ul className="grid grid-cols-2 gap-4">
                {postPreviews}
            </ul>
        </div>
    </>
}