import React from 'react';
import { Code2, Database, Globe, Smartphone, Settings, GitBranch } from 'lucide-react';

/**
 * Sección de habilidades técnicas organizadas por categorías
 */
const Skills: React.FC = () => {
  // Datos de habilidades organizadas por categorías
  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      icon: <Code2 className="h-6 w-6" />,
      color: 'blue',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'PHP', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Frameworks & Librerías',
      icon: <Globe className="h-6 w-6" />,
      color: 'green',
      skills: [
        { name: 'Spring Boot', level: 85 },
        { name: 'Symfony', level: 80 },
        { name: 'Angular', level: 75 },
        { name: 'React', level: 70 },
        { name: 'Bootstrap', level: 90 },
        { name: 'jQuery', level: 85 }
      ]
    },
    {
      title: 'Bases de Datos',
      icon: <Database className="h-6 w-6" />,
      color: 'purple',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'MongoDB', level: 70 }
      ]
    },
    {
      title: 'Herramientas & Metodologías',
      icon: <Settings className="h-6 w-6" />,
      color: 'orange',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Scrum/Agile', level: 80 },
        { name: 'UML', level: 75 },
        { name: 'WordPress', level: 85 }
      ]
    }
  ];

  // Función para obtener colores según la categoría
  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getProgressColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      orange: 'bg-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones digitales completas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              {/* Header de la categoría */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg border ${getColorClasses(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Lista de habilidades con barras de progreso */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    
                    {/* Barra de progreso */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(category.color)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Herramientas adicionales */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Herramientas de Desarrollo
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Eclipse', 'Visual Studio Code', 'PhpStorm', 'IntelliJ', 
              'GitLab', 'Moodle', 'Express.js'
            ].map((tool, index) => (
              <span 
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 text-gray-700 font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;