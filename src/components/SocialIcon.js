import React from 'react';
import { motion } from 'framer-motion';
 
const SocialIcon = ({ icon: Icon, link, label }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 rounded-full flex items-center justify-center
        bg-gradient-to-br from-gray-800 to-gray-900 text-gray-200
        shadow-neumorphic-dark hover:shadow-neumorphic-dark-hover active:shadow-neumorphic-dark-active
        transition-all duration-300 text-3xl"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1, color: '#8B5CF6' }}
      aria-label={label}
    >
      <Icon />
    </motion.a>
  );
};
 
export default SocialIcon;