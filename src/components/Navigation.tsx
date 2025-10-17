import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import logo from './Logo.jpg';

export const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: Logo + Name */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-2xl overflow-hidden">
                <img 
                  src={logo} 
                  alt="Data Science Club Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-2xl sm:text-2xl hidden sm:inline-block">
                Data Science Club
              </span>
            </Link>

            {/* Center: Navigation */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-base sm:text-lg font-medium text-center transition-all ${
                    isActive(item.path)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right: Theme toggle + Mobile Menu */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                <Sun className="h-5 w-5 sm:h-6 sm:w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 sm:h-6 sm:w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg text-base sm:text-lg font-medium text-center transition-all ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Fade gradient overlay */}
      <div 
        className="fixed top-[4rem] w-full h-6 pointer-events-none z-30 bg-gradient-to-b from-background/80 via-background/50 to-transparent" 
      />
    </div>
  );
};