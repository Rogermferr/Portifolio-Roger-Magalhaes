import { ContactPageStyle } from "./style";
import { motion } from "framer-motion";
import Contact from "../../components/Contact";
import ContactBanner from "../../components/ContactBanner";

const ContactPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
      className="container">
      <ContactPageStyle>
        <ContactBanner />
        <Contact />
      </ContactPageStyle>
    </motion.div>
  );
};

export default ContactPage;
