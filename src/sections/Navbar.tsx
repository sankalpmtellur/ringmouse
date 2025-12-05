import { useState } from 'react';
import { Menu, X, MousePointer2 } from 'lucide-react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Specs', href: '#specs' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <MousePointer2 className="w-8 h-8 text-primary" />
            <span className="text-xl md:text-2xl font-bold text-text">Ring Mouse</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-text-secondary hover:text-text transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/summarizer"
              className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium flex items-center gap-2"
            >
              Summarizer
            </a>
            <Button size="sm" onClick={() => scrollToSection('#pricing')}>
              Buy Now
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-text-secondary hover:text-text transition-colors duration-200 font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <Button className="w-full" onClick={() => scrollToSection('')}>
              Buy Now
            </Button>
          </div>
        )}
      </Container>
    </nav>
  );
};
