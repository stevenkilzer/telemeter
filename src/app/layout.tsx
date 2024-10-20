'use client'

import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SidebarLeft } from '@/components/SidebarLeft';
import { ThemeProvider } from "@/components/ThemeProvider";
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

import '@/app/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="flex h-screen overflow-hidden">
              <SidebarLeft />
              <main className="flex-1 overflow-y-auto">
                <div className="flex items-center gap-4 p-4">
                  <SidebarTrigger />
                  <PageBreadcrumb />
                </div>
                <div className="p-6">
                  {children}
                </div>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}