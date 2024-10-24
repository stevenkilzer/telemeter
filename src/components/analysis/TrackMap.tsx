import React from 'react';
import { Lap } from '@/types/analysis';

interface TrackMapProps {
  laps: Lap[];
  selectedSector?: [number, number];  // Start and end points in meters or percentage
  onSectorChange?: (sector: [number, number]) => void;
}

export function TrackMap({ laps, selectedSector, onSectorChange }: TrackMapProps) {
  return (
    <div className="relative aspect-square w-full bg-card rounded-lg">
      {/* TODO: Implement track visualization using SVG or Canvas */}
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
        Track Visualization Coming Soon
      </div>
    </div>
  );
}