import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Star, Users, Zap, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const values = [
    {
      icon: Star,
      title: 'Excelencia',
      description: 'Comprometidos con la máxima calidad en cada detalle',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos en equipo con nuestros clientes',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Zap,
      title: 'Innovación',
      description: 'Utilizamos las últimas tecnologías y tendencias',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: CheckCircle,
      title: 'Enfoque',
      description: 'Resultados que superan las expectativas',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">


      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 font-bold text-foreground px-4">
            Boceto Arquitectos + Asociados
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pb-12 sm:pb-16 lg:pb-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/img/boceto.png"
                alt="Boceto Arquitectos - Diseño Moderno"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-0 right-4 sm:right-8 lg:-bottom-6 lg:-right-6 bg-foreground p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm text-white/90 font-medium whitespace-nowrap">Años de Experiencia</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl text-foreground font-bold mb-3 sm:mb-4">así comienza el diseño...</h3>
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-3 sm:mb-4">
              Somos un estudio de Arquitectura dedicado al diseño, construcción y el desarrollo de edificaciones que trascienden el medio urbano.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Guiados por un concepto vanguardista, funcional y creativo nos ha llevado a posicionarnos en una dirección reconocida, haciendo de cada proyecto un reflejo de nuestra pasión, compromiso y alianza perfecta con nuestros clientes.
            </p>
            <div className="pt-3 sm:pt-4">
              <h3 className="text-xl sm:text-2xl text-foreground font-bold mb-3 sm:mb-4">Nuestra Ubicación</h3>
              <p className="text-foreground/80 text-base sm:text-lg">
                📍 Cl. 32 #8-09, Tunja, Boyacá<br />
                📞 3102824812
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className={`${value.bgColor} border-2 border-gray-100 rounded-3xl p-6 sm:p-8 text-center group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              >
                {/* Decorative background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center shadow-xl relative z-10`}
                >
                  {Icon && <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg" strokeWidth={2.5} fill="white" fillOpacity={0.2} />}
                </motion.div>
                
                <h3 className="text-xl sm:text-2xl mb-3 font-bold text-gray-900 transition-colors relative z-10">
                  {value.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed relative z-10">
                  {value.description}
                </p>
                
                {/* Decorative dot */}
                <div className={`absolute bottom-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br ${value.color} opacity-50`} />
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="relative bg-gray-50 rounded-2xl p-6 sm:p-8 border-2 border-gray-200">
            <div className="text-4xl sm:text-6xl text-primary/30 mb-3 sm:mb-4">"</div>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground italic mb-4 sm:mb-6 font-light px-2">
              La arquitectura debe hablar de su tiempo y lugar, pero anhelar la atemporalidad
            </p>
            <div className="h-1 w-16 sm:w-24 mx-auto bg-foreground rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
