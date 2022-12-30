import Link from "next/link";
import { PostMetadata } from "../interfaces/PostMetadata";

export default function PostPreview(props: PostMetadata) {
    return <>
        <li>
            <Link href={`/blog/${props.slug}`}>
                <p><b>{props.title}</b></p>
            </Link>
            <p>{props.subtitle}</p>
            <p>{props.date}</p>
            <br/>							
        </li>   
    </>
}