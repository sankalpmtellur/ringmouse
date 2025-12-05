import { Zap, Wifi, Battery, Gauge, Shield, Sparkles } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { FadeIn } from '../components/FadeIn';

const features = [
  {
    icon: Zap,
    title: 'Ultra-Responsive',
    description: 'Experience zero-lag control with our advanced sensor technology. Every gesture is captured instantly.',
  },
  {
    icon: Wifi,
    title: 'Wireless Freedom',
    description: 'Connect seamlessly via Bluetooth 5.2. Work from up to 30 feet away without any cables.',
  },
  {
    icon: Battery,
    title: 'All-Day Battery',
    description: 'Up to 40 hours of continuous use on a single charge. Quick charge in just 30 minutes.',
  },
  {
    icon: Gauge,
    title: 'Precision Tracking',
    description: '1600 DPI optical sensor delivers pixel-perfect accuracy for any task.',
  },
  {
    icon: Shield,
    title: 'Ergonomic Design',
    description: 'Crafted for comfort. Reduces hand strain and fatigue during extended use.',
  },
  {
    icon: Sparkles,
    title: 'Smart Gestures',
    description: 'Customize gestures for your workflow. Control presentations, design, and more.',
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionTitle
          title="Designed for Excellence"
          subtitle="Every detail engineered to enhance your digital experience"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={feature.title} delay={index * 100}>
                <div className="group p-8 rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
