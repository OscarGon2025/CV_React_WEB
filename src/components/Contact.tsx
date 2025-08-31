import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

/**
 * Sección de contacto con formulario y información de contacto
 */
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Manejo del envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se implementaría la lógica de envío real
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
    
    // Reset después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  // Manejo de cambios en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Contacto
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a 
                      href="mailto:oscar.gonzalez2025@campus-eni.fr"
                      className="text-white font-medium hover:text-blue-400 transition-colors"
                    >
                      oscar.gonzalez2025@campus-eni.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Teléfono</p>
                    <a 
                      href="tel:+33767489186"
                      className="text-white font-medium hover:text-green-400 transition-colors"
                    >
                      07 67 48 91 86
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Ubicación</p>
                    <p className="text-white font-medium">Mordelles 35310, Francia</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-700 p-3 rounded-lg">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/oscar-gonzalez-2025fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-blue-400 transition-colors"
                    >
                      oscar-gonzalez-2025fr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-3">Disponibilidad</h4>
              <div className="space-y-2 text-green-100">
                <p>🎯 <strong>STAGE:</strong> 8 SEPT - 31 OCT 2025</p>
                <p>📚 <strong>Alternance:</strong> A partir de Nov 2025</p>
                <p>💼 <strong>Freelance:</strong> Disponible inmediatamente</p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Envíame un mensaje
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  ¡Mensaje enviado!
                </h4>
                <p className="text-gray-600">
                  Gracias por contactarme. Te responderé lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa (opcional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto o cómo puedo ayudarte..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Llamada a la acción adicional */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Ofrezco servicios de desarrollo web completo, desde la concepción hasta el deployment. 
              Trabajemos juntos para crear algo extraordinario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:oscar.gonzalez2025@campus-eni.fr"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contactar por email
              </a>
              <a 
                href="tel:+33767489186"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;