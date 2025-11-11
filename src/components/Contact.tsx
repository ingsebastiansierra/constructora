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
    projectType: '',
    budget: '',
    location: '',
    timeline: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo en las próximas 24 horas.');
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
      content: 'boceto.asociados@gmail.com',
      link: 'mailto:boceto.asociados@gmail.com',
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
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Send style={{ width: '24px', height: '24px', color: 'white' }} />
                </div>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: 'white',
                  margin: 0,
                }}>
                  Cotiza tu Proyecto
                </h3>
              </div>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '32px',
                fontSize: '16px',
                lineHeight: '1.6',
              }}>
                Completa el formulario y recibe una propuesta personalizada en 24 horas
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Nombre y Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
                      Nombre Completo *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      required
                      style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        fontSize: '15px',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      required
                      style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        fontSize: '15px',
                      }}
                    />
                  </div>
                </div>

                {/* Teléfono y Tipo de Proyecto */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
                      Teléfono / WhatsApp *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="3001234567"
                      required
                      style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        fontSize: '15px',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
                      Tipo de Proyecto *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      required
                      style={{
                        width: '100%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        fontSize: '15px',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Selecciona...</option>
                      <option value="residencial">Arquitectura Residencial</option>
                      <option value="interiorismo">Interiorismo</option>
                      <option value="alta-complejidad">Alta Complejidad</option>
                      <option value="remodelacion">Remodelación</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                {/* Presupuesto y Ubicación */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
                      Presupuesto Estimado
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        fontSize: '15px',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Selecciona...</option>
                      <option value="50-100">$50M - $100M</option>
                      <option value="100-200">$100M - $200M</option>
                      <option value="200-500">$200M - $500M</option>
                      <option value="500+">Más de $500M</option>
                      <option value="consultar">Por consultar</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
                      Ubicación del Proyecto
                    </label>
                    <Input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Ciudad, Departamento"
                      style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        fontSize: '15px',
                      }}
                    />
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
                    ¿Cuándo deseas iniciar?
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      fontSize: '15px',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="">Selecciona...</option>
                    <option value="inmediato">Inmediatamente</option>
                    <option value="1-3-meses">En 1-3 meses</option>
                    <option value="3-6-meses">En 3-6 meses</option>
                    <option value="6+-meses">Más de 6 meses</option>
                    <option value="explorando">Solo estoy explorando</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe tu visión, necesidades específicas, metraje aproximado, etc..."
                    required
                    rows={4}
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      fontSize: '15px',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'white',
                    color: '#667eea',
                    border: 'none',
                    padding: '16px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                >
                  <Send style={{ width: '20px', height: '20px' }} />
                  Solicitar Cotización
                </button>

                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '13px',
                  textAlign: 'center',
                  margin: '8px 0 0 0',
                }}>
                  🔒 Tus datos están protegidos y serán tratados con confidencialidad
                </p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8!2d-73.3678!3d5.5353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzInMDcuMSJOIDczwrAyMicwNC4xIlc!5e0!3m2!1ses!2sco!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Ubicación Boceto Arquitectos - Cl. 32 #8-09, Tunja, Boyacá"
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
