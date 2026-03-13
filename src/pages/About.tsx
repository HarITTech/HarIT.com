import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Lightbulb, ShieldCheck, Rocket, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: 'easeOut' } })
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const About = () => {
  return (
    <div className="bg-brand-bg overflow-hidden">
      {/* ─── Premium Dark Hero ─── */}
      <section className="relative pt-28 pb-20 bg-brand-dark overflow-hidden">
        {/* Background Gradients & Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange-400/5 rounded-full blur-[80px] translate-y-1/2 pointer-events-none" />
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
                Discover Our Roots
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Engineering <span className="text-brand-orange text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Excellence</span>
              <br />From India to the World.
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate builders, dreamers, and problem solvers committed to putting India on the global map for high-quality software engineering and scalable digital solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Story Section ─── */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3 block">From Passion to Product</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              Technology That Enables, <br />Not Encumbers.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                HarIT Tech Solution began with a simple idea: technology should be an enabler, not a barrier. As a young team of engineers, we realized that while many companies offered services, few truly partnered with clients to understand the <strong className="text-brand-dark">"why"</strong> behind the code.
              </p>
              <p>
                Today, we have grown into a full-service IT company helping educational institutes streamline processes with our <span className="font-semibold text-brand-orange">TNP Portal</span>, and aiding startups in launching their MVPs. We believe in shipping code that works in the real world, not just on local machines.
              </p>
            </div>
            
            <div className="mt-10 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-start gap-4 inline-block max-w-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0 shadow-sm border border-green-100">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">MSME (Udyam) Registered</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Government of India recognized, reflecting our transparent and reliable business practices.
                </p>
                <Link to="/msme-certificate" className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:gap-2 transition-all">
                  View Certificate <ChevronRight size={14} />
            </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-amber-100 rounded-[2.5rem] rotate-3 blur-lg opacity-60" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img 
                src="https://media.istockphoto.com/id/1489186115/photo/software-development-concept-coding-programmer-software-engineer-working-on-laptop-with.jpg?s=612x612&w=0&k=20&c=hBILeINToqY_zVGb1h1TGpsQhm0gxszcDEUSwuMply8=" 
                alt="Our Engineering Team" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating stats card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 hidden md:flex"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center">
                <Target size={24} className="text-white" />
              </div>
              <div>
                <div className="text-brand-dark font-extrabold text-2xl">100%</div>
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Delivery Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="py-20 bg-white border-y border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-brand-bg/50 p-10 md:p-14 rounded-[2rem] border border-orange-100/50 hover:border-orange-200 transition-colors group relative"
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 transition-transform">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-orange transition-colors">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses, institutes, and individuals with reliable, intelligent technology that drives measurable growth and solves genuine human problems.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.2}
              className="bg-brand-bg/50 p-10 md:p-14 rounded-[2rem] border border-orange-100/50 hover:border-orange-200 transition-colors group relative"
            >
              <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 transition-transform">
                <Rocket size={32} />
              </div>
              <h3 className="text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-orange transition-colors">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become a trusted global partner for smart, scalable digital solutions, known for our transparency, quality engineering, and technical excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Core Values ─── */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <motion.div className="text-center max-w-2xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
           <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3 block">What Drives Us</span>
           <h2 className="text-4xl font-bold text-brand-dark">Our Core Values</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {[
            { icon: Lightbulb, title: "Innovation", text: "We constantly explore new stacks and AI tools to give you an edge." },
            { icon: ShieldCheck, title: "Ownership", text: "We treat your product like our own. No cutting corners, ever." },
            { icon: Users, title: "Transparency", text: "No hidden costs. No jargon. Just honest, open collaboration." },
            { icon: Target, title: "Impact", text: "We focus on outcomes. Code is simply just our means to an end." }
          ].map((val, idx) => (
            <motion.div 
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={idx * 0.15}
            >
              <div className="w-14 h-14 bg-brand-bg rounded-xl flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                <val.icon size={24} />
              </div>
              <h4 className="font-bold text-xl text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">{val.title}</h4>
              <p className="text-gray-500 leading-relaxed">{val.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
