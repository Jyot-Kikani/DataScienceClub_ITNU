import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import logo from './Logo.jpg';

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:contact@nirmaDS.edu", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-background text-foreground transition-colors duration-700 relative overflow-hidden">
      {/* Subtle green background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-green-800 opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              {/* Logo Image */}
              <img
                src={logo}
                alt="Data Science Club Logo"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="font-bold text-base">Data Science Club</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Empowering students to explore the world of data science, AI, and machine learning.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-sm">Quick Links</h3>
            <div className="space-y-1">
              <Link to="/about" className="block text-xs text-muted-foreground hover:text-green-500 transition-colors">
                About Us
              </Link>
              <Link to="/events" className="block text-xs text-muted-foreground hover:text-green-500 transition-colors">
                Events
              </Link>
              <Link to="/team" className="block text-xs text-muted-foreground hover:text-green-500 transition-colors">
                Team
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-sm">Resources</h3>
            <div className="space-y-1">
              <Link to="/resources" className="block text-xs text-muted-foreground hover:text-green-500 transition-colors">
                Learning Paths
              </Link>
              <Link to="/resources" className="block text-xs text-muted-foreground hover:text-green-500 transition-colors">
                Tools & Libraries
              </Link>
              <Link to="/resources" className="block text-xs text-muted-foreground hover:text-green-500 transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-sm">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-green-900/10 text-green-500 flex items-center justify-center group relative overflow-hidden transition-all duration-300 hover:text-green-50 hover:bg-green-900/20"
                >
                  <social.icon className="h-4 w-4 z-10 relative" />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-green-800 opacity-0 group-hover:opacity-20 transition-opacity rounded-full pointer-events-none"></div>
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Nirma University
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Nirma Data Science Club. All rights reserved. Made with <span className="text-red-500">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
