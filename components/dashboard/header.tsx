"use client"

import { UserButton } from "@clerk/nextjs"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border/50 bg-background/80 px-4 md:px-6 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="hover:bg-muted/50 transition-colors" />
      </div>

      <div className="flex items-center gap-4">
        <UserButton 
          appearance={{
            elements: { 
              avatarBox: "w-9 h-9 ring-2 ring-primary/10 hover:ring-primary/30 transition-all",
              userButtonPopoverCard: "bg-card border-border shadow-lg" 
            }
          }}
        />
      </div>
    </header>
  )
}
