import { motion } from 'motion/react';
import { Building2, Palette, Building } from 'lucide-react';
import { useState } from 'react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  images: string[];
}

const services: Service[] = [
  {
    id: 'residencial',
    title: 'Arquitectura Residencial',
    icon: <Building2 className="w-8 h-8" />,
    description: 'Diseñamos hogares que reflejan tu estilo de vida, combinando funcionalidad, estética y confort en cada detalle.',
    images: [
      '/assets/img/residencial/present_arquitectura_residencial.png',
      '/assets/img/residencial/1.png',
      '/assets/img/residencial/2.png',
      '/assets/img/residencial/3.png',
      '/assets/img/boceto.png',
      '/assets/img/boceto_2.png',
    ],
  },
  {
    id: 'interiorismo',
    title: 'Interiorismo',
    icon: <Palette className="w-8 h-8" />,
    description: 'Creamos ambientes únicos que transforman espacios en experiencias, cuidando cada elemento decorativo y funcional.',
    images: [
      '/assets/img/interiorisimo/present_interiorisimo.png',
      '/assets/img/interiorisimo/1.jpg',
      '/assets/img/boceto_fondo.png',
      '/assets/img/fondo.png',
      '/assets/img/boceto.png',
      '/assets/img/boceto_2.png',
    ],
  },
  {
    id: 'alta-complejidad',
    title: 'Alta Complejidad',
    icon: <Building className="w-8 h-8" />,
    description: 'Desarrollamos proyectos de gran escala con soluciones innovadoras, tecnología avanzada y gestión integral.',
    images: [
      '/assets/img/fondo.png',
      '/assets/img/boceto_fondo.png',
      '/assets/img/residencial/present_arquitectura_residencial.png',
      '/assets/img/interiorisimo/present_interiorisimo.png',
      '/assets/img/boceto.png',
      '/assets/img/boceto_2.png',
    ],
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<string>(services[0].id);

  const currentService = services.find((s) => s.id === activeService) || services[0];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones arquitectónicas integrales adaptadas a tus necesidades
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                activeService === service.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {service.icon}
              <span className="font-semibold text-lg">{service.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Service Content */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-12"
        >
          {/* Description */}
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            {currentService.description}
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentService.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${currentService.title} - Imagen ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">{currentService.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
