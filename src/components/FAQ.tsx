import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about getting started
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-smooth"
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-smooth"
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
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};