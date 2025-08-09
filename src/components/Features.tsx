import { Target, BookOpen, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Target,
    title: "Smart Issue Matching",
    description: "AI analyzes your coding patterns, skills, and interests to suggest issues that are genuinely good fits for you."
  },
  {
    icon: BookOpen,
    title: "Guided Learning",
    description: "Each issue comes with explanations, context, and step-by-step guidance to help you understand and contribute successfully."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with mentors and fellow contributors. Never feel alone in your open source journey."
  },
  {
    icon: Shield,
    title: "Beginner Friendly",
    description: "Start with simple contributions and gradually take on more complex challenges as your confidence grows."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* SVG Feature Background */}
      <div className="absolute inset-0 svg-pattern">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Tech-inspired background */}
          <defs>
            <pattern id="circuit" patternUnits="userSpaceOnUse" width="80" height="80">
              <path d="M20,20 L60,20 L60,60 L20,60 Z" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" opacity="0.1"/>
              <circle cx="20" cy="20" r="2" fill="hsl(var(--accent))" opacity="0.15"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
          
          {/* Abstract feature connections */}
          <g opacity="0.1">
            <path d="M100,100 Q300,200 500,100 T900,100" stroke="hsl(var(--primary))" strokeWidth="2" fill="none"/>
            <path d="M150,600 Q350,500 550,600 T950,600" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none"/>
            <circle cx="300" cy="300" r="60" stroke="hsl(var(--primary-glow))" strokeWidth="1" fill="none"/>
            <circle cx="900" cy="400" r="80" stroke="hsl(var(--accent))" strokeWidth="0.8" fill="none"/>
          </g>
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
            Everything You Need to{" "}
            <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            We've built the tools and support system to make open source contribution 
            accessible, enjoyable, and rewarding.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Creative staggered layout */}
          <div className="grid gap-8">
            {/* First feature - full width */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-8 md:p-12 group transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300 shrink-0">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="heading-md mb-4 group-hover:text-primary transition-colors">
                    {features[0].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {features[0].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Second and third features - side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              {features.slice(1, 3).map((feature, index) => (
                <motion.div
                  key={index + 1}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glass-card rounded-3xl p-8 group transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:shadow-accent-glow transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Fourth feature - offset layout */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card rounded-3xl p-8 md:p-12 group transition-all duration-500 hover:scale-[1.02] md:ml-16"
            >
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300 shrink-0">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <div className="text-center md:text-right">
                  <h3 className="heading-md mb-4 group-hover:text-primary transition-colors">
                    {features[3].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {features[3].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};