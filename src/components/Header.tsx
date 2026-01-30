import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm">
      {/* Top info bar */}
      <div className="border-b border-sidebar-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-hero-text/80">
            <div className="flex items-center gap-6">
              <a href="tel:+13025551234" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>(302) 555-1234</span>
              </a>
              <a href="mailto:info@metrotrans.com" className="hidden sm:flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@metrotrans.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-hero-text/60">
              <MapPin className="h-4 w-4" />
              <span>Serving All of Delaware</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <div className="ml-2">
                <span className="text-xl font-bold text-hero-text">MetroTrans</span>
                <span className="hidden sm:block text-xs text-hero-text/60 -mt-1">Non-Emergency Medical Transportation</span>
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-hero-text/80 hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#how-it-works" className="text-hero-text/80 hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#about" className="text-hero-text/80 hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-hero-text/80 hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <Link 
              to="/admin" 
              className="text-hero-text/60 hover:text-hero-text/80 transition-colors text-sm"
            >
              Admin
            </Link>
          </div>
          
          <a 
            href="#book" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Book a Ride
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
