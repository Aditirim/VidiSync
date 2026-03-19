"use client"

import { useEffect } from "react"

export function ForceLightMode() {
  useEffect(() => {
    // Force light mode by removing the dark class added to the HTML root
    document.documentElement.classList.remove("dark")
    
    // Cleanup: restore dark mode when navigating back to landing page
    return () => {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return null
}
