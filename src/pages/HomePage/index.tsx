import ListStacks from "../../components/ListStacks";
import Presentetion from "../../components/Presentation";
import ProfileImage from "../../components/ProfileImage";
import { HomePageStyle } from "./style";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
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
