import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Users, BarChart3, Star, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import SEO from '../components/SEO';
import tnpImg from '../assets/TNP.png'; // Assuming it's the correct path based on previous file

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: 'easeOut' } })
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Solutions = () => {
  return (
    <div className="bg-brand-bg overflow-hidden">
      <SEO 
        title="Products & Solutions" 
        description="Verify our ready-to-deploy platforms and custom products, including Training & Placement portals, roommate finding systems, and local e-commerce markets." 
      />
      {/* ─── Premium Dark Hero ─── */}
      <section className="relative pt-28 pb-20 bg-brand-dark overflow-hidden">
        {/* Background Gradients & Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[80px] translate-y-1/2 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,122,26,0.8) 1px, transparent 1px), linear-gradient(to right, rgba(255,122,26,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase">
                 <Zap size={14} className="fill-current" /> Scalable Tech
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Our <span className="text-brand-orange text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Solutions</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready-to-deploy platforms and custom-engineered products designed to accelerate your digital transformation and business growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── TNP Section (Flagship) ─── */}
      <section className="container mx-auto px-4 md:px-8 -mt-12 relative z-20 pb-20">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp} custom={0.4}
          className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 lg:p-16 border-t-8 border-brand-orange flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
        >
          <div className="lg:w-1/2">
             <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-orange-100 text-brand-orange rounded-full text-xs font-bold tracking-wider">
               <Star size={12} className="fill-current" /> FEATURED PRODUCT
             </div>
             
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4">TNP Portal</h2>
            <h3 className="text-xl text-gray-500 font-medium mb-6">Complete Training & Placement Automation</h3>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The TNP Portal is HarIT's flagship product designed for educational institutions. It bridges the gap between students, placement officers, and recruiters, digitizing the entire campus recruitment lifecycle.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10 border-t border-b border-gray-100 py-8">
              <div className="space-y-4">
                <h4 className="font-bold text-brand-dark flex items-center gap-2 text-lg">
                  <span className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                    <Users size={18} className="text-brand-orange" />
                  </span>
                  For Students
                </h4>
                <ul className="text-gray-600 space-y-3 font-medium text-sm">
                  <li className="flex gap-2 items-start"><Check size={16} className="text-green-500 mt-0.5 shrink-0" /> Profile Builder & Resume Gen</li>
                  <li className="flex gap-2 items-start"><Check size={16} className="text-green-500 mt-0.5 shrink-0" /> One-click Job Applications</li>
                  <li className="flex gap-2 items-start"><Check size={16} className="text-green-500 mt-0.5 shrink-0" /> Interview Status Tracking</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-brand-dark flex items-center gap-2 text-lg">
                  <span className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                    <BarChart3 size={18} className="text-brand-orange" />
                  </span>
                  For Institutes
                </h4>
                <ul className="text-gray-600 space-y-3 font-medium text-sm">
                  <li className="flex gap-2 items-start"><Check size={16} className="text-green-500 mt-0.5 shrink-0" /> Company Database Mgmt</li>
                  <li className="flex gap-2 items-start"><Check size={16} className="text-green-500 mt-0.5 shrink-0" /> Automated Eligibility Checks</li>
                  <li className="flex gap-2 items-start"><Check size={16} className="text-green-500 mt-0.5 shrink-0" /> Real-time Placement Stats</li>
                </ul>
              </div>
            </div>
            
            <Link to="/contact">
              <Button variant="primary" className="shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-shadow">
                Request a Live Demo <ArrowRight size={18} className="ml-2 inline" />
              </Button>
            </Link>
          </div>
          
          <div className="lg:w-1/2 relative group w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange to-amber-300 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative bg-gray-50 rounded-[2rem] border-2 border-white p-3 shadow-xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
               <img src={tnpImg} alt="TNP Portal UI" className="rounded-2xl w-full h-auto object-cover border border-gray-100 shadow-sm" />
               <div className="absolute inset-0 border-4 border-black/[0.02] rounded-2xl pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── Other Solutions ─── */}
      <section className="container mx-auto px-4 md:px-8 pb-32">
        <motion.div className="text-center max-w-2xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
           <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3 block">More Products</span>
           <h2 className="text-4xl font-bold text-brand-dark">Tailored For Your Niche</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="group bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-3xl font-bold mb-4 text-brand-dark group-hover:text-brand-orange transition-colors">Custom ERP & Dashboards</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Move beyond spreadsheets. We build custom ERP solutions for SMEs to manage inventory, HR, sales, and accounts in a unified, scalable cloud interface.
            </p>
            <ul className="space-y-4 mb-10 text-gray-700 font-medium border-l-2 border-brand-orange/20 pl-4">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange block" /> Role-based access control</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange block" /> Real-time advanced reporting</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange block" /> Responsive, mobile-friendly design</li>
            </ul>
             <Link to="/contact">
                <Button variant="outline" className="w-full text-center py-4 border-2">Discuss Your Needs</Button>
              </Link>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.2}
            className="group bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-3xl font-bold mb-4 text-brand-dark group-hover:text-brand-orange transition-colors">E-Commerce Accelerators</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Launch your online store significantly faster with our pre-built, high-performance modules designed for scale, speed, and high conversion rates.
            </p>
             <ul className="space-y-4 mb-10 text-gray-700 font-medium border-l-2 border-brand-orange/20 pl-4">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange block" /> High-performance storefronts</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange block" /> Secure payment gateways integration</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange block" /> Robust admin inventory management</li>
            </ul>
            <Link to="/contact">
                <Button variant="outline" className="w-full text-center py-4 border-2">Get Started</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;