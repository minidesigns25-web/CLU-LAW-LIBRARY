

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
    title: 'Nigerian Constitutional Law and Practice',
    author: 'Dr. John Adebayo',
    year: 2023,
    publisher: 'Lagos University Press',
    category: 'Constitutional Law',
    coverUrl: 'https://picsum.photos/300/400?image=11',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Commercial Law in Nigeria: Cases and Materials',
    author: 'Prof. Fatima Bello',
    year: 2022,
    publisher: 'NOUN eCourseware',
    category: 'Commercial Law',
    coverUrl: 'https://picsum.photos/300/400?image=12',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'A Guide to Intellectual Property in Africa',
    author: 'A. Okoro & C. Eze',
    year: 2024,
    publisher: 'ABUAD Press',
    category: 'Intellectual Property',
    coverUrl: 'https://picsum.photos/300/400?image=13',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Environmental Law and Policy in Nigeria',
    author: 'Dr. Amina Sani',
    year: 2021,
    publisher: 'DOAB',
    category: 'Environmental Law',
    coverUrl: 'https://picsum.photos/300/400?image=14',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'An Introduction to Nigerian Criminal Law',
    author: 'Justice T. Adekunle',
    year: 2023,
    publisher: 'NIALS Press',
    category: 'Criminal Law',
    coverUrl: 'https://picsum.photos/300/400?image=15',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Comparative Legal Research Methods',
    author: 'Dr. Emily White',
    year: 2022,
    publisher: 'CALI eLangdell Press',
    category: 'Legal Research',
    coverUrl: 'https://picsum.photos/300/400?image=16',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Human Rights Law in Nigeria',
    author: 'Prof. Chidi Odinkalu',
    year: 2023,
    publisher: 'SSRN',
    category: 'Human Rights',
    coverUrl: 'https://picsum.photos/300/400?image=21',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'The Law of Evidence in Nigeria',
    author: 'Yemi Osinbajo',
    year: 2021,
    publisher: 'Lagos State Ministry of Justice',
    category: 'Law of Evidence',
    coverUrl: 'https://picsum.photos/300/400?image=22',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Corporate Governance in Nigeria: Law and Practice',
    author: 'Dr. Fabian Ajogwu',
    year: 2022,
    publisher: 'C&I Publishers',
    category: 'Corporate Governance',
    coverUrl: 'https://picsum.photos/300/400?image=23',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Oil and Gas Law in Nigeria',
    author: 'G. K. Etikerentse',
    year: 2021,
    publisher: 'Malthouse Press',
    category: 'Energy Law',
    coverUrl: 'https://picsum.photos/300/400?image=24',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Principles of Civil Procedure in Nigeria',
    author: 'Fidelis Nwadialo',
    year: 2024,
    publisher: 'Longman Nigeria',
    category: 'Civil Procedure',
    coverUrl: 'https://picsum.photos/300/400?image=25',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Contemporary Issues in Nigerian Family Law',
    author: 'Isabella Okagbue',
    year: 2022,
    publisher: 'Odade Publishers',
    category: 'Family Law',
    coverUrl: 'https://picsum.photos/300/400?image=26',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Cybercrime and Digital Evidence in Nigeria',
    author: 'Dr. Aisha Bello',
    year: 2023,
    publisher: 'TechLaw Press',
    category: 'Tech Law',
    coverUrl: 'https://picsum.photos/300/400?image=31',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Maritime Law and Admiralty Jurisdiction',
    author: 'Capt. (Dr.) Jide Coker',
    year: 2022,
    publisher: 'Ocean Legal Publishers',
    category: 'Maritime Law',
    coverUrl: 'https://picsum.photos/300/400?image=32',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Alternative Dispute Resolution: A Nigerian Perspective',
    author: 'Chief Bola Ajibola',
    year: 2021,
    publisher: 'NCMG Publishers',
    category: 'ADR',
    coverUrl: 'https://picsum.photos/300/400?image=33',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Nigerian Law of Torts: A Modern Approach',
    author: 'Prof. K. Abayomi',
    year: 2024,
    publisher: 'University of Ibadan Press',
    category: 'Law of Torts',
    coverUrl: 'https://picsum.photos/300/400?image=34',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'International Humanitarian Law and Nigeria',
    author: 'Femi Falana (SAN)',
    year: 2023,
    publisher: 'Praxis Centre',
    category: 'International Law',
    coverUrl: 'https://picsum.photos/300/400?image=35',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'The Nigerian Judge\'s Companion',
    author: 'Justice A. F. Ademola',
    year: 2022,
    publisher: 'NJI Publications',
    category: 'Jurisprudence',
    coverUrl: 'https://picsum.photos/300/400?image=36',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Taxation Law and Practice in Nigeria',
    author: 'Prof. M. T. Abdulrazaq',
    year: 2021,
    publisher: 'CITN Press',
    category: 'Taxation Law',
    coverUrl: 'https://picsum.photos/300/400?image=37',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Media Law and Ethics in the Digital Age',
    author: 'Dr. Ngozi Okonjo',
    year: 2024,
    publisher: 'Pan-Atlantic University Press',
    category: 'Media Law',
    coverUrl: 'https://picsum.photos/300/400?image=38',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'A Handbook on Banking and Negotiable Instruments',
    author: 'Prof. C. O. Adekoya',
    year: 2022,
    publisher: 'CIBN Press',
    category: 'Banking Law',
    coverUrl: 'https://picsum.photos/300/400?image=39',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Election Petition Law and Practice in Nigeria',
    author: 'Wole Olanipekun (SAN)',
    year: 2023,
    publisher: 'LexisNexis Nigeria',
    category: 'Constitutional Law',
    coverUrl: 'https://picsum.photos/300/400?image=40',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Land Law and Administration in Nigeria',
    author: 'Prof. I. O. Smith',
    year: 2021,
    publisher: 'Ecowatch Publications',
    category: 'Property Law',
    coverUrl: 'https://picsum.photos/300/400?image=41',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Intellectual Property Law for Creatives',
    author: 'Adaeze Nwosu',
    year: 2024,
    publisher: 'Creative Commons NG',
    category: 'Intellectual Property',
    coverUrl: 'https://picsum.photos/300/400?image=42',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Legal Drafting and Conveyancing in Nigeria',
    author: 'P. A. O. Oluyede',
    year: 2022,
    publisher: 'Evans Brothers',
    category: 'Legal Drafting',
    coverUrl: 'https://picsum.photos/300/400?image=43',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Anatomy of Corruption in Nigeria',
    author: 'P. A. O. Oluyede',
    year: 2021,
    publisher: 'NOUN Press',
    category: 'Jurisprudence',
    coverUrl: 'https://picsum.photos/300/400?image=44',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'The Nigerian Law of Insurance',
    author: 'J. O. Irukwu',
    year: 2023,
    publisher: 'Witherby Publishing',
    category: 'Commercial Law',
    coverUrl: 'https://picsum.photos/300/400?image=45',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Freedom of Information Law in Nigeria',
    author: 'Access to Information Network',
    year: 2022,
    publisher: 'Media Rights Agenda',
    category: 'Human Rights',
    coverUrl: 'https://picsum.photos/300/400?image=46',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'Sports Law and Practice in Nigeria',
    author: 'Dr. O. A. Amu',
    year: 2024,
    publisher: 'National Institute for Sports',
    category: 'Sport Law',
    coverUrl: 'https://picsum.photos/300/400?image=47',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    title: 'The Law and Practice of International Commercial Arbitration',
    author: 'Redfern & Hunter',
    year: 2023,
    publisher: 'Oxford University Press',
    category: 'ADR',
    coverUrl: 'https://picsum.photos/300/400?image=48',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
];


