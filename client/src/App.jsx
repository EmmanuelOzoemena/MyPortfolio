
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import ProjectGallery from "./pages/ProjectGallery";
import Home from "./pages/Home"; 
import AdminPortal from "./pages/AdminPortal";

function App() {
  return (
    <div className="dark min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-control-center" element={<AdminPortal />} />
        <Route path="/projects" element={<ProjectGallery />} />
      </Routes>
    </div>
  );
}

export default App;
