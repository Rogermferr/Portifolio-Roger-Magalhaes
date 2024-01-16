import { useContext } from 'react'
import ListProjects from '../../components/ListProjects'
import { ProjectsPageStyle } from './style'
import { ProjectsContext } from '../../providers/ProjectsContext'
import ProjectModal from '../../components/ProjectModal'
import { motion } from 'framer-motion'
import FeaturedProjects from '../../components/ FeaturedProjects'
import { useInView } from 'react-intersection-observer'

const ProjectsPage = () => {
  const { projectModalOpen } = useContext(ProjectsContext)

  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
      className="container"
    >
      <ProjectsPageStyle id="projects">
        <FeaturedProjects />
        <ListProjects />

        {projectModalOpen && <ProjectModal />}
      </ProjectsPageStyle>
    </motion.div>
  )
}

export default ProjectsPage
