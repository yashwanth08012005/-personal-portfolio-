import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Background from './components/Background';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Background />
      <Navbar />
      <Socials />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
