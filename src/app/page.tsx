'use client';

import React from 'react';
import { PageHeader } from '@/components/PageHeader';

export default function SamplePage() {
  return (
    <div>
      <PageHeader
        title="Recent Activity"
        subtitle="Your recent activity."
      />
      <div>
        {/* Add your page content here */}
        <p>This is where the main content of your page will go.</p>
      </div>
    </div>
  );
}