import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Building2, Ruler, Palette, Lightbulb, Home, Building } from 'lucide-react';

export function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);

  const services = [
    {
      icon: Building2,
      title: 'Diseño Arquitectónico',
      description: 'Proyectos arquitectónicos innovadores y funcionales adaptados a tus necesidades.',
      color: 'from-primary to-blue-500',
    },
    {
      icon: Ruler,
      title: 'Planos y Cálculos',
      description: 'Planos técnicos detallados y cálculos estructurales certificados.',
      color: 'from-accent to-orange-500',
    },
    {
      icon: Palette,
      title: 'Diseño de Interiores',
      description: 'Espacios interiores únicos que reflejan tu estilo y personalidad.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Lightbulb,
      title: 'Consultoría',
      description: 'Asesoría profesional en todas las etapas de tu proyecto constructivo.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Home,
      title: 'Vivienda Residencial',
      description: 'Diseño de casas y apartamentos con enfoque en confort y sostenibilidad.',
      color: 'from-primary to-cyan-500',
    },
    {
      icon: Building,
      title: 'Proyectos Comerciales',
      description: 'Espacios comerciales que maximizan funcionalidad y rentabilidad.',
      color: 'from-accent to-yellow-500',
    },
  ];

  return (
    <section id="services" ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">


      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-bold text-foreground">
            Soluciones Integrales
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Ofrecemos servicios completos de arquitectura y construcción con los más altos estándares de calidad
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
              >

                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3 text-foreground font-semibold transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/60">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="absolute bottom-0 left-0 h-1 bg-foreground"
                />
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
