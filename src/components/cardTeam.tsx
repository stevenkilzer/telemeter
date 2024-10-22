'use client'

import React from 'react';
import { Check } from 'lucide-react';

interface CardTeamProps {
  title: string;
  image: string;
  activities: string[];
}

export const CardTeam: React.FC<CardTeamProps> = ({ title, image, activities }) => {
      return (
    <div className="flex items-center py-4 border-b border-border">
      <div className="w-16 h-16 mr-4 bg-muted" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <div className="flex flex-wrap gap-4 mt-2">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{activity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
