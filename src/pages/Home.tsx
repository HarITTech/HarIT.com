import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code, Cloud, Brain, GraduationCap, Layout as LayoutIcon, Settings,
  CheckCircle2, ArrowRight, Smartphone, Zap, Users, Star,
  Shield, TrendingUp
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Button from '../components/Button';
import SEO from '../components/SEO';
import heroImg from '../assets/home_hero_visual.png';
import tnpImg from '../assets/TNP1.png';
import aaramseDashboardImg from '../assets/aaramse/dashboard.jpg';

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: 'easeOut' } })
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

/* ─── Animated Counter ─── */
const AnimatedCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target, suffix = '', duration = 2
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
};

/* ─── Data ─── */
const services = [
  { title: 'Custom Web & Mobile', description: 'Responsive web apps, portals, and mobile applications tailored to your business workflows.', icon: Smartphone, color: 'from-orange-500 to-amber-400' },
  { title: 'Cloud & DevOps', description: 'Cloud architecture, CI/CD pipelines, and infrastructure optimization for secure, scalable apps.', icon: Cloud, color: 'from-sky-500 to-blue-600' },
  { title: 'AI & ML Solutions', description: 'Intelligent analytics, machine learning models for prediction, classification, and computer vision.', icon: Brain, color: 'from-violet-500 to-purple-600' },
  { title: 'Training & Placement Portal', description: 'End-to-end TNP platforms managing student profiles, job postings, interviews, and analytics.', icon: GraduationCap, color: 'from-emerald-500 to-teal-500' },
  { title: 'UI/UX Design', description: 'Wireframes, prototypes, and pixel-perfect UI with a focus on user journeys and conversion.', icon: LayoutIcon, color: 'from-rose-500 to-pink-500' },
  { title: 'Support & Maintenance', description: 'Long-term technical support, monitoring, and continuous feature evolution for live products.', icon: Settings, color: 'from-gray-500 to-gray-600' },
];

