import React, { useState } from 'react';
import { Mail, Briefcase, FileText, Send, CheckCircle, GraduationCap, Award, Zap, Code2, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import emailjs from '@emailjs/browser';

type ApplicationFormData = {
  name: string;
  email: string;
  phone: string;
  role: string;
  portfolio: string;
  coverLetter: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: 'easeOut' } })
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const internshipRoles = [
  {
    title: 'Software Development Intern',
    department: 'Engineering',
    duration: '3 - 6 Months',
    type: 'Remote / Hybrid',
    icon: Code2,
    color: 'from-orange-500 to-amber-400',
    description: 'Work alongside Piyush (CTO) and Dhanashree (Lead Engineer) to design, build, and deploy production-grade software features across our main products, including our core TNP Portal.',
    requirements: [
      'Good understanding of JavaScript/TypeScript, React.js, and Node.js.',
      'Familiarity with REST APIs, databases (MongoDB/PostgreSQL), and Git.',
      'Passion for solving complex challenges and writing clean, scalable code.'
    ],
    stipend: 'Performance-based + Certificate + PPO Opportunity'
  },
  {
    title: 'Business Development Intern',
    department: 'Business & Sales',
    duration: '3 - 6 Months',
    type: 'Remote / Hybrid',
    icon: Briefcase,
    color: 'from-amber-500 to-orange-400',
    description: 'Collaborate with Pranil (Business Head) to execute growth strategies, research market segments, establish key partnerships, and translate customer requirements into solutions.',
    requirements: [
      'Excellent verbal and written communication skills.',
      'Ability to build client rapport and deliver engaging presentations.',
      'Basic understanding of B2B sales cycles and customer success practices.'
    ],
    stipend: 'Performance-based + Incentives + PPO Opportunity'
  },
  {
    title: 'Marketing & Growth Intern',
    department: 'Marketing',
    duration: '3 Months',
    type: 'Remote',
    icon: Rocket,
    color: 'from-orange-400 to-red-400',
    description: 'Work with the design and leadership team to manage brand presence, run organic social campaigns, design newsletters, and create digital content that boosts engagement.',
    requirements: [
      'Familiarity with Canva, Figma, or basic video/graphic design tools.',
      'Comfortable managing professional social profiles (LinkedIn, Twitter).',
      'Strong creative writing skills and proactive campaign ideation.'
    ],
    stipend: 'Performance-based + Certificate'
  }
];

const Careers = () => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    email: '',
    phone: '',
    role: 'Software Development Intern',
    portfolio: '',
    coverLetter: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setStatusMsg(null);

    if (!formData.name || !formData.email || !formData.role || !formData.coverLetter) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      service: `Career Application - ${formData.role}`,
      message: `Role Applied: ${formData.role}\nPortfolio/Resume Link: ${formData.portfolio}\n\nCover Letter / Intro:\n${formData.coverLetter}`
    };

    try {
      // Connect to the same emailjs account as Contact page
      const result = await emailjs.send(
        "service_dk2k4xn",
        "template_zhpy45c",
        templateParams,
        "Lj7vKV7iFtvY20MOf"
      );

      if (result.status === 200) {
        setStatusMsg("Application submitted successfully! Our team will get back to you soon.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          role: 'Software Development Intern',
          portfolio: '',
          coverLetter: ''
        });
      } else {
        setErrorMsg("Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again later or reach out to careers@harittech.com.");
    } finally {
      setLoading(false);
    }
  };

  const selectRole = (roleTitle: string) => {
    setFormData(prev => ({ ...prev, role: roleTitle }));
    const formElement = document.getElementById('apply-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-bg overflow-hidden min-h-screen">
      {/* ─── Premium Dark Hero ─── */}
      <section className="relative pt-32 pb-24 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,122,26,0.8) 1px, transparent 1px), linear-gradient(to right, rgba(255,122,26,0.8) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-full text-xs font-bold tracking-widest uppercase">
                We Are Hiring
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Build the Future <span className="text-brand-orange text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">With Us</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Accelerate your growth. Join HarIT Tech Solution as an intern, collaborate directly with founders, build real-world software, and launch your professional journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Internships Section ─── */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-2">Available Roles</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Launch Your Internship</h2>
          <p className="text-gray-600 mt-3 text-base">We are looking for dedicated individuals seeking high impact and fast learning curves.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internshipRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl flex flex-col justify-between group hover:border-brand-orange/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${role.color} flex items-center justify-center text-white mb-6 shadow-md shadow-orange-500/10`}>
                  <role.icon size={22} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-brand-orange border border-orange-100">{role.department}</span>
                  <span className="text-xs text-gray-400">{role.type}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">{role.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{role.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">Requirements:</h4>
                  <ul className="space-y-2">
                    {role.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="h-px bg-gray-100 my-5" />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400">Duration: {role.duration}</span>
                  <span className="text-xs font-bold text-green-600">{role.stipend.split(' + ')[0]}</span>
                </div>
                <button
                  onClick={() => selectRole(role.title)}
                  className="w-full py-3 rounded-xl bg-brand-bg border border-gray-200 text-brand-dark text-xs font-bold hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Why Join Us ─── */}
      <section className="py-20 bg-brand-dark text-white border-t border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-2">Team Culture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Intern at HarIT?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: 'Mentorship', text: 'Get direct advice, guidance, and daily feedback sessions with Piyush and Mahesh.' },
              { icon: Users, title: 'Ownership', text: 'We do not delegate busywork. You will own real milestones and design actual code.' },
              { icon: Zap, title: 'Fast Learning', text: 'Acquire high-demand software development, marketing, and business skills in days, not months.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-start hover:bg-white/8 transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange mb-6">
                  <item.icon size={20} />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Application Form ─── */}
      <section id="apply-form" className="py-24 container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl relative">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-2">Submit Your Details</span>
            <h2 className="text-3xl font-bold text-brand-dark">Apply Online</h2>
            <p className="text-gray-500 mt-2 text-sm">Please submit your application details. We review all profiles within 3 working days.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Desired Internship *</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange transition-colors text-sm bg-white"
                  required
                >
                  <option value="Software Development Intern">Software Development Intern</option>
                  <option value="Business Development Intern">Business Development Intern</option>
                  <option value="Marketing & Growth Intern">Marketing & Growth Intern</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Resume / Portfolio Link (Drive, Github, etc.)</label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://myportfolio.com or drive-link"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Brief Cover Letter / Introduction *</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about yourself and why you'd like to join HarIT Tech Solution..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                required
              />
            </div>

            {errorMsg && (
              <div className="text-red-500 text-xs font-semibold text-center">{errorMsg}</div>
            )}

            {statusMsg && (
              <div className="text-green-600 text-xs font-semibold text-center flex items-center justify-center gap-1.5">
                <CheckCircle size={16} /> {statusMsg}
              </div>
            )}

            <div className="flex justify-center pt-2">
              <Button type="submit" disabled={loading} className="w-full sm:w-auto px-8 py-3 bg-brand-orange text-white hover:bg-brand-orangeHover">
                {loading ? 'Submitting...' : 'Submit Application'} <Send size={14} className="inline ml-1" />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;
