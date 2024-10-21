'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { SidebarTrigger } from "@/components/ui/sidebar";
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

const TopBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-full border-b border-border bg-background">
      <div className="px-4 py-2">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <PageBreadcrumb />
        </div>
      </div>
    </div>
  );
};

export default TopBar;