'use client'

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Car {
  value: string;
  label: string;
}

const CarSelector: React.FC = () => {
  const [open, setOpen] = useState(false);
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between font-normal"
        >
          {selectedCar ? cars.find((car) => car.value === selectedCar)?.label : "Cars"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Filter cars..." className="h-9" />
          <CommandEmpty>No car found.</CommandEmpty>
          <CommandGroup className="max-h-[300px] overflow-y-auto">
            {cars.map((car) => (
              <CommandItem
                key={car.value}
                onSelect={() => {
                  setSelectedCar(car.value === selectedCar ? "" : car.value);
                  setOpen(false);
                }}
                className="flex items-center"
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedCar === car.value ? "opacity-100" : "opacity-0"
                  )}
                />
                <span>{car.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CarSelector;