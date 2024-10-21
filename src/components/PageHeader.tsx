'use client';

import React from 'react';
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  primaryCTA?: {
    label: string;
    onClick: () => void;
  };
  secondaryCTA?: {
    label: string;
    onClick: () => void;
  };
}

export function PageHeader({ title, subtitle, primaryCTA, secondaryCTA }: PageHeaderProps) {
  return (
    <div className=""> 
      <div className="max-w-[520px] mb-6">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex gap-4">
            {primaryCTA && (
              <Button onClick={primaryCTA.onClick}>{primaryCTA.label}</Button>
            )}
            {secondaryCTA && (
              <Button variant="ghost" onClick={secondaryCTA.onClick}>
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}