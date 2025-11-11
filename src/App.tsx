import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
