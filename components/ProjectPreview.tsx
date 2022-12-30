import Link from "next/link";
import Image from "next/image";
import { ProjectJsonData } from "../interfaces/ProjectJsonData";

export default function ProjectPreview(props: ProjectJsonData) {
    return <>
        <li>
            <Link href={`/work/${props.slug}`}>
                <Image
                    src={props.image}
                    alt={props.alt}
                    width={300}
                    height={300}
                />
                <p>{props.title}</p>
            </Link>
        </li>
    </>
}