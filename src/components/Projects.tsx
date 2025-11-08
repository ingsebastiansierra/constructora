import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['50px', '-50px']);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Torre Residencial Moderna',
      category: 'Residencial',
      image: 'https://images.unsplash.com/photo-1636884741166-6c1d4be12da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYyNDk4Njc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Edificio de 15 pisos con diseño vanguardista',
    },
    {
      title: 'Proyecto Urbano Sostenible',
      category: 'Comercial',
      image: 'https://images.unsplash.com/photo-1650630718105-497674381f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc2MjU5NDg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Complejo comercial eco-friendly',
    },
    {
      title: 'Centro de Diseño Arquitectónico',
      category: 'Institucional',
      image: 'https://images.unsplash.com/photo-1721244653757-b76cc4679dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwZGVzaWdufGVufDF8fHx8MTc2MjU5MzUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Espacio innovador para creativos',
    },
    {
      title: 'Residencia de Lujo',
      category: 'Residencial',
      image: 'https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjI2MTM1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Villa contemporánea con acabados premium',
    },
    {
      title: 'Edificio Corporativo',
      category: 'Corporativo',
      image: 'https://images.unsplash.com/photo-1653895168758-411ef6038015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MjU5OTgzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Torre de oficinas inteligente',
    },
    {
      title: 'Complejo Nocturno',
      category: 'Mixto',
      image: 'https://images.unsplash.com/photo-1671011778867-b5c354288129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcmNoaXRlY3R1cmUlMjBuaWdodHxlbnwxfHx8fDE3NjI2MTYyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Arquitectura iluminada nocturna',
    },
  ];

  return (
    <section id="projects" ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">


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
            Proyectos Destacados
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Cada proyecto es una obra maestra que combina innovación, funcionalidad y estética
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-white border-2 border-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent flex items-end justify-center pb-6"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    className="flex items-center space-x-2 text-white font-semibold bg-foreground/90 px-4 py-2 rounded-lg"
                  >
                    <span>Ver Detalles</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-foreground text-white text-sm rounded-full font-medium shadow-md">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-2 font-semibold text-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm">
                  {project.description}
                </p>
              </div>

              {/* Bottom Border Animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-foreground origin-left"
              />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
