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
      title: 'Villa Moderna Minimalista',
      category: 'Residencial',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      description: 'Casa de lujo con diseño contemporáneo y vistas panorámicas',
    },
    {
      title: 'Recorrido Arquitectónico',
      category: 'Residencial',
      type: 'video',
      media: '/assets/videos/fondoprincipal.mp4',
      description: 'Tour virtual de residencia moderna',
    },
    {
      title: 'Torre Corporativa Sostenible',
      category: 'Comercial',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      description: 'Edificio inteligente con certificación LEED',
    },
    {
      title: 'Casa Contemporánea',
      category: 'Residencial',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      description: 'Diseño minimalista con espacios abiertos',
    },
    {
      title: 'Penthouse de Lujo',
      category: 'Residencial',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'Apartamento de lujo con acabados premium',
    },
    {
      title: 'Diseño de Interiores',
      category: 'Interiorismo',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      description: 'Espacios interiores elegantes y funcionales',
    },
  ];

  return (
    <section id="projects" ref={ref} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">


      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 font-bold text-foreground">
            Proyectos Destacados
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            Cada proyecto es una obra maestra que combina innovación, funcionalidad y estética
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              {/* Media Container */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-900">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  {project.type === 'video' ? (
                    <video
                      src={project.media}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageWithFallback
                      src={project.media}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
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
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl mb-2 font-semibold text-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm sm:text-base">
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
