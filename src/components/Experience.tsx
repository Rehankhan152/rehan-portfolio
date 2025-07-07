import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Github } from 'lucide-react';

const Experience: React.FC = () => {
  const experience = {
    company: "LinuxWorld Informatics Pvt Ltd",
    position: "Technical Intern",
    period: "01/2025 – Present",
    location: "Mumbai",
    description: [
      "Managed containerized applications using Docker and Kubernetes for scalable deployment",
      "Built comprehensive CI/CD pipelines with Jenkins integrating Git workflows",
      "Implemented GitOps practices with ArgoCD for automated Kubernetes delivery",
      "Automated infrastructure provisioning using Ansible and Linux system administration"
    ],
    technologies: ["Docker", "Kubernetes", "Jenkins", "ArgoCD", "Ansible", "Linux", "AWS"]
  };

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
    <section id="experience" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-teal-200 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"></div>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Professional journey in DevOps engineering and cloud infrastructure
            </p>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative bg-blue-900/80 rounded-2xl p-8 shadow-xl border border-blue-800 hover:shadow-2xl transition-all duration-300 text-white"
          >
            {/* Timeline dot */}
            <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>

            {/* Company and Position */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {experience.position}
              </h3>
              <h4 className="text-xl font-semibold text-blue-200 mb-4">
                {experience.company}
              </h4>
              
              <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                <div className="flex items-center gap-1 text-blue-100">
                  <Calendar className="w-4 h-4" />
                  {experience.period}
                </div>
                <div className="flex items-center gap-1 text-blue-100">
                  <MapPin className="w-4 h-4" />
                  {experience.location}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-white mb-3">
                Key Responsibilities:
              </h5>
              <ul className="space-y-2">
                {experience.description.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-blue-100"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">
                Technologies Used:
              </h5>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-white/10 text-blue-200 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-50 transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-blue-100 mb-6">
              Interested in my work? Let's discuss how I can contribute to your team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full font-medium hover:from-blue-600 hover:to-teal-500 transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;