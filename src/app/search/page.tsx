'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ErrorBoundary';
import { PageHeader } from '@/components/PageHeader';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from 'lucide-react';

const CarSelector = dynamic(() => import('@/components/CarSelector'), {
  ssr: false
});

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Search"
        subtitle="Find Content & Laps"
      />
      <div className="border-t border-border pt-6">
        <div className="space-y-4 max-w-[512px] w-full">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 pr-10 w-full"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            )}
          </div>
          <div className="flex space-x-2">
            <ErrorBoundary fallback={<p>Something went wrong with the car selector. Please try again later.</p>}>
              <CarSelector />
            </ErrorBoundary>
            <Button variant="secondary">Tracks</Button>
            <Button variant="secondary">Events</Button>
            <Button variant="secondary">Dates</Button>
          </div>
        </div>
      </div>
    </div>
  );
}