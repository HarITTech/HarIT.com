import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Youtube, Mail, Phone, MapPin, ChevronRight, Zap } from 'lucide-react';
import logo from '../assets/logo.png';

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { label: 'Home',      path: '/' },
  { label: 'About',     path: '/about' },
  { label: 'Services',  path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Contact',   path: '/contact' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  /* ── scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── close mobile menu + scroll-to-top on route change ── */
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  /* ──────────────────────────────────────────────
     Derived style states
     • Home + NOT scrolled  → transparent, white text (over dark hero)
     • Home + scrolled      → dark frosted glass pill
     • Other pages          → always light frosted glass (white bg)
  ────────────────────────────────────────────── */
  const navDark   = isHome && !scrolled;   // dark-theme navbar (transparent over hero)
  const navGlass  = scrolled || !isHome;   // opaque / glass navbar

  const headerBg = navGlass
    ? isHome
      ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
      : 'bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm'
    : 'bg-transparent';   // fully transparent over dark hero

  const linkColor = (path: string) => {
    const active = location.pathname === path;
    if (navDark) {
      return active
        ? 'text-brand-orange'
        : 'text-gray-300 hover:text-white';
    }
    // light / scrolled-home mode
    return active
      ? 'text-brand-orange'
      : 'text-gray-600 hover:text-brand-orange';
  };

  const logoTextColor = navDark ? 'text-white' : 'text-brand-dark';
  const mobileHamColor = navDark ? 'text-white' : 'text-brand-dark';

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg font-sans text-brand-dark overflow-x-hidden">

      {/* ════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg} ${
          navGlass ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* ── Logo + Brand ── */}
          <Link to="/" className="flex items-center gap-3 group select-none">
            {/* Logo mark with orange glow on hover */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-xl bg-brand-orange/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"
              />
              <img
                src={logo}
                alt="HarIT Tech"
                className="w-9 h-9 relative z-10 drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Brand name */}
            <div className="flex flex-col leading-none">
              <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${logoTextColor}`}>
                Har<span className="text-brand-orange">IT</span>{' '}
                <span className={`font-medium ${navDark ? 'text-gray-300' : 'text-gray-500'}`}>Tech</span>
              </span>
              <span className={`text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                navDark ? 'text-gray-400' : 'text-gray-400'
              }`}>
                Solution
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${linkColor(link.path)} group`}
              >
                {link.label}
                {/* Active underline dot */}
                {location.pathname === link.path && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-orange" />
                )}
              </Link>
            ))}

            {/* CTA button */}
            <Link to="/contact" className="ml-3">
              <button
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg ${
                  navDark
                    ? 'bg-brand-orange text-white hover:bg-brand-orangeHover shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5'
                    : 'bg-brand-orange text-white hover:bg-brand-orangeHover shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5'
                }`}
              >
                <Zap size={13} className="fill-current" />
                Let's Talk
              </button>
            </Link>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              navDark
                ? 'text-white hover:bg-white/10'
                : 'text-brand-dark hover:bg-gray-100'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X size={24} />
              : <Menu size={24} />
            }
          </button>
        </div>

        {/* ── Mobile Menu Drawer ── */}
        <div
          className={`absolute top-full left-0 right-0 transition-all duration-300 origin-top md:hidden overflow-hidden ${
            mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-brand-orange/20 text-brand-orange border border-brand-orange/30'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="w-2 h-2 rounded-full bg-brand-orange" />
                )}
              </Link>
            ))}

            <div className="pt-3 mt-1 border-t border-white/10">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 bg-brand-orange text-white font-bold py-3.5 rounded-xl hover:bg-brand-orangeHover transition-colors shadow-lg shadow-orange-500/20">
                  <Zap size={15} className="fill-current" />
                  Book Free Consultation
                </button>
              </Link>
            </div>

            {/* Quick contact strip */}
            <div className="pt-2 flex items-center justify-center gap-6 text-gray-500 text-xs">
              <a href="tel:+917028654498" className="hover:text-brand-orange transition-colors">
                📞 7028654498
              </a>
              <a href="mailto:harittechsolution@gmail.com" className="hover:text-brand-orange transition-colors">
                ✉ Email Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════
          MAIN CONTENT
          • Home page: NO padding-top (hero is full-screen with its own spacing)
          • Other pages: normal padding
      ════════════════════════════════════════ */}
      <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
        {children}
      </main>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="bg-brand-dark text-white pt-16 pb-8 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-brand-orange/20 blur-md" />
                  <img src={logo} alt="HarIT Tech Logo" className="w-10 h-10 relative z-10" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-extrabold tracking-tight text-white">
                    Har<span className="text-brand-orange">IT</span> Tech
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400">Solution</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted tech partner for building smart, scalable, future-ready solutions. From concept to code to impact.
              </p>
              <p className="text-gray-500 text-xs font-medium">🏛️ MSME (Udyam) Registered</p>
              <Link
                to="/msme-certificate"
                className="text-xs text-brand-orange hover:text-white transition-colors underline-offset-2 hover:underline"
              >
                View Registration Certificate →
              </Link>
              <div className="flex gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/company/harit-tech-solution/posts/?feedView=all"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="HarIT Tech on LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-200"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://www.youtube.com/@HarITTechSolution"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="HarIT Tech on YouTube"
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-200"
                >
                  <Youtube size={15} />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-6">Company</h3>
              <ul className="space-y-3">
                {[
                  { label: 'About Us',   path: '/about' },
                  { label: 'Careers',    path: '/careers' },
                  { label: 'Resources',  path: '/blog' },
                  { label: 'Contact',    path: '/contact' },
                ].map(({ label, path }) => (
                  <li key={path}>
                    <Link to={path} className="text-gray-400 hover:text-brand-orange text-sm flex items-center gap-2 transition-colors group">
                      <ChevronRight size={13} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Custom Development',       path: '/services' },
                  { label: 'Web & App Development',    path: '/services' },
                  { label: 'AI Automation & Agentic',  path: '/solutions' },
                  { label: 'Custom AI & ML Solutions', path: '/services' },
                ].map(({ label, path }, i) => (
                  <li key={i}>
                    <Link to={path} className="text-gray-400 hover:text-brand-orange text-sm flex items-center gap-2 transition-colors group">
                      <ChevronRight size={13} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="text-brand-orange shrink-0 mt-0.5" size={16} />
                  <a
                    href="https://maps.google.com/?q=Nagpur,Maharashtra,India"
                    target="_blank" rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Nagpur, Maharashtra, India
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail className="text-brand-orange shrink-0" size={16} />
                  <a href="mailto:harittechsolution@gmail.com" className="hover:text-white transition-colors break-all">
                    harittechsolution@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone className="text-brand-orange shrink-0" size={16} />
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    <a href="tel:+917028654498" className="hover:text-white transition-colors">7028654498</a>
                    <span className="text-gray-600">|</span>
                    <a href="tel:+919561700261" className="hover:text-white transition-colors">9561700261</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p>© {new Date().getFullYear()} HarIT Tech Solution. All rights reserved. | Made in India 🇮🇳</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms"   className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
