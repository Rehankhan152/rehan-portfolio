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
      title: "Advanced DevSecOps CI/CD Pipeline with Jenkins, Terraform, ArgoCD, & AWS EKS",
      description: `Built a fully automated, secure, and scalable end-to-end DevSecOps pipeline deploying a three-tier microservices application on Amazon EKS using Terraform, Jenkins, and ArgoCD.\n\nAutomated complete infrastructure provisioning (VPC, IAM, EKS, ECR, etc.) using Terraform, triggered directly via Jenkins pipelines.\n\nCreated Jenkins stages to build Docker images, scan for vulnerabilities, push to Amazon ECR.\n\nIntegrated ArgoCD to perform declarative GitOps-based deployments to EKS across multiple environments (dev, staging, prod).\n\nFollowed DevSecOps best practices including IAM security, vulnerability scanning, and network isolation across CI/CD stages.`,
      technologies: ["Jenkins", "Terraform", "ArgoCD", "AWS EKS", "Docker", "GitHub", "ECR", "Kubernetes", "IAM", "VPC"],
      icon: Cloud,
      gradient: "from-purple-500 to-pink-500",
      highlights: [
        "Automated, secure, and scalable end-to-end DevSecOps pipeline",
        "Three-tier microservices app on EKS",
        "Terraform for infra provisioning (VPC, IAM, EKS, ECR)",
        "Jenkins for build, scan, push to ECR",
        "ArgoCD for GitOps-based multi-env deployment",
        "DevSecOps best practices: IAM, scanning, network isolation"
      ],
      githubUrls: [
        "https://github.com/Rehankhan152/terraform-eks-multistage-cicd-appcode.git",
        "https://github.com/Rehankhan152/terraform-eks-multistage-cicd-project.git"
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
                      {index === 0 && (
                        <motion.a
                          href="https://github.com/Rehankhan152/ci-cd-pipeline.git"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg font-medium hover:from-blue-600 hover:to-teal-500 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </motion.a>
                      )}
                      {index === 1 && projects[1].githubUrls && projects[1].githubUrls.map((url, i) => (
                        <motion.a
                          key={url}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg font-medium hover:from-blue-600 hover:to-teal-500 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          View Code {i + 1}
                        </motion.a>
                      ))}
                      {index === 2 && (
                        <motion.a
                          href="https://github.com/Rehankhan152/devops-project-1.git"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg font-medium hover:from-blue-600 hover:to-teal-500 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </motion.a>
                      )}
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