import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Componente principal de la aplicación
 * Estructura la página completa del portfolio
 */
function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navegación principal */}
      <Header />
      
      {/* Sección hero con presentación principal */}
      <Hero />
      
      {/* Sección sobre mí */}
      <About />
      
      {/* Sección de habilidades técnicas */}
      <Skills />
      
      {/* Sección de experiencia profesional */}
      <Experience />
      
      {/* Sección de formación académica */}
      <Education />
      
      {/* Sección de contacto */}
      <Contact />
      
      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;