import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Activities } from "./components/Activities/Activities";
import { Awards } from "./components/Awards/Awards";
import { Certificates } from "./components/Certificates/Certificates";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><About /></>} />
        <Route path="/about" element={<><Hero /><About /></>} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/extracurriculars" element={<Activities />} />
        <Route path="/activity" element={<Awards />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
