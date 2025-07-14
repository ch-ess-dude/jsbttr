import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Explore Tools", href: "/explore-tools" },
  { label: "Solutions", href: "/solutions" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              Just Better
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 group"
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              className="text-foreground/80 hover:text-foreground"
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-b border-border shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-3 py-2 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground/80 hover:text-foreground"
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
