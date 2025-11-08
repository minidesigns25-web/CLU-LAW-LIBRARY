
import React from 'react';
import { contactInfo } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Get in touch with our library team for assistance and support.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="lg:w-1/3">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-full shadow-md">{info.icon}</div>
                  <div>
                    <h3 className="font-bold text-brand-purple-dark">{info.title}</h3>
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" id="first-name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-purple focus:border-brand-purple" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="last-name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-purple focus:border-brand-purple" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-purple focus:border-brand-purple" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-purple focus:border-brand-purple bg-white">
                  <option>General Inquiry</option>
                  <option>Research Assistance</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-purple focus:border-brand-purple"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
