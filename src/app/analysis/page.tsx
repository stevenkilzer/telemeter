'use client';

import { PageHeader } from '@/components/PageHeader';
import { NewAnalysisDialog } from '@/components/NewAnalysisDialog';
import { AnalysisList } from '@/components/AnalysisList';
import { useAnalyses } from '@/hooks/useAnalyses';

export default function AnalysisPage() {
  const { analyses, addAnalysis } = useAnalyses();

  const handleCreateAnalysis = (data: { title: string; description: string }) => {
    addAnalysis({
      title: data.title,
      description: data.description,
      laps: [],
    });
  };

  return (
    <div>
      <PageHeader
        title="Analysis"
        subtitle="Compare and analyze lap data"
        primaryCTA={{
          label: "Create New Analysis",
          onClick: () => document.querySelector<HTMLButtonElement>('[data-new-analysis-trigger]')?.click(),
        }}
      />
      <div className="hidden">
        <NewAnalysisDialog onCreateAnalysis={handleCreateAnalysis} />
      </div>
      <div className="mt-6">
        <AnalysisList analyses={analyses} />
      </div>
    </div>
  );
}