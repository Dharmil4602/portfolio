import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users, TrendingUp, Building } from 'lucide-react';
import { experiences, education } from '../data/portfolio';
import Card from '../components/UI/Card';
import SEOHead from '../components/SEO/SEOHead';

const About: React.FC = () => {
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

  const achievements = [
    { icon: Users, label: '500+ Weekly Users', description: 'The Bat Cage booking system' },
    { icon: TrendingUp, label: '80% Reduction', description: 'In failed bookings' },
    { icon: Award, label: '40% Time Saved', description: 'Admin dashboard efficiency' },
    { icon: Building, label: '60% Faster', description: 'Deployment automation' },
  ];

  return (
    <>
      <SEOHead 
        title="About - Dharmil Shah"
        description="Learn about Dharmil Shah's journey as a full-stack developer, education, experience, and achievements in web development and cloud technologies."
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
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Passionate full-stack developer with expertise in modern web technologies 
                and cloud architecture, dedicated to creating scalable solutions
              </p>
            </motion.div>

            {/* Personal Story */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 md:p-12" gradient>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      My Journey
                    </h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <p>
                        I'm a dedicated full-stack developer with a Master's degree in Applied Computer Science 
                        from Dalhousie University. My journey began with a Bachelor's in Computer Engineering, 
                        where I developed a strong foundation in programming and system design.
                      </p>
                      <p>
                        Currently working as a Software Developer at PRGC Group|Live, I specialize in building 
                        scalable web applications using React, TypeScript, and cloud technologies. I've led the 
                        development of The Bat Cage booking system, serving 500+ weekly users with real-time 
                        features and comprehensive admin dashboards.
                      </p>
                      <p>
                        My experience spans from frontend development with modern frameworks to backend services 
                        and cloud infrastructure. I'm passionate about creating efficient, user-friendly solutions 
                        that drive business growth and enhance user experience.
                      </p>
                    </div>
                  </div>
                  
                  {/* Achievements Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
                      >
                        <achievement.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                        <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {achievement.label}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card className="p-6 md:p-8" hover>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                              {exp.type}
                            </span>
                            {exp.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.duration}</p>
                          <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
                        </div>
                      </div>

                      {/* Key Achievements */}
                      {exp.achievements && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {exp.achievements.map((achievement, achIndex) => (
                              <div
                                key={achIndex}
                                className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                              >
                                <p className="text-sm text-green-800 dark:text-green-400 font-medium">
                                  {achievement}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-3 mt-2 text-xs">▶</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                Education
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card className="p-6 h-full" hover>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                            {edu.institution}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 dark:text-gray-300 mt-2">
                            <p className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {edu.duration}
                            </p>
                            <p className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {edu.location}
                            </p>
                          </div>
                          {edu.gpa && (
                            <p className="text-green-600 dark:text-green-400 font-medium mt-2">
                              GPA: {edu.gpa}
                            </p>
                          )}
                        </div>

                        {edu.honors && (
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Honors:</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.honors.map((honor, honorIndex) => (
                                <span
                                  key={honorIndex}
                                  className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 text-sm rounded-full"
                                >
                                  {honor}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {edu.coursework && (
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                              Relevant Coursework:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course, courseIndex) => (
                                <span
                                  key={courseIndex}
                                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;