import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import metrotransLogo from "@/assets/metrotrans-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm">
      {/* Top info bar */}
      <div className="border-b border-sidebar-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-hero-text/80">
            <div className="flex items-center gap-6">
              <a href="tel:+12159803355" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>(215) 980-3355</span>
              </a>
              <a href="mailto:info@metrotrans.org" className="hidden sm:flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@metrotrans.org</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-hero-text/60">
              <MapPin className="h-4 w-4" />
              <span>Newtown Square, PA 19073</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={metrotransLogo} 
              alt="MetroTrans - Non Emergency Medical Transportation" 
              className="h-12 w-auto"
            />
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
