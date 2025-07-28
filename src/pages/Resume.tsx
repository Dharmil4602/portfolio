import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ExternalLink, Award, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import SEOHead from '../components/SEO/SEOHead';
import { experiences, education, skills, personalInfo } from '../data/portfolio';

const Resume: React.FC = () => {
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

  const handleDownloadResume = () => {
    // In a real application, you would have a PDF file in your public directory
    const resumeUrl = personalInfo.resumeUrl;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Dharmil_Shah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEOHead 
        title="Resume - Dharmil Shah"
        description="Download Dharmil Shah's resume or view his professional experience, education, and technical skills online."
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
            <motion.div variants={itemVariants} className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Resume
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Download my complete resume or view the highlights below
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleDownloadResume}
                  variant="primary"
                  size="lg"
                  icon={Download}
                >
                  Download PDF Resume
                </Button>
                <Button
                  href={personalInfo.linkedin}
                  variant="outline"
                  size="lg"
                  icon={ExternalLink}
                >
                  View LinkedIn Profile
                </Button>
              </div>
            </motion.div>

            {/* Resume Preview */}
            <motion.div variants={itemVariants}>
              <Card className="max-w-4xl mx-auto p-8 md:p-12" gradient>
                {/* Header */}
                <div className="text-center border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
                  <motion.h1 
                    className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {personalInfo.name}
                  </motion.h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                    {personalInfo.title}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Phone className="h-4 w-4" />
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Mail className="h-4 w-4" />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                    Professional Summary
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {personalInfo.bio}
                  </p>
                </div>

                {/* Experience */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                    Professional Experience
                  </h2>
                  <div className="space-y-6">
                    {experiences.map((exp) => (
                      <motion.div 
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex flex-col md:flex-row md:justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                              {exp.company}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              {exp.position}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-600 dark:text-gray-300 flex items-center md:justify-end">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exp.duration}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 flex items-center md:justify-end">
                              <MapPin className="h-4 w-4 mr-1" />
                              {exp.location}
                            </p>
                          </div>
                        </div>
                        
                        {/* Key Achievements */}
                        {exp.achievements && (
                          <div className="mb-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 dark:text-gray-300">
                              {exp.achievements.map((achievement, index) => (
                                <li key={index} className="text-sm">{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 dark:text-gray-300">
                          {exp.description.map((desc, index) => (
                            <li key={index} className="text-sm">{desc}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                    Education
                  </h2>
                  <div className="space-y-4">
                    {education.map((edu) => (
                      <motion.div 
                        key={edu.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                              {edu.institution}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              {edu.degree} {edu.gpa && `(GPA: ${edu.gpa})`}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-600 dark:text-gray-300 flex items-center md:justify-end">
                              <Calendar className="h-4 w-4 mr-1" />
                              {edu.duration}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 flex items-center md:justify-end">
                              <MapPin className="h-4 w-4 mr-1" />
                              {edu.location}
                            </p>
                          </div>
                        </div>
                        {edu.coursework && (
                          <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">
                            <span className="font-medium">Relevant Coursework:</span> {edu.coursework.join(', ')}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(skills).map(([category, data]) => (
                      <div key={category}>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                          {data.title}:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {data.skills.map(skill => (
                            <span
                              key={skill.name}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certification */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                    Certifications
                  </h2>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">AWS Cloud Practitioner</span> - Amazon Web Services (2024)
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Download CTA */}
            <motion.div variants={itemVariants} className="text-center">
              <Card className="max-w-md mx-auto p-8" hover>
                <div className="space-y-4">
                  <Eye className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Need the Full Resume?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Download the complete PDF version with all project details and references
                  </p>
                  <Button
                    onClick={handleDownloadResume}
                    variant="primary"
                    size="lg"
                    icon={Download}
                    fullWidth
                  >
                    Download Complete Resume
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Resume;