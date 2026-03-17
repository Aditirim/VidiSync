"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Video, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/80 border-b border-border/40"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:scale-105 transition-transform">
          <Video className="w-5 h-5" />
        </div>
        <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">VidiSync</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
        <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it Works</Link>
        <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Log in
        </Link>
        <Button className="rounded-full shadow-lg hover:shadow-primary/25 transition-all">Get Started</Button>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="hover:bg-muted/50 rounded-full" />
            }
          >
            <Menu className="w-5 h-5" />
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-6 pt-16 border-border/40">
            <Link href="#features" className="text-lg font-medium text-foreground">Features</Link>
            <Link href="#how-it-works" className="text-lg font-medium text-foreground">How it Works</Link>
            <Link href="#pricing" className="text-lg font-medium text-foreground">Pricing</Link>
            <hr className="border-border/40" />
            <Link href="/login" className="text-lg font-medium text-muted-foreground hover:text-foreground">Log in</Link>
            <Button size="lg" className="rounded-full w-full">Get Started Free</Button>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
