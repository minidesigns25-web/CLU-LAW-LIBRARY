
import React from 'react';
import { communityFeatures } from '../constants';

const Community: React.FC = () => {
  return (
    <section className="bg-brand-purple-dark text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">Connect, collaborate, and share knowledge with fellow legal scholars.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {communityFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="bg-brand-gold/20 p-3 rounded-full">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-10 bg-brand-gold hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              Join Community
            </button>
          </div>

          <div className="lg:w-1/2">
            <img src="https://picsum.photos/600/400?image=175" alt="Community" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
