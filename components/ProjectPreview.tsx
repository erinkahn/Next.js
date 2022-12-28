import Link from "next/link";
import { ProjectJsonData } from "../interfaces/ProjectJsonData";

export default function ProjectPreview(props: ProjectJsonData) {
    return <>
        <ul className="work">
            <li>
                <Link href={`/work/${props.slug}`}>
                    <p>{props.title}</p>
                    <br/>
                </Link>
            </li>
        </ul>
    </>
}