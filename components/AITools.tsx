
import React from 'react';
import { aiTools } from '../constants';

const AITools: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">AI Tools for Librarians</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Cutting-edge artificial intelligence tools to enhance library services and research.</p>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {aiTools.map((tool) => (
            <div key={tool.title} className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="p-4 bg-slate-100 rounded-full mb-4 self-center">{tool.icon}</div>
              <h3 className="text-xl font-bold text-brand-purple-dark mb-2">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITools;
