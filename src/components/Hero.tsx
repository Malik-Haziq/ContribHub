import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Creative SVG Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="topographic" patternUnits="userSpaceOnUse" width="120" height="120">
              <path d="M0,60 Q30,30 60,60 T120,60" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" opacity="0.4"/>
              <path d="M0,80 Q30,50 60,80 T120,80" stroke="hsl(var(--primary))" strokeWidth="0.3" fill="none" opacity="0.3"/>
              <path d="M0,100 Q30,70 60,100 T120,100" stroke="hsl(var(--accent))" strokeWidth="0.3" fill="none" opacity="0.2"/>
            </pattern>
            <pattern id="dots" patternUnits="userSpaceOnUse" width="60" height="60">
              <circle cx="30" cy="30" r="1" fill="hsl(var(--primary))" opacity="0.3"/>
              <circle cx="10" cy="10" r="0.5" fill="hsl(var(--accent))" opacity="0.2"/>
              <circle cx="50" cy="50" r="0.5" fill="hsl(var(--primary))" opacity="0.2"/>
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#topographic)"/>
          <rect width="100%" height="100%" fill="url(#dots)"/>
          
          {/* Flowing organic shapes */}
          <path d="M0,200 Q200,100 400,200 T800,200 Q1000,150 1200,200 L1200,0 L0,0 Z" 
                fill="hsl(var(--primary))" opacity="0.02"/>
          <path d="M0,350 Q300,250 600,350 T1200,350 L1200,800 L0,800 Z" 
                fill="hsl(var(--accent))" opacity="0.015"/>
          
          {/* Abstract connection nodes */}
          <g opacity="0.3">
            <circle cx="200" cy="150" r="2" fill="hsl(var(--primary))"/>
            <circle cx="600" cy="300" r="1.5" fill="hsl(var(--accent))"/>
            <circle cx="1000" cy="200" r="2" fill="hsl(var(--primary))"/>
            <path d="M200,150 Q400,100 600,300" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" opacity="0.4"/>
            <path d="M600,300 Q800,250 1000,200" stroke="hsl(var(--accent))" strokeWidth="0.5" fill="none" opacity="0.3"/>
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-xl border border-border rounded-full px-5 py-2 mb-8 shadow-soft"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Open Source Discovery
            </span>
          </motion.div>
          
          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="heading-xl mb-8"
          >
            Find Your Perfect{" "}
            <span className="text-gradient">
              Open Source
            </span>{" "}
            Contribution
          </motion.h1>
          
          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Stop feeling overwhelmed by GitHub. Our AI understands your skills and matches you with 
            meaningful issues you can actually solve. Start contributing to open source with confidence.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button variant="hero" size="lg" className="group shadow-glow">
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" size="lg" className="border border-border hover:border-primary/50">
              See How It Works
            </Button>
          </motion.div>
          
          {/* Abstract visual elements */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          >
            <div className="relative max-w-4xl mx-auto h-64 md:h-80">
              {/* Abstract line patterns */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none">
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                <path d="M0,150 Q100,50 200,150 T400,150" stroke="url(#line-gradient)" strokeWidth="2" fill="none"/>
                <path d="M0,180 Q150,80 300,180 T400,180" stroke="url(#line-gradient)" strokeWidth="1.5" fill="none" opacity="0.7"/>
                <path d="M50,120 Q200,20 350,120 T400,120" stroke="url(#line-gradient)" strokeWidth="1" fill="none" opacity="0.5"/>
                <circle cx="100" cy="150" r="3" fill="hsl(var(--primary))" opacity="0.8"/>
                <circle cx="300" cy="150" r="2" fill="hsl(var(--accent))" opacity="0.6"/>
                <circle cx="200" cy="120" r="1.5" fill="hsl(var(--primary-glow))" opacity="0.7"/>
              </svg>
              
              {/* Glassmorphism card overlay */}
              <div className="absolute inset-0 glass-card rounded-3xl p-8 md:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};