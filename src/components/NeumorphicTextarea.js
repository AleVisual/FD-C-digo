import React from 'react';
import { motion } from 'framer-motion';
 
const NeumorphicTextarea = ({ placeholder, value, onChange, className = '', name }) => {
  return (
    <motion.textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      rows="5"
      className={`w-full px-6 py-4 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800
        shadow-neumorphic-input-dark text-gray-200 placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        transition-all duration-300 resize-none ${className}`}
      whileFocus={{ scale: 1.01 }}
    />
  );
};
 
export default NeumorphicTextarea;