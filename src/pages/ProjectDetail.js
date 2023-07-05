import { useParams } from "react-router-dom";
import { data } from "../data";
import Project from "../components/Project";

function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.projectId;

  const project = data.find((item) => item.id === parseInt(projectId, 10));

  if (!project) {
    return (
      <>
        <h1>Project not found!</h1>
      </>
    );
  }

  return <><Project project={project} /></>;
}

export default ProjectDetailPage;
