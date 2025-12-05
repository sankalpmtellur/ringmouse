import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { FadeIn } from '../components/FadeIn';

const faqs = [
  {
    question: 'How does the Ring Mouse work?',
    answer: 'The Ring Mouse uses advanced optical sensors and accelerometers to track your hand movements. Simply wear it on your finger and move your hand naturally. The device translates your gestures into cursor movements and clicks.',
  },
  {
    question: 'Is it compatible with my devices?',
    answer: 'Yes! Ring Mouse works with Windows, macOS, Linux, iOS, and Android devices via Bluetooth 5.2. No additional software is required, though our companion app unlocks advanced features and customization.',
  },
  {
    question: 'How long does the battery last?',
    answer: 'On a full charge, Ring Mouse provides up to 40 hours of continuous use. With normal usage patterns, most users charge it once a week. The USB-C quick charge feature provides 8 hours of use from just 30 minutes of charging.',
  },
  {
    question: 'What if it doesn\'t fit my finger?',
    answer: 'Each Ring Mouse comes with 3 adjustable size adapters to ensure a perfect fit for any finger size. The adapters are easy to swap and designed to maintain comfort during extended use.',
  },
  {
    question: 'Can I use it for gaming?',
    answer: 'Absolutely! While Ring Mouse excels at productivity tasks, its 1600 DPI optical sensor and ultra-low latency make it suitable for strategy games, simulations, and casual gaming. However, it may not replace a traditional gaming mouse for competitive FPS gaming.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied with your Ring Mouse, return it within 30 days for a full refund. The device must be in its original condition with all accessories included.',
  },
  {
    question: 'How do I customize gestures?',
    answer: 'Download our free companion app for your platform. The app provides an intuitive interface to customize gestures, adjust sensitivity, and create custom profiles for different applications. Pro users get access to our advanced gesture creator.',
  },
  {
    question: 'Is there a warranty?',
    answer: 'Yes! All Ring Mouse devices come with a 1-year limited warranty (2 years for Pro). The warranty covers manufacturing defects and hardware failures. Extended warranty options are available for Enterprise customers.',
  },
];

const FAQItem = ({ question, answer, delay }: { question: string; answer: string; delay: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
        >
          <span className="text-lg font-semibold text-text pr-8">{question}</span>
          <ChevronDown
            className={`w-5 h-5 text-text-secondary flex-shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="px-6 pb-5 text-text-secondary leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Ring Mouse"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              delay={index * 50}
            />
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-12 text-center">
            <p className="text-text-secondary mb-4">Still have questions?</p>
            <a
              href="mailto:support@ringmouse.com"
              className="text-primary font-semibold hover:text-primary-dark transition-colors duration-200"
            >
              Contact our support team
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
