import { Search, Brain, Rocket } from "lucide-react";

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
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From overwhelmed to contributing in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-4" />
              )}
              
              <div className="text-center group">
                {/* Icon container */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-soft mb-6 group-hover:shadow-medium transition-smooth">
                  <step.icon className="w-8 h-8 text-primary" />
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-soft">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};