import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Zap, Check } from "lucide-react";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: "easeOut" } })
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "Custom Development",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setStatusMsg(null);

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill all required fields.");
      return;
    }

    setLoading(true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      service: formData.service,
      message: formData.message
    };

    try {
      const result = await emailjs.send(
        "service_dk2k4xn",
        "template_zhpy45c",
        templateParams,
        "Lj7vKV7iFtvY20MOf"
      );

      if (result.status === 200) {
        setStatusMsg("Thanks for reaching out! We will contact you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Custom Development",
          message: ""
        });
      } else {
        setErrorMsg("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-brand-bg overflow-hidden">
      <SEO 
        title="Contact Our Team" 
        description="Have a question or a custom development project in mind? Reach out to HarIT Tech Solution's engineering and business development team." 
      />
      {/* ─── Premium Dark Hero ─── */}
      <section className="relative pt-32 pb-32 bg-brand-dark overflow-hidden">
        {/* Background Gradients & Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange-400/5 rounded-full blur-[80px] translate-y-1/2 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,122,26,0.8) 1px, transparent 1px), linear-gradient(to right, rgba(255,122,26,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase">
                <Zap size={14} className="fill-current" /> Let's Connect
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Build Something <span className="text-brand-orange text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Remarkable</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Have an idea? Need to modernize your existing stack? Our team of experts is ready to help you ship faster and scale better.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section className="container mx-auto px-4 md:px-8 -mt-20 relative z-20 pb-24">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info (Left) */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp} custom={0.3}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col gap-10 h-full">
              <div>
                <h3 className="text-3xl font-bold text-brand-dark mb-3">Get in Touch</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Fill out the form, and our engineering team will get back to you within 24 hours. No strings attached.
                </p>
              </div>

              <div className="space-y-8 flex-grow">
                {/* Email */}
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center group">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-1">Email Us</h4>
                    <a href="mailto:harittechsolution@gmail.com" className="text-xl font-bold text-brand-dark hover:text-brand-orange transition-colors">
                      harittechsolution@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center group">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-1">Call Us</h4>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+917028654498" className="text-xl font-bold text-brand-dark hover:text-brand-orange transition-colors">
                        +91-7028654498
                      </a>
                      <a href="tel:+919561700261" className="text-lg font-bold text-gray-700 hover:text-brand-orange transition-colors">
                        +91-9561700261
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center group">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-1">Visit Us</h4>
                    <a 
                      href="https://maps.google.com/?q=Nagpur, Maharashtra, India 440017" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-brand-dark hover:text-brand-orange transition-colors block leading-snug"
                    >
                      Nagpur, Maharashtra<br/>India - 440017
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <h4 className="font-bold text-brand-dark mb-2">FAQ: Next Steps?</h4>
                <p className="text-sm text-gray-600">
                  Usually a 30-minute discovery call to discuss technical feasibility, roadmap, and pricing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form (Right) */}
          <motion.div 
             initial="hidden" animate="visible" variants={fadeUp} custom={0.4}
             className="lg:col-span-3"
          >
            <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border-t-8 border-brand-orange h-full">
              <h2 className="text-3xl font-bold mb-8 text-brand-dark">Send us a message</h2>

              {statusMsg && (
                <div className="mb-8 p-4 bg-green-50/80 border border-green-200 text-green-700 rounded-2xl font-medium flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"><Check size={18} /></span>
                  {statusMsg}
                </div>
              )}
              {errorMsg && (
                <div className="mb-8 p-4 bg-red-50/80 border border-red-200 text-red-700 rounded-2xl font-medium">{errorMsg}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-between h-[calc(100%-80px)]">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-brand-orange">*</span></label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-orange-100 focus:bg-white outline-none transition-all font-medium"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-brand-orange">*</span></label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-orange-100 focus:bg-white outline-none transition-all font-medium"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-orange-100 focus:bg-white outline-none transition-all font-medium"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Project Type</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-orange-100 focus:bg-white outline-none transition-all font-medium appearance-none cursor-pointer"
                      >
                        <option>Custom Development</option>
                        <option>Website & App Development</option>
                        <option>AI Automation & Agentic Systems</option>
                        <option>Custom AI & ML Solutions</option>
                        <option>Database Management & Optimization</option>
                        <option>ERP System Development</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">How can we help? <span className="text-brand-orange">*</span></label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-orange-100 focus:bg-white outline-none transition-all font-medium resize-none"
                      placeholder="Tell us about your project goals, timelines, or any specific requirements..."
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="primary" className="w-full text-lg py-5 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"} <Send size={20} className="ml-2 inline" />
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
