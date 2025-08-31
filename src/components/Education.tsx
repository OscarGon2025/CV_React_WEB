import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

/**
 * Sección de formación académica y certificaciones
 */
const Education: React.FC = () => {
  // Datos de formación académica
  const education = [
    {
      degree: 'Développeur Web et Web Mobile',
      institution: 'ENI École Informatique',
      location: 'Rennes, Francia',
      period: 'Mars 2025 - En cours',
      status: 'En curso',
      description: 'Formación especializada en desarrollo web moderno y aplicaciones móviles.',
      highlights: [
        'Desarrollo full-stack con tecnologías modernas',
        'Metodologías ágiles y trabajo en equipo',
        'Proyectos prácticos con empresas reales',
        'Preparación para certificaciones profesionales'
      ]
    },
    {
      degree: 'Licence 2 Informatique',
      institution: 'Université Rennes 1',
      location: 'Rennes, Francia',
      period: '2023-2024',
      status: 'Completado',
      description: 'Formación en fundamentos de informática, lógica de programación y desarrollo Java.',
      highlights: [
        'Programación orientada a objetos con Java',
        'Desarrollo web con HTML, CSS, JavaScript',
        'Bases de datos y SQL',
        'Algoritmos y estructuras de datos'
      ]
    },
    {
      degree: 'Diplôme de Français Langue Étrangère B2-C1',
      institution: 'Université Rennes 2 (CIREFE)',
      location: 'Rennes, Francia',
      period: '2021-2023',
      status: 'Certificado',
      description: 'Certificación oficial de francés como lengua extranjera nivel avanzado.',
      highlights: [
        'Dominio avanzado del francés técnico',
        'Comunicación profesional en contexto francés',
        'Integración cultural y profesional'
      ]
    },
    {
      degree: 'Réalisateur Multimédia (Bac +3)',
      institution: 'SENA',
      location: 'Colombia',
      period: '2012-2015',
      status: 'Completado',
      description: 'Formación técnica en producción multimedia y tecnologías digitales.',
      highlights: [
        'Producción de contenido multimedia',
        'Diseño gráfico y web',
        'Gestión de proyectos digitales',
        'Fundamentos de programación'
      ]
    }
  ];

  // Certificaciones y cursos adicionales
  const certifications = [
    {
      name: 'Metodologías Ágiles (Scrum)',
      issuer: 'Formación profesional',
      year: '2024'
    },
    {
      name: 'Git y GitHub',
      issuer: 'Autoformación',
      year: '2023'
    },
    {
      name: 'WordPress & WooCommerce',
      issuer: 'Experiencia profesional',
      year: '2018-2020'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Formación Académica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trayectoria educativa sólida con enfoque en tecnologías modernas y desarrollo profesional
          </p>
        </div>

        {/* Timeline de formación */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden lg:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative lg:pl-20">
                {/* Punto en la línea de tiempo */}
                <div className="absolute left-6 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="h-4 w-4" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                        edu.status === 'En curso' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Aspectos destacados */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Aspectos destacados:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, hlIndex) => (
                        <li key={hlIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones adicionales */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Certificaciones y Cursos Adicionales
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                    <span className="text-blue-600 text-sm font-medium">{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Idiomas */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Competencias Lingüísticas
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">ES</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Español</h4>
              <p className="text-gray-600">Nativo</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">FR</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Francés</h4>
              <p className="text-gray-600">Corriente C1</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">EN</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Inglés</h4>
              <p className="text-gray-600">Intermedio B1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;