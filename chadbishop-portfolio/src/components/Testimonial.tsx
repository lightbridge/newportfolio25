'use client';

import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  imageSrc?: string;
}

export default function Testimonial({
  quote,
  author,
  role,
  company,
  imageSrc,
}: TestimonialProps) {
  return (
    <div className="bg-soft-white p-6 rounded-lg border-l-4 border-teal shadow-md">
      <div className="flex items-start">
        <svg 
          className="text-teal w-10 h-10 mr-4 flex-shrink-0" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <div className="flex-1">
          <p className="text-lg mb-4">{quote}</p>
          <div className="flex items-center">
            {imageSrc && (
              <div className="mr-4">
                <Image
                  src={imageSrc}
                  alt={author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
            )}
            <div>
              <h4 className="font-semibold text-deep-blue">{author}</h4>
              <p className="text-warm-gray text-sm">
                {role}, {company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
