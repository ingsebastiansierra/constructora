import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { StatCounter } from './StatCounter';

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
        {/* Video de fondo */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.8) contrast(1.2)' }}
        >
          <source src="/assets/videos/fondoprincipal.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay oscuro para efecto nocturno */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Overlay elegante para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/90 z-10" />
      </motion.div>

      {/* Contenido Hero - Alineado a la izquierda */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full"
      >
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl mb-6 font-bold text-white leading-tight"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
          >
            Construyendo el Futuro
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white mb-8 font-light"
            style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}
          >
            Transformamos tus ideas en espacios arquitectónicos innovadores y sostenibles
          </motion.p>

          {/* Stats with Counter */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-8"
          >
            <StatCounter value={15} suffix="+" label="Años" />
            <StatCounter value={200} suffix="+" label="Proyectos" />
            <StatCounter value={100} suffix="%" label="Satisfacción" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg border-2 border-white/50 hover:bg-white/30 transition-all"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.a>
    </section>
  );
}
