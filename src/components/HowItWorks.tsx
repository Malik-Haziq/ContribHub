import { Search, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* SVG Background Pattern */}
      <div className="absolute inset-0 svg-pattern">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" fill="none">
          <defs>
            <pattern id="workflow-grid" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M0,50 L100,50 M50,0 L50,100" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#workflow-grid)" />
          
          {/* Process flow visualization */}
          <g opacity="0.15">
            <circle cx="200" cy="200" r="40" stroke="hsl(var(--primary))" strokeWidth="1" fill="none"/>
            <circle cx="600" cy="200" r="40" stroke="hsl(var(--accent))" strokeWidth="1" fill="none"/>
            <circle cx="1000" cy="200" r="40" stroke="hsl(var(--primary-glow))" strokeWidth="1" fill="none"/>
            
            <path d="M240,200 Q420,150 560,200" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" markerEnd="url(#arrowhead)"/>
            <path d="M640,200 Q820,150 960,200" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" markerEnd="url(#arrowhead)"/>
          </g>
          
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--primary))" opacity="0.3"/>
            </marker>
          </defs>
        </svg>
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
                  <div className="w-64 h-64 rounded-3xl glass-card flex items-center justify-center transition-all duration-500 hover:scale-105">
                    <step.icon className="w-16 h-16 text-primary" />
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60" />
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-40" />
                  </div>
                  
                  {/* Connector line for larger screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-20 w-16 h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};