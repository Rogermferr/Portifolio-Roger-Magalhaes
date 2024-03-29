import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../../providers/ProjectsContext";
import { ProjectModalStyle } from "./style";
import { BsGithub } from "react-icons/bs";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { motion } from "framer-motion";
import useOutClick from "../../hooks/useOutClick";
import useKeyDown from "../../hooks/useKeyDown";
import { AiOutlineClose } from "react-icons/ai";

const ProjectModal = () => {
  const { projectFound, setProjectModalOpen } = useContext(ProjectsContext);

  const modalRef = useOutClick(() => {
    setProjectModalOpen(false);
  });

  const buttonRef = useKeyDown("Escape", (element: any) => {
    element.click();
  });

  return (
    <ProjectModalStyle role="dialog">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        ref={modalRef}>
        <header>
          <h2>{projectFound.name}</h2>
          <button onClick={() => setProjectModalOpen(false)} ref={buttonRef}>
            <AiOutlineClose />
          </button>
        </header>
        <section>
          <p>{projectFound.description}</p>
          {projectFound.language && (
            <span>Principal linguagem: {projectFound.language}</span>
          )}
          <div className="links_container">
            <Link to={projectFound.html_url} target="_blank">
              Github
              <BsGithub />
            </Link>
            {projectFound.homepage && (
              <Link to={projectFound.homepage} target="_blank">
                Demo
                <AiOutlineDeploymentUnit />
              </Link>
            )}
          </div>
        </section>
      </motion.div>
    </ProjectModalStyle>
  );
};

export default ProjectModal;
