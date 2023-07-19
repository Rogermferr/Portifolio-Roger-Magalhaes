import { ContactPageStyle } from "./style";
import { motion } from "framer-motion";
import Contact from "../../components/Contact";
import ContactBanner from "../../components/ContactBanner";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}>
      <ContactPageStyle>
        <ContactBanner />
        <Contact />
      </ContactPageStyle>
    </motion.div>
  );
};

export default ContactPage;
