import React, { useState } from "react";
import {
  FaPhone,
  FaComments,
  FaPaperPlane,
  FaRegCommentDots,
  FaEnvelope,
} from "react-icons/fa";

const Connect = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event, formType) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("form_type", formType); // Add form type to differentiate submissions

    try {
      const response = await fetch("https://formsubmit.co/ajax/harittechsolution@gmail.com", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setResult("Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("Network error. Please try again later.");
    }

    setTimeout(() => setResult(""), 5000); // Clear result after 5 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white font-roboto">
      <main className="container mx-auto py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 animate-fade-in">
          Contact{" "}
          <span className="text-orange-400">HarIT Tech Solution</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Request a Call Section */}
          <div className="bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-2xl glass-effect transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-orange-400">
              <FaPhone className="mr-3" /> Request a Call
            </h2>
            <p className="text-gray-300 mb-6">
              Let us know how we can assist you. We'll get the right person to reach out!
            </p>
            <form onSubmit={(e) => onSubmit(e, "requestCall")}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input type="text" name="first_name" placeholder="First Name" className="input-field" required />
                <input type="text" name="last_name" placeholder="Last Name" className="input-field" required />
              </div>
              <input type="text" name="job_title" placeholder="Job Title" className="input-field mb-4" required />
              <input type="email" name="email" placeholder="Email" className="input-field mb-4" required />
              <input type="tel" name="phone" placeholder="Phone" className="input-field mb-4" required />
              <input type="text" name="company" placeholder="Company" className="input-field mb-4" required />
              <select name="employees" className="input-field mb-4 " required>
                <option value="">Number of Employees</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201+">201+</option>
              </select>
              <select name="country" className="input-field mb-4" required>
                <option value="">Country/Region</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <select name="product_interest" className="input-field mb-4" required>
                <option value="">Product Interest</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Cloud Solutions">Cloud Solutions</option>
              </select>
              <div className="flex items-start mb-6">
                <input type="checkbox" name="marketing" className="mt-1 mr-2" />
                <label className="text-gray-400 text-sm">
                  Yes, I’d like to receive marketing communications. Unsubscribe anytime.
                </label>
              </div>
              <button type="submit" className="btn-primary w-full">
                <FaPaperPlane className="inline mr-2" /> Contact Me
              </button>
              <p className="text-gray-300 text-sm mt-4 text-center">{result}</p>
            </form>
          </div>

          {/* Other Contact Options */}
          <div className="space-y-8">
            {/* Call Section */}
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-2xl glass-effect transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-orange-400">
                <FaPhone className="mr-3" /> Give Us a Call
              </h2>
              <p className="text-gray-300 mb-4">1-800-387-3285</p>
              <a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
                Not in the US? Find your local office
              </a>
              <br />
              <a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
                Get billing and tech support
              </a>
            </div>

            {/* Chat Section */}
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-2xl glass-effect transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-orange-400">
                <FaComments className="mr-3" /> Chat With Us
              </h2>
              <p className="text-gray-300 mb-4">
                Need product info or login help? Chat live with an agent!
              </p>
              <button className="btn-primary w-full">
                <FaRegCommentDots className="inline mr-2" /> Let’s Chat
              </button>
            </div>

            {/* Feedback Section */}
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-2xl glass-effect transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-orange-400">
                <FaRegCommentDots className="mr-3" /> Leave Feedback
              </h2>
              <p className="text-gray-300 mb-4">We value your input—good or bad!</p>
              <form onSubmit={(e) => onSubmit(e, "feedback")}>
                <textarea
                  name="feedback"
                  placeholder="Your feedback"
                  className="input-field mb-4 h-32 resize-none"
                  required
                ></textarea>
                <button type="submit" className="btn-primary w-full">
                  <FaPaperPlane className="inline mr-2" /> Send Feedback
                </button>
                <p className="text-gray-300 text-sm mt-4 text-center">{result}</p>
              </form>
            </div>

            {/* TNP Portal Issue Section */}
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-2xl glass-effect transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="TNP Portal logo"
                  className="h-12 w-12 mr-4 rounded-md shadow-md"
                />
                <h2 className="text-2xl font-semibold text-orange-400">TNP Portal Issue</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Facing an issue? Share the details and a screenshot—we’ll fix it fast!
              </p>
              <form onSubmit={(e) => onSubmit(e, "tnpPortalIssue")}>
                <input type="text" name="first_name" placeholder="First Name" className="input-field mb-4" required />
                <input type="text" name="last_name" placeholder="Last Name" className="input-field mb-4" required />
                <input type="email" name="email" placeholder="Email" className="input-field mb-4" required />
                <textarea
                  name="issue_description"
                  placeholder="Describe the issue"
                  className="input-field mb-4 h-32 resize-none"
                  required
                ></textarea>
                <input
                  type="file"
                  name="attachment"
                  accept="image/png, image/jpeg"
                  className="input-field mb-4 text-gray-300"
                />
                <button type="submit" className="btn-primary w-full">
                  <FaPaperPlane className="inline mr-2" /> Submit Issue
                </button>
                <p className="text-gray-300 text-sm mt-4 text-center">{result}</p>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Custom CSS */}
      <style jsx>{`
        .glass-effect {
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .input-field {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: white;
          transition: all 0.3s ease;
        }
        .input-field:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 8px rgba(249, 115, 22, 0.5);
        }
        .btn-primary {
          background: #f97316;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          background: #ea580c;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
        }
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

export default Connect;