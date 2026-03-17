"use client";

import { motion } from "framer-motion";
import { Video, CalendarCheck, Share2, Mail, Zap, Smartphone } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "AI Video Generation",
      description: "Convert text prompts, blog posts, or ideas into engaging short videos with AI voices, captions, and b-roll footage.",
      icon: <Video className="w-6 h-6 text-primary" />
    },
    {
      title: "Auto-Scheduling",
      description: "Set your schedule once and let VidiSync automatically post your generated content at peak engagement times.",
      icon: <CalendarCheck className="w-6 h-6 text-primary" />
    },
    {
      title: "Multi-Platform Export",
      description: "Optimized aspect ratios and lengths for YouTube Shorts, Instagram Reels, and TikTok automatically.",
      icon: <Share2 className="w-6 h-6 text-primary" />
    },
    {
      title: "Email Campaigns",
      description: "Embed generated videos directly into automated email newsletters to engage your subscribers.",
      icon: <Mail className="w-6 h-6 text-primary" />
    },
    {
      title: "Lightning Fast",
      description: "Generate a complete 60-second video with transitions and captions in less than 2 minutes.",
      icon: <Zap className="w-6 h-6 text-primary" />
    },
    {
      title: "Mobile First Design",
      description: "Manage your content calendar and review generated videos on-the-go with our responsive app.",
      icon: <Smartphone className="w-6 h-6 text-primary" />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section id="features" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Everything you need to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              go viral.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            VidiSync combines powerful AI generation with smart publishing tools to completely automate your social media strategy.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="p-8 rounded-2xl border border-border/40 bg-card hover:bg-card/60 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
