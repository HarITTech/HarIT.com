import React, { useState } from "react";
import {
  FaPhone,
  FaComments,
  FaPaperPlane,
  FaRegCommentDots,
} from "react-icons/fa";

const Connect = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event, formType) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    const response = await fetch("https://formsubmit.co/ajax/harittechsolution@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      const data = await response.json();
      console.log("Error", data);
      setResult(data.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="font-roboto bg-blue-50 min-h-screen">
      <main className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
          How would you like to contact{" "}
          <span className="text-3xl font-bold text-gray-700">
            HarIT Tech Solution?
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Request a Call Section */}
          <div className="bg-white bg-opacity-30 border-[2px] border-gray-200 backdrop-blur-md p-8 shadow-lg rounded-lg glass-effect">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaPhone className="mr-2 text-blue-600" /> Request a call.
            </h2>
            <p className="text-gray-600 mb-6">
              Give us some info so the right person can get back to you.
            </p>
            <form onSubmit={(e) => onSubmit(e, "requestCall")}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  className="border border-gray-300 p-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  className="border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <input
                type="text"
                name="job_title"
                placeholder="Job title"
                className="border border-gray-300 p-2 rounded w-full mb-4"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 p-2 rounded w-full mb-4"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="border border-gray-300 p-2 rounded w-full mb-4"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="border border-gray-300 p-2 rounded w-full mb-4"
                required
              />
              <select
                name="employees"
                className="border border-gray-300 p-2 rounded w-full mb-4"
                required
              >
                <option value="">Employees</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201+">201+</option>
              </select>
              <select
                name="country"
                className="border border-gray-300 p-2 rounded w-full mb-4"
                required
              >
                <option value="">Country/Region</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                {/* Add more countries as needed */}
              </select>
              <select
                name="product_interest"
                className="border border-gray-300 p-2 rounded w-full mb-4"
                required
              >
                <option value="">Product Interest</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Cloud Solutions">Cloud Solutions</option>
                {/* Add more options as needed */}
              </select>
              <div className="flex items-start mt-4 mb-4">
                <input type="checkbox" name="marketing" className="mt-1" />
                <label className="ml-2 text-gray-600">
                  Yes, I would like to receive marketing communications
                  regarding products, services, and events. I can unsubscribe at
                  any time.
                </label>
              </div>
              <button
                type="submit"
                className="bg-sky-400 text-white px-4 py-2 rounded w-full transition duration-300 hover:bg-sky-700"
              >
                <FaPaperPlane className="inline mr-2" /> CONTACT ME
              </button>
            </form>
            <span>{result}</span>
          </div>

          {/* Other Contact Options */}
          <div className="space-y-8">
            {/* Call Section */}
            <div className="bg-white border-[2px] border-gray-200 bg-opacity-30 backdrop-blur-md p-8 shadow-lg rounded-lg glass-effect">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FaPhone className="mr-2 text-blue-600" /> Give us a call.
              </h2>
              <p className="text-gray-600 mb-4">1-800-387-3285</p>
              <a href="#" className="text-blue-600 hover:underline">
                Not in the US? Find your local office
              </a>
              <br />
              <a href="#" className="text-blue-600 hover:underline">
                Get billing and tech support
              </a>
            </div>

            {/* Chat Section */}
            <div className="bg-white border-[2px] border-gray-200 bg-opacity-30 backdrop-blur-md p-8 shadow-lg rounded-lg glass-effect">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FaComments className="mr-2 text-blue-600" /> Chat with us.
              </h2>
              <p className="text-gray-600 mb-4">
                Get product info, login help, and live chat with an agent.
              </p>
              <button className="bg-sky-400 text-white px-4 py-2 rounded transition duration-300 hover:bg-sky-500">
                <FaRegCommentDots className="inline mr-2" /> LET'S CHAT
              </button>
            </div>

            {/* Feedback Section */}
            <div className="bg-white border-[2px] border-gray-200 bg-opacity-30 backdrop-blur-md p-8 shadow-lg rounded-lg glass-effect">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FaRegCommentDots className="mr-2 text-blue-600" /> Leave us
                some feedback.
              </h2>
              <p className="text-gray-600 mb-4">
                Good or bad, we love to hear it all.
              </p>
              <form onSubmit={(e) => onSubmit(e, "feedback")}>
                <textarea
                  name="feedback"
                  placeholder="Your feedback"
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-sky-400 text-white px-4 py-2 rounded transition duration-300 hover:bg-sky-500"
                >
                  <FaPaperPlane className="inline mr-2" /> SEND FEEDBACK
                </button>
              </form>
              <span>{result}</span>
            </div>

            {/* TNP Portal Issue Section */}
            <div className="bg-white border-[2px] border-gray-200 bg-opacity-30 backdrop-blur-md p-8 shadow-lg rounded-lg glass-effect">
              <div className="flex items-center mb-4">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="TNP Portal logo"
                  className="h-12 w-12 mr-4 rounded-sm shadow-md"
                />
                <h2 className="text-2xl text-purple-950 font-bold">
                  TNP Portal Issue
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Please provide details of the issue you are facing along with a
                screenshot.
              </p>
              <form onSubmit={(e) => onSubmit(e, "tnpPortalIssue")}>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                />
                <textarea
                  name="issue_description"
                  placeholder="Describe the issue"
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                ></textarea>
                  <input
                  type="file"
                  name="attachment"
                  accept="image/png, image/jpeg"
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                />
                <button
                  type="submit"
                  className="bg-sky-400 text-white px-4 py-2 rounded w-full transition duration-300 hover:bg-sky-500"
                >
                  <FaPaperPlane className="inline mr-2" /> SUBMIT ISSUE
                </button>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Connect;

<style jsx>{`
  .glass-effect {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`}</style>;
