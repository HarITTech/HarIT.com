import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cloud, Brain, GraduationCap, Layout as LayoutIcon, Settings, CheckCircle2, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import homeImg from '../assets/home_img1.png';
import tnpImg from '../assets/TNP1.png';
import { ServiceItem, TestimonialItem } from '../../types';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  const services: ServiceItem[] = [
    {
      title: 'Custom Web & Mobile',
      description: 'Design and development of responsive web apps, portals, and mobile applications tailored to your business workflows.',
      icon: Code
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud architecture, deployment, CI/CD pipelines, and infrastructure optimization for secure, scalable applications.',
      icon: Cloud
    },
    {
      title: 'AI-ML Solutions',
      description: 'From intelligent analytics to machine learning models for prediction, classification, and computer vision.',
      icon: Brain
    },
    {
      title: 'Training & Placement',
      description: 'End-to-end portals like our TNP Platform that manage student profiles, job postings, interviews, and analytics.',
      icon: GraduationCap
    },
    {
      title: 'UI/UX Design',
      description: 'Wireframes, prototypes, and pixel-perfect UI with a focus on user journeys and conversion.',
      icon: LayoutIcon
    },
    {
      title: 'Support & Maintenance',
      description: 'Long-term technical support, monitoring, and feature evolution for your live products.',
      icon: Settings
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="inline-block px-3 py-1 mb-6 bg-orange-100 text-brand-orange rounded-full text-xs font-semibold tracking-wider uppercase">
              Your Trusted Tech Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-brand-dark">
              Smart IT Solutions that <span className="text-brand-orange">Actually Ship</span> and Scale
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              HarIT Tech Solution is your partner for building robust software, cloud platforms, and AI-powered products — from concept to code to impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button variant="primary" withArrow>Book a Free Consultation</Button>
              </Link>
              <Link to="/solutions">
                <Button variant="outline">Explore TNP Portal</Button>
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 text-sm font-medium text-gray-500">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-orange" /> Custom Software</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-orange" /> Cloud Native</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-orange" /> AI & Data</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
             {/* Abstract/Tech Background visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={homeImg} 
                alt="HarIT Team Collaboration" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <CheckCircle2 size={20} />
                </div>
                <div className="font-bold text-gray-800">100% Success Rate</div>
              </div>
              <p className="text-xs text-gray-500">Delivering production-ready code for startups and institutions.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Strip */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">Who We Are</h2>
           <p className="text-xl md:text-2xl text-brand-dark font-medium leading-relaxed">
             "HarIT Tech Solution is an Indian IT services company helping businesses, institutes, and startups ship production-ready software. We blend innovation with reliability."
           </p>
           <Link to="/about" className="inline-flex items-center mt-6 text-brand-orange font-semibold hover:underline">
             Read our story <ArrowRight className="ml-1 w-4 h-4" />
           </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-bg container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">What We Build & Deliver</h2>
          <p className="text-gray-600 text-lg">End-to-end technology services to take you from idea to impact.</p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100 group"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Flagship Product Highlight - TNP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 mb-6 bg-brand-orange/20 text-brand-orange rounded-full text-xs font-semibold tracking-wider w-fit">
                  FLAGSHIP PRODUCT
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  TNP Portal Platform
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  A complete ecosystem for students, institutions, and recruiters to connect, manage placements, and track outcomes efficiently with real-time analytics.
                </p>
                <ul className="space-y-4 mb-10 text-gray-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-orange" size={20} />
                    Student registration & detailed profiles
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-orange" size={20} />
                    Automated shortlisting & scheduling
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-orange" size={20} />
                    Advanced Admin Analytics
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link to="/solutions">
                    <Button variant="primary">Explore TNP Portal</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-dark">Request Demo</Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 bg-gray-800 relative min-h-[400px]">
                <img 
                  src={tnpImg} 
                  alt="TNP Dashboard Mockup" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-dark/90"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Why Partner with HarIT?</h2>
            <p className="text-gray-600 text-lg mb-8">
              We don't just write code; we solve business problems. Our approach bridges the gap between technical complexity and user simplicity.
            </p>
            <Link to="/contact">
              <Button variant="secondary" withArrow>Start a Project</Button>
            </Link>
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-dark">End-to-End Ownership</h3>
              <p className="text-gray-600 text-sm leading-relaxed">From brainstorming and architecture to deployment and support — we stay with you throughout the product lifecycle.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-dark">Modern Tech Stack</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Cloud-native, API-first, and AI-augmented solutions built using contemporary, industry-trusted technologies.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-dark">Quality, Not Just Code</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We care about performance, security, UX, and maintainability — not just shipping quickly.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-dark">Transparent Communication</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Regular updates, clear roadmaps, and honest timelines so you always know what’s happening.</p>
            </div>
          </div>
        </div>
      </section>

       {/* CTA Band */}
       <section className="py-24 bg-gradient-to-r from-brand-orange to-orange-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your Next Digital Product?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Share your idea or challenge, and we’ll help you turn it into a robust, scalable solution.
          </p>
          <Link to="/contact">
            <button className="bg-white text-brand-orange font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              Schedule a Call
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;