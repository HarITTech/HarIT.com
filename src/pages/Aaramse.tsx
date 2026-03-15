import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Clock,
  QrCode,
  Search,
  Shield,
  Smartphone,
  Star,
  Users,
} from 'lucide-react';
import Button from '../components/Button';
import startImg from '../assets/aaramse/start.jpg';
import dashboardImg from '../assets/aaramse/dashboard.jpg';
import profileImg from '../assets/aaramse/profile.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: 'easeOut' } }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const PLAY_STORE_URL = 'https://play.google.com/store/search?q=AaramSe&c=apps';
const GITHUB_REPO_URL = 'https://github.com/HarITTech/Aaramse_1.0';
const GITHUB_CLONE_URL = `${GITHUB_REPO_URL}.git`;

const Aaramse: React.FC = () => {
  return (
    <div className="bg-brand-bg overflow-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-brand-orange/10 rounded-full blur-[110px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-indigo-400/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,122,26,0.8) 1px, transparent 1px), linear-gradient(to right, rgba(255,122,26,0.8) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 text-gray-100 rounded-full text-xs font-bold tracking-widest uppercase">
                <Star size={14} className="fill-current text-brand-orange" /> Product by HarIT Tech Solution
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              Aaram<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Se</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              AaramSe (Hindi for "With Ease") is a digital queue & smart appointment solution designed to eliminate physical waiting lines
              with live tracking and smart scheduling — now live in Nanded.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.3} className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                { icon: Clock, label: 'Real-time queue' },
                { icon: Bell, label: 'Turn alerts' },
                { icon: Shield, label: 'Secure' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm"
                >
                  <Icon size={16} className="text-brand-orange" />
                  <span className="font-semibold">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={0.4} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-shadow">
                  View on Play Store <ArrowRight size={18} className="ml-2 inline" />
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="border-white/30 text-white hover:border-brand-orange hover:bg-brand-orange">
                  Partner with Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview + Visual */}
      <section className="container mx-auto px-4 md:px-8 -mt-12 relative z-20 pb-20">
        <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-orange-50 text-brand-orange rounded-full text-xs font-bold tracking-wider">
                <Smartphone size={14} className="text-brand-orange" /> PREMIUM BOOKING SOLUTION
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-5 leading-tight">
                No more waiting.<br />
                <span className="text-brand-orange">AaramSe.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether it's a doctor's clinic, a retail store, or a service center, AaramSe bridges the gap between service providers
                and customers with live queue visibility and smart scheduling.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  'Find verified clinics, stores, and services near you',
                  'Track past and upcoming bookings from one place',
                  'Partners get a dashboard to manage daily flow and availability',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="text-brand-orange mt-0.5 shrink-0" size={18} />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <Link to="/aaramse/privacy-policy">
                  <Button variant="outline" fullWidth className="rounded-2xl px-4 py-3">
                    Privacy Policy
                  </Button>
                </Link>
                <Link to="/aaramse/terms">
                  <Button variant="outline" fullWidth className="rounded-2xl px-4 py-3">
                    Terms &amp; Conditions
                  </Button>
                </Link>
                <Link to="/aaramse/refund-policy">
                  <Button variant="outline" fullWidth className="rounded-2xl px-4 py-3">
                    Refund Policy
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 md:p-12 flex items-center justify-center">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-6 bg-brand-orange/15 blur-2xl rounded-[2rem]" />
                <div className="relative grid grid-cols-3 gap-4 items-end">
                  <div className="col-span-1">
                    <div className="aspect-[9/19] rounded-[2.2rem] overflow-hidden border border-white/15 shadow-xl">
                      <img src={startImg} alt="AaramSe Start Screen" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className="col-span-1 -translate-y-6">
                    <div className="aspect-[9/19] rounded-[2.4rem] overflow-hidden border border-white/20 shadow-2xl">
                      <img src={dashboardImg} alt="AaramSe Dashboard" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="aspect-[9/19] rounded-[2.2rem] overflow-hidden border border-white/15 shadow-xl">
                      <img src={profileImg} alt="AaramSe Profile Screen" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-2">
                  <div className="text-white text-xs font-bold">LIVE IN NANDED</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3 block">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-5">
              Built for <span className="text-brand-orange">Customers</span> &amp; <span className="text-brand-orange">Partners</span>
            </h2>
            <p className="text-gray-500 text-lg">A single platform to streamline queues, bookings, and daily operations.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Users */}
            <motion.div
              className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.1}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                  <Users className="text-brand-orange" size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-brand-dark">For Users (Customers)</h3>
                  <p className="text-gray-500 text-sm">Queue visibility + smart scheduling.</p>
                </div>
              </div>

              <ul className="space-y-4 text-gray-700">
                {[
                  { icon: Clock, text: 'Live Queue Tracking — watch your position update in real time.' },
                  { icon: Shield, text: 'Smart Slot Booking — plan your visit and avoid peak hours.' },
                  { icon: Bell, text: 'Proactive Notifications — sound alerts when your turn is near.' },
                  { icon: Search, text: 'Search & Discover — find verified stores/clinics near you.' },
                  { icon: CheckCircle2, text: 'History — track past and upcoming appointments.' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="mt-0.5 w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-brand-orange" />
                    </div>
                    <span className="text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Partners */}
            <motion.div
              className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.2}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                  <BarChart3 className="text-brand-orange" size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-brand-dark">For Partners (Store/Clinic Owners)</h3>
                  <p className="text-gray-500 text-sm">Dashboard, slots, branding, and QR onboarding.</p>
                </div>
              </div>

              <ul className="space-y-4 text-gray-700">
                {[
                  { icon: BarChart3, text: 'Digital Dashboard — manage daily flow with real-time insights.' },
                  { icon: Shield, text: 'Slot Control — configure slots, holidays, and availability instantly.' },
                  { icon: Users, text: 'Customer Management — attendance, cancellations, and history.' },
                  { icon: Smartphone, text: 'Business Branding — showcase services with images and descriptions.' },
                  { icon: QrCode, text: 'QR Integration — generate and download storefront QR codes.' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="mt-0.5 w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-brand-orange" />
                    </div>
                    <span className="text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack + Setup */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3 block">Tech Stack</span>
              <h2 className="text-4xl font-bold text-brand-dark mb-5">Modern. Fast. Scalable.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                AaramSe is built with a mobile-first stack and a secure, scalable backend architecture.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  'React Native (Expo)',
                  'NativeWind (Tailwind CSS)',
                  'Expo Notifications',
                  'React Navigation',
                  'Axios',
                  'Node.js',
                  'Express',
                  'MongoDB (Atlas)',
                  'JWT',
                  'Render',
                ].map((t) => (
                  <span key={t} className="text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-brand-dark rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl" />
              <div className="relative">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3 block">Installation</span>
                <h3 className="text-2xl font-extrabold text-white mb-4">Quick Setup</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Clone the repo and run backend + app locally. Update environment variables for MongoDB and JWT.
                </p>

                <div className="space-y-4">
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4 overflow-x-auto">
                    <pre className="text-xs text-gray-200 leading-relaxed">
                      <code>{`git clone ${GITHUB_CLONE_URL}
cd Aaramse_1.0

# Backend
cd backend
npm install
# create .env with: MONGO_URI, JWT_SECRET, PORT
npm start`}</code>
                    </pre>
                  </div>
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4 overflow-x-auto">
                    <pre className="text-xs text-gray-200 leading-relaxed">
                      <code>{`# Frontend (Appoint)
cd ../Appoint
npm install
npx expo start`}</code>
                    </pre>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-3 bg-white/10 border border-white/15 text-white text-sm font-semibold rounded-full hover:bg-white/15 transition-colors">
                      View GitHub Repo →
                    </button>
                  </a>
                  <Link to="/contact">
                    <Button variant="primary">Request Integration</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Bring <span className="text-brand-orange">AaramSe</span> to your city
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Want AaramSe for your clinic, store, or service center? Let's set up a partner dashboard, branding, and onboarding.
          </p>
          <Link to="/contact">
            <Button variant="primary" withArrow>
              Talk to Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Aaramse;
