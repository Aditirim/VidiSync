"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Play, ArrowRight } from "lucide-react";
import { SignInButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

export function Hero() {
  const { userId } = useAuth();

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-indigo-500/10 rounded-full blur-[128px] -z-10 pointer-events-none" />

      <div className="container mx-auto flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-purple-500/30 text-sm font-medium mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.15)]"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-foreground">Introducing AI Auto-Scheduling</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mb-6"
        >
          Turn Ideas into Viral Videos in{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x italic">
            Seconds.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          Generate high-quality short videos using AI. Auto-schedule directly to YouTube Shorts, Instagram Reels, TikTok, and via Email. Zero editing skills required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {!userId ? (
            <SignInButton mode="modal" forceRedirectUrl="/dashboard" signUpForceRedirectUrl="/dashboard">
              <Button size="lg" className="h-14 px-8 text-base rounded-full w-full sm:w-auto shadow-xl shadow-primary/25 hover:scale-105 transition-all group">
                Start Generating Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </SignInButton>
          ) : (
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="h-14 px-8 text-base rounded-full w-full sm:w-auto shadow-xl shadow-primary/25 hover:scale-105 transition-all group">
                Go to Dashboard
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
          <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full w-full sm:w-auto backdrop-blur-sm border-border/50 hover:bg-muted/50">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 100 }}
          className="w-full max-w-5xl mt-20 relative perspective-[2000px]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20 h-full w-full pointer-events-none" />
          <div className="relative rounded-2xl border border-border/40 bg-card/40 backdrop-blur-xl shadow-2xl overflow-hidden transform-gpu rotate-x-[5deg] scale-95 origin-bottom ring-1 ring-white/10">
            <div className="h-12 border-b border-border/40 bg-muted/30 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            {/* Mockup Content */}
            <div className="aspect-[16/9] bg-gradient-to-br from-zinc-900 to-black p-8 flex items-center justify-center">
               <div className="relative w-full max-w-3xl h-64 bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex flex-col items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                  <VideoGenerationAnimation />
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function VideoGenerationAnimation() {
  return (
    <div className="flex flex-col items-center gap-4 z-10 w-full px-12">
      <div className="w-full h-8 bg-zinc-900 rounded-md border border-zinc-700 flex items-center px-4">
        <span className="text-zinc-500 font-mono text-sm">/prompt generate a cyberpunk city tour short</span>
      </div>
      <div className="flex justify-between w-full mt-4">
         <div className="w-24 h-32 rounded bg-zinc-700 animate-pulse delay-75" />
         <div className="w-24 h-32 rounded bg-zinc-700 animate-pulse delay-150" />
         <div className="w-24 h-32 rounded bg-zinc-700 animate-pulse delay-300" />
         <div className="w-24 h-32 rounded bg-zinc-700 animate-pulse delay-500" />
         <div className="w-24 h-32 rounded bg-zinc-700 animate-pulse delay-700" />
      </div>
    </div>
  )
}
