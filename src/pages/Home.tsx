import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import SEOHead from '../components/SEO/SEOHead';
import { personalInfo } from '../data/portfolio';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: 'hover:text-red-500',
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Award },
    { label: 'Years Experience', value: '1.5+', icon: Calendar },
    { label: 'Technologies', value: '20+', icon: MapPin },
  ];

  return (
    <>
      <SEOHead 
        title="Dharmil Shah - Full-Stack Developer Portfolio"
        description="Passionate full-stack developer specializing in React, TypeScript, Node.js, and cloud technologies. Currently building innovative solutions at PRGC Group|Live."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between min-h-[85vh]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8 z-10">
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-sm font-medium"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Available for new opportunities
                </motion.div>

                <motion.h1 
                  className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Dharmil Shah
                  </span>
                </motion.h1>

                <motion.div variants={itemVariants} className="space-y-2">
                  <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
                    Full-Stack Developer
                  </h2>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                </motion.div>

                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
                  variants={itemVariants}
                >
                  {personalInfo.bio}
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Link to="/projects">
                  <Button variant="primary" size="lg" icon={ArrowRight} fullWidth>
                    View My Work
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" icon={Mail} fullWidth>
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex space-x-4"
                variants={itemVariants}
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 dark:text-gray-400 ${link.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Hero Visual */}
            <motion.div 
              className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative">
                {/* Main Avatar */}
                <motion.div
                  className="relative w-80 h-80 md:w-96 md:h-96"
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-20 animate-pulse" />
                  
                  {/* Profile Picture */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                    DS
                  </div>

                  {/* Floating Tech Icons */}
                  {['React', 'AWS', 'Node.js', 'TypeScript', 'Python', 'Docker'].map((tech, index) => (
                    <motion.div
                      key={tech}
                      className="absolute bg-white dark:bg-gray-800 px-3 py-2 rounded-full text-sm font-medium shadow-lg border border-gray-200 dark:border-gray-700"
                      style={{
                        top: `${20 + Math.sin((index * Math.PI) / 3) * 35}%`,
                        left: `${20 + Math.cos((index * Math.PI) / 3) * 35}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300" hover>
                  <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;