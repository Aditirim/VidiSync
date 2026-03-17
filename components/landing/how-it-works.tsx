"use client";

import { motion } from "framer-motion";
import { Edit3, Cpu, CalendarClock } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Give a Prompt",
      description: "Describe the video you want. Type in a topic, paste a blog URL, or let our AI brainstorm for you. Specify tone, length, and style.",
      icon: <Edit3 className="w-8 h-8" />,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500"
    },
    {
      title: "AI Generates Content",
      description: "VidiSync automatically writes a script, generates lifelike AI voiceovers, sources relevant b-roll footage, and adds dynamic captions.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-500"
    },
    {
      title: "Review & Schedule",
      description: "Tweak the generated video in our editor if needed. Then, select your platforms, pick a time, and VidiSync auto-posts it for you.",
      icon: <CalendarClock className="w-8 h-8" />,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            How it{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
              Works
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            From idea to published across all your platforms in three simple steps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-emerald-500/30 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} border ${step.borderColor} mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className={`${step.iconColor}`}>
                  {step.icon}
                </div>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-sm mb-6 shadow-sm z-10 relative md:-mt-16 md:mb-12">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
