import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary/50 to-accent/20 py-16">
      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-medium max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Contributing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of developers who've found their perfect open source match.
            </p>
            <Button variant="hero" size="lg" className="mb-4">
              Join the Waitlist
            </Button>
            <p className="text-sm text-muted-foreground">
              Be among the first to experience AI-powered open source discovery
            </p>
          </div>
        </div>
        
        {/* Footer content */}
        <div className="border-t border-border/50 pt-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h4 className="text-2xl font-bold mb-4">
                <span className="text-gradient">ContribHub</span>
              </h4>
              <p className="text-muted-foreground mb-6 max-w-md">
                Making open source contribution accessible, enjoyable, and rewarding for developers at every level.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* Product */}
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">How it Works</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Roadmap</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Terms</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 ContribHub. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the open source community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};