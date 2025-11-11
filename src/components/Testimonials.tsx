import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    role: 'Propietaria',
    image: 'https://i.pravatar.cc/150?img=1',
    text: 'Transformaron completamente nuestra casa. El equipo fue profesional, atento a cada detalle y el resultado superó nuestras expectativas. Ahora tenemos el hogar de nuestros sueños.',
    rating: 5,
    project: 'Casa Residencial',
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    role: 'Empresario',
    image: 'https://i.pravatar.cc/150?img=12',
    text: 'El diseño de nuestras oficinas es impresionante. Lograron combinar funcionalidad con estética moderna. Nuestros clientes siempre comentan lo increíble que se ve el espacio.',
    rating: 5,
    project: 'Oficinas Corporativas',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Arquitecta',
    image: 'https://i.pravatar.cc/150?img=5',
    text: 'Trabajar con este equipo fue una experiencia excepcional. Su creatividad y profesionalismo son incomparables. Definitivamente los recomendaría sin dudarlo.',
    rating: 5,
    project: 'Proyecto Colaborativo',
  },
  {
    id: 4,
    name: 'Roberto Silva',
    role: 'Inversionista',
    image: 'https://i.pravatar.cc/150?img=13',
    text: 'Manejaron un proyecto de alta complejidad con maestría. Cumplieron tiempos, presupuesto y la calidad fue excepcional. Son verdaderos profesionales.',
    rating: 5,
    project: 'Complejo Residencial',
  },
  {
    id: 5,
    name: 'Laura Pérez',
    role: 'Diseñadora',
    image: 'https://i.pravatar.cc/150?img=9',
    text: 'El interiorismo de mi apartamento quedó espectacular. Cada rincón tiene personalidad y funcionalidad. Superaron todas mis expectativas.',
    rating: 5,
    project: 'Apartamento Moderno',
  },
  {
    id: 6,
    name: 'Diego Torres',
    role: 'Gerente',
    image: 'https://i.pravatar.cc/150?img=14',
    text: 'Desde el primer día mostraron compromiso y pasión por el proyecto. El resultado es una obra de arte funcional. Estamos muy satisfechos.',
    rating: 5,
    project: 'Restaurante',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative border border-gray-100 overflow-hidden"
            >
              {/* Decorative gradient background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100/50 to-orange-100/50 rounded-full blur-3xl -z-0" />
              
              {/* Quote Icon */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-yellow-500/20">
                <Quote className="w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" strokeWidth={0} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-5 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                  >
                    <Star 
                      className="w-5 h-5 sm:w-6 sm:h-6" 
                      fill="#FFD700" 
                      stroke="#FFD700"
                      strokeWidth={1}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed relative z-10 font-medium italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4 pt-5 border-t-2 border-gray-200/50 relative z-10">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-yellow-400/30 flex-shrink-0 shadow-lg"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">{testimonial.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <p className="text-xs text-gray-700 font-semibold truncate">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-50 to-orange-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg border-2 border-yellow-200/50"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className="w-5 h-5 sm:w-6 sm:h-6" 
                  fill="#FFD700" 
                  stroke="#FFD700"
                  strokeWidth={1}
                />
              ))}
            </div>
            <div className="h-8 w-px bg-yellow-300" />
            <span className="text-sm sm:text-base text-gray-800 font-bold">
              5.0 estrellas promedio de más de 200 clientes satisfechos
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
