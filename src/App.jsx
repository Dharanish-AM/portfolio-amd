import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
