import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaRobot,
  FaDatabase,
  FaServer,
  FaSearchDollar,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaRocket,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Harit.png";

const Construction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-600 text-white flex flex-col items-center justify-start px-4 py-10 overflow-y-auto">
      {/* Header Section */}
      <header className="text-center mt-10 mb-12 w-full flex flex-col items-center">
        <img
          src={logo}
          alt="HarIT Tech Solution Logo"
          className="w-32 h-32 mb-4 drop-shadow-2xl shadow-orange-500 animate-fade-in"
        />
        <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-white mb-4 tracking-tight">
          HarIT Tech Solution
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-orange-300 hindi-font kalam-regular animate-pulse">
          जल्द ही मुलाकात होगी....❤️
        </p>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-300">
          We’re building something extraordinary. Stay tuned for cutting-edge tech solutions tailored to your needs!
        </p>
      </header>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Our Services</h2>
        <div className="w-32 h-1 mx-auto bg-orange-500 rounded mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: <FaCode />, title: "Web Development", color: "blue-600" },
            { icon: <FaMobileAlt />, title: "Mobile App Development", color: "green-500" },
            { icon: <FaCloud />, title: "Cloud Solutions", color: "purple-500" },
            { icon: <FaShieldAlt />, title: "Cybersecurity", color: "red-500" },
            { icon: <FaChartLine />, title: "Digital Marketing", color: "orange-500" },
            { icon: <FaRobot />, title: "AI & Automation", color: "pink-500" },
            { icon: <FaDatabase />, title: "Database Management", color: "yellow-500" },
            { icon: <FaServer />, title: "Server Management", color: "teal-500" },
            { icon: <FaSearchDollar />, title: "SEO Optimization", color: "cyan-500" },
          ].map((service, index) => (
            <div
              key={index}
              className={`bg-gray-800 bg-opacity-80 border border-gray-700 rounded-lg p-6 flex flex-col items-center text-center hover:border-${service.color} hover:text-${service.color} hover:scale-105 transform transition-all duration-300 shadow-lg`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">What to Expect</h2>
        <div className="w-32 h-1 mx-auto bg-orange-500 rounded mb-10"></div>
        <div className="space-y-8">
          {[
            { step: "Phase 1", title: "Design & Planning", desc: "Crafting a user-centric design and robust architecture.", date: "Q1 2025" },
            { step: "Phase 2", title: "Development", desc: "Building innovative solutions with the latest tech.", date: "Q2 2025" },
            { step: "Phase 3", title: "Launch", desc: "Unveiling HarIT Tech Solution to the world!", date: "Q3 2025" },
          ].map((phase, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">{index + 1}</div>
              <div>
                <h3 className="text-xl font-semibold text-orange-300">{phase.title}</h3>
                <p className="text-gray-300">{phase.desc}</p>
                <p className="text-sm text-gray-400">Expected: {phase.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Section */}
      <section className="max-w-2xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">Stay Updated</h2>
        <p className="text-gray-300 mb-6">Subscribe to get the latest updates on our launch!</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaEnvelope /> Subscribe
          </button>
        </form>
      </section>

      {/* Call to Action */}
      <section className="mb-16">
        <Link to="/connect">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <FaRocket /> Get in Touch
          </button>
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 py-8 text-center text-gray-400">
        <p className="text-lg mb-4">
          Contact Us:{" "}
          <a href="mailto:info@harittech.in" className="text-orange-400 hover:text-orange-500 font-semibold">
            info@harittech.in
          </a>
        </p>
        <div className="flex justify-center gap-6 mb-6">
          {[
            { icon: <FaFacebookF />, link: "https://facebook.com", color: "blue-600" },
            { icon: <FaTwitter />, link: "https://twitter.com", color: "blue-400" },
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/harit-tech-solution", color: "blue-700" },
            { icon: <FaInstagram />, link: "https://instagram.com", color: "pink-600" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              className={`text-2xl hover:text-${social.color} transition-all duration-300 p-2 rounded-full hover:bg-gray-800`}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p>© 2025 HarIT Tech Solution. All Rights Reserved.</p>
      </footer>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Construction;