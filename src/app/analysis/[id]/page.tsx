'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { useAnalyses } from '@/hooks/useAnalyses';
import { Analysis } from '@/types/analysis';

export default function AnalysisDetailPage() {
  const { id } = useParams();
  const { analyses } = useAnalyses();
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

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
      <div className="mt-6">
        {/* TODO: Add lap data visualization */}
        <p>Number of laps: {analysis.laps.length}</p>
      </div>
    </div>
  );
}
