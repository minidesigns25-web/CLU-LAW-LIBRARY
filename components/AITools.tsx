import React from 'react';
import { aiTools, legalAiTools } from '../constants';
import { ArrowRightIcon, ExternalLinkIcon } from './icons';

const AITools: React.FC = () => {
  return (
    <section id="ai-tools" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">AI Tools for Librarians & Legal Professionals</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Cutting-edge artificial intelligence to enhance library services and legal practice.</p>
        </div>

        <h3 className="text-2xl font-bold text-brand-purple-dark mb-8 text-center">For Librarians</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20">
          {aiTools.map((tool) => (
            <div key={tool.title} className="bg-white p-8 rounded-lg shadow-md text-left flex flex-col">
              <div className="p-4 bg-slate-100 rounded-full mb-4 self-start">{tool.icon}</div>
              <h3 className="text-xl font-bold text-brand-purple-dark mb-2">{tool.title}</h3>
              <p className="text-gray-600 flex-grow mb-4">{tool.description}</p>
              <a href={tool.link} className="font-semibold text-brand-purple-dark hover:text-brand-gold flex items-center group mt-auto">
                Learn More <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-brand-purple-dark mb-8 text-center">Featured Tools for the Legal Profession</h3>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <ul className="divide-y divide-gray-200">
              {legalAiTools.map((tool) => (
                <li key={tool.name} className="p-6 hover:bg-slate-50 transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="flex-1 mb-4 sm:mb-0 sm:pr-6">
                      <h4 className="text-xl font-bold text-brand-purple-dark">{tool.name}</h4>
                      <p className="text-gray-600 mt-1">{tool.description}</p>
                    </div>
                    <a 
                      href={tool.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-brand-gold hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm shrink-0"
                    >
                      Visit Website <ExternalLinkIcon className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITools;