
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import ProjectGallery from "./pages/ProjectGallery";
import Home from "./pages/Home"; 

function App() {
  return (
    <div className="dark min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectGallery />} />
      </Routes>
    </div>
  );
}

export default App;
