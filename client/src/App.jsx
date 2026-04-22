import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="dark">
      {" "}
      {/* You can toggle this class to test dark mode */}
      <Navbar />
      <main>
        <Hero />
        <Experience />
      </main>
    </div>
  );
}

export default App;
