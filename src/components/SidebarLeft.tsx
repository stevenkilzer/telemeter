'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, SidebarFooter } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useSidebar } from "@/components/ui/sidebar";
import Link from 'next/link';

const IconPlaceholder = () => (
  <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
);

const iconComponents = {
  Home: dynamic(() => import('lucide-react').then((mod) => mod.Home), { loading: () => <IconPlaceholder />, ssr: false }),
  Search: dynamic(() => import('lucide-react').then((mod) => mod.Search), { loading: () => <IconPlaceholder />, ssr: false }),
  Bell: dynamic(() => import('lucide-react').then((mod) => mod.Bell), { loading: () => <IconPlaceholder />, ssr: false }),
  BarChart2: dynamic(() => import('lucide-react').then((mod) => mod.BarChart2), { loading: () => <IconPlaceholder />, ssr: false }),
  Settings: dynamic(() => import('lucide-react').then((mod) => mod.Settings), { loading: () => <IconPlaceholder />, ssr: false }),
  Wrench: dynamic(() => import('lucide-react').then((mod) => mod.Wrench), { loading: () => <IconPlaceholder />, ssr: false }),
  Users: dynamic(() => import('lucide-react').then((mod) => mod.Users), { loading: () => <IconPlaceholder />, ssr: false }),
  Radio: dynamic(() => import('lucide-react').then((mod) => mod.Radio), { loading: () => <IconPlaceholder />, ssr: false }),
  Ghost: dynamic(() => import('lucide-react').then((mod) => mod.Ghost), { loading: () => <IconPlaceholder />, ssr: false }),
  Folder: dynamic(() => import('lucide-react').then((mod) => mod.Folder), { loading: () => <IconPlaceholder />, ssr: false }),
  User: dynamic(() => import('lucide-react').then((mod) => mod.User), { loading: () => <IconPlaceholder />, ssr: false }),
  HelpCircle: dynamic(() => import('lucide-react').then((mod) => mod.HelpCircle), { loading: () => <IconPlaceholder />, ssr: false }),
  ChevronDown: dynamic(() => import('lucide-react').then((mod) => mod.ChevronDown), { loading: () => <IconPlaceholder />, ssr: false }),
  Plus: dynamic(() => import('lucide-react').then((mod) => mod.Plus), { loading: () => <IconPlaceholder />, ssr: false }),
};

export function SidebarLeft() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { state } = useSidebar();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const IconComponent = ({ name, className = '' }: { name: keyof typeof iconComponents, className?: string }) => {
    const Icon = iconComponents[name];
    return <Icon className={className} />;
  };

  // Prevent flash of incorrect theme
  if (!mounted) {
    return <SidebarHeader className="h-[40px] flex mb-0 mt-3">
      <div className={`text-lg font-medium ${state === "expanded" ? "pl-2" : "pl-1"} flex items-center`}>
        {/* Optional loading state */}
      </div>
    </SidebarHeader>;
  }

  return (
    <Sidebar
      collapsible="icon"
      side="left"
    >
      <SidebarHeader className=" flex mb-0">
        <div className={`text-lg font-medium ${state === "expanded" ? "h-6 pl-2 mt-3" : "h-4 pl-1 mt-[7px]"} flex items-center`}>
          {state === "expanded" ? (
            <Image
              src={resolvedTheme === 'dark' ? "/g61-wordmark-dark.svg" : "/g61-wordmark-light.svg"}
              alt="G61 Logo"
              width={100}
              height={20}
              priority
            />
          ) : (
            <Image
              src={resolvedTheme === 'dark' ? "/g61-small-wordmark-dark.svg" : "/g61-small-wordmark-light.svg"}
              alt="G61 Logo"
              width={24}
              height={24}
              priority
            />
          )}
        </div>
      </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Home">
                    <Link href="/">
                      <IconComponent name="Home" className="w-5 h-5" />
                      <span>Home</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Search">
                    <Link href="/search">
                      <IconComponent name="Search" className="w-5 h-5" />
                      <span>Search</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Notifications">
                    <Link href="/notifications">
                      <IconComponent name="Bell" className="w-5 h-5" />
                      <span>Notifications</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Content</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Analysis">
                    <Link href="/analysis">
                      <IconComponent name="BarChart2" className="w-5 h-5" />
                      <span>Analysis</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Setups">
                    <Link href="/setups">
                      <IconComponent name="Wrench" className="w-5 h-5" />
                      <span>Setups</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Ghosts">
                    <Link href="/ghosts">
                      <IconComponent name="Ghost" className="w-5 h-5" />
                      <span>Ghosts</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Teams">
                    <Link href="/teams">
                      <IconComponent name="Users" className="w-5 h-5" />
                      <span>Teams</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Streams">
                    <Link href="/streams">
                      <IconComponent name="Radio" className="w-5 h-5" />
                      <span>Streams</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Projects">
                        <IconComponent name="Folder" className="w-5 h-5" />
                        <span>Projects</span>
                        <IconComponent name="ChevronDown" className="w-5 h-5 ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <Link href="/projects/sample-project">Sample Project</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <Link href="/projects/new">
                              <IconComponent name="Plus" className="w-4 h-4 mr-2" />
                              New Project
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <ThemeToggle />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Account">
                    <Link href="/account">
                      <IconComponent name="User" className="w-5 h-5" />
                      <span>Account</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Settings">
                    <Link href="/settings">
                      <IconComponent name="Settings" className="w-5 h-5" />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Help">
                    <Link href="/help">
                      <IconComponent name="HelpCircle" className="w-5 h-5" />
                      <span>Help</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
    );
}