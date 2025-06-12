import React from 'react';
import { Users, MessageCircle, Settings, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vous cherchez autre chose ou je ne suis pas disponible ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Je peux vous aider à trouver le développeur idéal pour votre projet via mon réseau 
            professionnel. Je travaille en apport de contrat avec des développeurs talentueux et 
            fiables.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Comment ça fonctionne :</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Contactez-moi</h4>
              <p className="text-gray-600">Décrivez votre projet et vos besoins techniques</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Je trouve le développeur</h4>
              <p className="text-gray-600">Je sélectionne un profil adapté dans mon réseau</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Collaboration efficace</h4>
              <p className="text-gray-600">Je facilite la mise en relation et la gestion du contrat</p>
            </div>
          </div>
        </div>

        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto">
          <Mail className="w-6 h-6" />
          <span>Me contacter</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
