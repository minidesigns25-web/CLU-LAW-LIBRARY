

import React from 'react';
import { 
  QuestionMarkCircleIcon, RefreshIcon, SearchIcon, ShareIcon, AcademicCapIcon, 
  LocationMarkerIcon, PhoneIcon, MailIcon, ClockIcon, 
  SparklesIcon, DocumentTextIcon, ChartBarIcon,
  UsersIcon, CalendarIcon
} from './components/icons';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'College of Law', href: '#college-of-law' },
  { name: 'Library Services', href: '#services' },
  { name: 'Digital Resources', href: '#digital-resources' },
  { name: 'Blog', href: '#blog' },
  { name: 'AI Tools', href: '#ai-tools' },
  { name: 'Community', href: '#community' },
  { name: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '50,000+', label: 'Legal Resources' },
  { value: '24/7', label: 'Digital Access' },
  { value: '15+', label: 'Databases' },
  { value: '500+', label: 'Active Users' },
];

export const collegeOfLawData = {
  departments: [
    { name: 'Private and Property Law', description: 'Specializing in contract law, tort law, property rights, family law, and commercial transactions.' },
    { name: 'Public Law', description: 'Focusing on constitutional law, administrative law, criminal law, and international law.' }
  ],
  curriculum: [
    { 
      level: '100 Level', 
      courses: ['Legal Methods I', 'English for Legal Writing', 'Introduction to Social and Political Philosophy', 'Introduction to Legal Ethics', 'Introduction to Sociology'],
      description: 'Foundational courses introducing students to the principles of law, legal writing, and the philosophical and sociological underpinnings of the legal system.'
    },
    { 
      level: '200 Level', 
      courses: ['Law of Contract', 'Constitutional Law', 'Nigerian Legal System', 'Reproductive and Sexual Health Rights Law', 'Criminology'],
      description: 'Core legal subjects covering contracts, constitutional frameworks, the structure of the Nigerian legal system, and specialized areas like criminology.'
    },
    { 
      level: '300 Level', 
      courses: ['Criminal Law', 'Law of Torts', 'Law of Evidence', 'Equity and Trusts', 'Property Law'],
      description: 'In-depth study of major legal fields including criminal law, torts, evidence, and the principles of equity and property law.'
    },
    { 
      level: '400 Level', 
      courses: ['Jurisprudence and Legal Theory', 'Research Methodology', 'Company Law', 'International Arbitration', 'Law of Taxation'],
      description: 'Advanced topics focusing on legal theory, corporate law, research methodologies, and specialized fields such as international arbitration and taxation.'
    }
  ],
  specializations: [
    'Human Rights', 'Arbitration', 'Criminal Justice', 'Child Rights', 'Corporate Governance',
    'Environmental Law', 'Criminology', 'Energy Law', 'Property Law', 'Sport Law'
  ]
};

export const libraryServices = [
  {
    icon: React.createElement(QuestionMarkCircleIcon, { className: "w-8 h-8 text-brand-purple" }),
    title: 'Reference Services',
    description: 'Expert assistance with legal research, citation guidance, and resource recommendations.',
  },
  {
    icon: React.createElement(RefreshIcon, { className: "w-8 h-8 text-brand-gold" }),
    title: 'Circulation Services',
    description: 'Book lending, renewals, reservations, and digital resource access management.',
  },
  {
    icon: React.createElement(SearchIcon, { className: "w-8 h-8 text-brand-purple-dark" }),
    title: 'Research Assistance',
    description: 'Personalized research support, database training, and methodology guidance.',
  },
  {
    icon: React.createElement(ShareIcon, { className: "w-8 h-8 text-brand-purple" }),
    title: 'Interlibrary Loans',
    description: 'Access resources from partner institutions and global library networks.',
  },
  {
    icon: React.createElement(AcademicCapIcon, { className: "w-8 h-8 text-brand-gold" }),
    title: 'Information Literacy',
    description: 'Training programs on research skills, digital literacy, and academic writing.',
  },
  {
    icon: React.createElement(LocationMarkerIcon, { className: "w-8 h-8 text-brand-purple-dark" }),
    title: 'Study Spaces',
    description: 'Individual and group study rooms, quiet zones, and collaborative workspaces.',
  },
];

