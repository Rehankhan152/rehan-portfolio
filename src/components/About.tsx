import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, GitBranch, Wrench } from 'lucide-react';

const About: React.FC = () => {
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

  const expertiseAreas = [
    {
      icon: Server,
      title: "CI/CD Pipelines",
      description: "Building robust automated deployment pipelines with Jenkins, GitLab CI, and GitHub Actions"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Designing scalable cloud solutions on AWS with containerization and orchestration"
    },
    {
      icon: GitBranch,
      title: "DevOps Automation",
      description: "Streamlining development workflows with Docker, Kubernetes, and Infrastructure as Code"
    },
    {
      icon: Wrench,
      title: "System Administration",
      description: "Managing Linux systems, monitoring, and ensuring high availability and performance"
    }
  ];

  return (
    <section id="about" className="py-20 bg-transparent">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"></div>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Passionate DevOps Engineer with expertise in building scalable CI/CD pipelines, 
              cloud infrastructure, and automation solutions that drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-white leading-relaxed">
                As a DevOps Engineer, I specialize in bridging the gap between development and operations, 
                creating seamless workflows that accelerate software delivery while maintaining reliability 
                and security.
              </p>
              
              <p className="text-lg text-white leading-relaxed">
                My journey began with a passion for automation and system optimization. I've worked with 
                cutting-edge technologies including Docker, Kubernetes, Jenkins, and AWS to build robust 
                infrastructure solutions that scale with business needs.
              </p>

              <p className="text-lg text-white leading-relaxed">
                Currently working as a Technical Intern at LinuxWorld Informatics, where I'm gaining 
                hands-on experience with enterprise-level DevOps practices and contributing to innovative 
                cloud-native solutions.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block mt-6"
              >
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg font-medium hover:from-blue-600 hover:to-teal-500 transition-all duration-300 shadow-lg">
                  Let's Connect
                </button>
              </motion.div>
            </motion.div>

            {/* Expertise Areas */}
            <motion.div variants={itemVariants} className="space-y-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="p-6 bg-blue-900/80 rounded-xl backdrop-blur-sm border border-blue-800 hover:border-cyan-300 transition-all duration-300 text-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">
                        {area.title}
                      </h3>
                      <p className="text-blue-100">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;