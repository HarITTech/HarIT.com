import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Ghost } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="bg-brand-dark min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Orbs & Effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,122,26,0.8) 1px, transparent 1px), linear-gradient(to right, rgba(255,122,26,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="text-center max-w-lg z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-brand-orange animate-bounce">
            <Ghost size={56} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-7xl md:text-9xl font-extrabold text-white mb-4 tracking-tighter"
        >
          4<span className="text-brand-orange">0</span>4
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-4"
        >
          Lost in Space?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed text-sm md:text-base"
        >
          The page you are looking for doesn't exist or has been moved. Let's get you back on track to engineering excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-orange to-amber-400 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(255,122,26,0.3)] transition-all duration-300"
          >
            <Home size={16} /> Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 font-bold rounded-xl transition-all duration-300"
          >
            <ArrowLeft size={16} /> Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
