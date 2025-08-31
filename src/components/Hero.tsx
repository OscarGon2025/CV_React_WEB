import React from 'react';
import { ArrowDown, MapPin, Phone, Mail, Linkedin, Download } from 'lucide-react';

/**
 * Sección hero principal con presentación y llamada a la acción
 */
const Hero: React.FC = () => {
  // Función para scroll suave a la siguiente sección
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Contenido principal */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Oscar</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  González
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-light text-blue-100">
                Desarrollador Web & Web Móvil
              </h2>
              
              <p className="text-xl text-blue-200 max-w-2xl leading-relaxed">
                Especialista en desarrollo full-stack con experiencia en Java, PHP, JavaScript, TypeScript y frameworks modernos. 
                Creando soluciones digitales innovadoras y experiencias de usuario excepcionales.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="grid sm:grid-cols-2 gap-4 text-blue-100">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Mordelles 35310, Francia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>07 67 48 91 86</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>oscar.gonzalez2025@campus-eni.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-blue-400" />
                <span>oscar-gonzalez-2025fr</span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToAbout()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Conoce mi trabajo
              </button>
              
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Descargar CV</span>
              </button>
            </div>

            {/* Estado actual */}
            <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
              <p className="text-green-300 font-medium">
                🎯 Disponible para STAGE (8 SEPT - 31 OCT 2025)
              </p>
              <p className="text-green-200 text-sm mt-1">
                Formación: Concepteur Développeur d'Applications en Alternance (Bac+3) - Nov 2025
              </p>
            </div>
          </div>

          {/* Imagen/Avatar placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">OG</span>
                </div>
              </div>
              
              {/* Elementos decorativos flotantes */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-white/70 hover:text-white transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;