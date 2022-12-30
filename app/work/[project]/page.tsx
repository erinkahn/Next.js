import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import getProjectsJsonData from '../../../pages/api/getProjectsJsonData';
import styles from '../../page.module.css';

const getProjectContent = (slug: string) => {
	const jsonData = fs.readFileSync("staticData/projects.json", "utf8");
	const data = JSON.parse(jsonData);
	const dataArray = Object.keys(data.projects).map(function(_) { return data.projects[_]; });
	const index = dataArray.map(projects => projects.slug).indexOf(slug);
	return {
		title: data.projects[index].title,
		description: data.projects[index].description,
		image: data.projects[index].image,
		imageAlt: data.projects[index].imageAlt,
		url: data.projects[index].url
	}
}

// generate static slugs at build time based on path to posts md files
// for nonserver usage (free and static)
export const generateStaticParams = async () => {
    const posts = getProjectsJsonData();
    return posts.map((project) => ({
        project: project.slug
    }))
}

export default function Project(props) {
	const slug = props.params.project;
	const content = getProjectContent(slug);

	return <>
		<div className="text-center grid place-items-center">
			<p>Project: {content.title}</p>
			<p className="mb-7">Description: {content.description}</p>
			<Image
				src={content.image}
				alt={content.imageAlt}
				width={500}
				height={300}
				priority
			/>
			<Link
				href={content.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				Live Site
			</Link>
		</div>
	</>
}