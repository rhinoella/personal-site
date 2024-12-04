import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Featured } from "./components/Featured";

function App() {
  return (
    <main className="text-white">
      <Header />
      <div className="max-w-[1510px] mx-auto md:px-10 overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Featured />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}

export default App;
