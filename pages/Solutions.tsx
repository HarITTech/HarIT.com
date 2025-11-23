import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Users, BarChart3, Lock, Calendar } from 'lucide-react';
import Button from '../components/Button';

const Solutions: React.FC = () => {
  return (
    <div className="bg-brand-bg pb-20">
      {/* Header */}
      <div className="bg-brand-orange text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ready-to-deploy platforms and custom-engineered products designed to accelerate your digital transformation.
          </p>
        </div>
      </div>

      {/* TNP Section */}
      <div className="container mx-auto px-4 md:px-8 -mt-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20 border-t-8 border-brand-orange">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
               <div className="inline-block px-3 py-1 mb-4 bg-orange-100 text-brand-orange rounded-full text-xs font-semibold tracking-wider">
                  FEATURED PRODUCT
                </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">TNP Portal</h2>
              <h3 className="text-xl text-gray-500 font-medium mb-6">Complete Training & Placement Automation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The TNP Portal is HarIT's flagship product designed for educational institutions. It bridges the gap between students, placement officers, and recruiters, digitizing the entire campus recruitment lifecycle.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <h4 className="font-bold text-brand-dark flex items-center gap-2">
                    <Users size={18} className="text-brand-orange" /> For Students
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Profile Builder & Resume Gen</li>
                    <li>• One-click Job Applications</li>
                    <li>• Interview Status Tracking</li>
                  </ul>
                </div>
                 <div className="space-y-3">
                  <h4 className="font-bold text-brand-dark flex items-center gap-2">
                    <BarChart3 size={18} className="text-brand-orange" /> For Institutes
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Company Database Mgmt</li>
                    <li>• Automated Eligibility Checks</li>
                    <li>• Real-time Placement Stats</li>
                  </ul>
                </div>
              </div>
              
              <Link to="/contact">
                <Button variant="primary">Request a Live Demo</Button>
              </Link>
            </div>
            <div className="lg:w-1/2 bg-gray-50 rounded-xl border border-gray-200 p-2 shadow-inner">
               <img src="https://picsum.photos/seed/tnpportal/800/600" alt="TNP Portal UI" className="rounded-lg w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Other Solutions */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">Custom ERP & Dashboards</h3>
            <p className="text-gray-600 mb-6">
              Move beyond spreadsheets. We build custom ERP solutions for SMEs to manage inventory, HR, sales, and accounts in a unified cloud interface.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-500">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Role-based access control</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Real-time reporting</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Mobile-friendly interface</li>
            </ul>
             <Link to="/contact">
                <Button variant="outline" className="text-sm">Learn More</Button>
              </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">E-Commerce Accelerators</h3>
            <p className="text-gray-600 mb-6">
              Launch your online store faster with our pre-built modules for payment integration, cart management, and order fulfillment tracking.
            </p>
             <ul className="space-y-2 mb-6 text-sm text-gray-500">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> High-performance storefronts</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Secure payment gateways</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Admin inventory management</li>
            </ul>
            <Link to="/contact">
                <Button variant="outline" className="text-sm">Learn More</Button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;