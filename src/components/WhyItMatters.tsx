import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Heart,
    stat: "87%",
    label: "More Confident",
    description: "of developers feel more confident contributing after using our platform"
  },
  {
    icon: TrendingUp,
    stat: "3x",
    label: "Career Growth",
    description: "faster career progression for developers with open source contributions"
  },
  {
    icon: Code2,
    stat: "500+",
    label: "Projects Supported",
    description: "open source projects actively looking for contributors like you"
  }
];

export const WhyItMatters = () => {
  return (
    <section id="why-it-matters" className="py-32 relative overflow-hidden">
      {/* Creative SVG Background */}
      <div className="absolute inset-0 opacity-8">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" fill="none">
          <defs>
            <pattern id="molecule" patternUnits="userSpaceOnUse" width="90" height="90">
              <g opacity="0.3">
                <circle cx="45" cy="45" r="2" fill="hsl(var(--primary))"/>
                <circle cx="20" cy="25" r="1.5" fill="hsl(var(--accent))"/>
                <circle cx="70" cy="25" r="1.5" fill="hsl(var(--accent))"/>
                <circle cx="20" cy="65" r="1.5" fill="hsl(var(--primary))"/>
                <circle cx="70" cy="65" r="1.5" fill="hsl(var(--primary))"/>
                <path d="M45,45 L20,25 M45,45 L70,25 M45,45 L20,65 M45,45 L70,65" 
                      stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.4"/>
              </g>
            </pattern>
            <pattern id="flow" patternUnits="userSpaceOnUse" width="120" height="60">
              <path d="M0,30 Q30,10 60,30 T120,30" stroke="hsl(var(--accent))" strokeWidth="0.8" fill="none" opacity="0.2"/>
              <path d="M0,40 Q40,20 80,40 T120,40" stroke="hsl(var(--primary))" strokeWidth="0.6" fill="none" opacity="0.15"/>
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#molecule)"/>
          <rect width="100%" height="100%" fill="url(#flow)"/>
          
          {/* Growth visualization */}
          <g opacity="0.08">
            <path d="M100,500 Q300,400 500,350 T900,250 Q1050,200 1200,180" 
                  stroke="hsl(var(--primary))" strokeWidth="3" fill="none"/>
            <path d="M0,450 Q200,380 400,320 T800,220 Q950,170 1100,150" 
                  stroke="hsl(var(--accent))" strokeWidth="2" fill="none"/>
            
            {/* Progress indicators */}
            <circle cx="300" cy="400" r="4" fill="hsl(var(--primary))" opacity="0.6"/>
            <circle cx="700" cy="280" r="3" fill="hsl(var(--accent))" opacity="0.5"/>
            <circle cx="1050" cy="200" r="3" fill="hsl(var(--primary))" opacity="0.4"/>
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="heading-lg mb-8">
              Your Open Source Journey{" "}
              <span className="text-gradient">Starts Here</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-16 leading-relaxed font-light max-w-4xl mx-auto">
              Open source isn't just about code—it's about growth, community, and making an impact. 
              We believe every developer deserves to experience the joy of contributing to something bigger than themselves.
            </p>
          </motion.div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="glass-card rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-accent-glow">
                  <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <benefit.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-3">
                    {benefit.stat}
                  </div>
                  <div className="font-semibold text-lg mb-3">
                    {benefit.label}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Testimonial */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-8 leading-relaxed font-light">
                "I always wanted to contribute to open source but didn't know where to start. 
                ContribHub not only found me the perfect issues but gave me the confidence to actually contribute. 
                Now I'm a regular contributor to three different projects!"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent shadow-glow"></div>
                <div className="text-left">
                  <div className="font-bold text-lg">Sarah Chen</div>
                  <div className="text-muted-foreground">Frontend Developer</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="waitlist"
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground font-light">
              Ready to transform your development journey?
            </p>
            <Button variant="hero" size="lg" className="group shadow-glow">
              Join the Waitlist - It's Free
            </Button>
            <p className="text-muted-foreground">
              ✨ Early access • No spam • Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};