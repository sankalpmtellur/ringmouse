import { Check } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { FadeIn } from '../components/FadeIn';

const plans = [
  {
    name: 'Standard',
    price: '$129',
    description: 'Perfect for individuals',
    features: [
      'Ring Mouse Device',
      'USB-C Charging Cable',
      'Carrying Case',
      '3 Size Adapters',
      'Basic Gesture Library',
      '1 Year Warranty',
      'Email Support',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$179',
    description: 'Best for professionals',
    features: [
      'Everything in Standard',
      'Premium Carrying Case',
      'Advanced Gesture Library',
      'Custom Gesture Creator',
      'Multi-Device Pairing (3)',
      '2 Year Warranty',
      'Priority Support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Bulk Licensing',
      'Custom Integrations',
      'Dedicated Account Manager',
      'On-Site Training',
      'Extended Warranty Options',
      '24/7 Phone Support',
    ],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <Container>
        <SectionTitle
          title="Choose Your Plan"
          subtitle="Flexible pricing for everyone from individuals to enterprise teams"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 100}>
              <div
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-2 border-primary shadow-xl scale-105'
                    : 'border border-gray-200 shadow-md'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
                  <p className="text-text-secondary mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-text">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-text-secondary mb-2">USD</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Buy Now'}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="mt-12 text-center">
            <p className="text-text-secondary">
              All plans include free shipping and 30-day money-back guarantee
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
