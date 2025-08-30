import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Youtube, Mail, User, MessageSquare, AlertCircle } from 'lucide-react';
import { FaInstagram, FaFacebook, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

import NeumorphicButton from './components/NeumorphicButton';
import NeumorphicCard from './components/NeumorphicCard';
import NeumorphicInput from './components/NeumorphicInput';
import NeumorphicTextarea from './components/NeumorphicTextarea';
import SocialIcon from './components/SocialIcon';
import Navbar from './components/Navbar';
import Modal from './components/Modal'; 
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection'; 

const App = () => {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const href = event.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        event.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200 font-sans">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-[85vh] flex flex-col items-center justify-center text-center mb-24 relative overflow-hidden mt-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Foto/fon2.jpg)` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 p-4 sm:p-8">
          <motion.div
            className="text-8xl lg:text-9xl text-gray-400 mb-12 lg:mb-16 leading-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            &lt;/&gt;
          </motion.div>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            Alejandro Bajuk
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Explorando las fronteras de la tecnología y el diseño.
          </motion.p>
        </div>
      </motion.section>

      {/* Contenedor principal para todas las secciones (About, Portfolio, Contact) con estilo neumórfico */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <NeumorphicCard className="p-8 md:p-12 mb-24">
          <motion.div>
            {/* About Me Section */}
            <motion.section
              id="about"
              className="mb-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row items-center md:space-x-8">
                <div className="flex-shrink-0 mb-8 md:mb-0 text-center">
                  <div className="inline-block relative group mb-4">
                    <h2 className="text-5xl font-bold text-blue-300">
                      Sobre Mí
                    </h2>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                  <div className="w-48 h-48 md:w-56 md:h-56">
                    <img
                      src={`${process.env.PUBLIC_URL}/Foto/foto1.jpg`}
                      alt="Alejandro Bajuk"
                      className="w-full h-full object-cover rounded-full shadow-neumorphic-dark"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-gray-300 mb-4">
                    Soy Alejandro Bajuk, un entusiasta de la tecnología con una pasión inquebrantable por la creación de experiencias digitales innovadoras. Para el desarrollo de esta web, he utilizado herramientas de inteligencia artificial, explorando nuevas fronteras en la creación y desarrollo de sitios web. Mi trayectoria me ha llevado a explorar diversos campos, desde el desarrollo web hasta el diseño de interfaces, siempre buscando la intersección perfecta entre funcionalidad y estética.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Me dedico a transformar ideas complejas en soluciones elegantes y fáciles de usar, con un enfoque en el rendimiento y la escalabilidad. Cuando no estoy inmerso en el código, probablemente me encuentres investigando las últimas tendencias tecnológicas, experimentando con IA, o disfrutando de este apasionado universo.
                  </p>
                </div>
              </div>
            </motion.section>
            <PortfolioSection />
            <ContactSection />
          </motion.div>
        </NeumorphicCard>
      </div>

      {/* Footer */}
      <motion.footer
        className="bg-gradient-to-br from-gray-900 to-black py-8 text-center text-gray-500 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-4">&copy; {new Date().getFullYear()} Alejandro Bajuk. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://instagram.com/alejandrobajuk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300"><FaInstagram className="inline-block w-6 h-6" /></a>
          <a href="https://facebook.com/alejandrobajuk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300"><FaFacebook className="inline-block w-6 h-6" /></a>
          <a href="https://wa.me/tunumero" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300"><FaWhatsapp className="inline-block w-6 h-6" /></a>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;
