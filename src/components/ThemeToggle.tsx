'use client'

import { useTheme } from "next-themes"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import dynamic from 'next/dynamic'

const Sun = dynamic(() => import('lucide-react').then((mod) => mod.Sun), { ssr: false });
const Moon = dynamic(() => import('lucide-react').then((mod) => mod.Moon), { ssr: false });

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <SidebarMenuButton
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      tooltip={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
      <span>Theme</span>
    </SidebarMenuButton>
  )
}