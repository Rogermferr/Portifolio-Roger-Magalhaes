import { ContactPageStyle } from './style'
import { motion } from 'framer-motion'
import Contact from '../../components/Contact'
import ContactBanner from '../../components/ContactBanner'
import { useInView } from 'react-intersection-observer'

const ContactPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
      className="container-contact"
    >
      <ContactPageStyle id="contact">
        <ContactBanner />
        <Contact />
      </ContactPageStyle>
    </motion.div>
  )
}

export default ContactPage
