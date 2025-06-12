import React from 'react';
import { skills } from '@/data/portfolio-data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Compétences techniques
          </h2>
          <p className="text-xl text-gray-600">
            Technologies avec lesquelles je travaille
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.category}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  <skill.icon className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {skill.category}
              </h3>
              
              <div className="space-y-3">
                {skill.techs.map((tech) => (
                  <div 
                    key={tech}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
