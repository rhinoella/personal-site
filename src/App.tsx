import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { About } from "./components/About";

function App() {
  return (
    <main className="text-white">
      <Header />
      <div className="max-w-[1510px] mx-auto px-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
      </div>
    </main>
  );
}

export default App;
