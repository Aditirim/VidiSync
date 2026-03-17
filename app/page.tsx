import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Footer } from "@/components/landing/footer";

export const metadata = {
  title: "VidiSync - AI Short Video Generator & Auto-Scheduler",
  description: "Turn ideas into viral short videos in seconds using AI. Auto-schedule directly to YouTube Shorts, Instagram Reels, TikTok, and via Email.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}
