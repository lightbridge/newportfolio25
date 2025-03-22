'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageSrc: string;
  category: string;
  href: string;
  readTime?: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  author,
  imageSrc,
  category,
  href,
  readTime = '5 min read',
}: BlogCardProps) {
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
        <div className="absolute top-4 left-4">
          <span className="bg-amber text-deep-blue text-xs font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-warm-gray mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-deep-blue mb-2">{title}</h3>
        <p className="text-warm-gray mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-warm-gray">By {author}</span>
          <Link href={href} className="btn-text">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
