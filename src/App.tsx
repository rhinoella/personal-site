import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";

function App() {
  return (
    <main>
      <Header />
      <div className="pt-36 max-w-[1440px] mx-auto text-white">
        <Hero />
        <Skills />
      </div>
    </main>
  );
}

export default App;
