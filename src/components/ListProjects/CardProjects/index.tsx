import { ICardProjectsProps } from './interfaces';
import { CardProjectsStyle } from './style';
import { useContext } from 'react';
import { ProjectsContext } from '../../../providers/ProjectsContext';
import { TbCodeDots } from 'react-icons/tb';

const CardProjects = ({ project }: ICardProjectsProps) => {
  const { findProject } = useContext(ProjectsContext);

  return (
    <CardProjectsStyle onClick={() => findProject(project.id)}>
      <TbCodeDots size="100" />
      <h2>{project.name}</h2>
    </CardProjectsStyle>
  );
};

export default CardProjects;
