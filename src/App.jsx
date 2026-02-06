import MainLayout from "./layouts/MainLayout";
import Hero from "./components/sections/Hero";
import SectionDivider from "./components/ui/SectionDivider";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import NavBar from "./components/sections/NavBar";

function App() {
  return (
    <MainLayout>
      <NavBar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <Footer />
    </MainLayout>
  );
}

export default App;
