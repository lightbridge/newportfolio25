'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
}: HeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-blue mb-6 animate-fade-in">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray mb-8 animate-slide-up">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={ctaLink} className="btn-primary text-center">
                {ctaText}
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link href={secondaryCtaLink} className="btn-secondary text-center">
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
          {imageSrc && (
            <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in">
              <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                  src={imageSrc}
                  alt="Hero image"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
