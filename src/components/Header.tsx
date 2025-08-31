import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone } from 'lucide-react';

/**
 * Componente de navegación principal
 * Incluye menú responsive y efectos de scroll
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar scroll y cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Code className="h-6 w-6 text-blue-600" />
              <Smartphone className="h-5 w-5 text-green-600" />
            </div>
            <span className={`font-bold text-xl transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Oscar González
            </span>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Inicio', id: 'hero' },
              { name: 'Sobre mí', id: 'about' },
              { name: 'Habilidades', id: 'skills' },
              { name: 'Experiencia', id: 'experience' },
              { name: 'Formación', id: 'education' },
              { name: 'Contacto', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: 'Inicio', id: 'hero' },
                { name: 'Sobre mí', id: 'about' },
                { name: 'Habilidades', id: 'skills' },
                { name: 'Experiencia', id: 'experience' },
                { name: 'Formación', id: 'education' },
                { name: 'Contacto', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;