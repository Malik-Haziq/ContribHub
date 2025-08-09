import { Search, Brain, Rocket } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: Search,
    title: "Connect Your GitHub",
    description: "Link your GitHub profile so we can understand your coding style, preferred languages, and experience level."
  },
  {
    icon: Brain,
    title: "AI Analyzes & Matches",
    description: "Our intelligent system scans thousands of open source issues and finds ones perfectly suited to your skills."
  },
  {
    icon: Rocket,
    title: "Start Contributing",
    description: "Get detailed explanations, setup guides, and mentorship to make your first (or next) contribution successfully."
  }
];

export const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      {/* Center Progress Line */}
      <div className="absolute left-1/2 top-32 bottom-32 w-px bg-border/30 transform -translate-x-1/2 hidden lg:block">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-accent to-primary"
          style={{ height: lineHeight }}
        />
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            From overwhelmed to contributing in three simple steps
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold shadow-glow">
                    {index + 1}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
              
              {/* Visual element */}
              <div className="flex-1 flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative"
                >
                  <div className="w-64 h-64 rounded-3xl glass-card flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-glow">
                    <step.icon className="w-16 h-16 text-primary" />
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/60 rounded-full" />
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};