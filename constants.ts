import React from 'react';
import { 
  QuestionMarkCircleIcon, RefreshIcon, SearchIcon, ShareIcon, AcademicCapIcon, 
  LocationMarkerIcon, PhoneIcon, MailIcon, ClockIcon, BookOpenIcon, 
  NewspaperIcon, DatabaseIcon, SparklesIcon, DocumentTextIcon, ChartBarIcon,
  UsersIcon, CalendarIcon
} from './components/icons';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'College of Law', href: '#college-of-law' },
  { name: 'Library Services', href: '#services' },
  { name: 'Virtual Library', href: '#virtual-library' },
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
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(QuestionMarkCircleIcon, { className: "w-8 h-8 text-brand-purple" }),
    title: 'Reference Services',
    description: 'Expert assistance with legal research, citation guidance, and resource recommendations.',
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(RefreshIcon, { className: "w-8 h-8 text-brand-gold" }),
    title: 'Circulation Services',
    description: 'Book lending, renewals, reservations, and digital resource access management.',
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(SearchIcon, { className: "w-8 h-8 text-brand-purple-dark" }),
    title: 'Research Assistance',
    description: 'Personalized research support, database training, and methodology guidance.',
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(ShareIcon, { className: "w-8 h-8 text-brand-purple" }),
    title: 'Interlibrary Loans',
    description: 'Access resources from partner institutions and global library networks.',
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(AcademicCapIcon, { className: "w-8 h-8 text-brand-gold" }),
    title: 'Information Literacy',
    description: 'Training programs on research skills, digital literacy, and academic writing.',
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(LocationMarkerIcon, { className: "w-8 h-8 text-brand-purple-dark" }),
    title: 'Study Spaces',
    description: 'Individual and group study rooms, quiet zones, and collaborative workspaces.',
  },
];

export const virtualLibraryResources = [
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(BookOpenIcon, { className: "w-8 h-8 text-white" }),
    title: 'eBooks',
    description: 'Access over 25,000 legal eBooks from leading publishers including case law, statutes, and academic texts.',
    items: ['Constitutional Law Collections', 'International Law Resources', 'Commercial Law Texts', 'Human Rights Documentation'],
    buttonText: 'Browse eBooks',
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(NewspaperIcon, { className: "w-8 h-8 text-white" }),
    title: 'eJournals',
    description: 'Current and archived legal journals from top-tier publishers and academic institutions worldwide.',
    items: ['Harvard Law Review', 'Yale Law Journal', 'African Law Review', 'International Legal Materials'],
    buttonText: 'Access Journals',
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(DatabaseIcon, { className: "w-8 h-8 text-white" }),
    title: 'Databases',
    description: 'Comprehensive legal databases for case law research, statutory analysis, and legal precedents.',
    items: ['LexisNexis Academic', 'Westlaw Campus Research', 'HeinOnline Law Library', 'African Legal Database'],
    buttonText: 'Search Databases',
  },
];

export const aiTools = [
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(SparklesIcon, { className: "w-8 h-8 text-brand-purple" }),
    title: 'Smart Search',
    description: 'AI-powered search that understands context and intent.',
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(DocumentTextIcon, { className: "w-8 h-8 text-brand-gold" }),
    title: 'Document Analysis',
    description: 'Automated document summarization and key point extraction.',
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(ChartBarIcon, { className: "w-8 h-8 text-brand-purple-dark" }),
    title: 'Usage Analytics',
    description: 'Intelligent insights into resource usage and trends.',
  },
];

export const blogPosts = [
    {
        imageUrl: 'https://picsum.photos/400/300?image=1074',
        category: 'Research Tips',
        title: 'Advanced Legal Research Techniques for 2024',
        excerpt: 'Discover the latest methodologies and tools for conducting comprehensive legal research in the digital age.',
        date: 'March 15, 2024',
    },
    {
        imageUrl: 'https://picsum.photos/400/300?image=1075',
        category: 'Technology',
        title: 'Navigating Our New Digital Platform',
        excerpt: 'A comprehensive guide to using our enhanced digital library platform and all its new features.',
        date: 'March 10, 2024',
    },
    {
        imageUrl: 'https://picsum.photos/400/300?image=24',
        category: 'Student Success',
        title: 'Maximizing Your Study Time at the Library',
        excerpt: 'Tips and strategies for effective studying and research in our library spaces.',
        date: 'March 5, 2024',
    }
];

export const communityFeatures = [
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(UsersIcon, { className: "w-8 h-8 text-brand-gold" }),
    title: 'Discussion Forums',
    description: 'Engage in meaningful discussions about legal topics, share insights, and learn from peers.',
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(ShareIcon, { className: "w-8 h-8 text-brand-gold" }),
    title: 'Resource Sharing',
    description: 'Share research findings, recommend resources, and collaborate on projects.',
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(CalendarIcon, { className: "w-8 h-8 text-brand-gold" }),
    title: 'Events & Workshops',
    description: 'Stay informed about upcoming seminars, workshops, and networking events.',
  }
];


export const contactInfo = [
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(LocationMarkerIcon, { className: "w-6 h-6 text-brand-purple" }),
    title: 'Visit Us',
    details: ['Chrisland University Campus', 'Abeokuta, Ogun State, Nigeria'],
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(PhoneIcon, { className: "w-6 h-6 text-brand-gold" }),
    title: 'Call Us',
    details: ['+234 (0) 803 123 4567', '+234 (0) 701 234 5678'],
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(MailIcon, { className: "w-6 h-6 text-brand-purple-dark" }),
    title: 'Email Us',
    details: ['lawlibrary@chrislanduniversity.edu.ng', 'support@chrislandlaw.edu'],
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(ClockIcon, { className: "w-6 h-6 text-green-600" }),
    title: 'Opening Hours',
    details: ['Monday - Friday: 8:00 AM - 10:00 PM', 'Saturday - Sunday: 10:00 AM - 6:00 PM'],
  },
];

export const footerLinks = [
    {
        title: 'Quick Links',
        links: [
            { name: 'Home', href: '#home' },
            { name: 'About Us', href: '#about' },
            { name: 'College of Law', href: '#college-of-law' },
            { name: 'Library Services', href: '#services' },
            { name: 'Virtual Library', href: '#virtual-library' },
            { name: 'Blog', href: '#blog' },
        ]
    },
    {
        title: 'Resources',
        links: [
            { name: 'eBooks', href: '#virtual-library' },
            { name: 'eJournals', href: '#virtual-library' },
            { name: 'Databases', href: '#virtual-library' },
            { name: 'AI Tools', href: '#ai-tools' },
            { name: 'Community', href: '#community' },
        ]
    },
    {
        title: 'Contact Info',
        links: [
            { name: 'Abeokuta, Ogun State', href: '#contact' },
            { name: '+234 (0) 803 123 4567', href: 'tel:+2348031234567' },
            { name: 'lawlibrary@chrisland.edu.ng', href: 'mailto:lawlibrary@chrisland.edu.ng' },
        ]
    }
];