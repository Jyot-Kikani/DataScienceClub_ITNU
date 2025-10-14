import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:contact@nirmaDS.edu", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                DS
              </div>
              <span className="font-bold text-lg">Data Science Club</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering students to explore the world of data science, AI, and machine learning.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/events" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
              <Link to="/team" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Team
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link to="/resources" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Learning Paths
              </Link>
              <Link to="/resources" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Tools & Libraries
              </Link>
              <Link to="/resources" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Nirma University
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nirma Data Science Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
