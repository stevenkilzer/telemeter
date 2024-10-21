'use client'

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Combobox, ComboboxItem } from './Combobox';

export default function CarSelector() {
  const [cars, setCars] = useState<ComboboxItem[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const { data, error } = await supabase
        .from('iRacing Cars')
        .select('CarName')
        .order('CarName', { ascending: true });

      if (error) {
        console.error('Error fetching cars:', error);
      } else if (data) {
        const formattedCars = data.map(car => ({
          value: car.CarName,
          label: car.CarName
        }));
        setCars(formattedCars);
      }
    };

    fetchCars();
  }, []);

  const handleSelect = (value: string) => {
    console.log('Selected car:', value);
  };

  return (
    <Combobox
      items={cars}
      placeholder="Select car..."
      emptyMessage="No car found."
      onSelect={handleSelect}
    />
  );
}