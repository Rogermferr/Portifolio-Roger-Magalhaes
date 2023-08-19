import { useContext } from "react";
import { ProjectsContext } from "../../providers/ProjectsContext";
import CardProjects from "./CardProjects";
import { ListProjectsStyle } from "./style";

const ListProjects = () => {
  const { projects } = useContext(ProjectsContext);
  return (
    <>
      <h2>Todos os projetos</h2>
      <ListProjectsStyle>
        {projects.map((project) => (
          <CardProjects key={project.id} project={project} />
        ))}
      </ListProjectsStyle>
    </>
  );
};

export default ListProjects;
