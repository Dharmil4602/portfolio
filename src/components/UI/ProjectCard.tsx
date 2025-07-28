import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Users, TrendingUp } from 'lucide-react';
import { Project } from '../../types';
import Card from './Card';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const categoryColors = {
    web: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    mobile: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    cloud: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    ai: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
  };

  const statusColors = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    archived: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col group" hover>
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex space-x-2">
            {project.featured && (
              <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full flex items-center space-x-1">
                <Star className="h-3 w-3" />
                <span>Featured</span>
              </span>
            )}
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryColors[project.category]}`}>
              {project.category.toUpperCase()}
            </span>
          </div>

          <div className="absolute top-4 right-4">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[project.status]}`}>
              {project.status.replace('-', ' ').toUpperCase()}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {/* Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-1 gap-2">
                {project.metrics.users && (
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>{project.metrics.users}</span>
                  </div>
                )}
                {project.metrics.performance && (
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <TrendingUp className="h-4 w-4" />
                    <span>{project.metrics.performance}</span>
                  </div>
                )}
              </div>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 6 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-full">
                  +{project.techStack.length - 6} more
                </span>
              )}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex space-x-3 mt-6">
            <Button
              href={project.githubUrl}
              variant="outline"
              size="sm"
              icon={Github}
              className="flex-1"
            >
              Code
            </Button>
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="primary"
                size="sm"
                icon={ExternalLink}
                className="flex-1"
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;