import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import metrotransLogo from "@/assets/metrotrans-logo.png";

const Footer = () => {
  return (
    <footer className="bg-hero text-hero-text">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src={metrotransLogo} 
                alt="MetroTrans - Non Emergency Medical Transportation" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-hero-text/70 mb-6">
              Providing safe, reliable, and compassionate non-emergency medical transportation in the Newtown Square, PA area.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-hero-text/70 hover:text-primary transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-hero-text/70 hover:text-primary transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#about" className="text-hero-text/70 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#book" className="text-hero-text/70 hover:text-primary transition-colors">Book a Ride</a>
              </li>
              <li>
                <Link to="/admin" className="text-hero-text/70 hover:text-primary transition-colors">Admin Portal</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-hero-text/70">Ambulette Transportation</li>
              <li className="text-hero-text/70">Wheelchair-Accessible Vans</li>
              <li className="text-hero-text/70">Stretcher Transportation</li>
              <li className="text-hero-text/70">Broda Chair Transport</li>
              <li className="text-hero-text/70">Medical Appointments</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">(215) 980-3355</p>
                  <p className="text-sm text-hero-text/60">24/7 Dispatch Available</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <p>info@metrotrans.org</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <p>Newtown Square, PA 19073</p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p>Mon - Fri: 6AM - 10PM</p>
                  <p className="text-sm text-hero-text/60">Weekends: 7AM - 8PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-sidebar-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-hero-text/60">
            <p>© 2026 MetroTrans Medical Transportation. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-hero-text transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-hero-text transition-colors">Terms of Service</Link>
              <Link to="/hipaa-compliance" className="hover:text-hero-text transition-colors">HIPAA Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
