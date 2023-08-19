import ListStacks from "../../components/ListStacks";
import Presentetion from "../../components/Presentation";
import ProfileImage from "../../components/ProfileImage";
import { HomePageStyle } from "./style";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container">
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
