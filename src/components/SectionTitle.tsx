import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
}

export const SectionTitle = ({ title, subtitle, className = '', children }: SectionTitleProps) => {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};
