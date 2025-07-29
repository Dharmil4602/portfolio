import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Clock } from 'lucide-react';
import emailjs from 'emailjs-com';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import SEOHead from '../components/SEO/SEOHead';
import { ContactFormData } from '../types';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // EmailJS configuration - Replace with your actual credentials
      await emailjs.send(
        'service_buifpp9', // Replace with your EmailJS service ID
        'template_bvo9bqu', // Replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: 'Dharmil Shah',
        },
        'ZXM4KJ-7ppsD_bftc' // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-red-600 dark:text-red-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      color: 'text-green-600 dark:text-green-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'text-blue-600 dark:text-blue-400',
    },
  ];

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
  ];

  const availability = [
    { icon: CheckCircle, text: 'Full-time opportunities' },
    { icon: CheckCircle, text: 'Freelance projects' },
    { icon: CheckCircle, text: 'Technical consultations' },
    { icon: CheckCircle, text: 'Collaboration opportunities' },
  ];

  if (isSubmitted) {
    return (
      <>
        <SEOHead 
          title="Message Sent - Contact Dharmil Shah"
          description="Thank you for contacting Dharmil Shah. Your message has been sent successfully."
        />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-6 max-w-md mx-auto px-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Thank you for reaching out. I'll get back to you as soon as possible, 
              usually within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="primary"
                fullWidth
              >
                Send Another Message
              </Button>
              <Button
                href="/"
                variant="outline"
                fullWidth
              >
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title="Contact - Dharmil Shah"
        description="Get in touch with Dharmil Shah for job opportunities, project collaborations, or technical consultations. Available for full-time and freelance work."
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
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                I'm always open to discussing new opportunities, projects, or just having a chat about technology. 
                Let's build something amazing together!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Let's Connect
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    I'm currently looking for new opportunities and interesting projects. 
                    Whether you have a question, want to collaborate, or just want to say hi, 
                    I'll try my best to get back to you!
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.label}
                      className="flex items-center space-x-4 group"
                      whileHover={{ x: 10 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <div className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors`}>
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium text-gray-900 dark:text-white">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Follow Me
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg transition-all duration-200 text-gray-600 dark:text-gray-400 ${link.color}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <link.icon className="h-6 w-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <Card className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Currently Available For
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {availability.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <item.icon className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>Response time: Usually within 24 hours</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <Card className="p-8" hover>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register('name', { required: 'Name is required' })}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        {...register('subject', { required: 'Subject is required' })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        {...register('message', { required: 'Message is required' })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors resize-none"
                        placeholder="Tell me about your project, opportunity, or just say hello..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {submitError && (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-sm text-red-600 dark:text-red-400">
                          {submitError}
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      fullWidth
                      icon={isSubmitting ? undefined : Send}
                      loading={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <LoadingSpinner size="sm" className="mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      By sending this message, you agree that I may contact you regarding your inquiry.
                    </p>
                  </form>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;