import { ICardProjectsProps } from "./interfaces";
import { CardProjectsStyle } from "./style";
import { useContext } from "react";
import { ProjectsContext } from "../../../providers/ProjectsContext";
import { FaCode } from "react-icons/fa";

const CardProjects = ({ project }: ICardProjectsProps) => {
  const { findProject } = useContext(ProjectsContext);

  return (
    <CardProjectsStyle onClick={() => findProject(project.id)}>
      <FaCode size="100" />
      <h3>{project.name}</h3>
    </CardProjectsStyle>
  );
};

export default CardProjects;
