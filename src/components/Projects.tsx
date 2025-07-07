import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Cloud, GitBranch, Server, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "End-to-End CI/CD Pipeline",
      description: "Fully automated CI/CD pipeline using Jenkins, Docker, Kubernetes, and ArgoCD with 90% automation for build and deployment processes. Features scalable GitOps-based deployments on AWS EKS.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "ArgoCD", "AWS EKS", "GitOps"],
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
      highlights: [
        "90% automation for build and deployment",
        "Scalable GitOps-based deployments",
        "AWS EKS integration",
        "Fully automated CI/CD pipeline"
      ]
    },
    {
      title: "WordPress Multi-Environment Deployment",
      description: "Highly available WordPress application on AWS with private MySQL database in production and EKS for development. Implemented IAM security, firewalls, and cloud monitoring achieving 99.99% uptime.",
      technologies: ["WordPress", "MySQL", "AWS", "Kubernetes", "IAM", "Cloud Monitoring"],
      icon: Cloud,
      gradient: "from-purple-500 to-pink-500",
      highlights: [
        "99.99% uptime achievement",
        "Multi-environment setup",
        "Private MySQL database",
        "Comprehensive security implementation"
      ]
    },
    {
      title: "Automated Flask Application Deployment",
      description: "Complete automation of Flask Python application deployment with Jenkins CI/CD, Docker containerization, and GitHub SCM integration. Features version-controlled Docker images with automated Docker Hub publishing.",
      technologies: ["Flask", "Python", "Docker", "Jenkins", "GitHub", "Docker Hub"],
      icon: Code,
      gradient: "from-green-500 to-teal-500",
      highlights: [
        "100% automation of build and deployment",
        "Version-controlled Docker images",
        "Real-time SCM polling",
        "Automated Docker Hub publishing"
      ]
    }
  ];

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
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-teal-200 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"></div>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Here are some of the projects I've worked on.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="p-6 bg-blue-900/80 rounded-xl backdrop-blur-sm border border-blue-800 hover:border-cyan-300 transition-all duration-300 text-white"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-blue-100 mb-2">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Key Highlights:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-2 text-blue-100">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg font-medium hover:from-blue-600 hover:to-teal-500 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-blue-100 mb-6">
              Want to see more projects or collaborate on something exciting?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full font-medium hover:from-blue-600 hover:to-teal-500 transition-all duration-300 shadow-lg"
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;