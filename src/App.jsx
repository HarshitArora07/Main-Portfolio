import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import mainImg from "./assets/main.jpg";
function App() {
  return (
    <div className="relative text-white scroll-smooth">

      {/* Fixed Background Image (ONLY 1 screen height) */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
  
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${mainImg})` }}
  ></div>

  {/* Dark Overlay (controls visibility) */}
  <div className="absolute inset-0 bg-black/35"></div>

</div>

      <Navbar />

      <main>
<div className="flex flex-col w-full">
        <section id="home" className="min-h-screen scroll-mt-16">
          <Home />
        </section>

        <section id="about" className="scroll-mt-16">
          <About />
        </section>

        <section id="skills" className="scroll-mt-16">
          <Skills />
        </section>

         <section id="projects" className="scroll-mt-16">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
</div>
      </main>

    </div>
  );
}

export default App;
