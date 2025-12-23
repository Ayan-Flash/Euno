import { useScroll, motion } from "framer-motion";
import "@/App.css";
import Aurora from "@/components/Aurora/Aurora";

import Hero from "./components/features/Hero";
import Bio from "./components/features/Bio";
import Workflow from "./components/features/Workflow";
import Features from "./components/features/Features";
import Specs from "./components/features/Specs";
import Projects from "./components/features/Projects";
import Team from "./components/features/Team";
import TechDetails from "./components/features/TechDetails";
import Contact from "./components/features/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="tenz-container" data-testid="app-container">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      {/* Diagonal Glowing Line */}
      <div className="diagonal-line"></div>

      {/* Scroll Progress */}
      <motion.div className="scroll-indicator" style={{ scaleX: scrollYProgress }} />

      <Hero />
      <Bio />
      <Workflow />
      <Features />
      <Specs />
      <Projects />
      <Team />
      <TechDetails />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
