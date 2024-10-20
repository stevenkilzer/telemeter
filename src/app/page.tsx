'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';

export default function SamplePage() {
  return (
    <div>
      <PageHeader
        title="Sample Page"
        subtitle="This is a sample page for the automotive telemetry data analysis tool."
        primaryCTA={{
          label: "Primary Action",
          onClick: () => console.log("Primary action clicked"),
        }}
        secondaryCTA={{
          label: "Secondary Action",
          onClick: () => console.log("Secondary action clicked"),
        }}
      />
      <div>
        {/* Add your page content here */}
        <p>This is where the main content of your page will go.</p>
      </div>
    </div>
  );
}