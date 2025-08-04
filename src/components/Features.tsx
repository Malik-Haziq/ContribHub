import { Target, BookOpen, Users, Shield } from "lucide-react";

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
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've built the tools and support system to make open source contribution 
            accessible, enjoyable, and rewarding.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-gradient rounded-2xl p-6 hover:scale-105 transition-smooth group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};