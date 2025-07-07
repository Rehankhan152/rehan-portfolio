import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Cloud, 
  GitBranch, 
  Container, 
  Database, 
  Terminal,
  Code,
  Shield,
  Cpu,
  Monitor,
  Layers,
  Zap
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", icon: Cloud, level: 85 },
        { name: "Docker", icon: Container, level: 90 },
        { name: "Kubernetes", icon: Layers, level: 80 },
        { name: "Jenkins", icon: Zap, level: 85 }
      ]
    },
    {
      title: "Programming & Scripting",
      skills: [
        { name: "Python", icon: Code, level: 85 },
        { name: "Bash", icon: Terminal, level: 90 },
        { name: "Git", icon: GitBranch, level: 95 },
        { name: "Linux", icon: Monitor, level: 88 }
      ]
    },
    {
      title: "Infrastructure & Database",
      skills: [
        { name: "MySQL", icon: Database, level: 75 },
        { name: "ArgoCD", icon: GitBranch, level: 80 },
        { name: "Ansible", icon: Server, level: 70 },
        { name: "Monitoring", icon: Cpu, level: 75 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-transparent">
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
              Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"></div>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              My technical skill set spans a wide range of DevOps tools and technologies.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-blue-900/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-800 text-white"
              >
                <h3 className="text-xl font-semibold mb-6 text-white text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg group-hover:from-blue-600 group-hover:to-teal-500 transition-all duration-300">
                          <skill.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-white">
                          {skill.name}
                        </span>
                        <span className="ml-auto text-sm text-blue-100">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className="bg-gradient-to-r from-blue-500 to-teal-400 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'GitHub Actions', 'GitLab CI', 'Terraform', 'Helm', 'Prometheus', 
                'Grafana', 'ELK Stack', 'Redis', 'Nginx', 'Apache', 'WordPress', 
                'Flask', 'REST APIs', 'Microservices'
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;