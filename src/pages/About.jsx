// src/pages/About.jsx
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  GraduationCap,
  Monitor,
  ArrowRight,
  Download,
} from "lucide-react";

/* ─── Timeline Data ─────────────────────────────────────────── */
const timelineItems = [
  // {
  //   side: "left",
  //   date: "July 2025 – Aug 2025",
  //   icon: Monitor,
  //   iconColor: "#2dd4bf", // Emerald
  //   title: " Looking for a internship ",
  //   subtitle: "Full Stack Developer Intern (MERN) · Remote, Noida, Ghaziabad",
  //   points: [
  //     "Developed and deployed a full-stack web application using React.js, Node.js, and Express.js, improving overall system performance by nearly 50%.",
  //     "Designed and implemented RESTful APIs and integrated MongoDB for efficient data storage and retrieval.",
  //     "Worked under structured mentorship, gaining hands-on experience with industry-standard MERN workflows and scalable backend development.",
  //   ],
  // },
  {
    side: "right",
    date: "2023 – 2026",
    icon: GraduationCap,
    iconColor: "#818cf8", // Indigo
    title: "Ajay Kumar Garg Engineering College",
    subtitle: "B.Tech in Computer Science & Engineering · Ghaziabad, Uttar Pradesh",
    points: ["CGPA: 8.05", "Focused on MERN stack, DSA, and System Design."],
  },
  {
    side: "left",
    date: "2020 – 2023",
    icon: GraduationCap,
    iconColor: "#facc15", // Yellow
    title: "Mahatma Gandhi Inter College gorakhpur",
    subtitle: "10+2 · Uttar Pradesh",
    points: ["Percentage: 80%"],
  },
  {
    side: "right",
    date: "2018 – 2019",
    icon: GraduationCap,
    iconColor: "#a78bfa", // Purple
    title: "DN inter College Maharajganj",
    subtitle: "High School · Uttar Pradesh",
    points: ["Percentage: 83.33%"],
  },
];

