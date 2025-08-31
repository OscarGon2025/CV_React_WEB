import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

/**
 * Sección de experiencia profesional con timeline
 */
const Experience: React.FC = () => {
  // Datos de experiencia profesional
  const experiences = [
    {
      title: 'Proyectos informáticos realizados',
      company: 'ENI École Informatique',
      location: 'Rennes, Francia',
      period: 'Marzo 2025 - Actualmente',
      type: 'Formación Práctica',
      description: 'Desarrollo de proyectos académicos aplicando metodologías ágiles y tecnologías modernas.',
      achievements: [
        'Desarrollo de juego Memory con HTML, CSS y JavaScript',
        'Creación de sitio de subastas con Java Spring Boot y SQL',
        'Aplicación web organizada en capas, trabajo en equipo con GitHub',
        'Análisis, concepción y desarrollo de sitio de organización de eventos con PHP y MySQL usando Framework Symfony'
      ],
      technologies: ['Java', 'Spring Boot', 'PHP', 'Symfony', 'JavaScript', 'HTML/CSS', 'SQL', 'MySQL']
    },
    {
      title: 'Aide Cuisinier',
      company: 'Bar Tiffany\'s',
      location: 'Francia',
      period: 'Sept. 2021 - Actualmente',
      type: 'Tiempo Parcial',
      description: 'Trabajo en equipo en ambiente multicultural, desarrollando habilidades de comunicación y gestión del tiempo.',
      achievements: [
        'Gestión eficiente en ambiente de alta presión',
        'Trabajo colaborativo en equipo internacional',
        'Desarrollo de habilidades de organización y multitarea'
      ],
      technologies: []
    },
    {
      title: 'Stage Tuteur Informatique',
      company: 'Université de Rennes 2',
      location: 'Rennes, Francia',
      period: 'Sept. 2021 - Fév. 2022',
      type: 'Prácticas',
      description: 'Soporte técnico y formación en plataformas educativas digitales.',
      achievements: [
        'Asistencia a profesores en el uso de plataforma Moodle',
        'Traducción de páginas web del CIREFE',
        'Soporte técnico en herramientas educativas digitales'
      ],
      technologies: ['Moodle', 'HTML', 'CSS', 'Gestión de contenidos']
    },
    {
      title: 'Développeur Web',
      company: 'Simonshoes.com',
      location: 'Colombia',
      period: 'Janv. 2018 - Sept. 2020',
      type: 'Freelance',
      description: 'Desarrollo completo de sitio e-commerce con gestión de inventario y pagos.',
      achievements: [
        'Creación de sitio WordPress con WooCommerce',
        'Integración de sistema de pagos online',
        'Optimización SEO y rendimiento',
        'Gestión completa del proyecto desde análisis hasta deployment'
      ],
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'JavaScript']
    },
    {
      title: 'Consultant TIC',
      company: 'Université Catholique',
      location: 'Colombia',
      period: 'Mars 2018 - Fév. 2019',
      type: 'Consultoría',
      description: 'Consultoría en tecnologías educativas y desarrollo de contenido digital.',
      achievements: [
        'Desarrollo web para plataformas educativas',
        'Creación de videos educativos',
        'Gestión de plataforma LMS (Moodle)',
        'Formación técnica a personal docente'
      ],
      technologies: ['Moodle', 'HTML', 'CSS', 'JavaScript', 'Video editing']
    },
    {
      title: 'Chargé Services TIC',
      company: 'Université San Buenaventura',
      location: 'Colombia',
      period: 'Oct. 2017 - Déc. 2018',
      type: 'Tiempo Completo',
      description: 'Gestión de servicios tecnológicos y plataformas de aprendizaje.',
      achievements: [
        'Administración de plataforma LMS Moodle',
        'Soporte técnico a estudiantes y profesores',
        'Mantenimiento de infraestructura tecnológica educativa'
      ],
      technologies: ['Moodle', 'Administración de sistemas', 'Soporte técnico']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trayectoria profesional con experiencia en desarrollo web, consultoría TIC y gestión de proyectos
          </p>
        </div>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative lg:pl-20">
                {/* Punto en la línea de tiempo */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Logros principales */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Logros principales:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tecnologías utilizadas */}
                  {exp.technologies.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tecnologías utilizadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Interesado en colaborar?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Estoy disponible para proyectos freelance, prácticas profesionales y oportunidades de desarrollo full-time.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Contactar ahora</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;