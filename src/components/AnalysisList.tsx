// components/AnalysisList.tsx
import { Analysis } from '../types/analysis';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useRouter } from 'next/navigation';

interface AnalysisListProps {
  analyses: Analysis[];
}

export function AnalysisList({ analyses }: AnalysisListProps) {
  const router = useRouter();

  return (
    <div className="space-y-4">
      {analyses.map((analysis) => (
        <Card
          key={analysis.id}
          className="cursor-pointer hover:bg-accent transition-colors"
          onClick={() => router.push(`/analysis/${analysis.id}`)}
        >
          <CardHeader className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{analysis.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {analysis.description}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                {new Date(analysis.createdAt).toLocaleDateString()}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="text-sm">
              {analysis.laps.length} laps analyzed
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}