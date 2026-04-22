import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="dark">
      {" "}
      {/* You can toggle this class to test dark mode */}
      <Navbar />
      <main>
        <Hero />
        {/* We will add the Project Slider next! */}
      </main>
    </div>
  );
}

export default App;
