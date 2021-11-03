import './App.css';
import Navbar from "./components/navbar/Navbar";
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import CV from './components/cv/cv';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <CV />
      <Contact />
    </div>
  );
}

export default App;
