import React from 'react';
import { Code, Smartphone, Heart, ArrowUp } from 'lucide-react';
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * Pie de página con información adicional y navegación
 */
const Footer: React.FC = () => {
  // Función para volver al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Información principal */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-blue-400" />
              <Smartphone className="h-5 w-5 text-green-400" />
              <span className="font-bold text-xl">Oscar González</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Desarrollador Web & Web Móvil especializado en crear soluciones digitales 
              modernas y eficientes. Disponible para proyectos freelance y oportunidades profesionales.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Enlaces Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Sobre mí', id: 'about' },
                { name: 'Habilidades', id: 'skills' },
                { name: 'Experiencia', id: 'experience' },
                { name: 'Formación', id: 'education' },
                { name: 'Contacto', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <div className="space-y-3">
              <a 
                href="mailto:oscar.gonzalez2025@campus-eni.fr"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>oscar.gonzalez2025@campus-eni.fr</span>
              </a>
              
              <a 
                href="tel:+33767489186"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>07 67 48 91 86</span>
              </a>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Mordelles 35310, Francia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>usando React + TypeScript + Tailwind CSS</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">
                © 2025 Oscar González. Todos los derechos reservados.
              </span>
              
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
                aria-label="Volver al inicio"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;