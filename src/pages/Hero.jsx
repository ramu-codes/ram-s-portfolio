// src/pages/Hero.jsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import avatarPlaceholder from '../assets/profile-pic.jpg';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import leetcodeIcon from '../assets/icons8-leetcode-24.png';

/* ─── Floating Particle ─────────────────────────────────────── */
const Particle = ({ x, y, size, duration, delay, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
    animate={{
      y: [0, -30, 0],
      x: [0, 10, -10, 0],
      opacity: [0, 0.6, 0],
      scale: [0.7, 1.2, 0.7],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

/* ─── OrbitRing ──────────────────────────────────────────────── */
const OrbitRing = ({ size, duration, delay, color, clockwise = true }) => (
  <motion.div
    className="absolute rounded-full border pointer-events-none"
    style={{
      width: size,
      height: size,
      borderColor: color,
      borderWidth: 1,
      top: '50%',
      left: '50%',
      x: '-50%',
      y: '-50%',
    }}
    animate={{ rotate: clockwise ? 360 : -360 }}
    transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
  />
);

/* ─── Typing Cursor ──────────────────────────────────────────── */
const Cursor = () => (
  <motion.span
    className="inline-block w-[3px] h-[0.85em] bg-indigo-400 ml-1 align-middle"
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 1, repeat: Infinity }}
  />
);

/* ─── Magnetic Button ────────────────────────────────────────── */
const MagneticBtn = ({ children, className, href, download, target, rel }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 25 });
  const sy = useSpring(y, { stiffness: 250, damping: 25 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      target={target}
      rel={rel}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.a>
  );
};

/* ─── Particles Config ───────────────────────────────────────── */
const particles = [
  { x: 10, y: 15, size: '5px', duration: 5, delay: 0,    color: '#818cf8' },
  { x: 20, y: 75, size: '4px', duration: 7, delay: 1,    color: '#34d399' },
  { x: 75, y: 20, size: '6px', duration: 6, delay: 0.5,  color: '#a78bfa' },
  { x: 85, y: 65, size: '4px', duration: 8, delay: 2,    color: '#60a5fa' },
  { x: 45, y: 80, size: '5px', duration: 5, delay: 1.5,  color: '#f472b6' },
  { x: 35, y: 5,  size: '4px', duration: 9, delay: 0.8,  color: '#818cf8' },
  { x: 65, y: 85, size: '5px', duration: 6, delay: 3,    color: '#34d399' },
];

/* ─── Stagger Variants ───────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, filter: 'blur(10px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 100, damping: 16 },
  },
};

/* ─── Hero ───────────────────────────────────────────────────── */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center overflow-hidden pt-16 pb-8"
      style={{ background: 'rgb(26,38,55)' }} // Modern dark blue-gray background
    >
      {/* Subtle ambient glow – left */}
      <motion.div
        className="absolute -left-60 top-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle ambient glow – right */}
      <motion.div
        className="absolute -right-60 bottom-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,212,191,0.15) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── Left text ── */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-10">
              <motion.span
                className="w-3 h-3 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-mono font-medium text-indigo-300 uppercase tracking-widest border border-indigo-500/30 px-4 py-1.5 rounded-full bg-indigo-900/20 backdrop-blur-sm">
                B.Tech 3rd Year · MERN Stack · DSA
              </span>
            </motion.div>

            {/* Headline with typing effect */}
            <motion.h1
  variants={itemVariants}
  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight"
>
  <motion.span
    className="block"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
  >
    Crafting Clean
  </motion.span>

  <motion.span
    className="block"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
  >
    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
      Web Experiences
    </span>
  </motion.span>

  <motion.span
    className="block text-slate-400 font-medium text-xl sm:text-2xl mt-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
  >
    & Problem Solving with Code
    <Cursor />
  </motion.span>
</motion.h1>
            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light"
            >
              Hi, I'm{' '}
              <motion.strong
                className="text-white font-bold relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                RAMU CHAURASIYA
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                />
              </motion.strong>{' '}
              — Passionate developer crafting scalable web apps and AI solutions with clean, efficient code for maximum impact.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12"
            >
              <MagneticBtn
                href="#projects"
                className="group relative px-10 py-4 font-bold text-white rounded-xl shadow-xl overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-emerald-600"
                  whileHover={{ opacity: 0.9 }}
                />
                <span className="relative flex items-center gap-3 z-10">
                  Explore Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </MagneticBtn>

              <MagneticBtn
                href="#contact"
                className="group relative px-10 py-4 border-2 border-slate-500 text-slate-200 font-bold rounded-xl hover:border-indigo-500 hover:text-white transition-colors overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="relative flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Contact Me
                </span>
              </MagneticBtn>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-12 mb-12"
            >
              {[['10+', 'Projects Completed'], ['100+', 'DSA Problems Solved'], ['8.0+', 'CGPA']].map(([num, label]) => (
                <div key={label} className="text-center lg:text-left">
                  <motion.p
                    className="text-4xl font-extrabold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    {num}
                  </motion.p>
                  <p className="text-sm text-slate-400 uppercase tracking-wider mt-1">{label}</p>
                </div>
              ))}
            </motion.div>

            {/* Social Links - Added for modern website feel */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-6"
            >
              <MagneticBtn
                href="https://github.com/ramu-codes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-full text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </MagneticBtn>
              <MagneticBtn
                href="https://www.linkedin.com/in/ramu-chaurasiya-/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-full text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </MagneticBtn>
              

          <MagneticBtn
            href="https://leetcode.com/u/ramu_codes/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 rounded-full text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors"
          >
            <img
              src={leetcodeIcon}
              alt="LeetCode"
              className="w-6 h-6 object-contain"
            />
          </MagneticBtn>
            </motion.div>
          </div>

          {/* ── Right photo ── (modernized with LinkedIn-style "Open to Work") */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 flex justify-center relative mt-16 lg:mt-0"
          >
            {/* Orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <OrbitRing size={380} duration={20} delay={0} color="rgba(99,102,241,0.2)" clockwise />
              <OrbitRing size={460} duration={30} delay={0.5} color="rgba(45,212,191,0.12)" clockwise={false} />
            </div>

            {/* Photo card - modern circular style with glow */}
            <motion.div
              className="relative z-10 group w-96 h-96"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
              whileHover={{ scale: 1.04, rotate: 2, transition: { type: 'spring', stiffness: 250, damping: 18 } }}
            >
              {/* LinkedIn-style "Open to Work" ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-8 border-emerald-500/80 shadow-[0_0_20px_rgba(16,185,129,0.6)] pointer-events-none"
                style={{ top: '-4%', left: '-4%', width: '108%', height: '108%' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-300 text-xs font-bold uppercase tracking-widest rotate-[-30deg] pointer-events-none">
                Open to Work
              </div>

              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1a2637] shadow-2xl ring-1 ring-white/20 group-hover:ring-indigo-500/50 transition-all duration-500">
                <motion.img
                  src={avatarPlaceholder}
                  alt="RAM – Developer"
                  className="w-full h-full object-cover brightness-105 group-hover:scale-110 transition-transform duration-800 ease-out"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-indigo-900/20" />
              </div>

              {/* Floating tech badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-indigo-900/60 border border-indigo-500/40 rounded-xl px-5 py-3 flex items-center gap-3 shadow-xl backdrop-blur-md z-20"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{ delay: 1.7, type: 'spring', stiffness: 150, y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-6xl font-bold text-indigo-200">#Opentowork</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
       
    </section>
  );
};

export default Hero;
