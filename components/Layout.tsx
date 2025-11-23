import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Button from './Button';
import logo from '../assets/HarIT_Tech_Logo_Transperent.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg font-sans text-brand-dark overflow-x-hidden">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            {/* <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:rotate-3 transition-transform">
              {logo}
            </div> */}
            <img src={logo} alt="" className="w-10 h-10" />
            <span className="text-2xl font-bold tracking-tight text-brand-dark">
              Har<span className="text-brand-orange">IT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="primary" className="py-2 px-5 text-xs">Let's Talk</Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-dark hover:text-brand-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 transform origin-top md:hidden ${
            isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium py-2 border-b border-gray-100 ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
             <Link to="/contact" className="mt-2">
              <Button variant="primary" fullWidth>Book Consultation</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                {/* <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center text-white font-bold text-lg">
                  H
                </div> */}
                <img src={logo} alt="" className="w-10 h-10" />
                <span className="text-xl font-bold">HarIT Tech</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted tech partner for building smart, scalable, future-ready solutions. From concept to code to impact.
              </p>
              {/* <div className="flex gap-4 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors">
                  <Instagram size={16} />
                </a>
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-brand-orange text-sm flex items-center gap-2"><ChevronRight size={14}/> About Us</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-brand-orange text-sm flex items-center gap-2"><ChevronRight size={14}/> Careers</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-brand-orange text-sm flex items-center gap-2"><ChevronRight size={14}/> Resources</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-brand-orange text-sm flex items-center gap-2"><ChevronRight size={14}/> Contact</Link></li>
              </ul>
            </div>

             {/* Services */}
             <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-gray-400 hover:text-brand-orange text-sm flex items-center gap-2"><ChevronRight size={14}/> Custom Development</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-brand-orange text-sm flex items-center gap-2"><ChevronRight size={14}/> Website & App Development</Link></li>
                <li><Link to="/solutions" className="text-gray-400 hover:text-brand-orange text-sm flex items-center gap-2"><ChevronRight size={14}/> AI Automation & Agentic Systems</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-brand-orange text-sm flex items-center gap-2"><ChevronRight size={14}/> Custom AI & ML Solutions</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="text-brand-orange shrink-0" size={18} />
                  <span>Nagpur, Maharashtra, India</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail className="text-brand-orange shrink-0" size={18} />
                  <span>harittechsolution@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone className="text-brand-orange shrink-0" size={18} />
                  <span>7028654498 | 9561700261</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} HarIT Tech Solution. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;