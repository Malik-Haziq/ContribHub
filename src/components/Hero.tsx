import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration.png";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Enhanced floating elements */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl float" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-accent/15 rounded-full blur-3xl float-delayed" />
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl float-slow" />
      <div className="absolute top-60 right-10 w-20 h-20 bg-accent/25 rounded-full blur-xl float" />
      
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
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-light"
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
          
          {/* Hero image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          >
            <div className="relative max-w-5xl mx-auto">
              <img 
                src={heroIllustration} 
                alt="Developers collaborating on open source projects"
                className="w-full h-auto rounded-3xl shadow-medium hover:shadow-glow transition-all duration-700 border border-border/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};