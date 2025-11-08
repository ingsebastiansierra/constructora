import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '3102824812',
      link: 'https://wa.me/573102824812?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios',
      color: 'from-primary to-blue-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@boceto.com',
      link: 'mailto:contacto@boceto.com',
      color: 'from-accent to-orange-500',
    },
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Cl. 32 #8-09, Tunja, Boyacá',
      link: 'https://maps.google.com/?q=Cl.+32+8-09+Tunja+Boyaca',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lun-Vie: 8:00 AM - 6:00 PM',
      link: null,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">


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
            Inicia tu Proyecto
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Estamos listos para hacer realidad tu visión arquitectónica. ¡Conversemos!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
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
                <div className={`w-14 h-14 mx-auto mb-4 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-2 text-foreground/60 font-medium">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-semibold hover:text-foreground/80 transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-foreground font-semibold">{info.content}</p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl mb-6 text-foreground font-bold">Envíanos un Mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm text-foreground/70 font-medium">
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Juan Pérez"
                    required
                    className="bg-gray-50 border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-foreground/70 font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@ejemplo.com"
                    required
                    className="bg-gray-50 border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm text-foreground/70 font-medium">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="3001234567"
                    required
                    className="bg-gray-50 border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm text-foreground/70 font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                    rows={5}
                    className="bg-gray-50 border-gray-300"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-foreground text-white hover:bg-foreground/90 shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full shadow-lg">
              <h3 className="text-2xl mb-6 text-foreground font-bold">Encuéntranos</h3>
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-gray-100">
                {/* Mapa iframe de Google Maps */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5!2d-73.36!3d5.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzEnNTIuOCJOIDczwrAyMSczNi4wIlc!5e0!3m2!1sen!2sco!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-sm text-foreground/70 mb-2">
                  Visítanos en nuestra oficina para una consulta personalizada
                </p>
                <a
                  href="https://maps.google.com/?q=Cl.+32+8-09+Tunja+Boyaca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-foreground hover:text-foreground/80 transition-colors font-medium"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
