import React, { useState } from 'react';
import { collegeOfLawData } from '../constants';
import { HomeIcon, ScaleIcon, ChevronDownIcon } from './icons';

const departmentIcons = {
  'Private and Property Law': <HomeIcon className="w-8 h-8 text-brand-purple-dark" />,
  'Public Law': <ScaleIcon className="w-8 h-8 text-brand-purple-dark" />,
};

const AccordionItem: React.FC<{
  level: {
    level: string;
    description: string;
    courses: string[];
  };
  isOpen: boolean;
  onClick: () => void;
}> = ({ level, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-5 text-left font-semibold text-brand-purple-dark hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-brand-purple focus-visible:ring-opacity-75 transition-colors"
        aria-expanded={isOpen}
      >
        <span>{level.level}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-5 border-t border-gray-200 bg-slate-50">
           <p className="text-gray-600 mb-4">{level.description}</p>
           <ul className="space-y-2">
            {level.courses.map((course) => (
              <li key={course} className="text-gray-600 before:content-['•'] before:mr-2 before:text-brand-gold">{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


const CollegeOfLaw: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">College of Law</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Comprehensive legal education with specialized departments and diverse curriculum.</p>

        {/* Departments */}
        <h3 className="text-2xl font-bold text-brand-purple-dark mb-8">Departments</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {collegeOfLawData.departments.map((dept) => (
            <div key={dept.name} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="p-4 bg-slate-100 rounded-full mb-4">{departmentIcons[dept.name]}</div>
              <h4 className="text-xl font-bold text-brand-purple-dark mb-2">{dept.name}</h4>
              <p className="text-gray-600">{dept.description}</p>
            </div>
          ))}
        </div>

        {/* Curriculum by Level */}
        <h3 className="text-2xl font-bold text-brand-purple-dark mb-8">Curriculum by Level</h3>
        <div className="max-w-4xl mx-auto space-y-3 mb-16">
          {collegeOfLawData.curriculum.map((level, index) => (
            <AccordionItem
              key={level.level}
              level={level}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Areas of Specialization */}
        <h3 className="text-2xl font-bold text-brand-purple-dark mb-8">Areas of Specialization</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {collegeOfLawData.specializations.map((spec) => (
            <button key={spec} className="bg-white text-gray-700 hover:bg-brand-purple-light hover:text-white font-medium py-2 px-5 rounded-lg transition-colors shadow-sm border border-gray-200">
              {spec}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeOfLaw;