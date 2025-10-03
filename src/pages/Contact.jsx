 import React from "react";
import emailjs from "emailjs-com";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => alert("Message sent! ✅"))
      .catch((err) => console.error("EmailJS error:", err));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-32 bg-gradient-to-tr from-gray-900 via-black to-gray-100  overflow-hidden"
    >
      {/* 🔹 Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal lines */}
        <div className="absolute top-1/3 left-0 w-full h-[2px] bg-white/20"></div>
        <div className="absolute top-2/3 left-0 w-full h-[2px] bg-white/40"></div>
        {/* Vertical line */}
        <div className="absolute left-1/4 top-0 h-full w-[2px] bg-white/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl font-black text-white tracking-tight leading-tight mb-6">
            <span className="inline-block hover:scale-105 transition-transform duration-500">
              LET'S
            </span>{" "}
            <span className="text-indigo-500 hover:scale-110 transition-transform duration-500">
              CONNECT
            </span>
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-gray-300 max-w-3xl mx-auto">
            I am currently seeking{" "}
            <strong className="text-white">internship opportunities</strong> and
            ready to build amazing things 🚀
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* 🔹 Contact Form */}
          <div className="lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="I'd love to chat about your projects..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* 🔹 Contact Details */}
          <div className="lg:w-1/3 space-y-8">
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-indigo-600" /> Direct Email
              </h3>
              <p className="text-lg font-medium text-gray-700 break-words">
                your.professional.email@domain.com
              </p>
              <p className="mt-4 text-sm text-gray-500">
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Find Me Online
              </h3>
              <div className="space-y-4">
                <a
                  href=" https://www.linkedin.com/in/ramu-chaurasiya-8b9933295/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-indigo-600 hover:text-indigo-800 transition duration-150"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="text-lg font-medium">LinkedIn Profile</span>
                </a>
                <a
                  href=" https://github.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-800 hover:text-black transition duration-150"
                >
                  <Github className="w-6 h-6" />
                  <span className="text-lg font-medium">GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
