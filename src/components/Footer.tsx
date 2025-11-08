import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gray-50 border-t-2 border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center shadow-md">
                <span className="text-2xl">🏗️</span>
              </div>
              <div>
                <div className="text-xl text-foreground font-bold">Boceto</div>
                <div className="text-xs text-foreground/60 font-medium">Arquitectos + Asociados</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Transformando visiones en realidades arquitectónicas desde hace más de 15 años en Tunja, Boyacá.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-foreground hover:border-foreground transition-all duration-300 group shadow-sm"
                  >
                    <Icon className="w-5 h-5 text-foreground/60 group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg mb-4 text-foreground font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-foreground group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg mb-4 text-foreground font-bold">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/573102824812?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-sm text-foreground/70 hover:text-foreground transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>3102824812 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@boceto.com"
                  className="flex items-start space-x-3 text-sm text-foreground/70 hover:text-foreground transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>contacto@boceto.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Cl.+32+8-09+Tunja+Boyaca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-sm text-foreground/70 hover:text-foreground transition-colors group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Cl. 32 #8-09, Tunja, Boyacá</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg mb-4 text-foreground font-bold">Newsletter</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Suscríbete para recibir novedades sobre nuestros proyectos
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-foreground rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <Mail className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-sm text-foreground/60 text-center md:text-left">
            © {currentYear} Boceto Arquitectos + Asociados. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
            <a href="#" className="hover:text-foreground transition-colors">Términos</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground" />
    </footer>
  );
}
