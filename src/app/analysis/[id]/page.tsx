'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { useAnalyses } from '@/hooks/useAnalyses';
import { Analysis } from '@/types/analysis';
import { TrackMap } from '@/components/analysis/TrackMap';
import { TelemetryCharts } from '@/components/analysis/TelemetryCharts';
import { SectorSelection } from '@/components/analysis/SectorSelection';

// Helper function to generate smoother data
function generateSmoothData(length: number) {
  let speed = 100;
  let throttle = 50;
  let brake = 0;
  let steeringAngle = 0;
  let gear = 3;

  return Array.from({ length }, (_, i) => {
    // Smooth speed changes
    speed += (Math.random() - 0.5) * 10;
    speed = Math.max(0, Math.min(300, speed));

    // Realistic throttle/brake relationship
    if (Math.random() > 0.95) {
      throttle = Math.max(0, Math.min(100, throttle + (Math.random() - 0.5) * 50));
      brake = Math.max(0, Math.min(100, 100 - throttle + (Math.random() - 0.5) * 20));
    }

    // Smooth steering changes
    steeringAngle += (Math.random() - 0.5) * 5;
    steeringAngle = Math.max(-180, Math.min(180, steeringAngle));

    // Realistic gear changes
    if (Math.random() > 0.97) {
      gear += Math.random() > 0.5 ? 1 : -1;
      gear = Math.max(1, Math.min(8, gear));
    }

    return {
      distance: i * 10,
      speed,
      throttle,
      brake,
      steeringAngle,
      gear: Math.floor(gear),
    };
  });
}

const DUMMY_TELEMETRY_DATA = generateSmoothData(500);

const DUMMY_SECTORS = [
  { id: 'S1', name: 'Sector 1', start: 0, end: 1500 },
  { id: 'S2', name: 'Sector 2', start: 1500, end: 3000 },
  { id: 'S3', name: 'Sector 3', start: 3000, end: 5000 },
];

export default function AnalysisDetailPage() {
  const { id } = useParams();
  const { analyses } = useAnalyses();
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [selectedSector, setSelectedSector] = useState<[number, number]>();

  useEffect(() => {
    const found = analyses.find(a => a.id === id);
    if (found) {
      setAnalysis(found);
    }
  }, [id, analyses]);

  if (!analysis) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PageHeader
        title={analysis.title}
        subtitle={analysis.description}
        primaryCTA={{
          label: "Add Laps",
          onClick: () => {
            // TODO: Implement lap selection dialog
            console.log("Add laps clicked");
          },
        }}
      />
      
      <div className="mt-6 grid grid-cols-[1fr_2fr] gap-6">
        {/* Left column - Track Map */}
        <div>
          <TrackMap 
            laps={analysis.laps}
            selectedSector={selectedSector}
            onSectorChange={setSelectedSector}
          />
        </div>

        {/* Right column - Telemetry Charts */}
        <div>
          <TelemetryCharts 
            data={DUMMY_TELEMETRY_DATA}
            selectedSector={selectedSector}
          />
        </div>
      </div>

      {/* Bottom - Sector Selection */}
      <div className="mt-6">
        <SectorSelection
          sectors={DUMMY_SECTORS}
          selectedSector={selectedSector}
          onSectorChange={setSelectedSector}
        />
      </div>
    </div>
  );
}