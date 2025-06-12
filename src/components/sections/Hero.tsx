'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronDown, Github, Linkedin, ExternalLink, Rocket } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 animate-bounce">
                <Rocket className="w-8 h-8 text-blue-600" />
                <span className="text-lg font-medium text-gray-600">Bienvenue dans mon univers</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Développeur web
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Fullstack
                </span>
                <span className="text-gray-800"> en pleine</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  montée en puissance
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Curieux, motivé et passionné par le code, je conçois des interfaces 
              modernes et des applications web dynamiques. J&apos;apprends vite, je construis 
              avec soin, et je suis toujours à la recherche de nouveaux défis techniques à 
              relever. Bienvenue dans mon univers numérique !
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Voir les projets</span>
                <ExternalLink className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-4">
                <a href="https://github.com/loiqua" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
                <a href="https://www.linkedin.com/in/loiqua" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="w-full h-full rounded-full bg-white p-2 flex items-center justify-center">
                  <Image
                    src="/barth.jpg"
                    alt="Photo de profil de Barth"
                    width={320}
                    height={320}
                    className="rounded-full object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Éléments décoratifs animés */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute top-1/2 -right-20 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-60 animate-ping"></div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('projects')}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronDown className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
