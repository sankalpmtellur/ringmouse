import { ArrowRight, PlayCircle } from 'lucide-react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import heroImage from '../assets/hero_ring.png';

export const Hero = () => {
  const scrollToPricing = () => {
    const element = document.querySelector('');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-background pt-16 pb-24 md:pt-24 md:pb-32">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
              Control Everything
              <span className="block text-primary mt-2">With a Gesture</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-xl">
              The Ring Mouse revolutionises how you interact with your devices. Wear it, wave it, and control your digital world with unprecedented precision and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" onClick={scrollToPricing}>
                Get Started <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Button>
              <Button size="lg" variant="secondary" onClick={() => window.open('https://drive.google.com/file/d/1g3LXUm4gaj96ZNCF0zyGXMk8LvnoaRHj/view', '_blank')}>
                <PlayCircle className="mr-2 w-5 h-5 inline" /> Watch Demo
              </Button>
            </div>
            <p className="text-sm text-text-secondary mt-6">
              Free shipping • 30-day returns • 1-year warranty
            </p>
          </FadeIn>

          <FadeIn delay={200} className="relative">
            <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Ring Mouse Device"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl scale-90"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};
