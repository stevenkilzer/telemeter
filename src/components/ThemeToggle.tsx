'use client'

import { useTheme } from "next-themes"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import { Sun, Moon } from "lucide-react"

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