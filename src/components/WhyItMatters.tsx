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
      {/* Enhanced background elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/15 rounded-full blur-3xl float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl float-delayed" />
      <div className="absolute top-60 right-40 w-20 h-20 bg-primary-glow/25 rounded-full blur-xl float-slow" />
      
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
                <div className="glass-card rounded-3xl p-8 transition-all duration-500 hover:scale-105">
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