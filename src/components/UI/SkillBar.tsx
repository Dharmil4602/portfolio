import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  // experience: string;
  icon?: string;
  color?: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  level,
  // experience,
  icon,
  color = 'blue',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="font-medium text-gray-900 dark:text-white">{name}</span>
        </div>
        <div className="text-right">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{level}%</span>
          {/* <div className="text-xs text-gray-500 dark:text-gray-500">{experience}</div> */}
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r from-${color}-500 to-${color}-600 rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ 
            duration: 1.5, 
            delay: delay + 0.2,
            ease: "easeOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;