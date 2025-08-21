import './App.css';
import Footer from './components/Footer';
import Headers from './components/Header';
import Hero from './components/HeroSection';
import SkillCard from './components/SkillCard';
export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col flex-grow">
        <Headers />

        <div className="text-3xl p-4">
          <h3>KNOWN TECHNOLOGIES</h3>
        </div>
        <Hero>
          <SkillCard />
        </Hero>
      </div>
      <Footer />
    </>
  );
}