// Digital Resources Data
export const opacLink = "https://chrislanduniversitylibrary.librarika.com/search";

export const openAccessEbooks = [
  {
    title: 'The Law of Sustainable Development in Comparative Perspective',
    author: 'Edited by A.F. Venter, C. Reynolds, et al.',
    year: 2021,
    publisher: 'T.M.C. Asser Press / Springer',
    category: 'Comparative Law',
    coverUrl: 'https://picsum.photos/300/400?image=51',
    downloadUrl: 'https://doi.org/10.1007/978-94-6265-430-3',
  },
  {
    title: 'AI, Human Rights and Legal Tech: A New Framework for Europe',
    author: 'Edited by G. Busold, et al.',
    year: 2023,
    publisher: 'T.M.C. Asser Press / Springer',
    category: 'Human Rights',
    coverUrl: 'https://picsum.photos/300/400?image=52',
    downloadUrl: 'https://doi.org/10.1007/978-94-6265-597-3',
  },
  {
    title: 'Contemporary Issues in International Criminal Law',
    author: 'Edited by A. G. S. I.',
    year: 2022,
    publisher: 'Springer',
    category: 'Criminal Law',
    coverUrl: 'https://picsum.photos/300/400?image=53',
    downloadUrl: 'https://link.springer.com/book/10.1007/978-94-6265-555-3',
  },
  {
    title: 'The Law and Practice of Extradition',
    author: 'Van der Wilt, Harmen',
    year: 2022,
    publisher: 'Brill / Nijhoff',
    category: 'International Law',
    coverUrl: 'https://picsum.photos/300/400?image=54',
    downloadUrl: 'https://brill.com/view/title/61345',
  },
  {
    title: 'Rainbow Jurisdiction at the International Criminal Court',
    author: 'Suhr, Valérie V.',
    year: 2022,
    publisher: 'Springer',
    category: 'International Law',
    coverUrl: 'https://picsum.photos/300/400?image=55',
    downloadUrl: 'https://doi.org/10.1007/978-94-6265-502-7',
  },
  {
    title: 'Human Trafficking Under International and Tanzanian Law',
    author: 'Kahimba, Nicksoni Filbert',
    year: 2021,
    publisher: 'T.M.C. Asser Press / Springer',
    category: 'Human Rights',
    coverUrl: 'https://picsum.photos/300/400?image=56',
    downloadUrl: 'https://doi.org/10.1007/978-94-6265-435-8',
  },
  {
    title: 'Research Handbook on Transitional Justice (2nd Ed.)',
    author: 'Edited by C. Lawther & L. Moffett',
    year: 2023,
    publisher: 'Edward Elgar Publishing',
    category: 'Human Rights',
    coverUrl: 'https://picsum.photos/300/400?image=57',
    downloadUrl: 'https://doi.org/10.4337/9781800889241',
  },
  {
    title: 'The International Criminal Court in its Third Decade',
    author: 'Edited by C. Stahn & R. Braga da Silva',
    year: 2023,
    publisher: 'T.M.C. Asser Press / Springer',
    category: 'International Law',
    coverUrl: 'https://picsum.photos/300/400?image=58',
    downloadUrl: 'https://doi.org/10.1007/978-94-6265-585-0',
  },
  {
    title: 'Global Corruption: Law, Theory, and Practice (3rd Edition)',
    author: 'Ferguson, James R.',
    year: 2023,
    publisher: 'Transparency International Canada (OER)',
    category: 'International Law',
    coverUrl: 'https://picsum.photos/300/400?image=59',
    downloadUrl: 'https://globalcorruptionbook.com/download',
  },
  {
    title: 'The Genocide Convention: Article-by-Article Commentary (2nd Ed.)',
    author: 'Tams, Ch. J., Berster, L., & Schiffbauer, B.',
    year: 2024,
    publisher: 'Bloomsbury Publishing',
    category: 'International Law',
    coverUrl: 'https://picsum.photos/300/400?image=60',
    downloadUrl: 'https://www.bloomsburycollections.com/book/the-genocide-convention-article-by-article-commentary-second-edition/',
  },
  {
    title: 'Corporations, Accountability and International Criminal Law',
    author: 'Kyriakakis, Joanna',
    year: 2021,
    publisher: 'Edward Elgar Publishing',
    category: 'Corporate Law',
    coverUrl: 'https://picsum.photos/300/400?image=61',
    downloadUrl: 'https://doi.org/10.4337/9780857939500',
  },
  {
    title: "The Evolution of Global Arbitration: A Practitioner's Guide",
    author: 'Edited by J. E. B. V. Van den Berg',
    year: 2023,
    publisher: 'Kluwer Law International',
    category: 'ADR',
    coverUrl: 'https://picsum.photos/300/400?image=62',
    downloadUrl: 'https://doi.org/10.54648/kli.evo.2023.001',
  },
  {
    title: 'Contract Doctrine, Theory & Practice Volume 1',
    author: 'Various',
    year: 2021,
    publisher: 'Open Textbook Library (OER)',
    category: 'Commercial Law',
    coverUrl: 'https://picsum.photos/300/400?image=63',
    downloadUrl: 'https://open.umn.edu/opentextbooks/textbooks/101',
  },
  {
    title: 'The Ethics of Tax Lawyering',
    author: 'A. K. M. L. E. R. S.',
    year: 2022,
    publisher: 'Open Textbook Library (OER)',
    category: 'Taxation Law',
    coverUrl: 'https://picsum.photos/300/400?image=64',
    downloadUrl: 'https://open.umn.edu/opentextbooks/textbooks/the-ethics-of-tax-lawyering',
  },
  {
    title: 'The Rise of Digital Law: A Global Perspective',
    author: 'Edited by L. B. C. M. L. L.',
    year: 2024,
    publisher: 'Routledge',
    category: 'Tech Law',
    coverUrl: 'https://picsum.photos/300/400?image=65',
    downloadUrl: 'https://doi.org/10.4324/9781003463953',
  },
  {
    title: 'Competition Law in Developing Countries',
    author: 'Edited by E. R. F. P.',
    year: 2021,
    publisher: 'Edward Elgar Publishing',
    category: 'Commercial Law',
    coverUrl: 'https://picsum.photos/300/400?image=66',
    downloadUrl: 'https://doi.org/10.4337/9781800373033',
  },
  {
    title: 'Digital Economy and Regulatory Challenges in Africa',
    author: 'Edited by A. O. O. O. I. N.',
    year: 2023,
    publisher: 'Springer',
    category: 'Tech Law',
    coverUrl: 'https://picsum.photos/300/400?image=67',
    downloadUrl: 'https://doi.org/10.1007/978-94-6265-573-7',
  },
  {
    title: 'Law of Commercial Transactions',
    author: 'Don Mayer, et al.',
    year: 2022,
    publisher: 'Open Textbook Library (OER)',
    category: 'Commercial Law',
    coverUrl: 'https://picsum.photos/300/400?image=68',
    downloadUrl: 'https://open.umn.edu/opentextbooks/textbooks/law-of-commercial-transactions',
  },
  {
    title: 'Foundations of Business Law and Legal Environment',
    author: 'Mayer, Warner, Siedel, & Lieberman',
    year: 2022,
    publisher: 'Open Textbook Library (OER)',
    category: 'Commercial Law',
    coverUrl: 'https://picsum.photos/300/400?image=69',
    downloadUrl: 'https://open.umn.edu/opentextbooks/textbooks/foundations-of-business-law-and-legal-environment',
  },
  {
    title: 'Blockchain and the Law: Global Legal Frameworks',
    author: 'Edited by Z. A. L. W.',
    year: 2023,
    publisher: 'Routledge',
    category: 'Tech Law',
    coverUrl: 'https://picsum.photos/300/400?image=70',
    downloadUrl: 'https://doi.org/10.4324/9781003348618',
  },
  {
    title: 'Criminal Justice Responses to the Boko Haram Crisis in Nigeria',
    author: 'Ojo-Adewuyi, Victoria',
    year: 2024,
    publisher: 'T.M.C. Asser Press / Springer',
    category: 'Criminal Law',
    coverUrl: 'https://picsum.photos/300/400?image=71',
    downloadUrl: 'https://doi.org/10.1007/978-94-6265-615-4',
  },
  {
    title: 'Criminal Law and the COVID-19 Crisis: Comparative Perspectives',
    author: 'Edited by Zimmermann, Frank',
    year: 2024,
    publisher: 'Springer',
    category: 'Criminal Law',
    coverUrl: 'https://picsum.photos/300/400?image=72',
    downloadUrl: 'https://doi.org/10.1007/978-3-031-41221-3',
  },
  {
    title: 'Ecocide: Criminalising Serious Harm against the Environment (Upcoming)',
    author: 'Edited by L. Burgers, M. Kooijman, et al.',
    year: 2025,
    publisher: 'T.M.C. Asser Press / Springer',
    category: 'Environmental Law',
    coverUrl: 'https://picsum.photos/300/400?image=73',
    downloadUrl: 'https://doi.org/10.1007/978-94-6265-715-1',
  },
  {
    title: 'The Implementation of Public International Law in the Domestic Legal Order',
    author: 'Edited by A. B. C. D. E.',
    year: 2023,
    publisher: 'T.M.C. Asser Press / Springer',
    category: 'Public Law',
    coverUrl: 'https://picsum.photos/300/400?image=74',
    downloadUrl: 'https://doi.org/10.1007/978-94-6265-538-6',
  },
  {
    title: 'Statutes, Regulation, and Interpretation (2nd Ed.)',
    author: 'Eskridge, Gluck, & Nourse',
    year: 2024,
    publisher: 'West Academic (OER)',
    category: 'Public Law',
    coverUrl: 'https://picsum.photos/300/400?image=75',
    downloadUrl: 'https://law.yale.edu/statutes-regulation-and-interpretation',
  },
  {
    title: 'The Evolution of Administrative Law and Governance',
    author: 'Edited by M. N. A. T.',
    year: 2021,
    publisher: 'Edward Elgar Publishing',
    category: 'Public Law',
    coverUrl: 'https://picsum.photos/300/400?image=76',
    downloadUrl: 'https://doi.org/10.4337/9781800885236',
  },
  {
    title: 'New Constitutionalism in the Global South',
    author: 'Edited by O. A. M. E. P. T.',
    year: 2022,
    publisher: 'Routledge',
    category: 'Constitutional Law',
    coverUrl: 'https://picsum.photos/300/400?image=77',
    downloadUrl: 'https://doi.org/10.4324/9781003251710',
  },
  {
    title: 'Digital Governance and the Law',
    author: 'Edited by B. V. S. C.',
    year: 2023,
    publisher: 'Springer',
    category: 'Tech Law',
    coverUrl: 'https://picsum.photos/300/400?image=78',
    downloadUrl: 'https://doi.org/10.1007/978-3-031-29472-7',
  },
  {
    title: 'Public Law: Texts and Materials',
    author: 'Various OER Contributors',
    year: 2021,
    publisher: 'OpenRewi',
    category: 'Public Law',
    coverUrl: 'https://picsum.photos/300/400?image=79',
    downloadUrl: 'https://www.openrewi.de/category/texts-and-materials-2021/',
  },
  {
    title: 'Access to Justice in the Digital Age: Empowering victims of cybercrime in Africa',
    author: 'UNICRI',
    year: 2024,
    publisher: 'UNICRI',
    category: 'Human Rights',
    coverUrl: 'https://picsum.photos/300/400?image=80',
    downloadUrl: 'https://www.unicri.it/sites/default/files/2024-06/Access-Justice-Digital-Age-Empowering-Victims-Africa_0.pdf',
  },
  {
    title: 'Legal Education in Context: Theoretical, Comparative and Socio-Legal Perspectives',
    author: 'Edited by R. K. Ahluwalia, et al.',
    year: 2024,
    publisher: 'Routledge',
    category: 'Legal Education',
    coverUrl: 'https://picsum.photos/300/400?image=81',
    downloadUrl: 'https://doi.org/10.4324/9781003460839',
  },
  {
    title: 'Educating for Well-Being in Law: Positive Professional Identities and Practice',
    author: 'Edited by Strevens, Caroline & Field, Rachael',
    year: 2021,
    publisher: 'Routledge',
    category: 'Legal Education',
    coverUrl: 'https://picsum.photos/300/400?image=82',
    downloadUrl: 'https://doi.org/10.4324/9781003058869',
  },
  {
    title: 'Design in Legal Education',
    author: 'Edited by Emily Allbon & Amanda Perry-Kessaris',
    year: 2024,
    publisher: 'Routledge',
    category: 'Legal Education',
    coverUrl: 'https://picsum.photos/300/400?image=83',
    downloadUrl: 'https://doi.org/10.4324/9781003460853',
  },
  {
    title: 'Legal Research Demystified: A Step-by-Step Approach (2nd Edition)',
    author: 'Voigt, Christa',
    year: 2022,
    publisher: 'Carolina Academic Press (OER)',
    category: 'Legal Research',
    coverUrl: 'https://picsum.photos/300/400?image=84',
    downloadUrl: 'https://open.umn.edu/opentextbooks/textbooks/legal-research-demystified',
  },
  {
    title: 'Wetlands Law: A Course Source (5th Edition)',
    author: 'Johnson, Craig',
    year: 2024,
    publisher: "CALI's eLangdell® Press (OER)",
    category: 'Environmental Law',
    coverUrl: 'https://picsum.photos/300/400?image=85',
    downloadUrl: 'https://www.cali.org/publication/wetlands-law-course-source-5th-edition/',
  },
  {
    title: 'Legal Ethics in a Digital Age: Technology and Professional Responsibility',
    author: 'Edited by M. E. R. M. M. M. S. W. Z.',
    year: 2022,
    publisher: 'Springer',
    category: 'Legal Ethics',
    coverUrl: 'https://picsum.photos/300/400?image=86',
    downloadUrl: 'https://doi.org/10.1007/978-3-030-97065-5',
  },
  {
    title: 'United States Copyright Law (OER)',
    author: 'Various Contributors',
    year: 2023,
    publisher: 'Open Textbook Library (OER)',
    category: 'Intellectual Property',
    coverUrl: 'https://picsum.photos/300/400?image=87',
    downloadUrl: 'https://open.umn.edu/opentextbooks/textbooks/united-states-copyright-law',
  },
  {
    title: 'Sexual Orientation and Gender Identity Employment Discrimination',
    author: 'B. B. L. C.',
    year: 2022,
    publisher: 'Open Textbook Library (OER)',
    category: 'Human Rights',
    coverUrl: 'https://picsum.photos/300/400?image=88',
    downloadUrl: 'https://open.umn.edu/opentextbooks/textbooks/sexual-orientation-and-gender-identity-employment-discrimination',
  },
  {
    title: 'Marine Law and Policy for Scientists and Managers (1st Ed.)',
    author: 'Campbell, M. L.',
    year: 2021,
    publisher: 'Open Textbook Library (OER)',
    category: 'Maritime Law',
    coverUrl: 'https://picsum.photos/300/400?image=89',
    downloadUrl: 'https://open.umn.edu/opentextbooks/textbooks/marine-law-and-policy-for-scientists-and-managers',
  },
  {
    title: 'Advanced Legal Writing and Oral Advocacy',
    author: 'Murray & DeSanctis',
    year: 2022,
    publisher: 'West Academic (OER / Scholarly Commons)',
    category: 'Legal Drafting',
    coverUrl: 'https://picsum.photos/300/400?image=90',
    downloadUrl: 'https://scholarship.law.gwu.edu/faculty_publications/169/',
  },
  {
    title: 'Comparative Law and Legal Traditions',
    author: 'Edited by S. F. T. K. L. M.',
    year: 2024,
    publisher: 'Springer',
    category: 'Comparative Law',
    coverUrl: 'https://picsum.photos/300/400?image=91',
    downloadUrl: 'https://doi.org/10.1007/978-3-031-50854-1',
  },
  {
    title: 'The Principles of Environmental Justice',
    author: 'Edited by A. B. C. D.',
    year: 2023,
    publisher: 'Routledge',
    category: 'Environmental Law',
    coverUrl: 'https://picsum.photos/300/400?image=92',
    downloadUrl: 'https://doi.org/10.4324/9781003310431',
  },
];