/* ─── Timeline Card ─────────────────────────────────────────── */
const TimelineCard = ({ item }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const isLeft = item.side === "left";
  const Icon = item.icon;

  return (
    <div ref={ref} className="relative flex items-center justify-center w-full mb-16 md:mb-24">
      {/* Center node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
        className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center rounded-full w-12 h-12 md:w-14 md:h-14 bg-slate-800"
        style={{
          border: `2px solid ${item.iconColor}`,
          boxShadow: `0 0 20px ${item.iconColor}40`,
        }}
      >
        <Icon size={20} style={{ color: item.iconColor }} />
      </motion.div>

      {/* Connector arrow from node toward card (Hidden on small screens) */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="hidden md:block absolute left-1/2 top-7 h-px w-[calc(6%-0px)] z-10"
        style={{
          background: `${item.iconColor}60`,
          transformOrigin: isLeft ? "left" : "right",
          transform: isLeft ? "translateX(28px)" : "translateX(calc(-100% - 28px))",
        }}
      />

      {/* Date */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="absolute text-sm font-bold tracking-wide z-10"
        style={{
          color: item.iconColor,
          left: isLeft ? "calc(50% + 44px)" : "auto",
          right: isLeft ? "auto" : "calc(50% + 44px)",
          top: "14px",
          whiteSpace: "nowrap",
        }}
      >
        {item.date}
      </motion.span>

      {/* Card — slides smoothly from left or right */}
      <motion.div
        initial={{
          x: isLeft ? -80 : 80,
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={
          inView
            ? { x: 0, opacity: 1, filter: "blur(0px)" }
            : {}
        }
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.25, 0.1, 0.25, 1], // Very smooth easing
        }}
        whileHover={{
          y: -5,
          boxShadow: `0 20px 40px ${item.iconColor}15`,
          borderColor: `${item.iconColor}50`,
        }}
        className="relative rounded-2xl p-6 md:p-8 backdrop-blur-xl transition-all duration-300 w-[85%] md:w-[43%]"
        style={{
          marginLeft: isLeft ? "0" : "auto",
          marginRight: isLeft ? "auto" : "0",
          background: "rgba(30, 41, 59, 0.6)", // Match Hero's slate tones
          border: "1px solid rgba(148,163,184,0.1)",
          marginTop: "50px", // Offset for mobile stacking
        }}
      >
        {/* Top shimmer line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${item.iconColor}80, transparent)`,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
        />

        <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{item.title}</h3>
        <p className="text-sm mb-5 font-medium" style={{ color: item.iconColor }}>
          {item.subtitle}
        </p>
        {item.points.map((pt, i) => (
          <p key={i} className="text-sm leading-relaxed mb-2 text-slate-300 font-light">
            • {pt}
          </p>
        ))}
      </motion.div>
    </div>
  );
};

/* ─── Scroll-driven timeline line ──────────────────────────── */
const TimelineLine = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20 }); // Smoother spring

  return (
    <div ref={ref} className="relative">
      {/* Background Track */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate-700/50" />
      
      {/* Glowing progress line */}
      <motion.div
        className="absolute left-1/2 top-0 w-[2px] origin-top -translate-x-1/2"
        style={{
          scaleY,
          height: "100%",
          background: "linear-gradient(to bottom, #818cf8, #34d399, #a78bfa)",
          boxShadow: "0 0 15px rgba(99,102,241,0.5)",
        }}
      />

      {/* Top dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 rounded-full z-10 bg-indigo-400 shadow-[0_0_15px_#818cf8]"
      />
      {/* Bottom dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3 h-3 rounded-full z-10 bg-purple-400 shadow-[0_0_15px_#a78bfa]"
      />

      <div className="py-10">{children}</div>
    </div>
  );
};

/* ─── Main ──────────────────────────────────────────────────── */
const About = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const smoothY = useSpring(rawY, { stiffness: 60, damping: 25 });

  return (
    <section
      ref={heroRef}
      id="about"
      // Reduced top padding (pt-12 instead of py-24) to remove upper margin gap
      className="relative overflow-hidden pt-12 pb-24 px-6 sm:px-8 lg:px-12"
      style={{ background: "rgb(26,38,55)" }} // Exact match to Hero background
    >
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient Glows Matching Hero */}
      <motion.div
        className="absolute -right-40 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-40 bottom-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.1) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div style={{ y: smoothY }} className="relative z-10 max-w-7xl mx-auto">
        
        {/* ── Bio Section ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 mt-8"
        >
           

          {/* Heading - Font matches Hero now */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-12">
             About me
          </h2>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Text */}
            <div className="lg:col-span-3">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="text-lg sm:text-xl leading-relaxed mb-6 text-slate-300 font-light"
              >
                I'm a passionate{" "}
                <span className="font-semibold text-emerald-400">
                  Backend-Oriented Full Stack Developer
                </span>{" "}
                who loves turning ideas into scalable, user-friendly web applications and solving critical problems with{" "}
                <span className="font-semibold text-indigo-400">DSA & Algorithms</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg leading-relaxed mb-6 text-slate-400 font-light"
              >
                I specialize in building modern web products using{" "}
                <span className="font-medium text-white">MERN stack, clean UI design, optimized backend logic</span>, and performance-focused development. With a strong foundation in DSA and CS fundamentals, I enjoy writing efficient, maintainable code.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="text-base sm:text-lg leading-relaxed mb-10 text-slate-400 font-light"
              >
                Currently pursuing B.Tech in CSE — I've worked on AI chatbots, rental platforms, and healthcare systems. Looking to contribute my skills to a growth-oriented tech team.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-5"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99,102,241,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-emerald-600 shadow-lg transition-all"
                >
                  Hire Me <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(99,102,241,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-200 border-2 border-slate-600 hover:border-indigo-400 transition-all"
                >
                  Resume <Download size={18} />
                </motion.a>
              </motion.div>
            </div>

            {/* Stats Panel */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-5">
              {[
                { value: "15+", label: "Projects", color: "#818cf8" },
                { value: "300+", label: "DSA Problems", color: "#34d399" },
                { value: "8.05", label: "CGPA", color: "#a78bfa" },
                { value: "1+", label: "Internship", color: "#facc15" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -5, borderColor: s.color, boxShadow: `0 10px 30px ${s.color}15` }}
                  className="rounded-2xl p-6 text-center bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl transition-all duration-300"
                >
                  <p className="text-3xl sm:text-4xl font-extrabold mb-2" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Timeline heading ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 pt-10"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Timeline
          </h2>
          <p className="text-lg text-slate-400 font-light">Education & Experience</p>
        </motion.div>

        {/* ── Timeline ─────────────────────────────────────── */}
        <TimelineLine>
          {timelineItems.map((item, i) => (
            <TimelineCard key={i} item={item} />
          ))}
        </TimelineLine>
        
      </motion.div>
    </section>
  );
};

export default About;