import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Cloud, Brain, PenTool, CheckCircle2, ArrowRight, Smartphone, Layers, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

import imgWebMobile from '../assets/service_web_mobile.png';
import imgCloud from '../assets/service_cloud_devops.png';
import imgAI from '../assets/service_ai_ml.png';
import imgUIUX from '../assets/service_uiux_design.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

const serviceCategories = [
  {
    id: 'web-mobile',
    title: 'Custom Web & Mobile Development',
    tagline: 'Build. Ship. Scale.',
    icon: Smartphone,
    img: imgWebMobile,
    color: 'from-orange-500 to-amber-400',
    bgAccent: 'bg-orange-50',
    description:
      'We craft high-performance web and mobile applications that deliver seamless, intuitive experiences across every platform and device.',
    features: [
      'React & Next.js Web Applications',
      'iOS & Android (Flutter / React Native)',
      'Progressive Web Apps (PWA)',
      'RESTful & GraphQL API Integration',
    ],
    stats: [{ label: 'Projects Delivered', value: '20+' }, { label: 'Client Satisfaction', value: '100%' }],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Solutions',
    tagline: 'Always Up. Always Secure.',
    icon: Cloud,
    img: imgCloud,
    color: 'from-sky-500 to-blue-600',
    bgAccent: 'bg-sky-50',
    description:
      'Scalable, secure cloud infrastructure and automated pipelines that keep your applications running fast, reliably, and cost-effectively.',
    features: [
      'AWS / Azure / GCP Architecture',
      'CI/CD Pipeline Automation',
      'Docker & Kubernetes Orchestration',
      'Serverless & Microservices',
    ],
    stats: [{ label: 'Uptime Guaranteed', value: '99.9%' }, { label: 'Cost Savings', value: '40%+' }],
  },
  {
    id: 'ai-ml',
    title: 'AI-ML & Data Engineering',
    tagline: 'Intelligent Automation.',
    icon: Brain,
    img: imgAI,
    color: 'from-violet-500 to-purple-600',
    bgAccent: 'bg-violet-50',
    description:
      'Leverage cutting-edge Artificial Intelligence and Machine Learning to automate decisions, uncover deep insights, and power your next breakthrough.',
    features: [
      'Predictive Analytics & Forecasting',
      'Natural Language Processing (NLP)',
      'Computer Vision Models',
      'Data Visualization Dashboards',
    ],
    stats: [{ label: 'Accuracy Rate', value: '95%+' }, { label: 'Data Processed', value: '10TB+' }],
  },
  {
    id: 'uiux-design',
    title: 'Product Design (UI/UX)',
    tagline: 'Design That Converts.',
    icon: PenTool,
    img: imgUIUX,
    color: 'from-rose-500 to-pink-500',
    bgAccent: 'bg-rose-50',
    description:
      'User-centric interfaces built on deep research and tested prototypes — turning visitors into loyal customers through elegant, purposeful design.',
    features: [
      'User Research & Persona Building',
      'Wireframing & Interactive Prototyping',
      'Design Systems & Component Libraries',
      'Usability Testing & Iteration',
    ],
    stats: [{ label: 'Conversion Boost', value: '3×' }, { label: 'UI Systems Built', value: '15+' }],
  },
];

const whyItems = [
  { icon: Zap, title: 'Fast Delivery', description: 'Agile sprints with consistent milestones — from kickoff to launch without delays.' },
  { icon: Shield, title: 'Security First', description: 'Every product is built with industry-standard security practices and data protection.' },
  { icon: TrendingUp, title: 'Scalable by Design', description: 'Architecture that grows with your business — no painful rewrites later.' },
  { icon: Users, title: 'Dedicated Team', description: 'You get a committed team that deeply understands your domain and goals.' },
  { icon: Layers, title: 'Full Stack Expertise', description: 'Frontend, backend, cloud, AI — we handle the complete technology stack.' },
  { icon: Code, title: 'Clean Codebase', description: 'Readable, maintainable, well-documented code that your team can confidently extend.' },
];

