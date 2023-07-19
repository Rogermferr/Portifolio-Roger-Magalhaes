import ListStacks from '../../components/ListStacks';
import Presentetion from '../../components/Presentation';
import ProfileImage from '../../components/ProfileImage';
import { HomePageStyle } from './style';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 1 }}>
      <HomePageStyle>
        <section>
          <Presentetion />
          <ListStacks />
        </section>
        <ProfileImage />
      </HomePageStyle>
    </motion.div>
  );
};

export default HomePage;
