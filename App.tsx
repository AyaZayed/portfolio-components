import "./styles/theme.css";
import { Hero } from "./components/Hero";
import { Profile } from "./components/Profile";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-svh bg-bg text-ink">
      <Hero />
      <main>
        <Profile />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
