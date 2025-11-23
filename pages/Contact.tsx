import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Custom Development',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thanks for reaching out! We will get back to you shortly.");
    setFormData({ name: '', email: '', phone: '', projectType: 'Custom Development', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-brand-bg py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Let's Build Something Remarkable</h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Have an idea? Need to modernize your existing stack? Or just want to know more about our TNP Portal? 
              Fill out the form, and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg">Email Us</h3>
                  <p className="text-gray-600">info@harittech.in</p>
                  <p className="text-gray-600">careers@harittech.in</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg">Call Us</h3>
                  <p className="text-gray-600">+91-9876543210</p>
                  <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9am - 7pm IST</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg">Visit Us</h3>
                  <p className="text-gray-600 max-w-xs">IT Park, Nagpur, Maharashtra, India - 440022</p>
                </div>
              </div>
            </div>
            
            {/* FAQ Mini */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
               <h3 className="font-bold text-brand-dark mb-3">FAQ: How long does a consultation take?</h3>
               <p className="text-sm text-gray-600">Usually 30 minutes. We'll discuss your requirements, tech feasibility, and give you a rough roadmap—no strings attached.</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-brand-dark">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    placeholder="+91..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all bg-white"
                >
                  <option>Custom Development</option>
                  <option>TNP Portal Implementation</option>
                  <option>Cloud & DevOps</option>
                  <option>AI / Data Solution</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                  placeholder="Tell us about your project goals..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" fullWidth className="text-base py-4">
                Send Message <Send size={18} className="ml-2" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;