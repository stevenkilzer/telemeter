import { useState, useEffect } from 'react';
import { Analysis } from '../types/analysis';

export function useAnalyses() {
  const [analyses, setAnalyses] = useState<Analysis[]>([]);

  useEffect(() => {
    // Load analyses from localStorage on mount
    const savedAnalyses = localStorage.getItem('analyses');
    if (savedAnalyses) {
      setAnalyses(JSON.parse(savedAnalyses));
    }
  }, []);

  const saveAnalyses = (newAnalyses: Analysis[]) => {
    setAnalyses(newAnalyses);
    localStorage.setItem('analyses', JSON.stringify(newAnalyses));
  };

  const addAnalysis = (analysis: Omit<Analysis, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newAnalysis: Analysis = {
      ...analysis,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const updatedAnalyses = [...analyses, newAnalysis];
    saveAnalyses(updatedAnalyses);
  };

  const updateAnalysis = (id: string, updates: Partial<Analysis>) => {
    const updatedAnalyses = analyses.map(analysis => {
      if (analysis.id === id) {
        return {
          ...analysis,
          ...updates,
          updatedAt: new Date(),
        };
      }
      return analysis;
    });
    saveAnalyses(updatedAnalyses);
  };

  const deleteAnalysis = (id: string) => {
    const updatedAnalyses = analyses.filter(analysis => analysis.id !== id);
    saveAnalyses(updatedAnalyses);
  };

  return {
    analyses,
    addAnalysis,
    updateAnalysis,
    deleteAnalysis,
  };
}