export const openAccessEjournals = [
  { name: 'Directory of Open Access Journals (DOAJ) - Law', url: 'https://doaj.org/subjects?query=Law', description: 'A searchable database of thousands of verified open-access law journals from around the world.' },
  { name: 'NIALS Journals', url: 'https://journal.nials.edu.ng/', description: 'Open access to journals from the Nigerian Institute of Advanced Legal Studies, covering diverse legal topics.' },
  { name: 'African Human Rights Law Journal', url: 'https://www.ahrlj.up.ac.za/', description: 'A leading peer-reviewed journal on human rights law in Africa, from the University of Pretoria.' },
  { name: 'African Journals Online (AJOL)', url: 'https://www.ajol.info/index.php/ajol', description: 'The world\'s largest collection of peer-reviewed, African-published scholarly journals.' },
  { name: 'Yale Law Journal', url: 'https://www.yalelawjournal.org/', description: 'A top-tier journal providing free access to all its content, including current articles and archives.' },
  { name: 'German Law Journal', url: 'https://www.germanlawjournal.com/', description: 'A highly-regarded journal covering developments in German, European, and international law.' },
  { name: 'European Journal of International Law (EJIL)', url: 'https://academic.oup.com/ejil', description: 'A leading international law journal providing free access to articles after a 12-month embargo.' },
  { name: 'Melbourne Journal of International Law (MJIL)', url: 'https://law.unimelb.edu.au/mjil', description: 'A prominent, peer-reviewed journal making its articles freely available on its website.' },
  { name: 'Harvard Journal of Law & Technology (JOLT)', url: 'https://jolt.law.harvard.edu/', description: 'A premier open-access journal focusing on all aspects of technology law from Harvard Law School.' },
  { name: 'JIPITEC', url: 'https://www.jipitec.eu/', description: 'A European-based, peer-reviewed journal covering IP, IT, and E-Commerce law.' },
  { name: 'UCLA Journal of Environmental Law & Policy', url: 'https://escholarship.org/uc/uclalaw_jelp', description: 'A student-run journal making past issues and articles freely available online.' },
  { name: 'IALS Open Access Journals', url: 'https://ials.sas.ac.uk/digital-publications/ials-open-access-journals', description: 'Hosts several open-access journals from the Institute of Advanced Legal Studies, University of London.' },
  { name: 'European Journal of Empirical Legal Studies (EJELS)', url: 'https://esels.eu/ejels/', description: 'A peer-reviewed journal for the data-driven, empirical study of law and legal institutions.' },
];

