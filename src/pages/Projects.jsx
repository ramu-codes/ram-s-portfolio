 // src/pages/Projects.jsx
import React from "react";

const projectData = [
  {
    id: 1,
    title: "Full-Stack E-commerce Platform",
    description:
      "A complete online shopping system featuring user authentication, product management, cart functionality, and secure payment gateway integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe/PayPal"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 2,
    title: "Modern Agriculture Information Platform",
    description:
      "A data-driven platform designed to connect farmers with resources, market trends, and modern techniques, built with a focus on data visualization.",
    technologies: ["MERN Stack", "Data Visualization Lib", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 3,
    title: "Advanced Task Management Application",
    description:
      "A collaborative to-do app with drag-and-drop functionality, real-time updates, and user-specific task lists, emphasizing efficient state management.",
    technologies: ["React (Vite)", "Context API", "Express REST API", "MongoDB"],
    githubLink: "#",
    liveLink: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-tr from-gray-900 via-black to-gray-100 py-32 sm:py-24 overflow-hidden"
    >
      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal lines */}
        <div className="absolute top-1/3 left-0 w-full h-[2px] bg-white/20"></div>
        <div className="absolute top-2/3 left-0 w-full h-[2px] bg-white/40"></div>
        {/* Vertical line */}
        <div className="absolute left-1/4 top-0 h-full w-[2px] bg-white/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl font-black text-white">
            MY WORK
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-medium text-indigo-600">
            Proof of skill: Modern Full-Stack Applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="group bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] transition-all duration-500 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold bg-indigo-50 text-indigo-600 rounded-full shadow-sm group-hover:bg-indigo-100 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex space-x-4">
                <a
                  href={project.githubLink}
                  className="px-5 py-2 rounded-lg bg-white text-gray-900 font-bold shadow-md border border-gray-200 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:shadow-lg"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Note */}
        <div className="mt-24 text-center text-gray-100 max-w-3xl mx-auto">
          <p className="text-base italic leading-relaxed">
            These projects highlight my expertise in the <strong>MERN Stack</strong> and my ability to craft clean, impactful full-stack solutions. Explore them on <strong>GitHub</strong> for code details.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float 20s ease-in-out infinite; animation-delay: -10s; }
      `}</style>
    </section>
  );
};

export default Projects;
