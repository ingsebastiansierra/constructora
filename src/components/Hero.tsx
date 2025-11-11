import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { StatCounter } from './StatCounter';

export function Hero() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    // Cargar el video inmediatamente
    setShouldLoadVideo(true);
  }, []);

  useEffect(() => {
    // Forzar la reproducción del video cuando esté listo
    if (videoRef.current && shouldLoadVideo) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay prevented:', error);
        });
      }
    }
  }, [shouldLoadVideo]);

  return (
    <section id="home" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Video de fondo con poster */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover"
          style={{ 
            filter: 'brightness(0.8) contrast(1.2)',
            opacity: videoLoaded ? 1 : 0.3,
            transition: 'opacity 0.8s ease-in-out'
          }}
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
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full"
      >
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 font-bold text-white leading-tight"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
          >
            Construyendo el Futuro
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 font-light"
            style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}
          >
            Transformamos tus ideas en espacios arquitectónicos innovadores y sostenibles
          </motion.p>

          {/* Stats with Counter */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 sm:gap-6 md:gap-8"
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
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg border-2 border-white/50 hover:bg-white/30 transition-all"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </motion.a>
    </section>
  );
}
