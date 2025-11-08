
import React from 'react';
import { EyeIcon, GoalIcon, UsersIcon } from './icons';

const aboutCards = [
  {
    icon: <EyeIcon className="w-8 h-8 text-brand-purple" />,
    title: 'Our Vision',
    description: 'To be the premier legal information hub that transforms legal education and research through innovative technology and comprehensive resources.',
  },
  {
    icon: <GoalIcon className="w-8 h-8 text-brand-gold" />,
    title: 'Our Mission',
    description: 'To provide exceptional library services, foster academic excellence, and support the research needs of our legal community with expert guidance.',
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-brand-purple-dark" />,
    title: 'Our Team',
    description: 'Dedicated librarians and information specialists committed to supporting your academic journey with personalized assistance and expert guidance.',
  },
];

const About: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-purple-dark mb-4">About Our Library</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Empowering legal minds through innovative resources and collaborative learning environments.</p>

        <div className="grid md:grid-cols-3 gap-10 text-left mb-20">
          {aboutCards.map((card) => (
            <div key={card.title} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-white p-4 rounded-full shadow-md mb-4 inline-block">{card.icon}</div>
              <h3 className="text-xl font-bold text-brand-purple-dark mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg text-left max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-brand-purple-dark mb-4">Brief History</h3>
          <p className="text-gray-600 leading-relaxed space-y-4">
            The College of Law, Chrisland University, Abeokuta, Nigeria, is established to positively impact meaningful improvement and augmentation of legal studies and practice by providing a first-class academic and research environment aimed at critical engagement. The college is student-centered and provides a conducive environment for legal education and research.
            <br/><br/>
            In line with the University calendar, the college started academic activities in the 2022/2023 academic session with the admission of 34 students. The resource assessment by the National Universities Commission (NUC) and the Council of Legal Education (CLE) for its take-off was resoundingly successful, the College has obtained full accreditation from the regulatory authorities for its programme and has the capacity to admit 50 students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
