import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    // Forzar la reproducción del video cuando el componente se monta
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <section id="home" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {/* Imagen de fondo - Boceto */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/img/fondo.png"
            alt="Boceto Arquitectos"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5) contrast(1.1)' }}
            loading="eager"
          />
        </div>
        
        {/* Overlay oscuro para efecto nocturno */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Overlay elegante para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/90 z-10" />


      </motion.div>

      {/* Contenido Hero */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-4"
        >
          <span className="px-4 py-2 bg-white/95 border-2 border-white rounded-full text-foreground text-sm shadow-lg font-medium">
            🏆 Excelencia en Diseño Arquitectónico
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl mb-6 font-bold text-white"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
        >
          Construyendo el Futuro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto font-light"
          style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}
        >
          Transformamos tus ideas en espacios arquitectónicos innovadores y sostenibles
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group flex items-center space-x-2 bg-white text-foreground px-8 py-4 rounded-lg hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold"
          >
            <span>Iniciar Proyecto</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 shadow-lg font-semibold"
          >
            <span>Ver Proyectos</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '15+', label: 'Años' },
            { value: '200+', label: 'Proyectos' },
            { value: '100%', label: 'Satisfacción' },
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/95 rounded-lg p-4 shadow-xl border-2 border-white">
              <div className="text-3xl sm:text-4xl text-foreground font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce bg-white/95 rounded-full p-2 shadow-lg border-2 border-white"
      >
        <ChevronDown className="w-8 h-8 text-foreground" />
      </motion.a>
    </section>
  );
}
