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
      {/* Creative SVG Background */}
      <div className="absolute inset-0 opacity-6">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" fill="none">
          <defs>
            <pattern id="knowledge-tree" patternUnits="userSpaceOnUse" width="80" height="80">
              <g opacity="0.4">
                <circle cx="40" cy="60" r="1.5" fill="hsl(var(--primary))"/>
                <path d="M40,60 L40,40 M40,40 L30,25 M40,40 L50,25 M30,25 L25,15 M30,25 L35,15 M50,25 L45,15 M50,25 L55,15" 
                      stroke="hsl(var(--primary))" strokeWidth="0.6" fill="none"/>
                <circle cx="25" cy="15" r="0.8" fill="hsl(var(--accent))"/>
                <circle cx="35" cy="15" r="0.8" fill="hsl(var(--accent))"/>
                <circle cx="45" cy="15" r="0.8" fill="hsl(var(--accent))"/>
                <circle cx="55" cy="15" r="0.8" fill="hsl(var(--accent))"/>
              </g>
            </pattern>
            <pattern id="info-flow" patternUnits="userSpaceOnUse" width="100" height="50">
              <path d="M0,25 Q25,10 50,25 T100,25" stroke="hsl(var(--accent))" strokeWidth="0.5" fill="none" opacity="0.2"/>
              <circle cx="20" cy="25" r="1" fill="hsl(var(--primary))" opacity="0.3"/>
              <circle cx="80" cy="25" r="1" fill="hsl(var(--primary))" opacity="0.3"/>
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#knowledge-tree)"/>
          <rect width="100%" height="100%" fill="url(#info-flow)"/>
          
          {/* Information pathways */}
          <g opacity="0.06">
            <path d="M100,100 Q300,50 500,100 T900,100 Q1050,80 1200,100" 
                  stroke="hsl(var(--primary))" strokeWidth="2" fill="none"/>
            <path d="M0,400 Q200,350 400,400 T800,400 Q950,380 1100,400" 
                  stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none"/>
            
            {/* Knowledge nodes */}
            <circle cx="300" cy="50" r="3" fill="hsl(var(--primary))" opacity="0.5"/>
            <circle cx="700" cy="100" r="2.5" fill="hsl(var(--accent))" opacity="0.4"/>
            <circle cx="500" cy="400" r="3" fill="hsl(var(--primary))" opacity="0.4"/>
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
                className="glass-card rounded-2xl overflow-hidden hover:scale-[1.01] hover:shadow-soft transition-all duration-300 border border-border/30"
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