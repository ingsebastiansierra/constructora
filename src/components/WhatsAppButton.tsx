import { motion } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  // Cambia este número por el número de WhatsApp del negocio (con código de país, sin +)
  const phoneNumber = '573001234567'; // Ejemplo: Colombia
  
  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message || '¡Hola! Me interesa conocer más sobre sus servicios de arquitectura.');
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div style={{ position: 'fixed', bottom: '16px', right: '16px', zIndex: 9999 }}>
      {/* Chat Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          style={{
            position: 'absolute',
            bottom: '75px',
            right: '0',
            width: '320px',
            maxWidth: 'calc(100vw - 32px)',
            zIndex: 10000,
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div style={{ 
            background: 'linear-gradient(to right, #10b981, #059669)',
            padding: '16px',
            color: 'white'
          }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Chatea con nosotros</h3>
                  <p className="text-xs text-green-100">Respuesta rápida</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-green-600 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '24px', backgroundColor: '#ffffff' }}>
            <div style={{
              backgroundColor: '#f0fdf4',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '16px'
            }}>
              <p style={{ fontSize: '14px', color: '#374151', margin: 0 }}>
                👋 ¡Hola! ¿En qué podemos ayudarte?
              </p>
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              style={{
                width: '100%',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                padding: '12px',
                fontSize: '14px',
                resize: 'none',
                fontFamily: 'inherit',
                backgroundColor: '#ffffff',
              }}
              rows={4}
            />

            <button
              onClick={handleSendMessage}
              style={{
                width: '100%',
                marginTop: '16px',
                backgroundColor: '#10b981',
                color: 'white',
                fontWeight: '600',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#059669';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#10b981';
              }}
            >
              <MessageCircle style={{ width: '20px', height: '20px' }} />
              Enviar mensaje
            </button>
          </div>
        </motion.div>
      )}

      {/* Floating Button - SIEMPRE VISIBLE */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {isOpen ? (
          <X style={{ width: '28px', height: '28px' }} />
        ) : (
          <>
            <MessageCircle style={{ width: '32px', height: '32px' }} />
            {/* Badge de notificación */}
            <span
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                backgroundColor: '#ff0000',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'bold',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'pulse 2s infinite',
              }}
            >
              1
            </span>
          </>
        )}
      </button>
    </div>
  );
}
