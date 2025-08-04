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
    <section id="features" className="py-32 relative">
      {/* Background decorations */}
      <div className="absolute top-32 right-20 w-24 h-24 bg-primary/20 rounded-full blur-2xl float" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/15 rounded-full blur-3xl float-delayed" />
      
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            We've built the tools and support system to make open source contribution 
            accessible, enjoyable, and rewarding.
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          {/* Creative layout - alternating cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="card-gradient rounded-3xl p-8 interactive-card group relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
                
                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {features.slice(2, 4).map((feature, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index + 2) * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="card-gradient rounded-3xl p-8 interactive-card group relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-full transform -translate-x-12 translate-y-12" />
                
                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:shadow-accent-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};