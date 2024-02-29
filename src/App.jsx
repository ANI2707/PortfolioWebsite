import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


import { Routes,Route } from "react-router-dom";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Articles from "./components/Articles/Articles";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/articles" element={<Articles/>}/>
      </Routes>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
