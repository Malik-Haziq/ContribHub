import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl float-delayed" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary-glow/15 rounded-full blur-xl float" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-soft">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Open Source Discovery
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Find Your Perfect{" "}
            <span className="text-gradient">
              Open Source
            </span>{" "}
            Contribution
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop feeling overwhelmed by GitHub. Our AI understands your skills and matches you with 
            meaningful issues you can actually solve. Start contributing to open source with confidence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" size="lg">
              See How It Works
            </Button>
          </div>
          
          {/* Hero image */}
          <div className="mt-16 relative">
            <div className="relative max-w-4xl mx-auto">
              <img 
                src={heroIllustration} 
                alt="Developers collaborating on open source projects"
                className="w-full h-auto rounded-2xl shadow-medium hover:shadow-glow transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};