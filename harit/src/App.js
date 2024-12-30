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
import logo from "./Harit.png";

const App = () => {
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
        <p className="text-3xl font-bold text-gray-800 hindi-font kalam-regular">
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

export default App;
