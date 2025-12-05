import { Presentation, Palette, Code, Gamepad2 } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { FadeIn } from '../components/FadeIn';

const useCases = [
  {
    icon: Presentation,
    title: 'Presentations',
    description: 'Navigate slides with natural hand movements. Control your presentation from anywhere in the room.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Palette,
    title: 'Creative Work',
    description: 'Perfect for designers and artists. Intuitive control for drawing, sculpting, and editing.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Code efficiently with custom gestures. Navigate your IDE without leaving the keyboard.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Gamepad2,
    title: 'Gaming',
    description: 'Experience a new level of immersion. Precise control for strategy and simulation games.',
    color: 'from-red-500 to-red-600',
  },
];

export const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-background">
      <Container>
        <SectionTitle
          title="Built for Your Workflow"
          subtitle="Whether you're presenting, creating, coding, or gaming - Ring Mouse adapts to you"
        />

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <FadeIn key={useCase.title} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>

                  <div className="relative">
                    <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-text mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
