

import React from 'react';
import { blogPosts } from '../constants';
import { ArrowRightIcon } from './icons';

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">Latest Blog Posts</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Stay updated with legal research trends and library news.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow text-left">
                <p className="text-brand-purple font-semibold text-sm mb-2">{post.category}</p>
                <h3 className="text-xl font-bold text-brand-purple-dark mb-3 flex-grow">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-auto">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <div className="font-semibold text-brand-purple-dark group-hover:text-brand-gold flex items-center transition-colors">
                    Read More <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
