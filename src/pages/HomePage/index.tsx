import ListStacks from '../../components/ListStacks'
import Presentetion from '../../components/Presentation'
import ProfileImage from '../../components/ProfileImage'
import { HomePageStyle } from './style'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const HomePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="container"
    >
      <HomePageStyle id="home">
        <section>
          <Presentetion />
          <ListStacks />
        </section>
        <ProfileImage />
      </HomePageStyle>
    </motion.div>
  )
}

export default HomePage
