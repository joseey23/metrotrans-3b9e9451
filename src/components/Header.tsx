import { useState } from "react";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import metrotransLogo from "@/assets/metrotrans-logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm">
      {/* Top info bar */}
      <div className="hidden md:block border-b border-sidebar-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-hero-text/80">
            <div className="flex items-center gap-6">
              <a href="tel:+12159803355" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>(215) 980-3355</span>
              </a>
              <a href="mailto:info@metrotrans.org" className="flex items-center gap-2 hover:text-primary transition-colors">
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
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={metrotransLogo} 
              alt="MetroTrans - Non Emergency Medical Transportation" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-hero-text/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-hero-text hover:bg-hero-text/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-hero border-sidebar-border">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <img 
                      src={metrotransLogo} 
                      alt="MetroTrans" 
                      className="h-10 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={handleNavClick}
                      className="text-hero-text/80 hover:text-primary transition-colors font-medium text-lg py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a 
                    href="#book"
                    onClick={handleNavClick}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all text-center mt-4"
                  >
                    Book a Ride
                  </a>
                </div>
              </SheetContent>
            </Sheet>

            {/* Book a Ride CTA */}
            <a 
              href="#book" 
              className="hidden sm:block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Book a Ride
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