const stats = [
  { value: 20, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Industries Served' },
  { value: 3, suffix: '+', label: 'Years of Excellence' },
];

const techStack = [
  'React.js', 'Next.js', 'Node.js', 'Python', 'Flutter', 'React Native',
  'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'TensorFlow',
  'FastAPI', 'TypeScript', 'Tailwind CSS', 'Firebase', 'GraphQL', 'Redis',
];

const whyUs = [
  { icon: Zap, title: 'Fast Delivery', desc: 'Agile sprints with clear milestones — from kickoff to launch without delays.' },
  { icon: Shield, title: 'Security Built-In', desc: 'Every product is built with industry-standard security and data protection.' },
  { icon: TrendingUp, title: 'Scales with You', desc: 'Architecture that grows alongside your business — no painful rewrites.' },
  { icon: Users, title: 'Dedicated Team', desc: 'A committed team that deeply understands your domain and goals.' },
];

const projects = [
  {
    name: 'AaramSe',
    tag: 'New Flagship',
    desc: 'Premium digital queue & smart appointment solution with live queue tracking, slot booking, and partner dashboards — now live in Nanded.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Expo'],
    link: '/aaramse',
  },
  {
    name: 'TNP Portal',
    tag: 'Flagship Product',
    desc: 'A complete Training & Placement ecosystem for students, institutions, and recruiters — with real-time analytics and automated shortlisting.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    link: '/solutions',
  },
  {
    name: 'RooMoo',
    tag: 'Real Estate',
    desc: 'A smart roommate & rental finder platform with location-based search, filters, and seamless onboarding for students and working professionals.',
    tech: ['React Native', 'Firebase', 'Node.js'],
    link: '/solutions',
  },
  {
    name: 'AplaBazar',
    tag: 'E-Commerce',
    desc: 'A local marketplace platform connecting vendors and buyers in Nagpur — built for speed, simplicity, and regional commerce.',
    tech: ['Next.js', 'MongoDB', 'Stripe'],
    link: '/solutions',
  },
  {
    name: 'UPSC eBeacon',
    tag: 'EdTech',
    desc: 'A civil services exam prep platform with curated study materials, mock tests, and performance tracking for UPSC aspirants.',
    tech: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    link: '/solutions',
  },
];

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <SEO 
        title="Smart IT Solutions That Ship & Scale" 
        description="HarIT Tech Solution is a premier software development partner in India. We build custom development, cloud systems, training & placement portals, and scalable digital solutions." 
      />

      {/* ════════════════════════════════════════
          HERO — 3D ANIMATED BACKGROUND
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-28 pb-10 overflow-hidden">
        {/* 3D scene */}
        <div className="hero-3d-scene">
          <div className="hero-mesh" />
          <div className="hero-glow-center" />
          <div className="hero-orb hero-orb--one" />
          <div className="hero-orb hero-orb--two" />
          <div className="hero-orb hero-orb--three" />
          <div className="hero-orb hero-orb--four" />
          <div className="hero-particles" />
          <div className="hero-vignette" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* ── Left Text ── */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Badge */}
              <motion.div variants={fadeUp} custom={0}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                  <Zap size={11} className="fill-current" />
                  India's Trusted IT Partner
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 text-white"
                variants={fadeUp}
                custom={0.1}
              >
                Smart IT Solutions{' '}
                <span className="relative">
                  <span className="text-brand-orange">That Actually</span>
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Ship & Scale
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                variants={fadeUp}
                custom={0.2}
              >
                HarIT Tech Solution is your end-to-end technology partner — building robust software,
                cloud platforms, and AI-powered products from{' '}
                <strong className="text-white font-semibold">concept to code to impact.</strong>
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
                variants={fadeUp}
                custom={0.3}
              >
                <Link to="/contact">
                  <button className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5 text-sm">
                    Book Free Consultation <ArrowRight size={16} />
                  </button>
                </Link>
                <Link to="/services">
                  <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-4 px-8 rounded-full backdrop-blur-sm transition-all duration-300 text-sm">
                    Explore Services <ArrowRight size={16} />
                  </button>
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-5 text-sm text-gray-400"
                variants={fadeUp}
                custom={0.4}
              >
                {['MSME Registered', '20+ Projects', '100% Success Rate', 'Since 2022'].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-brand-orange" />
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right Visual — Premium Code Editor Composition ── */}
            <motion.div
              className="flex-1 w-full relative flex items-center justify-center p-4"
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="relative w-full max-w-[580px] float-card">

                {/* ── 1. Main Code Editor Window ── */}
                <div className="glass-mockup rounded-[2rem] overflow-hidden relative z-10" style={{ aspectRatio: '4/3' }}>

                  {/* Editor chrome bar */}
                  <div className="flex items-center gap-1.5 px-5 py-3 border-b border-white/10 bg-black/30">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    <div className="flex-1 mx-3 bg-white/10 rounded-full px-3 py-0.5 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[9px] text-gray-500 font-mono tracking-wider">harIT.dev / dashboard</span>
                    </div>
                    <div className="text-[9px] text-gray-600 font-mono">harit_core.ts</div>
                  </div>

                  {/* Editor body */}
                  <div className="flex h-[calc(100%-46px)]">

                    {/* Sidebar file tree */}
                    <div className="w-28 border-r border-white/5 bg-black/20 py-3 px-2 flex-shrink-0 hidden lg:flex flex-col gap-1">
                      <div className="text-[8px] text-gray-600 uppercase tracking-widest px-1 mb-2">Explorer</div>
                      {['src/', '├ core.ts', '├ deploy.ts', '├ ai.agent.ts', '└ index.ts'].map((f, i) => (
                        <div
                          key={i}
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${i === 1 ? 'bg-brand-orange/20 text-brand-orange' : 'text-gray-600'}`}
                        >
                          {f}
                        </div>
                      ))}
                      <div className="mt-2 text-[8px] text-gray-600 uppercase tracking-widest px-1">Git</div>
                      <div className="text-[9px] font-mono text-green-400 px-1.5 py-0.5">M core.ts</div>
                      <div className="text-[9px] font-mono text-sky-400 px-1.5 py-0.5">A ai.agent.ts</div>
                    </div>

                    {/* Code pane */}
                    <div className="flex-1 p-4 font-mono text-[10px] leading-relaxed flex flex-col overflow-hidden">
                      <div className="flex-1 space-y-[5px]">
                        {([
                          { ln: '01', tokens: [{ c: 'text-violet-400', t: 'import' }, { c: 'text-gray-300', t: ' { ' }, { c: 'text-sky-300', t: 'AI' }, { c: 'text-gray-500', t: ', ' }, { c: 'text-sky-300', t: 'Cloud' }, { c: 'text-gray-500', t: ', ' }, { c: 'text-sky-300', t: 'Deploy' }, { c: 'text-gray-300', t: ' }' }, { c: 'text-violet-400', t: ' from' }, { c: 'text-amber-300', t: " '@harit/core'" }], active: false },
                          { ln: '02', tokens: [{ c: 'text-gray-700', t: '' }], active: false },
                          { ln: '03', tokens: [{ c: 'text-gray-500', t: '// 🚀  Build & ship production software' }], active: false },
                          { ln: '04', tokens: [{ c: 'text-violet-400', t: 'const' }, { c: 'text-sky-300', t: ' product' }, { c: 'text-gray-400', t: ' = ' }, { c: 'text-amber-300', t: 'new' }, { c: 'text-emerald-400', t: ' Deploy' }, { c: 'text-gray-300', t: '({' }], active: false },
                          { ln: '05', tokens: [{ c: 'text-sky-300', t: '  stack' }, { c: 'text-gray-400', t: ':' }, { c: 'text-amber-300', t: " 'full-stack'" }, { c: 'text-gray-300', t: ',' }], active: false },
                          { ln: '06', tokens: [{ c: 'text-sky-300', t: '  ai' }, { c: 'text-gray-400', t: ':' }, { c: 'text-emerald-400', t: ' true' }, { c: 'text-gray-300', t: ',' }], active: true },
                          { ln: '07', tokens: [{ c: 'text-sky-300', t: '  scale' }, { c: 'text-gray-400', t: ':' }, { c: 'text-amber-300', t: " 'infinite'" }, { c: 'text-gray-300', t: ',' }], active: false },
                          { ln: '08', tokens: [{ c: 'text-gray-300', t: '});' }], active: false },
                          { ln: '09', tokens: [{ c: 'text-gray-700', t: '' }], active: false },
                          { ln: '10', tokens: [{ c: 'text-emerald-400', t: 'product' }, { c: 'text-gray-300', t: '.' }, { c: 'text-sky-300', t: 'ship' }, { c: 'text-gray-300', t: '().' }, { c: 'text-sky-300', t: 'then' }, { c: 'text-gray-300', t: '(() => {' }], active: false },
                          { ln: '11', tokens: [{ c: 'text-sky-300', t: '  console' }, { c: 'text-gray-300', t: '.' }, { c: 'text-amber-300', t: 'log' }, { c: 'text-gray-300', t: '(' }, { c: 'text-amber-300', t: "'✅ Live & Scaling!'" }, { c: 'text-gray-300', t: ');' }], active: false },
                          { ln: '12', tokens: [{ c: 'text-gray-300', t: '});' }], active: false },
                        ] as Array<{ ln: string; tokens: Array<{ c: string; t: string }>; active: boolean }>).map((line, i) => (
                          <motion.div
                            key={i}
                            className={`flex gap-2 items-start rounded-sm ${line.active ? 'bg-brand-orange/10' : ''}`}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                          >
                            <span className={`select-none w-3 text-right shrink-0 ${line.active ? 'text-brand-orange/60' : 'text-gray-700'}`}>{line.ln}</span>
                            <span className="flex flex-wrap gap-x-0">
                              {line.tokens.map((tok, j) => (
                                <span key={j} className={tok.c}>{tok.t}</span>
                              ))}
                              {i === 11 && (
                                <motion.span
                                  className="inline-block w-1.5 h-3.5 bg-brand-orange ml-0.5 rounded-sm"
                                  animate={{ opacity: [1, 0, 1] }}
                                  transition={{ duration: 0.9, repeat: Infinity }}
                                />
                              )}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Terminal strip */}
                      <div className="mt-2 bg-black/60 rounded-xl p-2.5 border border-white/5 shrink-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="flex gap-1">
                            <div className="w-5 h-[1px] bg-gray-700" />
                            <div className="w-3 h-[1px] bg-gray-700" />
                          </div>
                          <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Terminal</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-[9px] font-mono text-gray-500">
                            <span className="text-brand-orange">❯</span>
                            <span>npm run deploy:prod</span>
                          </div>
                          <motion.div
                            className="text-[9px] font-mono text-emerald-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8, duration: 0.5 }}
                          >
                            ✓ Build complete in 3.2s · 0 errors · 🚀 Deployed
                          </motion.div>
                          <motion.div
                            className="flex items-center gap-1.5 text-[9px] font-mono"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                          >
                            <span className="text-brand-orange">❯</span>
                            <motion.span
                              className="text-gray-400"
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 2.5 }}
                            >_</motion.span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Glass ring */}
                  <div className="absolute inset-0 ring-1 ring-white/10 rounded-[2rem] pointer-events-none z-20" />
                  {/* Scanner line */}
                  <div className="scanner-line" />
                </div>

                {/* ── 2. Floating: Uptime / Deploy Status Card (top-right) ── */}
                <motion.div
                  className="absolute -right-5 top-4 z-20 hidden xl:block"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ perspective: '800px' }}
                >
                  <div
                    className="bg-white/8 backdrop-blur-2xl border border-white/15 rounded-2xl px-4 py-3 shadow-2xl min-w-[148px]"
                    style={{ transform: 'rotateY(-14deg) rotateX(4deg)' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                      <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Uptime</span>
                    </div>
                    <div className="text-xl font-extrabold text-white leading-none mb-1.5">
                      99.9<span className="text-brand-orange text-sm">%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                        animate={{ width: ['88%', '99.9%', '88%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                    <div className="text-[8px] text-gray-600 mt-1.5 font-mono">last 30 days</div>
                  </div>
                </motion.div>

                {/* ── 3. Floating: Projects Bar-Chart Card (bottom-left) ── */}
                <motion.div
                  className="absolute -left-5 bottom-5 z-20 hidden xl:block"
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                >
                  <div className="bg-brand-dark/85 backdrop-blur-2xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
                    <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-1">Projects Shipped</div>
                    <div className="flex items-end gap-1.5 mb-2">
                      <span className="text-xl font-extrabold text-white">20</span>
                      <span className="text-brand-orange text-xs font-bold mb-0.5">+ Delivered</span>
                    </div>
                    <div className="flex items-end gap-1">
                      {[5, 8, 6, 10, 7, 9, 12].map((h, i) => (
                        <motion.div
                          key={i}
                          className="w-2.5 rounded-t-sm"
                          style={{
                            background: i === 6
                              ? 'linear-gradient(to top, #FF7A1A, #FBBF24)'
                              : 'rgba(255,122,26,0.35)',
                            height: h * 2.5,
                          }}
                          animate={{ height: [h * 2.5, h * 3.5, h * 2.5] }}
                          transition={{ duration: 1.8 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* ── 4. Floating: Tech stack pills (mid-right) ── */}
                <motion.div
                  className="absolute -right-3 bottom-16 z-20 hidden xl:flex flex-col gap-1.5"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  {['React', 'Node.js', 'AI/ML'].map((tech, i) => (
                    <motion.div
                      key={tech}
                      className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-full px-2.5 py-1 text-[9px] font-bold text-gray-300 flex items-center gap-1.5 shadow-lg"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + i * 0.15 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>

                {/* ── 5. Background depth glows ── */}
                <div className="absolute -inset-10 bg-brand-orange/5 blur-[120px] -z-10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-500/8 blur-[100px] -z-10 rounded-full" />
                <div className="absolute -bottom-8 left-1/4 w-40 h-40 bg-sky-500/8 blur-[60px] -z-10 rounded-full" />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-9 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5">
            <motion.div
              className="w-1.5 h-2.5 bg-brand-orange rounded-full"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          STATS STRIP
      ════════════════════════════════════════ */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="text-center px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.08}
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-1">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-gray-500 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHO WE ARE STRIP
      ════════════════════════════════════════ */}
      <section className="bg-brand-bg py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3 block">Who We Are</span>
            <p className="text-xl md:text-2xl text-brand-dark font-medium leading-relaxed">
              "HarIT Tech Solution is an Indian IT services company — MSME registered — helping businesses, institutes, and startups ship production-ready software. We blend innovation with reliability."
            </p>
            <Link to="/about" className="inline-flex items-center mt-6 text-brand-orange font-semibold hover:underline gap-1">
              Read our story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TECH STACK TICKER
      ════════════════════════════════════════ */}
      <section className="bg-white py-6 overflow-hidden border-b border-gray-100">
        <div className="flex overflow-hidden">
          <div className="ticker-track">
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={i} className="flex items-center gap-3 text-sm font-semibold text-gray-500 px-4 py-1 bg-gray-50 rounded-full border border-gray-100 flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES GRID
      ════════════════════════════════════════ */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-5">
              What We <span className="text-brand-orange">Build & Deliver</span>
            </h2>
            <p className="text-gray-500 text-lg">
              End-to-end technology services — from elegant interfaces to scalable infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i * 0.08}
                  className="service-card bg-white rounded-2xl p-7 border border-gray-100 group cursor-default"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-5">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-brand-orange text-sm font-semibold hover:gap-2.5 transition-all duration-200">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FLAGSHIP — TNP PORTAL
      ════════════════════════════════════════ */}
      {/* NEW FLAGSHIP: AaramSe */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Decorative glows */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="flex flex-col lg:flex-row relative z-10">
              <motion.div
                className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeLeft}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-white/5 border border-white/10 text-white rounded-full text-xs font-bold tracking-wider w-fit">
                  <Star size={10} className="text-brand-orange fill-current" /> NEW FLAGSHIP PRODUCT
                </div>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-5 leading-tight">
                  AaramSe<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                    Digital Queue & Smart Appointments
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  A premium digital solution to eliminate physical waiting lines with live queue tracking, slot booking, and smart scheduling — now live in <span className="text-white font-semibold">Nanded</span>.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { icon: Smartphone, label: 'Mobile-first' },
                    { icon: Users, label: 'Users + Partners' },
                    { icon: Zap, label: 'Real-time updates' },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-200 text-xs"
                    >
                      <Icon size={14} className="text-brand-orange" />
                      <span className="font-semibold">{label}</span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-3 mb-10 text-gray-200/90">
                  {[
                    'Live queue tracking on your phone',
                    'Smart slot booking to avoid peak hours',
                    'Proactive sound alerts & turn notifications',
                    'Partner dashboard to manage daily flow',
                    'QR integration for quick onboarding',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="text-brand-orange flex-shrink-0" size={17} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                  <Link to="/aaramse">
                    <Button variant="primary">Explore AaramSe</Button>
                  </Link>
                  <Link to="/contact">
                    <button className="px-6 py-3 border border-white/25 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors">
                      Partner with Us →
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex-1 relative min-h-[440px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeRight}
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-[260px] sm:w-[300px] lg:w-[330px] aspect-[9/19] rounded-[2.6rem] overflow-hidden border border-white/15 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
                    <img
                      src={aaramseDashboardImg}
                      alt="AaramSe App Dashboard"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 ring-1 ring-white/10 rounded-[2.6rem] pointer-events-none" />
                  </div>
                </div>

                {/* Corner badge */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-2">
                  <div className="text-white text-xs font-bold">LIVE IN NANDED</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs">Active</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Decorative orange glow */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="flex flex-col lg:flex-row relative z-10">
              <motion.div
                className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeLeft}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange rounded-full text-xs font-bold tracking-wider w-fit">
                  <Star size={10} className="fill-current" /> FLAGSHIP PRODUCT
                </div>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-5 leading-tight">
                  TNP Portal<br />
                  <span className="text-brand-orange">Platform</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  A complete Training & Placement ecosystem for students, institutions, and recruiters — with automated shortlisting, real-time analytics, and seamless interview scheduling.
                </p>
                <ul className="space-y-3 mb-10 text-gray-300">
                  {[
                    'Student registration & detailed profiles',
                    'Automated shortlisting & scheduling',
                    'Advanced Admin Analytics Dashboard',
                    'Recruiter portal with bulk hiring tools',
                    'Real-time notifications & email alerts',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="text-brand-orange flex-shrink-0" size={17} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link to="/solutions">
                    <Button variant="primary">Explore TNP Portal</Button>
                  </Link>
                  <Link to="/contact">
                    <button className="px-6 py-3 border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors">
                      Request Demo →
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex-1 bg-gray-800 relative min-h-[380px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeRight}
              >
                <img
                  src={tnpImg}
                  alt="TNP Portal Dashboard"
                  className="absolute inset-0 w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-dark/80" />
                {/* Corner badge */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2">
                  <div className="text-white text-xs font-bold">LIVE PRODUCT</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs">Active</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OUR WORKS / PROJECTS
      ════════════════════════════════════════ */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-5">
              Products We've <span className="text-brand-orange">Built</span>
            </h2>
            <p className="text-gray-500 text-lg">Real-world solutions across diverse industries and technology stacks.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.name}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } } }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                      {proj.tag}
                    </span>
                    <h3 className="text-xl font-bold text-brand-dark mt-3">{proj.name}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                    <ArrowRight size={18} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/solutions">
              <Button variant="outline">Explore All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY HARIT
      ════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left */}
            <motion.div
              className="lg:w-5/12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3 block">Why HarIT</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
                We Don't Just Write Code, We{' '}
                <span className="text-brand-orange">Solve Problems</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Our approach bridges the gap between technical complexity and business simplicity. We're a long-term partner — not a one-time vendor.
              </p>
              <Link to="/contact">
                <Button variant="primary" withArrow>Start a Project</Button>
              </Link>
            </motion.div>

            {/* Right grid */}
            <motion.div
              className="lg:w-7/12 grid sm:grid-cols-2 gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i * 0.1}
                    className="group bg-brand-bg rounded-2xl p-6 border border-transparent hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA — DARK BAND
      ════════════════════════════════════════ */}
      <section className="py-28 bg-brand-dark relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-3xl translate-y-1/2" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,122,26,0.8) 1px, transparent 1px), linear-gradient(to right, rgba(255,122,26,0.8) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase">
              <Zap size={11} className="fill-current" />
              Let's Build Together
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Build Your<br />
              <span className="text-brand-orange">Next Digital Product?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Share your idea or challenge — we'll help you turn it into a robust, scalable solution that makes a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 px-10 rounded-full shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 text-base">
                  Schedule a Free Call <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/services">
                <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-4 px-10 rounded-full backdrop-blur-sm transition-all duration-300">
                  Our Services <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
