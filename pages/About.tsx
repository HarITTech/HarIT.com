import React from 'react';
import { Target, Users, Lightbulb, ShieldCheck, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-brand-bg">
      <div className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate builders, dreamers, and problem solvers committed to putting India on the global map for high-quality software engineering.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">From Passion to Product</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              HarIT Tech Solution began with a simple idea: technology should be an enabler, not a barrier. As a young team of engineers, we realized that while many companies offered services, few truly partnered with clients to understand the "why" behind the code.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we have grown into a full-service IT company helping educational institutes streamline their processes with our TNP Portal, and aiding startups in launching their MVPs. We believe in shipping code that works in the real world, not just on local machines.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
             <img src="https://picsum.photos/seed/office/600/400" alt="Our Team" className="w-full h-full object-cover"/>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-brand-orange mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses, institutes, and individuals with reliable, intelligent technology that drives measurable growth and solves genuine human problems.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100">
             <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-brand-orange mb-4">
              <Rocket size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become a trusted global partner for smart, scalable digital solutions, known for our transparency, quality, and technical excellence.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Lightbulb, title: "Innovation", text: "We constantly explore new stacks and AI tools to give you an edge." },
            { icon: ShieldCheck, title: "Ownership", text: "We treat your product like our own. No cutting corners." },
            { icon: Users, title: "Transparency", text: "No hidden costs. No jargon. Just honest collaboration." },
            { icon: Target, title: "Impact", text: "We focus on outcomes. Code is just a means to an end." }
          ].map((val, idx) => (
            <motion.div 
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm text-center hover:-translate-y-1 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-dark mb-4">
                <val.icon size={20} />
              </div>
              <h4 className="font-bold text-lg mb-2">{val.title}</h4>
              <p className="text-sm text-gray-500">{val.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;