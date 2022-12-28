import ProjectPreview from "../../components/ProjectPreview";
import getProjectsJsonData from "../../getters/getProjectsJsonData";

export default function WorkPage() {
	const projectJsonData = getProjectsJsonData();
	const projectPreviews = projectJsonData.map((project) => {
		return <ProjectPreview key={project.slug} {...project}/>
	})

  	return <>		
		<div>
			<h1>Work Page</h1>
			{projectPreviews}
		</div>
  	</>
}