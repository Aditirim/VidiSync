"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { PlaySquare, LayoutDashboard, FileText, CreditCard, Settings, Plus, Zap, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Series", href: "/dashboard", icon: LayoutDashboard },
  { name: "Videos", href: "/dashboard/videos", icon: PlaySquare },
  { name: "Guides", href: "/dashboard/guides", icon: FileText },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { setOpenMobile } = useSidebar()

  return (
    <Sidebar className="border-r border-border bg-card">
      <SidebarHeader className="px-6 py-5 border-b border-border/50">
        <Link 
          href="/dashboard" 
          onClick={() => setOpenMobile(false)}
          className="flex items-center gap-3 mb-6 transition-opacity hover:opacity-80"
        >
          <div className="relative w-8 h-8 rounded shrink-0 overflow-hidden bg-primary/10 flex items-center justify-center">
            {/* Fallback styling in case Logo is missing from public folder */}
            <Image 
              src="/logo.png" 
              alt="VidiSync Logo" 
              fill 
              className="object-contain" 
              sizes="32px"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground truncate">VidiSync</span>
        </Link>

        <Button className="w-full justify-start gap-2 h-11 text-base font-semibold shadow-sm transition-all hover:shadow-md hover:scale-[1.02]">
          <Plus className="w-5 h-5 shrink-0" />
          <span className="truncate">Create New Series</span>
        </Button>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarMenu className="gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`) && item.href !== "/dashboard";
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton 
                  render={
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 shrink-0" />
                      <span className="text-base font-medium truncate">{item.name}</span>
                    </Link>
                  }
                  isActive={isActive} 
                  tooltip={item.name}
                  onClick={() => setOpenMobile(false)}
                  className="h-12 px-3 transition-colors hover:bg-muted"
                />
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/50">
        <div className="flex flex-col gap-3">
          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 dark:from-indigo-950/30 dark:to-purple-950/30 dark:border-indigo-900/50">
            <h4 className="font-semibold text-sm mb-1 text-indigo-900 dark:text-indigo-200">Upgrade to Pro</h4>
            <p className="text-xs text-indigo-700/80 dark:text-indigo-300/80 mb-3 leading-tight">Unlock 4K exports and unlimited scheduling.</p>
            <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-transform hover:scale-105">
              <Zap className="w-4 h-4 mr-2 shrink-0" />
              Upgrade
            </Button>
          </div>
          
          <Link href="/dashboard/settings" onClick={() => setOpenMobile(false)}>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer text-muted-foreground hover:text-foreground">
              <User className="w-5 h-5 shrink-0" />
              <span className="text-sm font-medium truncate">Profile Settings</span>
            </div>
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
