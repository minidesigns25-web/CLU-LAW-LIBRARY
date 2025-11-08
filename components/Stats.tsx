

import React from 'react';
import { stats } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="bg-slate-100 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl lg:text-5xl font-bold text-brand-purple-dark">{stat.value}</p>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;