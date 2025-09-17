import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import FGD1 from "./components/FGD1";
import FGD2 from "./components/FGD2";
import FGD3 from "./components/FGD3";
import EduNationFest from "./components/EduNationFest";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <FGD1 />
      <FGD2 />
      <FGD3 />
      <EduNationFest />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
