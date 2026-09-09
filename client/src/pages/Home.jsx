import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import ProjectSlider from "../components/ProjectSlider";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state?.target;

    if (!target) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      navigate(location.pathname, { replace: true, state: {} });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.state, navigate]);

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
