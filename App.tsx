import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import CollegeOfLaw from './components/CollegeOfLaw';
import LibraryServices from './components/LibraryServices';
import DigitalResources from './components/VirtualLibrary';
import AITools from './components/AITools';
import Blog from './components/Blog';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-800">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <Stats />
          <About />
        </div>
        <div id="college-of-law">
          <CollegeOfLaw />
        </div>
        <div id="services">
          <LibraryServices />
        </div>
        <div id="digital-resources">
          <DigitalResources />
        </div>
        <AITools />
        <div id="blog">
          <Blog />
        </div>
        <div id="community">
          <Community />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;