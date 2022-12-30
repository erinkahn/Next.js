import fs from 'fs';
import { ProjectJsonData } from '../../interfaces/ProjectJsonData';

const getProjectsJsonData = (): ProjectJsonData[] => {
	const jsonDataFile = fs.readFileSync("data/projects.json", "utf8");
	let data = JSON.parse(jsonDataFile).projects.map((project) => {
		return {
			slug: project.slug,
			title: project.title,
			description: project.string,
			image: project.image,
			alt: project.alt,
			url: project.url
		}
	});
	return data;
};

export default getProjectsJsonData;