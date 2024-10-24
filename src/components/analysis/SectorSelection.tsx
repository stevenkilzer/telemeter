import React from 'react';

interface SectorSelectionProps {
  sectors: {
    id: string;
    name: string;
    start: number;
    end: number;
  }[];
  selectedSector?: [number, number];
  onSectorChange: (sector: [number, number]) => void;
}

export function SectorSelection({ sectors, selectedSector, onSectorChange }: SectorSelectionProps) {
  return (
    <div className="h-24 bg-card rounded-lg p-4">
      <div className="flex h-full">
        {sectors.map((sector) => (
          <button
            key={sector.id}
            className={`flex-1 border-r last:border-r-0 hover:bg-accent ${
              selectedSector?.[0] === sector.start ? 'bg-accent' : ''
            }`}
            onClick={() => onSectorChange([sector.start, sector.end])}
          >
            {sector.name}
          </button>
        ))}
      </div>
    </div>
  );
}