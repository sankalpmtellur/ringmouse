import { Routes, Route } from 'react-router-dom';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { UseCases } from './sections/UseCases';
import { TechSpecs } from './sections/TechSpecs';
import {Pricing} from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';
import SummarizerPage from './pages/SummarizerPage';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Features />
            <UseCases />
            <TechSpecs />
            <Pricing />
            <FAQ />
            <Footer />
          </>
        } />
        <Route path="/summarizer" element={<SummarizerPage />} />
      </Routes>
    </div>
  );
}

export default App;
