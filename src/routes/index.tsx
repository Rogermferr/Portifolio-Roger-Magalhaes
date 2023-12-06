import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from "../components/Header";
import ContactPage from "../pages/ContactPage";
import ProjectsPage from "../pages/ProjectsPage";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

const Routers = () => {
  return (
    <AnimatePresence>
      <>
        <Header />
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </>
    </AnimatePresence>
  );
};

export default Routers;
