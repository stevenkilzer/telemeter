'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const CarSelector = dynamic(() => import('@/components/CarSelector'), { 
  ssr: false 
});

export default function SearchPage() {
  return (
    <div className="space-y-6">
      <h1>Search</h1>
      <p>Find Content & Laps</p>
      <CarSelector />
    </div>
  );
}