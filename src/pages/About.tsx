import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Lightbulb, ShieldCheck, Rocket, ChevronRight, Linkedin, Code2, Palette, Server, Briefcase, Calendar, Award, Sparkles, Compass } from 'lucide-react';
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

const teamMembers = [
  {
    name: 'Mahesh Shinde',
    role: 'Founder & CEO',
    bio: "The driving force behind HarIT Tech, Mahesh blends visionary leadership with hands-on technical depth. He shapes the company's strategy and forges lasting client partnerships.",
    image: '/team_mahesh.jpg',
    icon: Briefcase,
    skills: ['Business Strategy', 'Leadership', 'Product Vision'],
    linkedin: 'https://www.linkedin.com/in/mahesh-shinde-299289231/',
    gradient: 'from-orange-500 to-amber-400',
    objectPosition: 'center top',
  },
  {
    name: 'Piyush Ninawe',
    role: 'Co-Founder & CTO',
    bio: 'Chief architect of our technical ecosystem, Piyush oversees all engineering decisions — from infrastructure design to product delivery — ensuring scalability at every layer.',
    image: '/team_piyush.jpg',
    icon: Server,
    skills: ['System Architecture', 'Cloud Infra', 'Full-Stack Dev'],
    linkedin: 'https://www.linkedin.com/in/piyushninawe2412/',
    gradient: 'from-amber-500 to-orange-400',
    objectPosition: 'center top',
  },
  {
    name: 'Pranil Bansod',
    role: 'Business Head',
    bio: 'Pranil drives business growth and client acquisition, translating complex technical offerings into compelling value propositions that open new markets for HarIT.',
    image: '/team_pranil.jpg',
    icon: Briefcase,
    skills: ['Business Development', 'Sales Strategy', 'Client Success'],
    linkedin: 'https://www.linkedin.com/in/pranil-bansod-b1b339332/',
    gradient: 'from-orange-400 to-red-400',
    objectPosition: 'center top',
  },
  {
    name: 'Dhanashree Borkar',
    role: 'Lead Engineer',
    bio: 'Dhanashree is the engineering anchor of HarIT Tech. She leads the development team with precision, championing clean code, robust architecture, and on-time delivery.',
    image: '/team_dhanashree.jpg',
    icon: Code2,
    skills: ['Backend Development', 'React', 'Database Design'],
    linkedin: 'https://www.linkedin.com/in/dhanashreeborkar23/',
    gradient: 'from-pink-500 to-orange-400',
    objectPosition: 'center top',
  },
  {
    name: 'Saurabh Temburne',
    role: 'Research & Development',
    bio: 'Saurabh explores the cutting edge — from AI integrations to emerging frameworks — ensuring HarIT stays ahead of the curve and delivers future-ready solutions.',
    image: '/team_saurabh.png',
    icon: Lightbulb,
    skills: ['AI/ML Research', 'Prototyping', 'Emerging Tech'],
    linkedin: 'https://linkedin.com',
    gradient: 'from-amber-400 to-yellow-400',
    objectPosition: 'center top',
  },
  {
    name: 'Sopan Bharkad',
    role: 'Software Developer',
    bio: 'Sopan is the hands-on builder who turns ideas into reality. With a passion for clean code and elegant solutions, he contributes across frontend and backend stacks.',
    image: '/team_sopan.jpg',
    icon: Code2,
    skills: ['Full-Stack Dev', 'Node.js', 'React'],
    linkedin: 'https://www.linkedin.com/in/sopanbharkad/',
    gradient: 'from-orange-400 to-amber-300',
    objectPosition: 'center top',
  },
  {
    name: 'Sankalp Bachute',
    role: 'UI/UX Designer',
    bio: 'Sankalp crafts stunning, intuitive interfaces that users love. His pixel-perfect designs and thoughtful UX flows ensure every HarIT product feels premium from first click.',
    image: '/team_sankalp.jpg',
    icon: Palette,
    skills: ['Figma', 'Design Systems', 'User Research'],
    linkedin: 'https://www.linkedin.com/in/sankalpbachute/',
    gradient: 'from-purple-500 to-orange-400',
    objectPosition: 'center top',
  },
];

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

      {/* ─── Meet the Team ─── */}
      <section className="relative py-28 overflow-hidden bg-brand-dark">
        {/* Background atmosphere */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,122,26,0.9) 1px, transparent 1px), linear-gradient(to right, rgba(255,122,26,0.9) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand-orange/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-orange-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase">
                The People Behind the Product
              </div>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={0.1} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Builders</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.2} className="text-lg text-gray-400 leading-relaxed">
              A small, fierce team of engineers, designers, and strategists who ship world-class products with passion and precision.
            </motion.p>
          </motion.div>

          {/* Centered Flex Container — compact card sizing */}
          <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="w-full sm:w-[260px] group relative"
              >
                <div className="relative bg-white/5 border border-white/10 rounded-[1.75rem] overflow-hidden backdrop-blur-sm hover:border-brand-orange/40 hover:bg-white/8 transition-all duration-500">
                  
                  {/* Orange glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.75rem]"
                    style={{ boxShadow: 'inset 0 0 40px rgba(255,122,26,0.08)' }} />
                  
                  {/* Top gradient accent bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Photo container */}
                  <div className="relative mx-5 mt-5 mb-4 overflow-hidden rounded-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${member.gradient.replace('from-','to-')} opacity-30 z-10`} />
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ objectPosition: member.objectPosition }}
                      className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                    {/* Role icon badge */}
                    <div className="absolute bottom-3 right-3 z-20 w-10 h-10 rounded-xl bg-brand-dark/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-brand-orange">
                      <member.icon size={18} />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="px-6 pb-6">
                    <h3 className="text-white font-bold text-xl mb-0.5 group-hover:text-brand-orange transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Skill pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {member.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-brand-orange/30 group-hover:text-brand-orange transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-white/10 mb-4" />

                    {/* Social links — LinkedIn only */}
                    <div className="flex items-center gap-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-200 text-xs font-semibold"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin size={13} /> LinkedIn
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-brand-orange transition-colors duration-200"
                      >
                        View <ChevronRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-400 mb-6 text-lg">
              Want to be part of something exciting?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-orange to-amber-400 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(255,122,26,0.4)] hover:scale-105 transition-all duration-300"
            >
              Join Our Team <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
