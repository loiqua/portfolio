import React from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { projects } from '@/data/portfolio-data';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Projets récents
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Découvrez certains de mes travaux récents, construits avec des technologies modernes et des outils de pointe.
          </p>
          <div className="mt-6 sm:mt-8">
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1.5 sm:space-x-2 mx-auto group text-sm sm:text-base">
              <span>Tous les projets</span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 sm:duration-500 overflow-hidden hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 sm:from-blue-100 sm:to-purple-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 sm:from-blue-600/20 sm:to-purple-600/20 group-hover:from-blue-600/20 sm:group-hover:from-blue-600/30 sm:group-hover:to-purple-600/30 transition-all duration-300 sm:duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600/30 sm:text-blue-600/50" />
                </div>
              </div>
              
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Voir le projet</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
