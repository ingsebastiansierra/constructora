import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(230, 230, 230, 0)', 'rgba(230, 230, 230, 1)']
  );
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 1)', 'rgba(20, 20, 20, 1)']
  );

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, borderBottomColor: borderColor }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              style={{ backgroundColor: textColor }}
              className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
            >
              <span className="text-2xl">🏗️</span>
            </motion.div>
            <div>
              <motion.div 
                style={{ color: textColor }}
                className="text-xl tracking-tight font-bold"
              >
                Boceto
              </motion.div>
              <motion.div 
                style={{ color: textColor, opacity: 0.6 }}
                className="text-xs font-medium"
              >
                Arquitectos + Asociados
              </motion.div>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                style={{ color: textColor }}
                className="hover:opacity-80 transition-opacity relative group font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
                <motion.span 
                  style={{ backgroundColor: textColor }}
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" 
                />
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/573102824812?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg"
              style={{ 
                backgroundColor: textColor
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                style={{
                  color: useTransform(scrollY, [0, 100], ['rgba(20, 20, 20, 1)', 'rgba(255, 255, 255, 1)'])
                }}
                className="flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">3102824812</span>
              </motion.div>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: textColor }}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 bg-white"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-black hover:bg-black hover:!text-white hover:pl-2 transition-all font-medium rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/573102824812?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-foreground text-white px-4 py-3 rounded-lg hover:bg-foreground/90 transition-colors mt-2 font-semibold shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </motion.div>
        )}
      </div>
      
      {/* Fondo blanco y texto negro forzado en móvil */}
      <style>{`
        @media (max-width: 768px) {
          nav {
            background-color: white !important;
            border-bottom: 1px solid #e5e7eb !important;
          }
          nav * {
            color: black !important;
          }
          nav button svg {
            color: black !important;
          }
          nav a:hover {
            background-color: black !important;
            color: white !important;
            padding-left: 0.5rem !important;
          }
          nav a:hover *,
          nav a:hover span,
          nav a:hover div {
            color: white !important;
          }
          nav a:hover svg {
            color: white !important;
          }
        }
      `}</style>
    </motion.nav>
  );
}
