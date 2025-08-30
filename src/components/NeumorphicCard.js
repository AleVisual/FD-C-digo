import React from 'react';
import { motion } from 'framer-motion';
 
const NeumorphicCard = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900
        shadow-neumorphic-dark transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
 
export default NeumorphicCard;