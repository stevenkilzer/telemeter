'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { CardEvent } from '@/components/CardEvent';

export default function SamplePage() {
  const events = [
    {
      date: "Oct 24, 2024 - 20:00",
      circuit: "Watkins Glen",
      car: "Porsche 911 GT3",
      totalLaps: 85,
      sessions: [
        {
          session: "Practice" as const,
          laps: 28,
          fastestLap: "1:48.234",
          timeOnTrack: "45m"
        },
        {
          session: "Qualify" as const,
          laps: 12,
          fastestLap: "1:47.891",
          timeOnTrack: "15m"
        },
        {
          session: "Race" as const,
          laps: 45,
          fastestLap: "1:48.102",
          timeOnTrack: "1h 12m"
        }
      ]
    },
    {
      date: "Oct 23, 2024 - 19:00",
      circuit: "Spa-Francorchamps",
      car: "Ferrari 488 GT3",
      totalLaps: 42,
      sessions: [
        {
          session: "Practice" as const,
          laps: 30,
          fastestLap: "2:15.567",
          timeOnTrack: "45m"
        },
        {
          session: "Offline Testing" as const,
          laps: 12,
          fastestLap: "2:16.234",
          timeOnTrack: "20m"
        }
      ]
    }
  ];

  const handleSessionClick = (session: any) => {
    console.log('Session clicked:', session);
    // Add your navigation or modal logic here
  };

  return (
    <div>
      <PageHeader
        title="Recent Activity"
        subtitle="Your recent activity."
      />
      <div className="space-y-8">
        <div>
          <div className="space-y-0">
            {events.map((event, index) => (
              <CardEvent
                key={index}
                {...event}
                onSessionClick={handleSessionClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}