const Services: React.FC = () => {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  return (
    <div className="bg-brand-bg overflow-hidden">

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-orange-100/60 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-10 right-0 w-72 h-72 bg-orange-200/30 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/40 rounded-full blur-2xl" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(#FF7A1A 1px, transparent 1px), linear-gradient(to right, #FF7A1A 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-orange-100 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase border border-orange-200">
              <Zap size={12} className="fill-current" />
              What We Do Best
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 leading-tight">
              Services Built{' '}
              <span className="relative inline-block">
                <span className="text-brand-orange">for Impact</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-orange/30 rounded-full" />
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              From pixel-perfect interfaces to cloud-scale infrastructure — we engineer technology
              solutions that <strong className="text-brand-dark font-semibold">actually move the needle</strong> for your business.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
              {['Web & Mobile', 'Cloud & DevOps', 'AI & ML', 'UI/UX Design'].map((tag) => (
                <span key={tag} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-orange" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICE CARDS ─── */}
      <section className="py-4 pb-24">
        <div className="container mx-auto px-4 md:px-8 space-y-28">
          {serviceCategories.map((service, index) => {
            const isReversed = index % 2 !== 0;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={isReversed ? fadeInRight : fadeInLeft}
              >
                {/* ── Text Content ── */}
                <div className="flex-1 w-full">
                  {/* Tag */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-5 bg-gradient-to-r ${service.color} text-white shadow-sm`}>
                    <Icon size={12} />
                    {service.tagline}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 size={13} strokeWidth={2.5} className="text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 mb-10">
                    {service.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="group flex flex-col"
                        onMouseEnter={() => setHoveredStat(`${service.id}-${stat.label}`)}
                        onMouseLeave={() => setHoveredStat(null)}
                      >
                        <span className={`text-4xl font-extrabold bg-gradient-to-r ${service.color} bg-clip-text text-transparent transition-transform duration-200 ${hoveredStat === `${service.id}-${stat.label}` ? 'scale-110' : ''}`}>
                          {stat.value}
                        </span>
                        <span className="text-xs text-gray-400 font-medium mt-0.5">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button variant="outline">
                      Start This Project <ArrowRight size={16} className="ml-2 inline-block" />
                    </Button>
                  </Link>
                </div>

                {/* ── Image ── */}
                <div className="flex-1 w-full">
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02, rotate: isReversed ? -1 : 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    {/* Glow border */}
                    <div className={`absolute inset-0 z-10 rounded-3xl ring-2 ring-white/40 pointer-events-none`} />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 z-10 bg-gradient-to-t ${isReversed ? 'from-brand-dark/40 via-transparent' : 'from-brand-dark/30 via-transparent'} to-transparent pointer-events-none`} />
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-72 md:h-[440px] object-cover object-center"
                    />
                    {/* Floating badge */}
                    <div className="absolute bottom-5 left-5 z-20 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-xl flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <Icon size={16} className="text-white" />
                      </div>
                      <span className="text-xs font-bold text-brand-dark">{service.tagline}</span>
                    </div>
                  </motion.div>

                  {/* Decorative element */}
                  <div className={`-mt-8 ml-6 w-3/4 h-8 bg-gradient-to-r ${service.color} opacity-20 rounded-b-3xl blur-xl`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── WHY HARIT SECTION ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-orange-100 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase border border-orange-200">
              Our Principles
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-5">
              Why Teams Choose <span className="text-brand-orange">HarIT</span>
            </h2>
            <p className="text-gray-500 text-lg">
              We're not just a vendor — we're a long-term partner obsessed with your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="group bg-brand-bg rounded-2xl p-7 border border-transparent hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.08 } } }}
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PROCESS SECTION ─── */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-orange-100 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase border border-orange-200">
              How We Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-5">
              Our Delivery <span className="text-brand-orange">Process</span>
            </h2>
            <p className="text-gray-500 text-lg">
              A clear, transparent process — from your first idea to a live, production-ready product.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent mx-24" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Deep-dive into your business goals, user needs, and technical requirements.' },
                { step: '02', title: 'Planning', desc: 'Architecture design, sprint planning, and milestone roadmap definition.' },
                { step: '03', title: 'Build', desc: 'Agile development with weekly demos, clear communication, and fast iterations.' },
                { step: '04', title: 'Launch & Scale', desc: 'Deployment, monitoring, and continuous improvement post-launch support.' },
              ].map((phase, idx) => (
                <motion.div
                  key={idx}
                  className="relative text-center group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.12 } } }}
                >
                  <div className="w-20 h-20 bg-white rounded-2xl border-2 border-orange-200 group-hover:border-brand-orange group-hover:bg-brand-orange transition-all duration-300 flex items-center justify-center mx-auto mb-5 shadow-md">
                    <span className="text-2xl font-extrabold text-brand-orange group-hover:text-white transition-colors duration-300">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{phase.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,122,26,0.8) 1px, transparent 1px), linear-gradient(to right, rgba(255,122,26,0.8) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-brand-orange/20 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase border border-brand-orange/30">
              <Zap size={12} className="fill-current" />
              Let's Work Together
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Have a Unique<br />
              <span className="text-brand-orange">Challenge?</span>
            </h2>
            <p className="text-gray-300 text-xl mb-10 leading-relaxed">
              We love tackling complex, one-of-a-kind problems. If your idea doesn't fit a template,
              that's our favourite kind of project. Let's talk.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="primary">Contact Our Team</Button>
              </Link>
              <Link to="/solutions">
                <button className="px-7 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors duration-200">
                  Explore Solutions →
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Services;