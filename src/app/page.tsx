'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { CardEvent } from '@/components/CardEvent';

export default function SamplePage() {
  const events = [
    {
      title: "Weekly Sprint Race",
      date: "Oct 24, 2024",
      time: "20:00",
      track: "Watkins Glen",
      participants: 18,
      maxParticipants: 24,
      status: 'upcoming' as const
    },
    {
      title: "Endurance Practice",
      date: "Oct 24, 2024",
      time: "18:30",
      track: "Spa-Francorchamps",
      participants: 12,
      maxParticipants: 20,
      status: 'in-progress' as const
    },
    {
      title: "Rookie Training",
      date: "Oct 23, 2024",
      time: "19:00",
      track: "Lime Rock Park",
      participants: 8,
      maxParticipants: 8,
      status: 'completed' as const
    }
  ];

  return (
    <div>
      <PageHeader
        title="Recent Activity"
        subtitle="Your recent activity."
      />
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <CardEvent
                key={event.title}
                {...event}
              />
            ))}
          </div>
        </div>

        {/* Placeholder for future sections */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Other Activity</h2>
          <p className="text-muted-foreground">This is where additional activity content will go.</p>
        </div>
      </div>
    </div>
  );
}