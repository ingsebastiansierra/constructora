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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote className="w-12 h-12" fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 font-medium mt-1">{testimonial.project}</p>
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
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
            <span className="text-gray-700 font-semibold">
              5.0 estrellas promedio de más de 200 clientes satisfechos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
