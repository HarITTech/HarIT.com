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
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Harit.png";

const Construction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-orange-500 flex flex-col items-center justify-center px-4 overflow-y-visible">
      {/* Header Section */}
      <header className="text-center mt-3 mb-16 w-full flex flex-col items-center">
        <img
          src={logo} // Replace with your logo URL
          alt="Company Logo"
          className="mb-1 drop-shadow-3xl shadow-white" // Applying drop shadow
        />
        <h1 className="text-5xl font-serif font-extrabold text-gray-800 mb-4">
          HarIT Tech Solution
        </h1>
        <p className="text-3xl font-extrabold text-gray-800 hindi-font kalam-regular animate-pulse">
          जल्द ही मुलाकात होगी....❤️
        </p>

       
      </header>

      <h1 className="text-center mb-2 font-serif font-semibold text-gray-600 text-2xl">
        Our Services
      </h1>
      <div className="w-48 h-1 mx-auto bg-orange-500 rounded mb-4"></div>

      {/* Services Section */}
      <section className="grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="inset-0 bg-white border-[1px] cursor-pointer text-gray-500 hover:border-blue-600 hover:text-blue-600 border-gray-300 bg-opacity-20 backdrop-blur-sm shadow-2xl rounded-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaCode className="text-6xl mb-2" />
          <h2 className="text-xl font-semibold text-center">Web Development</h2>
        </div>

        {/* Service 2 */}
        <div className="inset-0 bg-white border-[1px] cursor-pointer text-gray-500 hover:border-green-500 hover:text-green-500 border-gray-300 bg-opacity-20 backdrop-blur-sm shadow-2xl rounded-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaMobileAlt className="text-6xl mb-2" />
          <h2 className="text-xl font-semibold text-center">
            Mobile App Development
          </h2>
        </div>

        {/* Service 3 */}
        <div className="inset-0 bg-white border-[1px] cursor-pointer text-gray-500 hover:border-purple-500 hover:text-purple-500 border-gray-300 bg-opacity-20 backdrop-blur-sm shadow-2xl rounded-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaCloud className="text-6xl mb-2" />
          <h2 className="text-xl font-semibold text-center">Cloud Solutions</h2>
        </div>

        {/* Service 4 */}
        <div className="inset-0 bg-white border-[1px] cursor-pointer text-gray-500 hover:border-red-500 hover:text-red-500 border-gray-300 bg-opacity-20 backdrop-blur-sm shadow-2xl rounded-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaShieldAlt className="text-6xl mb-2" />
          <h2 className="text-xl font-semibold text-center">Cybersecurity</h2>
        </div>

        {/* Service 5 */}
        <div className="inset-0 bg-white border-[1px] cursor-pointer text-gray-500 hover:border-orange-500 hover:text-orange-500 border-gray-300 bg-opacity-20 backdrop-blur-sm shadow-2xl rounded-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaChartLine className="text-6xl mb-2" />
          <h2 className="text-xl font-semibold text-center">
            Digital Marketing
          </h2>
        </div>

        {/* Service 6 */}
        <div className="inset-0 bg-white border-[1px] cursor-pointer text-gray-500 hover:border-pink-500 hover:text-pink-500 border-gray-300 bg-opacity-20 backdrop-blur-sm shadow-2xl rounded-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaRobot className="text-6xl mb-2" />
          <h2 className="text-xl font-semibold text-center">AI & Automation</h2>
        </div>

        {/* Service 7 */}
        <div className="inset-0 bg-white border-[1px] cursor-pointer text-gray-500 hover:border-yellow-500 hover:text-yellow-500 border-gray-300 bg-opacity-20 backdrop-blur-sm shadow-2xl rounded-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaDatabase className="text-6xl mb-2" />
          <h2 className="text-xl font-semibold text-center">
            Database Management
          </h2>
        </div>

        {/* Service 8 */}
        <div className="inset-0 bg-white border-[1px] cursor-pointer text-gray-500 hover:border-teal-500 hover:text-teal-500 border-gray-300 bg-opacity-20 backdrop-blur-sm shadow-2xl rounded-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaServer className="text-6xl mb-2" />
          <h2 className="text-xl font-semibold text-center">
            Server Management
          </h2>
        </div>

        {/* Service 9 */}
        <div className="inset-0 bg-white border-[1px] cursor-pointer text-gray-500 hover:border-cyan-500 hover:text-cyan-500 border-gray-300 bg-opacity-20 backdrop-blur-sm shadow-2xl rounded-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <FaSearchDollar className="text-6xl mb-2" />
          <h2 className="text-xl font-semibold text-center">
            SEO Optimization
          </h2>
        </div>
      </section>

       {/* Navigation Button */}
       <div className="mt-8">
          <Link to="/connect">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 glow-button">
              Get in Touch
            </button>
          </Link>
        </div>

        <style jsx>{`
          button {
            --green: #1bfd9c;
            font-size: 15px;
            padding: 0.7em 2.7em;
            letter-spacing: 0.06em;
            position: relative;
            font-family: inherit;
            border-radius: 0.6em;
            overflow: hidden;
            transition: all 0.3s;
            line-height: 1.4em;
            border: 2px solid var(--green);
            background: linear-gradient(
              to right,
              rgba(27, 253, 156, 0.1) 1%,
              transparent 40%,
              transparent 60%,
              rgba(27, 253, 156, 0.1) 100%
            );
            color: var(--green);
            box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4),
              0 0 9px 3px rgba(27, 253, 156, 0.1);
          }

          button:hover {
            color: #82ffc9;
            box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6),
              0 0 9px 3px rgba(27, 253, 156, 0.2);
          }

          button:before {
            content: "";
            position: absolute;
            left: -4em;
            width: 4em;
            height: 100%;
            top: 0;
            transition: transform 0.4s ease-in-out;
            background: linear-gradient(
              to right,
              transparent 1%,
              rgba(27, 253, 156, 0.1) 40%,
              rgba(27, 253, 156, 0.1) 60%,
              transparent 100%
            );
          }

          button:hover:before {
            transform: translateX(15em);
          }
        `}</style>

      {/* Footer Section */}
      <footer className="mt-16 text-center mb-7 text-gray-600 text-sm font-semibold">
        <p className="text-center mb-4 font-semibold text-gray-700">
          Contact Us:{" "}
          <a
            href="mailto:info@harittech.com"
            className="text-md ml-1 font-bold hover:text-blue-600 text-gray-800 drop-shadow-lg"
          >
            info@harittech.in
          </a>
        </p>

        <div className="flex justify-center gap-6 mb-4 ">
          <a
            href="https://facebook.com"
            className="text-blue-600 hover:text-blue-800 text-3xl shadow-md p-2 rounded-full transition-all border-gray-300 hover:bg-opacity-20 hover:backdrop-blur-sm hover:bg-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:text-blue-600 text-3xl shadow-md p-2 rounded-full transition-all border-gray-300 hover:bg-opacity-20 hover:backdrop-blur-sm hover:bg-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/harit-tech-solution/posts/?feedView=all"
            className="text-blue-700 hover:text-blue-900 text-3xl shadow-md p-2 rounded-full transition-all border-gray-300 hover:bg-opacity-20 hover:backdrop-blur-sm hover:bg-white"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-600 hover:text-pink-800 text-3xl shadow-md p-2 rounded-full transition-all border-gray-300 hover:bg-opacity-20 hover:backdrop-blur-sm hover:bg-white"
          >
            <FaInstagram />
          </a>
        </div>

        <p>&copy; 2025 HarIT Tech Solution. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Construction;
