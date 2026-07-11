import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Lightbulb, ShieldCheck, Rocket, ChevronRight, Calendar, Award, Sparkles, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: 'easeOut' } })
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};



const About = () => {
  return (
    <div className="bg-brand-bg overflow-hidden min-h-screen text-brand-dark">
      <SEO 
        title="Meet Our Founders & Team" 
        description="Learn more about HarIT Tech Solution's story, mission, and the builders behind India's trusted custom software and placement portals." 
      />

      {/* ─── Premium Dark Hero ─── */}
      <section className="relative pt-36 pb-28 bg-brand-dark overflow-hidden">
        {/* Decorative Grid and Ambient Glows */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,122,26,0.8) 1px, transparent 1px), linear-gradient(to right, rgba(255,122,26,0.8) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-orange/15 rounded-full blur-[130px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase">
                <Sparkles size={12} className="animate-pulse" /> Discover Our Roots
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

      {/* ─── Story Section & MSME Trust Badge ─── */}
      <section className="py-24 container mx-auto px-4 md:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left: Text block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block bg-orange-100/50 text-brand-orange px-3 py-1.5 rounded-lg w-max">
              OUR MISSION & PURPOSE
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight tracking-tight">
              Technology That Enables, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-600">Not Encumbers.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-normal">
              <p>
                HarIT Tech Solution began with a simple idea: technology should be an enabler, not a barrier. As a young team of engineers, we realized that while many companies offered services, few truly partnered with clients to understand the <strong className="text-brand-dark font-bold">"why"</strong> behind the code.
              </p>
              <p>
                Today, we have grown into a full-service IT company helping educational institutes streamline processes with our <span className="font-semibold text-brand-orange">TNP Portal</span>, and aiding startups in launching their MVPs. We believe in shipping code that works in the real world, not just on local machines.
              </p>
            </div>

            {/* MSME Badge — Styled more premium (glassmorphic border + glow) */}
            <div className="pt-4">
              <div className="p-6 bg-white border-2 border-orange-100/60 rounded-3xl shadow-xl flex items-start gap-5 max-w-xl relative overflow-hidden group hover:border-brand-orange/40 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-brand-orange/10 to-transparent rounded-full -z-10 transition-transform group-hover:scale-125" />
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0 shadow-md border border-green-100 group-hover:scale-105 transition-transform duration-300">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-1 flex items-center gap-2">
                    MSME Registered 
                    <span className="text-[10px] bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      Govt. of India
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                    Recognized under Udyam Registration, reflecting our strict adherence to transparent, compliant, and reliable business operations.
                  </p>
                  <Link to="/msme-certificate" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:gap-2.5 transition-all">
                    View Registration Certificate <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Dynamic Growth Timeline Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white p-8 md:p-10 rounded-[2.25rem] border border-gray-100/80 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-bold text-brand-dark mb-8 flex items-center gap-3">
                <Calendar className="text-brand-orange animate-pulse" size={24} /> 
                Our Strategic Milestones
              </h3>
              
              <div className="space-y-8 relative before:absolute before:inset-y-1 before:left-3.5 before:w-0.5 before:bg-orange-100">
                {/* Year 2024 */}
                <div className="relative pl-10 group">
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-brand-orange border-4 border-white group-hover:scale-125 transition-transform duration-300 shadow-md shadow-brand-orange/40" />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-extrabold text-brand-orange tracking-wider uppercase bg-orange-50 px-2 py-0.5 rounded">2024</span>
                    <span className="text-xs font-semibold text-gray-400">Phase 1</span>
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark mb-1">Founding & Core Focus</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Started as a close-knit group of engineers building lightweight client products and custom web apps.
                  </p>
                </div>

                {/* Year 2025 */}
                <div className="relative pl-10 group">
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-brand-orange border-4 border-white group-hover:scale-125 transition-transform duration-300 shadow-md shadow-brand-orange/40" />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-extrabold text-brand-orange tracking-wider uppercase bg-orange-50 px-2 py-0.5 rounded">2025</span>
                    <span className="text-xs font-semibold text-gray-400">Phase 2</span>
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark mb-1">TNP Portal Launch</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Built and shipped our core TNP Portal to streamline student placement processes across regional institutes.
                  </p>
                </div>

                {/* Year 2026 */}
                <div className="relative pl-10 group">
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-brand-orange border-4 border-white group-hover:scale-125 transition-transform duration-300 shadow-md shadow-brand-orange/40" />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-extrabold text-brand-orange tracking-wider uppercase bg-orange-50 px-2 py-0.5 rounded">2026</span>
                    <span className="text-xs font-semibold text-gray-400">Phase 3</span>
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark mb-1">Startups & Custom Software</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Partnering globally to build full-scale MVPs, cloud integrations, and customized enterprise platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-brand-dark text-white p-6 rounded-2xl flex items-center gap-5 border border-white/10 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Award size={28} />
              </div>
              <div>
                <h4 className="font-bold text-base text-white mb-0.5">Engineering Quality First</h4>
                <p className="text-xs text-gray-400 leading-relaxed">100% of our code goes through automated test suites before delivery.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50/50 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {/* Card 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-brand-bg/30 p-10 md:p-12 rounded-[2.5rem] border-2 border-orange-100/30 hover:border-brand-orange/30 hover:bg-white hover:shadow-2xl transition-all duration-300 group relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                <Target size={30} />
              </div>
              <h3 className="text-3xl font-bold text-brand-dark mb-4 transition-colors">Our Mission</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                To empower businesses, institutes, and individuals with reliable, intelligent technology that drives measurable growth and solves genuine human problems.
              </p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.2}
              className="bg-brand-bg/30 p-10 md:p-12 rounded-[2.5rem] border-2 border-orange-100/30 hover:border-brand-orange/30 hover:bg-white hover:shadow-2xl transition-all duration-300 group relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                <Rocket size={30} />
              </div>
              <h3 className="text-3xl font-bold text-brand-dark mb-4 transition-colors">Our Vision</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
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
           <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">Our Core Values</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {[
            { icon: Lightbulb, title: "Innovation", text: "We constantly explore new stacks and AI tools to give you an edge." },
            { icon: ShieldCheck, title: "Ownership", text: "We treat your product like our own. No cutting corners, ever." },
            { icon: Users, title: "Transparency", text: "No hidden costs. No jargon. Just honest, open collaboration." },
            { icon: Compass, title: "Impact", text: "We focus on outcomes. Code is simply just our means to an end." }
          ].map((val, idx) => (
            <motion.div 
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-orange-200/50 hover:shadow-2xl transition-all duration-300 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={idx * 0.12}
            >
              <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                <val.icon size={26} />
              </div>
              <h4 className="font-bold text-xl text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">{val.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{val.text}</p>
            </motion.div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default About;
