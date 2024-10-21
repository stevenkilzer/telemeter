'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ErrorBoundary';
import { PageHeader } from '@/components/PageHeader';


const CarSelector = dynamic(() => import('@/components/CarSelector'), { 
  ssr: false 
});

export default function SearchPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Search"
        subtitle="Find Content & Laps"
      />
      
      <ErrorBoundary fallback={<p>Something went wrong with the car selector. Please try again later.</p>}>
        <CarSelector />
      </ErrorBoundary>
    </div>
  );
}