
import React, { useState } from 'react';
import {
  opacLink,
  openAccessEbooks,
  openAccessEjournals,
  openDatabases,
  subscribedDatabases
} from '../constants';
import { DownloadIcon, ExternalLinkIcon, BookOpenIcon, DatabaseIcon, NewspaperIcon } from './icons';

type Tab = 'OPAC' | 'eBooks' | 'eJournals' | 'Open Databases' | 'Subscribed Databases';

const DigitalResources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('eBooks');
  
  const tabs: Tab[] = ['OPAC', 'eBooks', 'eJournals', 'Open Databases', 'Subscribed Databases'];

  const renderContent = () => {
    switch (activeTab) {
      case 'OPAC':
        return (
          <div className="bg-white p-12 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <BookOpenIcon className="w-16 h-16 mx-auto text-brand-purple mb-4" />
            <h3 className="text-2xl font-bold text-brand-purple-dark mb-4">Online Public Access Catalog</h3>
            <p className="text-gray-600 max-w-lg mx-auto mb-6">Search for physical books, journals, and other materials available in the Chrisland University Library.</p>
            <a href={opacLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-brand-gold hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Go to OPAC <ExternalLinkIcon className="w-5 h-5 ml-2" />
            </a>
          </div>
        );
      case 'eBooks':
        return (
            <div>
              {/* eBooks Grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {openAccessEbooks.map(book => (
                  <div key={book.title} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
                    <img src={book.coverUrl} alt={book.title} className="w-full h-64 object-cover" />
                    <div className="p-4 flex flex-col flex-grow">
                      <h4 className="text-lg font-bold text-brand-purple-dark mb-1 flex-grow">{book.title}</h4>
                      <p className="text-sm text-gray-500 mb-1">by {book.author}</p>
                      <p className="text-xs text-gray-500 mb-3">{book.publisher}, {book.year}</p>
                      <span className="text-xs font-semibold bg-brand-lilac text-brand-purple-dark py-1 px-2 rounded-full self-start mb-4">{book.category}</span>
                      <a href={book.downloadUrl} download className="mt-auto w-full flex items-center justify-center bg-brand-gold hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                        <DownloadIcon className="w-5 h-5 mr-2" />
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              {openAccessEbooks.length === 0 && <p className="text-center text-gray-500 mt-8">No eBooks found.</p>}
            </div>
        );
      case 'eJournals':
      case 'Open Databases':
      case 'Subscribed Databases':
        const dataMap = {
          'eJournals': { title: 'Open Access eJournals', data: openAccessEjournals, icon: <NewspaperIcon className="w-8 h-8 text-brand-purple" /> },
          'Open Databases': { title: 'Open Access Databases', data: openDatabases, icon: <DatabaseIcon className="w-8 h-8 text-brand-gold" /> },
          'Subscribed Databases': { title: 'Subscribed Institutional Databases', data: subscribedDatabases, icon: <DatabaseIcon className="w-8 h-8 text-brand-purple-dark" /> },
        };
        const currentData = dataMap[activeTab];
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-purple-dark mb-4">{currentData.title}</h3>
            {currentData.data.map(item => (
              <div key={item.name} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="p-3 bg-brand-lilac rounded-full mr-4">{currentData.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-purple-dark">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-brand-purple-dark font-semibold hover:text-brand-gold">
                  Access <ExternalLinkIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <section className="py-20 bg-brand-lilac/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">Digital Law Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">A centralized hub for free, open access, and institutional law resources.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center border-b-2 border-brand-purple/20 mb-8">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-6 text-lg font-semibold transition-colors duration-300 focus:outline-none ${
                activeTab === tab 
                ? 'border-b-4 border-brand-gold text-brand-purple-dark' 
                : 'text-gray-500 hover:text-brand-purple'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default DigitalResources;
