

import React from 'react';
import { virtualLibraryResources } from '../constants';

const cardColors = [
  'bg-brand-purple-dark',
  'bg-brand-gold',
  'bg-brand-purple',
];

const VirtualLibrary: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">Virtual Library</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Access thousands of digital resources anytime, anywhere.</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {virtualLibraryResources.map((resource, index) => (
            <div key={resource.title} className={`${cardColors[index]} text-white p-8 rounded-lg shadow-xl flex flex-col`}>
              <div className="flex items-center mb-4">
                {resource.icon}
                <h3 className="text-2xl font-bold ml-3">{resource.title}</h3>
              </div>
              <p className="flex-grow mb-6">{resource.description}</p>
              <ul className="space-y-2 mb-8 text-left">
                {resource.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-white text-gray-800 hover:bg-slate-200 font-bold py-3 px-6 rounded-lg w-full transition-colors">
                {resource.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualLibrary;