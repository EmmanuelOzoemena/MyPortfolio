import Experience from "../components/Experience";
import Hero from "../components/Hero";
import ProjectSlider from "../components/ProjectSlider";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <Experience /> */}
      <AboutMe />
      <ProjectSlider />
      <Contact />
    </main>
  );
};

export default Home;
