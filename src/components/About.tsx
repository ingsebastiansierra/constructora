import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';
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
      icon: Award,
      title: 'Excelencia',
      description: 'Comprometidos con la máxima calidad en cada detalle',
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos en equipo con nuestros clientes',
    },
    {
      icon: Zap,
      title: 'Innovación',
      description: 'Utilizamos las últimas tecnologías y tendencias',
    },
    {
      icon: Target,
      title: 'Enfoque',
      description: 'Resultados que superan las expectativas',
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">


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
            Boceto Arquitectos + Asociados
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/img/boceto.png"
                alt="Boceto Arquitectos - Diseño Moderno"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-foreground p-8 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <div className="text-4xl text-white font-bold mb-2">15+</div>
                <div className="text-sm text-white/90 font-medium">Años de Experiencia</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-foreground font-bold mb-4">así comienza el diseño...</h3>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Somos un estudio de Arquitectura dedicado al diseño, construcción y el desarrollo de edificaciones que trascienden el medio urbano.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Guiados por un concepto vanguardista, funcional y creativo nos ha llevado a posicionarnos en una dirección reconocida, haciendo de cada proyecto un reflejo de nuestra pasión, compromiso y alianza perfecta con nuestros clientes.
            </p>
            <div className="pt-4">
              <h3 className="text-2xl text-foreground font-bold mb-4">Nuestra Ubicación</h3>
              <p className="text-foreground/80 text-lg">
                📍 Cl. 32 #8-09, Tunja, Boyacá<br />
                📞 3102824812
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-xl bg-foreground flex items-center justify-center"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl mb-2 font-semibold text-foreground transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-foreground/60">
                  {value.description}
                </p>
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
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="relative bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <div className="text-6xl text-primary/30 mb-4">"</div>
            <p className="text-2xl text-foreground italic mb-6 font-light">
              La arquitectura debe hablar de su tiempo y lugar, pero anhelar la atemporalidad
            </p>
            <div className="h-1 w-24 mx-auto bg-foreground rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
