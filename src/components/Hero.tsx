import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImg from '../rehanlinkedin.jpg';
import resumePDF from '../assets/MOHAMMAD-REHAN-KHAN.pdf';
import '../index.css'; // for star background

const NUM_STARS = 60;
const getStars = () => Array.from({ length: NUM_STARS }).map((_, i) => {
  const size = Math.random() * 2 + 1;
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const duration = Math.random() * 2 + 1;
  return (
    <div
      key={i}
      className="star"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        animationDuration: `${duration}s`
      }}
    />
  );
});

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Empowering Automation",
    "Building Scalable CI/CD Pipelines",
    "Driving Cloud-Native DevOps Solutions"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Removed local background and star animation, now handled globally */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 text-left mb-8 md:mb-0"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
          >
            Mohammad Rehan Khan
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-6 text-blue-300"
          >
            DevOps Engineer
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="h-16 flex items-center">
              <motion.p
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-lg md:text-xl text-gray-200 font-medium"
              >
                {texts[currentText]}
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.a
              href={resumePDF}
              download
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(8, 156, 241, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full font-medium hover:from-blue-600 hover:to-teal-500 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-500 text-blue-300 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex gap-6 mb-8"
          >
            {[
              { icon: Github, href: 'https://github.com/mohammad-rehan-khan', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/mohammad-rehan-khan', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rehankhann498@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#5eead4' }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-200 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        {/* Right: Large Profile Image */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-2xl shadow-lg w-40 h-40 md:w-72 md:h-72 object-cover border-4 border-blue-500"
          />
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-6 h-6 text-blue-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;