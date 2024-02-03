import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <main className="bg-background">
      <Header />
      <div className="h-screen max-w-[1440px] mx-auto text-white">
        <Hero />
      </div>
    </main>
  );
}

export default App;