export const openAccessEjournals = [
  { name: 'ABUAD Law Journal', url: 'https://www.abuad.edu.ng/abuad-law-journal/', description: 'A peer-reviewed journal from Afe Babalola University, focusing on Nigerian and African law.' },
  { name: 'NIALS Journals', url: 'https://nials.edu.ng/index.php/journals/', description: 'A collection of specialized journals from the Nigerian Institute of Advanced Legal Studies.' },
  { name: 'Journal of African Law (Cambridge Core)', url: 'https://www.cambridge.org/core/journals/journal-of-african-law', description: 'Provides access to open articles on legal issues across the African continent.' },
  { name: 'Directory of Open Access Journals (DOAJ)', url: 'https://doaj.org/search?q=law', description: 'A comprehensive index to discover specialized Open Access law journals globally.' },
  { name: 'African Journal of International and Comparative Law', url: 'https://www.euppublishing.com/loi/ajicl', description: 'Leading journal on public and private international law and comparative legal studies in Africa.' },
  { name: 'University of Ibadan Law Journal', url: 'https://uilj.ui.edu.ng/', description: 'Bi-annual publication covering a wide range of contemporary legal issues.' },
  { name: 'Law and Society Review', url: 'https://onlinelibrary.wiley.com/journal/15405893', description: 'Features interdisciplinary articles on the relationship between law and society.' },
  { name: 'Global Jurist', url: 'https://www.degruyter.com/journal/key/gj/html', description: 'Publishes articles on a wide range of legal topics with a global perspective.' },
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