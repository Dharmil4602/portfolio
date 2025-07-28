import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Filter, Star, Globe, Smartphone, Cloud, Brain } from 'lucide-react';
import { projects } from '../data/portfolio';
import ProjectCard from '../components/UI/ProjectCard';
import Button from '../components/UI/Button';
import SEOHead from '../components/SEO/SEOHead';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'web' | 'mobile' | 'cloud' | 'ai'>('all');

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

  const filters = [
    { key: 'all', label: 'All Projects', icon: Filter },
    { key: 'featured', label: 'Featured', icon: Star },
    { key: 'web', label: 'Web Apps', icon: Globe },
    { key: 'mobile', label: 'Mobile', icon: Smartphone },
    { key: 'cloud', label: 'Cloud', icon: Cloud },
    { key: 'ai', label: 'AI/ML', icon: Brain },
  ];

  const filteredProjects = filter === 'all' 
    ? projects
    : filter === 'featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === filter);

  return (
    <>
      <SEOHead 
        title="Projects - Dharmil Shah"
        description="Explore Dharmil Shah's portfolio of full-stack web applications, mobile apps, cloud solutions, and AI projects built with modern technologies."
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
                My Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A showcase of my recent work, featuring full-stack applications, 
                cloud solutions, and innovative tools that solve real-world problems
              </p>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="flex flex-wrap justify-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                {filters.map((filterOption) => (
                  <motion.button
                    key={filterOption.key}
                    onClick={() => setFilter(filterOption.key as any)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      filter === filterOption.key
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <filterOption.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{filterOption.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Projects Count */}
            <motion.div variants={itemVariants} className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                {filter !== 'all' && ` in ${filter === 'featured' ? 'featured' : filter} category`}
              </p>
            </motion.div>

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try selecting a different filter to see more projects.
                </p>
                <Button
                  onClick={() => setFilter('all')}
                  variant="primary"
                >
                  Show All Projects
                </Button>
              </motion.div>
            )}

            {/* GitHub CTA */}
            <motion.div variants={itemVariants} className="text-center space-y-6">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Want to see more?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Check out my GitHub profile for more projects, contributions, and open-source work. 
                  I'm always working on something new and exciting!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href="https://github.com/Dharmil4602"
                    variant="primary"
                    size="lg"
                    icon={Github}
                  >
                    Visit GitHub Profile
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="lg"
                  >
                    Let's Collaborate
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;