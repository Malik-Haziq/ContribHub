import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Creative SVG Background */}
      <div className="absolute inset-0 svg-pattern">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Abstract geometric patterns */}
          <defs>
            <pattern id="dots" patternUnits="userSpaceOnUse" width="50" height="50">
              <circle cx="25" cy="25" r="1" fill="hsl(var(--primary))" opacity="0.1"/>
            </pattern>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          
          {/* Grid pattern */}
          <rect width="100%" height="100%" fill="url(#dots)" />
          
          {/* Floating geometric shapes */}
          <circle cx="100" cy="150" r="80" stroke="url(#lineGradient)" strokeWidth="1" fill="none" opacity="0.3"/>
          <circle cx="1000" cy="200" r="120" stroke="hsl(var(--accent))" strokeWidth="0.5" fill="none" opacity="0.2"/>
          <path d="M200,300 Q400,200 600,300 T1000,300" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.15"/>
          <path d="M0,500 Q300,400 600,500 T1200,500" stroke="hsl(var(--accent))" strokeWidth="0.5" fill="none" opacity="0.1"/>
          
          {/* Abstract nodes */}
          <g opacity="0.2">
            <circle cx="300" cy="100" r="2" fill="hsl(var(--primary))"/>
            <circle cx="800" cy="150" r="1.5" fill="hsl(var(--accent))"/>
            <circle cx="500" cy="600" r="2.5" fill="hsl(var(--primary-glow))"/>
            <circle cx="900" cy="650" r="1" fill="hsl(var(--accent))"/>
            
            {/* Connecting lines */}
            <line x1="300" y1="100" x2="800" y2="150" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3"/>
            <line x1="500" y1="600" x2="900" y2="650" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2"/>
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
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Join thousands of developers finding their perfect first contribution
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};