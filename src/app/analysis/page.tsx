import { PageHeader } from '@/components/PageHeader';

export default function AnalysisPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analysis"
        subtitle="Select any number of laps to analyze. The first lap listed is the reference lap to which all other laps will be compared."
      />
      {/* Add your analysis content here */}
      <p>Implement your lap analysis functionality in this section.</p>
    </div>
  );
}