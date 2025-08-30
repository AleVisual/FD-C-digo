import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import NeumorphicCard from './NeumorphicCard';
import NeumorphicInput from './NeumorphicInput';
import NeumorphicTextarea from './NeumorphicTextarea';
import NeumorphicButton from './NeumorphicButton';
import Modal from './Modal';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const isFormValid = formData.name && formData.email && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    if (formError) {
      setFormError('');
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormSuccess('');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setFormError('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xovndwqa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSuccess('¡Mensaje enviado con éxito!');
        setModalOpen(true);
      } else {
        setFormError('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      setFormError('Ocurrió un error. Por favor, verifica tu conexión a internet.');
    }
  };

  useEffect(() => {
    let timer;
    if (isModalOpen) {
      timer = setTimeout(() => {
        closeModal();
      }, 3000); // Se cierra después de 3 segundos
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isModalOpen]);

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-gray-900 text-gray-200">
      <div className="container mx-auto">
        <NeumorphicCard className="p-8 md:p-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contacto
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-[500px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <NeumorphicInput
              type="text"
              name="name"
              placeholder="Tu Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <NeumorphicInput
              type="email"
              name="email"
              placeholder="Tu Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <NeumorphicTextarea
              name="message"
              placeholder="Tu Mensaje"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {formError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center text-red-400 text-sm"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                {formError}
              </motion.div>
            )}
            <div className="text-center">
              <NeumorphicButton type="submit" disabled={!isFormValid}>
                Enviar Mensaje
              </NeumorphicButton>
            </div>
          </motion.form>
        </NeumorphicCard>
      </div>

      <Modal isOpen={isModalOpen}>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-400 mb-4">{formSuccess}</h3>
          <p className="text-gray-300 mb-6">Gracias por contactarme. Te responderé lo antes posible.</p>
        </div>
      </Modal>
    </section>
  );
};

export default ContactSection;