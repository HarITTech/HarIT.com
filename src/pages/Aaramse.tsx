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
  Store,
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

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase">
                <Star size={16} className="fill-current" /> Why AaramSe Stands Out
              </div>
            </motion.div>
            
            <motion.h2 variants={fadeUp} custom={0.1} className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-6 leading-tight">
              Transforming Lives, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">One Queue at a Time</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} custom={0.2} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From customers booking appointments at home to doctors managing entire operations, and store owners scaling their business—AaramSe delivers real value for everyone.
            </motion.p>
          </motion.div>

          {/* Customer Benefits */}
          <motion.div
            className="mb-16 bg-gradient-to-br from-white to-orange-50/30 rounded-3xl overflow-hidden shadow-2xl border border-white relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.15}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/0 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="p-8 md:p-14 relative">
              {/* Header with icon */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 pb-8 border-b border-gray-200/50">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-orange-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center shadow-lg">
                      <Users className="text-white" size={36} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark">For Customers</h3>
                    <p className="text-gray-600 text-lg mt-1">Book, track, and manage appointments with complete ease</p>
                  </div>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { icon: Smartphone, title: 'Book From Home', desc: 'Schedule appointments anytime, anywhere without leaving your house' },
                  { icon: Clock, title: 'Real-Time Queue Updates', desc: 'Know your exact position in the queue, updated live every second' },
                  { icon: Bell, title: 'Smart Notifications', desc: 'Get timely alerts when your turn is approaching' },
                  { icon: Shield, title: 'Digital Documents', desc: 'Access all medical/service documents on the app after completion' },
                  { icon: Search, title: 'Complete History', desc: 'View all past appointments with detailed records and full history' },
                  { icon: CheckCircle2, title: 'Discover Services', desc: 'Find verified clinics, stores, and service centers near you' },
                ].map(({ icon: Icon, title, desc }, idx) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    custom={0.2 + idx * 0.05}
                    className="bg-gradient-to-br from-orange-50 via-white to-orange-100/20 hover:from-orange-100 hover:via-orange-50 rounded-2xl p-6 border border-orange-200/60 shadow-sm hover:shadow-lg transition-all duration-300 group/card cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange/30 to-orange-400/10 flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform">
                        <Icon size={24} className="text-brand-orange" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-brand-dark text-base leading-tight">{title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mt-2">{desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hospital/Doctor Benefits */}
          <motion.div
            className="mb-16 bg-gradient-to-br from-white to-indigo-50/30 rounded-3xl overflow-hidden shadow-2xl border border-white relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.25}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="p-8 md:p-14 relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 pb-8 border-b border-gray-200/50">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
                      <BarChart3 className="text-white" size={36} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark">For Hospitals & Doctors</h3>
                    <p className="text-gray-600 text-lg mt-1">Streamline operations, boost efficiency, and grow your practice</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { icon: Users, title: 'One-Click Patient View', desc: 'Access all patients and appointments with a single click' },
                  { icon: BarChart3, title: 'Digital Queue Management', desc: 'Manage and control patient queues directly from the app' },
                  { icon: Clock, title: 'Daily Slot Records', desc: 'Get complete records of all slots daily with detailed analytics' },
                  { icon: Shield, title: 'Automate Operations', desc: 'Upgrade from manual work to automated, modern technology' },
                  { icon: Smartphone, title: 'Business Growth', desc: 'Reach more patients, increase bookings, and grow faster' },
                  { icon: CheckCircle2, title: 'Crowd Management', desc: 'Efficiently manage hospital traffic and maintain optimal flow' },
                  { icon: QrCode, title: 'Digital Records', desc: 'Maintain complete digital records of every patient interaction' },
                  { icon: Bell, title: 'Staff Coordination', desc: 'Coordinate with your team and manage appointments effortlessly' },
                  { icon: Search, title: 'Performance Analytics', desc: 'Get insights into appointment trends and peak hours' },
                ].map(({ icon: Icon, title, desc }, idx) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    custom={0.3 + idx * 0.04}
                    className="bg-gradient-to-br from-indigo-50 via-white to-blue-100/20 hover:from-indigo-100 hover:via-indigo-50 rounded-2xl p-6 border border-indigo-200/60 shadow-sm hover:shadow-lg transition-all duration-300 group/card cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/30 to-indigo-400/10 flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform">
                        <Icon size={24} className="text-indigo-600" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-brand-dark text-base leading-tight">{title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mt-2">{desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Store Owner Benefits */}
          <motion.div
            className="mb-16 bg-gradient-to-br from-white to-green-50/30 rounded-3xl overflow-hidden shadow-2xl border border-white relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.35}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="p-8 md:p-14 relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 pb-8 border-b border-gray-200/50">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                      <Store className="text-white" size={36} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark">For Store & Service Owners</h3>
                    <p className="text-gray-600 text-lg mt-1">Transform your retail and service operations into a modern business</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { icon: Bell, title: 'Eliminate Physical Queues', desc: 'Say goodbye to long waiting lines and chaos at your store' },
                  { icon: BarChart3, title: 'Digital Queue System', desc: 'Manage customer queues digitally from a smart dashboard' },
                  { icon: Users, title: 'Multi-Location Support', desc: 'Manage multiple store locations and branches seamlessly' },
                  { icon: Clock, title: 'Business Growth', desc: 'Attract more customers and increase sales through better service' },
                  { icon: Smartphone, title: 'Crowd Control', desc: 'Maintain optimal customer flow and reduce operational stress' },
                  { icon: CheckCircle2, title: 'Digital Record Keeping', desc: 'Maintain accurate records of all transactions and customers' },
                  { icon: Shield, title: 'Smart Scheduling', desc: 'Optimize your availability and manage peak hours effectively' },
                  { icon: Search, title: 'Customer Insights', desc: 'Understand customer patterns and preferences with analytics' },
                  { icon: QrCode, title: 'Easy Onboarding', desc: 'Get QR code for quick customer onboarding to your store' },
                ].map(({ icon: Icon, title, desc }, idx) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    custom={0.4 + idx * 0.04}
                    className="bg-gradient-to-br from-green-50 via-white to-emerald-100/20 hover:from-green-100 hover:via-green-50 rounded-2xl p-6 border border-green-200/60 shadow-sm hover:shadow-lg transition-all duration-300 group/card cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/30 to-green-400/10 flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform">
                        <Icon size={24} className="text-green-600" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-brand-dark text-base leading-tight">{title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mt-2">{desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Why AaramSe CTA */}
          <motion.div
            className="relative bg-gradient-to-r from-brand-orange via-orange-500 to-amber-400 rounded-3xl overflow-hidden shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
          >
            {/* Premium background pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative p-10 md:p-16 text-center text-white z-10">
              <motion.h3 variants={fadeUp} custom={0.55} className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Ready to Join the Queue Revolution?
              </motion.h3>
              
              <motion.p variants={fadeUp} custom={0.6} className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of satisfied customers and thriving businesses already transforming their operations with AaramSe. The future of queue management is here—and it starts today.
              </motion.p>
              
              <motion.div variants={fadeUp} custom={0.65} className="flex flex-col sm:flex-row justify-center gap-4">
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="primary" className="bg-white text-brand-orange hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all text-base font-bold px-8">
                    Download App Now <ArrowRight size={20} className="ml-2 inline" />
                  </Button>
                </a>
                <Link to="/contact" className="inline-block">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all text-base font-bold px-8">
                    Partner With Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
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
