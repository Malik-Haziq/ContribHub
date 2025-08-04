import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Code2 } from "lucide-react";

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
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-primary-glow/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Open Source Journey{" "}
            <span className="text-gradient">Starts Here</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Open source isn't just about code—it's about growth, community, and making an impact. 
            We believe every developer deserves to experience the joy of contributing to something bigger than themselves.
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center mx-auto mb-4 group-hover:shadow-medium transition-smooth">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {benefit.stat}
                </div>
                <div className="font-semibold mb-2">
                  {benefit.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Emotional copy */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-medium mb-12">
            <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-6">
              "I always wanted to contribute to open source but didn't know where to start. 
              ContribHub not only found me the perfect issues but gave me the confidence to actually contribute. 
              Now I'm a regular contributor to three different projects!"
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-glow"></div>
              <div className="text-left">
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">Frontend Developer</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Ready to transform your development journey?
            </p>
            <Button variant="hero" size="lg" className="group">
              Join the Waitlist - It's Free
            </Button>
            <p className="text-sm text-muted-foreground">
              ✨ Early access • No spam • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};