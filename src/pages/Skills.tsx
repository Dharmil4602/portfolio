import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Database, Award } from 'lucide-react';
import { skills, certifications } from '../data/portfolio';
import Card from '../components/UI/Card';
import SkillBar from '../components/UI/SkillBar';
import SEOHead from '../components/SEO/SEOHead';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const categoryIcons = {
    frontend: Code,
    backend: Server,
    cloud: Cloud,
    database: Database,
  };

  const categoryColors = {
    frontend: 'blue',
    backend: 'green',
    cloud: 'purple',
    database: 'orange',
  };

  return (
    <>
      <SEOHead 
        title="Skills - Dharmil Shah"
        description="Explore Dharmil Shah's technical skills including frontend development, backend technologies, cloud platforms, and database management."
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Technical Skills
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A comprehensive overview of my technical expertise across different domains
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, data], categoryIndex) => {
                const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
                const color = categoryColors[category as keyof typeof categoryColors];
                
                return (
                  <motion.div 
                    key={category} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card className="p-6 md:p-8 h-full" hover gradient>
                      <div className="space-y-6">
                        {/* Category Header */}
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 bg-${color}-100 dark:bg-${color}-900/20 rounded-lg`}>
                            <IconComponent className={`h-6 w-6 text-${color}-600 dark:text-${color}-400`} />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {data.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {data.description}
                            </p>
                          </div>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-4">
                          {data.skills.map((skill, index) => (
                            <SkillBar
                              key={skill.name}
                              name={skill.name}
                              level={skill.level}
                              experience={skill.experience}
                              icon={skill.icon}
                              color={color}
                              delay={categoryIndex * 0.2 + index * 0.1}
                            />
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                Certifications
              </h2>
              <div className="flex justify-center">
                {certifications.map((cert) => (
                  <Card key={cert.id} className="p-6 md:p-8 max-w-md" hover>
                    <div className="text-center space-y-4">
                      <div className="p-4 bg-orange-100 dark:bg-orange-900/20 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <Award className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {cert.name}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {cert.issuer}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {cert.date}
                        </p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        Certified AWS Cloud Practitioner with foundational understanding of AWS services and cloud concepts
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Technologies Overview */}
            <motion.div variants={itemVariants} className="text-center space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Technologies I Work With
              </h2>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {Object.values(skills).flatMap(category => 
                  category.skills.map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-200"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;