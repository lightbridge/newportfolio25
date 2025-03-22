'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  href: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  tags,
  href,
}: ProjectCardProps) {
  return (
    <div className="card overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
      <div className="relative h-[240px] w-full mb-4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-deep-blue mb-2">{title}</h3>
        <p className="text-warm-gray mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-teal bg-opacity-10 text-teal text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={href} className="btn-secondary inline-block">
          View Case Study
        </Link>
      </div>
    </div>
  );
}
