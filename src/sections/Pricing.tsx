import { Check } from 'lucide-react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { FadeIn } from '../components/FadeIn';

const plans = [
    {
        name: 'Standard',
        price: '149',
        description: 'Perfect for professionals and creators.',
        features: [
            'Ring Mouse Device',
            'Charging Case',
            'USB-C Cable',
            'Basic Gestures',
            '1 Year Warranty',
        ],
    },
    {
        name: 'Pro',
        price: '199',
        description: 'For power users who want it all.',
        features: [
            'Everything in Standard',
            'Advanced Custom Gestures',
            'Multi-device Support',
            'Priority Support',
            'Extended 2-Year Warranty',
        ],
        highlight: true,
    },
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-gray-50">
            <Container>
                <SectionTitle
                    title="Simple Pricing"
                    subtitle="Choose the perfect Ring Mouse for your workflow."
                />

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <FadeIn key={plan.name} delay={index * 100}>
                            <div
                                className={`relative p-8 rounded-3xl h-full flex flex-col ${plan.highlight
                                        ? 'bg-white shadow-xl border-2 border-primary'
                                        : 'bg-white shadow-lg border border-gray-100'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
                                    <p className="text-text-secondary mb-6">{plan.description}</p>
                                    <div className="flex items-baseline">
                                        <span className="text-4xl font-bold text-text">${plan.price}</span>
                                        <span className="text-text-secondary ml-2">USD</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-text-secondary">
                                            <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={plan.highlight ? 'primary' : 'secondary'}
                                    className="w-full justify-center"
                                >
                                    Pre-order Now
                                </Button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    );
};
