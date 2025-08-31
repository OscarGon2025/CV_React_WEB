import React from 'react';
import { User, Target, Award, Calendar } from 'lucide-react';

/**
 * Sección "Sobre mí" con información personal y objetivos
 */
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre mí
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desarrollador apasionado con experiencia internacional y enfoque en tecnologías modernas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Perfil Profesional
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Desarrollador Web y Web Móvil con sólida formación en programación y experiencia 
                  práctica en proyectos reales. Especializado en desarrollo full-stack con 
                  tecnologías como Java, PHP, JavaScript y frameworks modernos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Objetivo Actual
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Buscando oportunidades de STAGE (8 SEPT - 31 OCT 2025) para aplicar mis 
                  conocimientos en un entorno profesional y continuar mi crecimiento como 
                  desarrollador en el ecosistema tecnológico francés.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Fortalezas
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Adaptabilidad, pensamiento crítico, orientación a resultados y excelente 
                  capacidad de trabajo en equipo. Experiencia multicultural con dominio de 
                  español (nativo), francés (C1) e inglés (B1).
                </p>
              </div>
            </div>
          </div>

          {/* Estadísticas y datos destacados */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-600">Tecnologías dominadas</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-gray-600">Idiomas</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">B</div>
                <div className="text-gray-600">Permis de conducir</div>
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl text-white text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">Disponibilidad</span>
              </div>
              <p className="text-blue-100">
                Marzo 2025 - Actualmente disponible para proyectos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;