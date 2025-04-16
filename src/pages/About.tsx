import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const About = () => {
  const testimonials = [
    {
      name: 'Carlos Rodríguez',
      role: 'Motociclista Entusiasta',
      content: 'Excelente servicio y asesoramiento. Me ayudaron a encontrar la moto perfecta para mis necesidades.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Ana García',
      role: 'Commuter Diario',
      content: 'Mi scooter es exactamente lo que necesitaba para la ciudad. El equipo fue muy profesional.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Miguel Torres',
      role: 'Piloto Amateur',
      content: 'La mejor tienda de motos de la ciudad. Tienen un catálogo impresionante y conocen muy bien sus productos.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ];

  return (
    <div className="pt-16">
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Nuestra Historia</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde 2010, nos hemos dedicado a proporcionar las mejores motos y scooters
              a nuestros clientes. Nuestra pasión por las dos ruedas nos impulsa a
              ofrecer un servicio excepcional y productos de primera calidad.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {[
              {
                title: 'Calidad',
                description: 'Solo trabajamos con las mejores marcas y modelos del mercado.'
              },
              {
                title: 'Experiencia',
                description: 'Más de una década asesorando a nuestros clientes.'
              },
              {
                title: 'Servicio',
                description: 'Atención personalizada y soporte técnico especializado.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;