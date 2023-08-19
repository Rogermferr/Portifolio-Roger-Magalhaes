import { ContactPageStyle } from "./style";
import { motion } from "framer-motion";
import Contact from "../../components/Contact";
import ContactBanner from "../../components/ContactBanner";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container">
      <ContactPageStyle>
        <ContactBanner />
        <Contact />
      </ContactPageStyle>
    </motion.div>
  );
};

export default ContactPage;