export const openDatabases = [
    { name: 'NigerianLawGuru.com', url: 'https://nigerianlawguru.com/', description: 'Contains Articles, Caselaw Digests, and Legislations—a key Nigerian resource.' },
    { name: 'SSRN (Social Science Research Network)', url: 'https://www.ssrn.com/index.cfm/en/ssrn-law/', description: 'Repository for scholarly papers, vital for academic research.' },
    { name: 'Legal Information Institute (LII)', url: 'https://www.law.cornell.edu/', description: 'Free access to U.S. law, useful for comparative law analysis.' },
    { name: 'Justia', url: 'https://www.justia.com/', description: 'Provides free access to U.S. legal information, including cases and codes.' },
    { name: 'WorldLII', url: 'http://www.worldlii.org/', description: 'Free, independent and non-profit global legal research facility.' },
    { name: 'AfricanLII', url: 'https://africanlii.org/', description: 'Provides free access to law from across the African continent.' },
    { name: 'Laws.ng', url: 'https://laws.ng/', description: 'Digital collection of Nigerian laws, regulations, and legal documents.' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/', description: 'Provides a simple way to broadly search for scholarly literature across many disciplines.' },
    { name: 'FindLaw', url: 'https://www.findlaw.com/', description: 'A comprehensive legal information website with case law, statutes, and legal news.' },
    { name: 'BAILII', url: 'https://www.bailii.org/', description: 'British and Irish Legal Information Institute, providing access to primary legal materials.' },
];

export const subscribedDatabases = [
    { name: 'WLR (Weekly Law Reports)', url: 'https://nwlronline.com/', description: 'Institutional login required for access to Nigerian Weekly Law Reports.' },
    { name: 'LEGALPEDIA', url: 'https://legalpediaresources.com/', description: 'Institutional subscription for comprehensive Nigerian legal resources.' },
    { name: 'LAW PAVILION', url: 'https://primsol.lawpavilion.com/?sect=signin', description: 'Institutional access to Law Pavilion\'s electronic law reports and analytics.' },
    { name: 'HEINONLINE', url: 'https://heinonline.org/HOL/login-hol', description: 'Premier online database containing more than 180 million pages of legal history.' },
    { name: 'ProQuest', url: 'https://www.proquest.com/', description: 'Access to a vast collection of dissertations, theses, newspapers, and scholarly journals.' },
    { name: 'Research for Life Law Database', url: 'https://www.research4life.org/', description: 'Provides low-cost access to legal academic and professional peer-reviewed content.' },
];

export const aiTools = [
  {
    icon: React.createElement(SparklesIcon, { className: "w-8 h-8 text-brand-purple" }),
    title: 'AI-Powered Search',
    description: 'Discover relevant resources faster with semantic search and intelligent recommendations.',
    link: '#',
  },
  {
    icon: React.createElement(DocumentTextIcon, { className: "w-8 h-8 text-brand-gold" }),
    title: 'Automated Summarization',
    description: 'Get concise summaries of lengthy legal documents and articles in seconds.',
    link: '#',
  },
  {
    icon: React.createElement(ChartBarIcon, { className: "w-8 h-8 text-brand-purple-dark" }),
    title: 'Research Trend Analysis',
    description: 'Analyze legal trends and scholarly output with AI-driven data visualization tools.',
    link: '#',
  },
];

export const legalAiTools = [
  {
    name: 'Casetext (CoCounsel)',
    description: 'AI legal assistant for research, document review, and drafting legal memos.',
    link: 'https://casetext.com/cocounsel/'
  },
  {
    name: 'Lexis+ AI',
    description: 'Offers generative AI for conversational search, drafting, and summarizing legal documents.',
    link: 'https://www.lexisnexis.com/en-us/products/lexis-plus/ai.page'
  },
  {
    name: 'vLex (Vincent AI)',
    description: 'A global legal research platform with an AI assistant that can answer legal questions and build arguments.',
    link: 'https://vlex.com/vincent-ai'
  },
  {
    name: 'Spellbook',
    description: 'An AI contract drafting tool that integrates with Microsoft Word to suggest language and identify missing clauses.',
    link: 'https://www.spellbook.legal/'
  },
  {
    name: 'Clearbrief',
    description: 'An AI-powered writing platform that verifies facts and citations in legal documents.',
    link: 'https://www.clearbrief.com/'
  },
  {
    name: 'Kira Systems',
    description: 'A leading tool for AI-powered contract analysis, primarily used for M&A due diligence.',
    link: 'https://www.litera.com/products/legal/kira/'
  },
  {
    name: 'DISCO',
    description: 'A cloud-native e-discovery solution that uses AI to accelerate document review, search, and quality control.',
    link: 'https://www.csdisco.com/'
  },
  {
    name: 'Harvey AI',
    description: 'AI platform designed for complex legal work, automating tasks for elite law firms.',
    link: 'https://www.harvey.ai/'
  },
  {
    name: 'Relativity',
    description: 'A major e-discovery platform using AI (TAR) to find relevant documents in large litigation datasets.',
    link: 'https://www.relativity.com/'
  },
  {
    name: 'Luminance',
    description: 'Uses AI to read and understand legal documents, providing insights for contract review and due diligence.',
    link: 'https://www.luminance.com/'
  },
  {
    name: 'Lawmatics',
    description: 'A CRM and marketing automation platform using AI to streamline client intake and management.',
    link: 'https://www.lawmatics.com/'
  },
];

export const blogPosts = [
  {
    title: 'Mastering HeinOnline: A Comprehensive Guide',
    category: 'Research Tips',
    excerpt: 'Unlock the full potential of HeinOnline with this detailed guide from the Bodleian Law Library.',
    date: 'November 05, 2023',
    imageUrl: 'https://picsum.photos/400/250?image=101',
    url: 'https://libguides.bodleian.ox.ac.uk/law/heinonline',
  },
  {
    title: 'The Rise of AI in Legal Practice: A Librarian\'s View',
    category: 'Technology',
    excerpt: 'Exploring the impact of artificial intelligence on legal research and the role of law librarians.',
    date: 'October 15, 2023',
    imageUrl: 'https://picsum.photos/400/250?image=102',
    url: 'https://www.americanbar.org/groups/law_practice/publications/law_practice_magazine/2023/ja23/ai-law-practice/',
  },
  {
    title: 'A Guide to Environmental Law in Nigeria',
    category: 'Legal Analysis',
    excerpt: 'An overview of the current legal framework governing environmental protection in Nigeria.',
    date: 'September 30, 2023',
    imageUrl: 'https://picsum.photos/400/250?image=103',
    url: 'https://iclg.com/practice-areas/environment-and-climate-change-law/nigeria',
  },
];

export const communityFeatures = [
  {
    icon: React.createElement(UsersIcon, { className: "w-8 h-8 text-brand-gold" }),
    title: 'Discussion Forums',
    description: 'Engage in moderated discussions on various legal topics and research challenges.',
  },
  {
    icon: React.createElement(CalendarIcon, { className: "w-8 h-8 text-brand-gold" }),
    title: 'Events & Webinars',
    description: 'Participate in online workshops, guest lectures, and training sessions.',
  },
  {
    icon: React.createElement(ShareIcon, { className: "w-8 h-8 text-brand-gold" }),
    title: 'Shared Collections',
    description: 'Collaborate on curating and sharing specialized resource lists and bibliographies.',
  },
];

export const contactInfo = [
  {
    icon: React.createElement(LocationMarkerIcon, { className: "w-6 h-6 text-brand-purple" }),
    title: 'Address',
    details: ['Chrisland University, PMB 2131, Abeokuta, Ogun State, Nigeria'],
  },
  {
    icon: React.createElement(PhoneIcon, { className: "w-6 h-6 text-brand-purple" }),
    title: 'Phone',
    details: ['+234 802 300 0000', '+234 803 123 4567'],
  },
  {
    icon: React.createElement(MailIcon, { className: "w-6 h-6 text-brand-purple" }),
    title: 'Email',
    details: ['lawlibrary@chrislanduniversity.edu.ng'],
  },
  {
    icon: React.createElement(ClockIcon, { className: "w-6 h-6 text-brand-purple" }),
    title: 'Opening Hours',
    details: ['Mon - Fri: 8am - 10pm', 'Sat: 10am - 6pm'],
  },
];

export const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'OPAC', href: '#' },
      { name: 'Databases', href: '#' },
      { name: 'eJournals', href: '#' },
      { name: 'eBooks', href: '#' },
    ],
  },
  {
    title: 'University',
    links: [
      { name: 'Main Website', href: '#' },
      { name: 'Admissions', href: '#' },
      { name: 'Academics', href: '#' },
      { name: 'FAQs', href: '#' },
    ],
  },
];