import React from 'react';
import { motion } from 'framer-motion';
 
const NeumorphicButton = ({ children, onClick, className = '', type = 'button', disabled = false }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-300
        bg-gradient-to-br from-gray-800 to-gray-900 text-gray-200
        shadow-neumorphic-dark hover:shadow-neumorphic-dark-hover active:shadow-neumorphic-dark-active
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-neumorphic-dark
        ${className}`}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      whileHover={!disabled ? { scale: 1.02 } : {}}
    >
      {children}
    </motion.button>
  );
};
 
export default NeumorphicButton;