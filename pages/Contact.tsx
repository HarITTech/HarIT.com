// import React, { useState } from "react";
// import axios from "axios";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import Button from "../components/Button";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const Contact: React.FC = () => {
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


// type FormData = {
//   name: string;
//   email: string;
//   phone: string;
//   service: string;
//   message: string;
// };

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     service: "Custom Development",
//     message: ""
//   });

//   const [loading, setLoading] = useState(false);
//   const [statusMsg, setStatusMsg] = useState<string | null>(null);
//   const [errorMsg, setErrorMsg] = useState<string | null>(null);

//   // If you want to attach screenshots (optional)
//   const screenshotUrl1 = "/mnt/data/041fe0fa-3d12-4c87-9b6e-c68979028221.png";
//   const screenshotUrl2 = "/mnt/data/341f38ee-5121-421e-a4be-03e0a9bfa486.png";

//   const resetForm = () =>
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       service: "Custom Development",
//       message: ""
//     });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     setStatusMsg(null);
//     setErrorMsg(null);

//     // Quick front-end validation
//     if (!formData.name || !formData.email || !formData.message) {
//       setErrorMsg("Please fill all required fields (name, email, message).");
//       return;
//     }

//     setLoading(true);

//     try {
//       const payload = {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         service: formData.service,
//         message: formData.message,
//         // Optional: include screenshots (your tooling will transform local path to usable URL)
//         screenshots: [screenshotUrl1, screenshotUrl2]
//       };

//       // Adjust baseURL if your backend is hosted elsewhere
//       const response = await axios.post("http://localhost:3000/contact", payload, {
//         headers: { "Content-Type": "application/json" },
//         timeout: 15000
//       });

//       if (response.data?.success) {
//         setStatusMsg("Thanks for reaching out. We will get back to you shortly.");
//         resetForm();
//       } else {
//         // Backend responded but with a non-success result
//         setErrorMsg(response.data?.message || "Unexpected response from server.");
//       }
//     } catch (err: any) {
//       if (err.response) {
//         // Server returned a response (4xx or 5xx)
//         setErrorMsg(err.response.data?.message || `Server error: ${err.response.status}`);
//       } else if (err.code === "ECONNABORTED") {
//         setErrorMsg("Request timed out. Please try again.");
//       } else {
//         setErrorMsg("Unable to send message. Check your network or try later.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

  return (
    <div className="bg-brand-bg py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Let's Build Something Remarkable</h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Have an idea? Need to modernize your existing stack?
              Fill out the form, and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg">Email Us</h3>
                  <p className="text-gray-600">harittechsolution@gmail.com</p>
                  {/* <p className="text-gray-600">careers@harittech.in</p> */}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg">Call Us</h3>
                  <p className="text-gray-600">+91-7028654498 | +91-9561700261</p>
                  <p className="text-xs text-gray-500 mt-1">Mon-sat, 9am - 7pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg">Visit Us</h3>
                  <p className="text-gray-600 max-w-xs">Nagpur, Maharashtra, India - 440017</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
              <h3 className="font-bold text-brand-dark mb-3">FAQ: How long does a consultation take?</h3>
              <p className="text-sm text-gray-600">Usually 30 minutes. We'll discuss your requirements, tech feasibility, and give you a rough roadmap—no strings attached.</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-brand-dark">Send us a message</h2>

            {statusMsg && <div className="mb-4 p-3 bg-green-50 text-green-700 rounded">{statusMsg}</div>}
            {errorMsg && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded">{errorMsg}</div>}

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
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all bg-white"
                >
                  <option>Custom Development</option>
                  <option>Website & App Development</option>
                  <option>AI Automation & Agentic Systems</option>
                  <option>Custom AI & ML Solutions</option>
                  <option>Database Management & Optimization</option>
                  <option>ERP System Development</option>
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
                />
              </div>

              <Button type="submit" variant="primary" fullWidth className="text-base py-4" disabled={loading}>
                {loading ? "Sending..." : "Send Message"} <Send size={18} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
