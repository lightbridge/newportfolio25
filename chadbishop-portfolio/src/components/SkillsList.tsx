'use client';

import React from 'react';
import Link from 'next/link';

interface SkillProps {
  name: string;
  level?: number; // 1-5 scale
  category?: string;
}

export default function SkillsList({
  skills,
  showLevel = false,
  columns = 3,
}: {
  skills: SkillProps[];
  showLevel?: boolean;
  columns?: 1 | 2 | 3 | 4;
}) {
  const getColumnClass = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-3';
    }
  };

  // Group skills by category if categories exist
  const hasCategories = skills.some(skill => skill.category);
  
  if (hasCategories) {
    const categories = [...new Set(skills.map(skill => skill.category))];
    
    return (
      <div className="space-y-8">
        {categories.map(category => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-semibold text-deep-blue mb-4">{category}</h3>
            <div className={`grid ${getColumnClass()} gap-4`}>
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <SkillItem 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    showLevel={showLevel} 
                  />
                ))
              }
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  // If no categories, just display as a grid
  return (
    <div className={`grid ${getColumnClass()} gap-4`}>
      {skills.map(skill => (
        <SkillItem 
          key={skill.name} 
          name={skill.name} 
          level={skill.level} 
          showLevel={showLevel} 
        />
      ))}
    </div>
  );
}

function SkillItem({ name, level = 0, showLevel }: { name: string; level?: number; showLevel: boolean }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center">
        <span className="font-medium text-deep-blue">{name}</span>
        {showLevel && level > 0 && (
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <div 
                key={star} 
                className={`w-2 h-2 rounded-full ${star <= level ? 'bg-teal' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
