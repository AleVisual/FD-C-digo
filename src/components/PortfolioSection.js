import React from 'react';
import { motion } from 'framer-motion';
import NeumorphicCard from './NeumorphicCard';
import NeumorphicButton from './NeumorphicButton';
import { portfolioItems } from './portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 px-4 md:px-8">
      {/* NeumorphicCard ahora es el contenedor principal de toda la sección */}
      <NeumorphicCard className="container mx-auto p-8 md:p-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mi Portafolio
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolioItems.map(item => (
            <motion.div key={item.id} variants={itemVariants}>
              <NeumorphicCard>
                <img src={item.imageUrl} alt={item.title} className="rounded-2xl mb-4 w-full h-48 object-cover" />
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">
                  <NeumorphicButton>
                    Ver Proyecto
                  </NeumorphicButton>
                </a>
              </NeumorphicCard>
            </motion.div>
          ))}
        </motion.div>
      </NeumorphicCard>
    </section>
  );
};

export default PortfolioSection;