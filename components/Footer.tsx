
import React from 'react';
import { footerLinks } from '../constants';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './icons';

const socialIcons = [
  { icon: <FacebookIcon className="w-6 h-6" />, href: '#' },
  { icon: <TwitterIcon className="w-6 h-6" />, href: '#' },
  { icon: <LinkedinIcon className="w-6 h-6" />, href: '#' },
  { icon: <InstagramIcon className="w-6 h-6" />, href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-purple-dark text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-white mb-2">Chrisland University Law Library</h2>
            <p className="max-w-md mb-4">Empowering legal minds through innovative resources and collaborative learning environments.</p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href} className="hover:text-white transition-colors">{social.icon}</a>
              ))}
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Chrisland University Law Library. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
