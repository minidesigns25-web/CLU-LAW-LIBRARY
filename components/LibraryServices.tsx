
import React from 'react';
import { libraryServices } from '../constants';
import { ArrowRightIcon } from './icons';

const LibraryServices: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">Library Services</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Comprehensive support for all your legal research and academic needs.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {libraryServices.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-md text-left flex flex-col">
              <div className="p-4 bg-slate-100 rounded-full mb-4 self-start">{service.icon}</div>
              <h3 className="text-xl font-bold text-brand-purple-dark mb-2">{service.title}</h3>
              <p className="text-gray-600 flex-grow mb-4">{service.description}</p>
              <a href="#" className="font-semibold text-brand-purple-dark hover:text-brand-gold flex items-center group">
                Learn More <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibraryServices;
