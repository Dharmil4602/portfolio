import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  gradient?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  onClick,
  gradient = false,
  glass = false
}) => {
  let baseClasses = 'rounded-xl border transition-all duration-300';
  
  if (glass) {
    baseClasses += ' bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border-white/20 dark:border-gray-700/20';
  } else if (gradient) {
    baseClasses += ' bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700';
  } else {
    baseClasses += ' bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md';
  }
  
  if (hover) {
    baseClasses += ' cursor-pointer hover:shadow-lg hover:scale-[1.02]';
  }
  
  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;