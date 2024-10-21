'use client'

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Car {
  CarName: string;
}

export default function CarSelector() {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      const { data, error } = await supabase
        .from('iRacing Cars')
        .select('CarName')
        .order('CarName', { ascending: true });

      if (error) {
        console.error('Error fetching cars:', error);
      } else if (data) {
        setCars(data);
      }
    };

    fetchCars();
  }, []);

  const handleSelect = (carName: string) => {
    setSelectedCar(carName);
    setIsOpen(false);
    console.log('Selected car:', carName);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedCar || 'Select a car'}
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {cars.map((car) => (
            <li
              key={car.CarName}
              onClick={() => handleSelect(car.CarName)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {car.CarName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}