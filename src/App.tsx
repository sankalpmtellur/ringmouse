import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { UseCases } from './sections/UseCases';
import { TechSpecs } from './sections/TechSpecs';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <TechSpecs />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
