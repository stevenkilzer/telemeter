'use client'

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Car {
  value: string;
  label: string;
}

const CarSelector: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCar, setSelectedCar] = useState<string>('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('iRacing Cars')
          .select('CarName')
          .order('CarName', { ascending: true });

        if (error) throw error;

        const formattedCars = data.map(car => ({
          value: car.CarName,
          label: car.CarName
        }));
        console.log('Formatted cars:', formattedCars);
        setCars(formattedCars);
      } catch (err) {
        console.error('Error fetching cars:', err);
        setError('Failed to load cars. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCar(event.target.value);
    console.log('Selected car:', event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-[400px] w-full">
      <select
        value={selectedCar}
        onChange={handleSelect}
        className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a car...</option>
        {cars.map((car) => (
          <option key={car.value} value={car.value}>
            {car.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CarSelector;