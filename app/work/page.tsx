import ProjectPreview from "../../components/ProjectPreview";
import getProjectsJsonData from "../../pages/api/getProjectsJsonData";

export default function WorkPage() {
	const projectJsonData = getProjectsJsonData();
	const projectPreviews = projectJsonData.map((project) => {
		return <ProjectPreview key={project.slug} {...project}/>
	})

  	return <>		
		<div className="text-center">
			<h1 className="mb-7">Work Page (static json data)</h1>
			<ul className="grid grid-cols-3 gap-4">
				{projectPreviews}
			</ul>
		</div>
  	</>
}