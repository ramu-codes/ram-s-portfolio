 // src/App.jsx
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Hero from './pages/Hero'; // Import the new Hero component

function App() {
  return (
    <div className="relative">
      <Navbar />

      {/* The pt-16 ensures content starts below the fixed navbar */}
      <div className="pt-16"> 
        <main>
          <Hero />
            <About />
            <Projects/>
            <Skills/>
            <Contact/>
          
          
          
        </main>
            <Footer/>
      </div>
    </div>
  )
}

export default App