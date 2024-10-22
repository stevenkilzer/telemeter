'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';

export default function TeamsPage() {
  const teams = [
    {
      title: "Team Alpha",
      image: "/team-alpha.jpg",
      activities: ['Driving Activity', 'Telemetry', 'Setups']
    },
    {
      title: "Team Beta",
      image: "/team-beta.jpg",
      activities: ['Driving Activity', 'Race Strategy']
    },
    // Add more teams as needed
  ];

  return (
    <div className="">
      <PageHeader
        title="Teams"
        subtitle="Join a team to drive, learn, and compete with the racing community."
        primaryCTA={{
          label: "Join a Team",
          onClick: () => console.log("Join a Team clicked"),
        }}
        secondaryCTA={{
          label: "Create a Team",
          onClick: () => console.log("Create a Team clicked"),
        }}
      />

    
    </div>
  );
}