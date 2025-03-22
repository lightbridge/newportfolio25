'use client';

import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'soft-white' | 'deep-blue';
}

export default function Section({
  title,
  subtitle,
  children,
  className = '',
  id,
  background = 'white',
}: SectionProps) {
  const bgClasses = {
    'white': 'bg-white',
    'soft-white': 'bg-soft-white',
    'deep-blue': 'bg-deep-blue text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${background === 'deep-blue' ? 'text-white' : 'text-deep-blue'}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-xl max-w-3xl mx-auto ${background === 'deep-blue' ? 'text-gray-300' : 'text-warm-gray'}`}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
