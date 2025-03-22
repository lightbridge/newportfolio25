'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PresentationCardProps {
  title: string;
  event: string;
  date: string;
  description: string;
  imageSrc: string;
  videoUrl?: string;
  slidesUrl?: string;
  href: string;
}

export default function PresentationCard({
  title,
  event,
  date,
  description,
  imageSrc,
  videoUrl,
  slidesUrl,
  href,
}: PresentationCardProps) {
  return (
    <div className="card overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
      <div className="relative h-[200px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
        />
        {videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-deep-blue bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-3 transition-all"
              aria-label="Watch video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </a>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-warm-gray mb-3">
          <span>{event}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-deep-blue mb-2">{title}</h3>
        <p className="text-warm-gray mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-3">
          <Link href={href} className="btn-secondary text-sm">
            View Details
          </Link>
          {slidesUrl && (
            <a 
              href={slidesUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-text text-sm flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
              Slides
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
