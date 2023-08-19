import { Link } from "react-router-dom";
import { ICardProps } from "./@types";
import { CardStyle } from "./style";
import { BsGithub } from "react-icons/bs";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const Card = ({ project }: ICardProps) => {
  return (
    <CardStyle>
      <img src={project.image} alt={project.title} />

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.demo && (
          <Link to={project.demo} target="_blank">
            <AiOutlineDeploymentUnit />
          </Link>
        )}
        <Link to={project.repository} target="_blank">
          <BsGithub />
        </Link>
      </div>
    </CardStyle>
  );
};

export default Card;
