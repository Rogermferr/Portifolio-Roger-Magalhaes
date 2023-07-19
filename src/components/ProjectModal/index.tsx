import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../../providers/ProjectsContext";
import { ProjectModalStyle } from "./style";
import { BsGithub } from "react-icons/bs";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { motion } from "framer-motion";
import useOutClick from "../../hooks/useOutClick";
import useKeyDown from "../../hooks/useKeyDown";

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
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        transition={{ duration: 1 }}
        ref={modalRef}>
        <header>
          <h2>{projectFound.name}</h2>
          <button onClick={() => setProjectModalOpen(false)} ref={buttonRef}>
            X
          </button>
        </header>
        <section>
          <p>{projectFound.description}</p>
          <div className="links_container">
            <Link to={projectFound.html_url} target="_blank">
              Github
              <BsGithub />
            </Link>
            {projectFound.homepage && (
              <Link to={projectFound.homepage} target="_blank">
                Deploy
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
