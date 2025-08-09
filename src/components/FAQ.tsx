import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does the AI matching actually work?",
    answer: "Our AI analyzes your GitHub activity, coding patterns, preferred languages, and past contributions to understand your skill level and interests. It then matches you with issues that align with your abilities and learning goals."
  },
  {
    question: "Is this really free?",
    answer: "Yes! Our core matching service is completely free. We believe everyone should have access to meaningful open source opportunities. Premium features like advanced mentorship and priority matching will be available later."
  },
  {
    question: "What if I'm a complete beginner?",
    answer: "Perfect! We specialize in helping beginners get started. We'll match you with 'good first issue' labeled problems and provide extra guidance and explanations to help you make your first contribution successfully."
  },
  {
    question: "How much time commitment is expected?",
    answer: "It's completely up to you. Some issues can be resolved in an hour, others might take a weekend. We'll clearly indicate the expected time commitment for each issue so you can choose what fits your schedule."
  },
  {
    question: "What programming languages are supported?",
    answer: "We support all major programming languages including JavaScript, Python, Java, C++, Go, Rust, and many more. Our AI can match you with issues regardless of the language or technology stack."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      {/* Question marks and help theme SVG */}
      <div className="absolute inset-0 svg-pattern">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" fill="none">
          <defs>
            <pattern id="help-pattern" patternUnits="userSpaceOnUse" width="120" height="120">
              <path d="M60,30 Q45,15 30,30 Q30,45 45,45 Q60,45 60,60" 
                    stroke="hsl(var(--primary))" strokeWidth="0.8" fill="none" opacity="0.06"/>
              <circle cx="60" cy="75" r="1.5" fill="hsl(var(--primary))" opacity="0.08"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#help-pattern)" />
          
          {/* Abstract conversation bubbles */}
          <g opacity="0.08">
            <ellipse cx="200" cy="150" rx="60" ry="40" stroke="hsl(var(--accent))" strokeWidth="1" fill="none"/>
            <ellipse cx="800" cy="300" rx="80" ry="50" stroke="hsl(var(--primary))" strokeWidth="1" fill="none"/>
            <ellipse cx="1000" cy="450" rx="70" ry="35" stroke="hsl(var(--primary-glow))" strokeWidth="1" fill="none"/>
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Everything you need to know about getting started
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden hover:scale-[1.01] transition-all duration-300 border border-border/30"
              >
                <button
                  className="w-full px-8 py-8 text-left flex items-center justify-between hover:bg-muted/30 transition-all duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-8"
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};