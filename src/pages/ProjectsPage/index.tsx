import { useContext } from "react";
import ListProjects from "../../components/ListProjects";
import { ProjectsPageStyle } from "./style";
import { ProjectsContext } from "../../providers/ProjectsContext";
import ProjectModal from "../../components/ProjectModal";
import { motion } from "framer-motion";
import FeaturedProjects from "../../components/ FeaturedProjects";

const ProjectsPage = () => {
  const { projectModalOpen } = useContext(ProjectsContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <ProjectsPageStyle>
        <FeaturedProjects />
        <ListProjects />

        {projectModalOpen && <ProjectModal />}
      </ProjectsPageStyle>
    </motion.div>
  );
};

export default ProjectsPage;
