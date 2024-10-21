'use client'

import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarLeft } from '@/components/SidebarLeft';
import { ThemeProvider } from "@/components/ThemeProvider";
import TopBar from '@/components/TopBar';

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
            <div className="flex w-full overflow-hidden">
              <SidebarLeft />
              <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar />
                <main className="flex-1 overflow-y-auto">
                  <div className="p-6">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}