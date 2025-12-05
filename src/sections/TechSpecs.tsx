import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { FadeIn } from '../components/FadeIn';

const specs = [
  { label: 'Sensor', value: 'Optical, 1600 DPI' },
  { label: 'Connectivity', value: 'Bluetooth 5.2' },
  { label: 'Range', value: 'Up to 30 feet (10m)' },
  { label: 'Battery Life', value: 'Up to 40 hours' },
  { label: 'Charging', value: 'USB-C, 30min quick charge' },
  { label: 'Compatibility', value: 'Windows, macOS, Linux, iOS, Android' },
  { label: 'Weight', value: '12g (0.42 oz)' },
  { label: 'Dimensions', value: '25mm × 30mm × 15mm' },
  { label: 'Material', value: 'Aircraft-grade aluminum' },
  { label: 'Colors', value: 'Space Gray, Silver, Midnight' },
  { label: 'Water Resistance', value: 'IPX4 splash resistant' },
  { label: 'Warranty', value: '1 year limited warranty' },
];

export const TechSpecs = () => {
  return (
    <section id="specs" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionTitle
          title="Technical Specifications"
          subtitle="Premium engineering meets cutting-edge technology"
        />

        <FadeIn>
          <div className="max-w-4xl mx-auto bg-background rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className="flex justify-between items-start pb-6 border-b border-gray-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-text-secondary font-medium">{spec.label}</span>
                  <span className="text-text font-semibold text-right ml-4">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border border-gray-200">
              <h4 className="text-lg font-semibold text-text mb-3">What's in the Box</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>• Ring Mouse Device</li>
                <li>• USB-C Charging Cable</li>
                <li>• Quick Start Guide</li>
                <li>• Carrying Case</li>
                <li>• 3 Adjustable Size Rings</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
