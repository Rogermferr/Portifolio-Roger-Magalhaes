import { useContext } from "react";
import ListProjects from "../../components/ListProjects";
import { ProjectsPageStyle } from "./style";
import { ProjectsContext } from "../../providers/ProjectsContext";
import ProjectModal from "../../components/ProjectModal";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const { projectModalOpen } = useContext(ProjectsContext);

  return (
    <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}>
      <ProjectsPageStyle>
        <ListProjects />

        {projectModalOpen && <ProjectModal />}
      </ProjectsPageStyle>
    </motion.div>
  );
};

export default ProjectsPage;
