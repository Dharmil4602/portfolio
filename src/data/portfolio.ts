import { Project, Experience, Education, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Dharmil Nareshkumar Shah',
  title: 'Full-Stack Developer',
  email: 'work.dharmil@gmail.com',
  phone: '+1 782-882-7014',
  location: 'Halifax, NS, Canada',
  linkedin: 'https://linkedin.com/in/dharmil4602',
  github: 'https://github.com/Dharmil4602',
  website: 'https://dharmilshah.dev',
  bio: 'Passionate full-stack developer with expertise in modern web technologies and cloud architecture. Currently building innovative solutions at PRGC Group|Live, with a focus on scalable applications and exceptional user experiences.',
  resumeUrl: '/resume-dharmil-shah.pdf'
};

export const projects: Project[] = [
  {
    id: 'the-bat-cage',
    title: 'The Bat Cage - Booking System',
    description: 'Full-stack booking system with real-time lane reservations, conflict detection, and comprehensive admin dashboard.',
    longDescription: 'Developed a complete booking management system for The Bat Cage sports facility, featuring real-time lane availability, automated conflict detection, and a powerful admin dashboard. The system serves 500+ weekly users and has reduced failed bookings by 80%.',
    techStack: ['React', 'TypeScript', 'Node.js', 'AWS', 'GitHub Actions', 'CDKTF', 'DynamoDB', 'Lambda'],
    liveUrl: 'https://thebatcage.com',
    githubUrl: 'https://github.com/Dharmil4602/the-bat-cage',
    image: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
    category: 'web',
    status: 'completed',
    metrics: {
      users: '500+ weekly users',
      performance: '80% reduction in failed bookings',
      impact: '40% reduction in admin time'
    }
  },
  {
    id: 'blogsite',
    title: 'Full-Stack Blogging Platform',
    description: 'Comprehensive blogging platform with AWS infrastructure, featuring robust logging, monitoring, and CDN optimization.',
    longDescription: 'Architected a scalable blogging platform using modern web technologies and AWS cloud services. Features include user authentication, content management, real-time comments, and comprehensive analytics dashboard.',
    techStack: ['React', 'Node.js', 'Express', 'AWS SNS', 'EC2', 'CloudFront', 'DynamoDB', 'S3', 'CloudFormation'],
    githubUrl: 'https://github.com/Dharmil4602/blogsite',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
    category: 'web',
    status: 'completed',
    metrics: {
      performance: '25+ AWS resources managed',
      impact: 'CloudFront CDN optimization'
    }
  },
  {
    id: 'jobly-extension',
    title: 'Jobly: Resume Analyzer Extension',
    description: 'Chrome Extension using TypeScript and Google Vertex AI to analyze resume-job description matches.',
    longDescription: 'Built an intelligent Chrome extension that leverages Google Vertex AI to analyze resume-job description compatibility. Features automated parsing, match scoring, and actionable recommendations for job seekers.',
    techStack: ['TypeScript', 'Google App Engine', 'Vertex AI', 'Chrome API', 'Webpack', 'NLP'],
    liveUrl: 'https://chrome.google.com/webstore/detail/jobly',
    githubUrl: 'https://github.com/Dharmil4602/jobly-extension',
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
    category: 'ai',
    status: 'completed',
    metrics: {
      users: '75+ installs',
      performance: '90% parsing accuracy',
      impact: '60% bundle size reduction'
    }
  },
  {
    id: 'carebridge',
    title: 'CareBridge - Senior Care App',
    description: 'Android application bridging the gap between senior citizens and family members with fall-detection algorithms.',
    longDescription: 'Led development of an innovative Android application designed to enhance safety and communication for senior citizens. Implemented advanced fall-detection using gyroscope and accelerometer sensors with real-time notifications.',
    techStack: ['Kotlin', 'Android', 'Firebase', 'FCM', 'Sensor APIs', 'Machine Learning'],
    githubUrl: 'https://github.com/Dharmil4602/carebridge',
    image: 'https://images.pexels.com/photos/8001128/pexels-photo-8001128.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false,
    category: 'mobile',
    status: 'completed',
    metrics: {
      impact: 'Fall-detection algorithms',
      performance: 'Real-time notifications'
    }
  },
  {
    id: 'code-quality-analyzer',
    title: 'Code Quality Report Analyzer',
    description: 'React interface with Spring Boot microservices for advanced code analysis and visualization.',
    longDescription: 'Created a comprehensive code quality analysis platform with intuitive React interface and robust Spring Boot backend. Features advanced data processing, interactive visualizations, and automated CI/CD pipeline.',
    techStack: ['React', 'Java', 'Python', 'Spring Boot', 'Chart.js', 'Docker', 'CI/CD', 'TDD'],
    githubUrl: 'https://github.com/Dharmil4602/code-quality-analyzer',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false,
    category: 'web',
    status: 'completed',
    metrics: {
      impact: 'Microservices architecture',
      performance: 'Interactive data visualization'
    }
  }
];

export const experiences: Experience[] = [
  {
    id: 'prgc-group',
    company: 'PRGC Group|Live',
    position: 'Software Developer',
    duration: 'February 2025 – Present',
    location: 'Canada',
    type: 'full-time',
    description: [
      'Developed The Bat Cage, a full-stack booking system (React + TypeScript) with real-time lane reservations and conflict detection, used by 500+ weekly users.',
      'Built an admin dashboard to manage bookings, revenue, and customer activity — cutting admin time by 40%.',
      'Engineered a dynamic UI for slot availability, boosting customer satisfaction and reducing failed bookings by 80%.',
      'Provisioned scalable infrastructure with GitHub Actions, CDKTF, automating EC2/VPC setup and slashing deployment time by 60%.',
      'Led CI/CD and maintained dev/prod environments; ensured high code quality through testable design, peer reviews, and frontend best practices.',
      'Currently leading e-commerce and membership feature integration with Stripe, enhancing business growth potential.'
    ],
    achievements: [
      'Reduced failed bookings by 80% through dynamic UI implementation',
      'Cut admin time by 40% with comprehensive dashboard',
      'Slashed deployment time by 60% with automated infrastructure'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'GitHub Actions', 'CDKTF', 'Stripe']
  },
  {
    id: 'kickfreight',
    company: 'KickFreight LLC',
    position: 'Software Developer',
    duration: 'November 2022 – December 2023',
    location: 'Remote, India',
    type: 'full-time',
    description: [
      'Led development of a real-time analytics dashboard using React, Chart.js, and REST APIs, improving site navigation and increasing online inquiries by 25%.',
      'Collaborated with cross-functional teams to translate business requirements into functional features, managing the product roadmap and driving a 7.3% boost in operational efficiency.',
      'Participated in Agile sprints, conducted code reviews, and delivered secure, high-quality code, while presenting data-driven insights to align technical decisions with product vision.'
    ],
    achievements: [
      'Increased online inquiries by 25% through improved navigation',
      'Boosted operational efficiency by 7.3%',
      'Led cross-functional collaboration and product roadmap management'
    ],
    technologies: ['React', 'Chart.js', 'REST APIs', 'JavaScript', 'Agile']
  }
];

export const education: Education[] = [
  {
    id: 'dalhousie',
    institution: 'Dalhousie University',
    degree: 'Master of Applied Computer Science',
    duration: 'September 2023 - December 2024',
    location: 'Halifax, NS, Canada',
    gpa: '3.78/4.3',
    honors: ['Dean\'s List', 'Graduate Research Assistant'],
    coursework: [
      'Advanced Software Development Concepts',
      'Data Management Warehousing & Analytics',
      'Advanced Topics in Cloud Computing',
      'Advanced Topics in Web Development',
      'Cloud Architecting',
      'Machine Learning Applications'
    ],
    projects: [
      'Cloud-native application deployment on AWS',
      'Big data analytics pipeline using Apache Spark',
      'Machine learning model for predictive analytics'
    ]
  },
  {
    id: 'gtu',
    institution: 'Gujarat Technological University',
    degree: 'Bachelor of Engineering in Computer Engineering',
    duration: 'July 2019 - June 2023',
    location: 'Gujarat, India',
    gpa: '8.5/10',
    honors: ['First Class with Distinction', 'Academic Excellence Award'],
    coursework: [
      'Data Structures and Algorithms',
      'Operating Systems',
      'Object Oriented Programming',
      'Computer Networks',
      'Design and Analysis of Algorithms',
      'Database Management Systems',
      'Big Data Analytics',
      'Web Programming'
    ],
    projects: [
      'E-commerce web application using MERN stack',
      'Mobile app for campus management',
      'Distributed system for file sharing'
    ]
  }
];

export const skills: Record<string, SkillCategory> = {
  frontend: {
    title: 'Frontend Development',
    description: 'Modern web technologies for creating responsive and interactive user interfaces',
    color: 'blue',
    icon: 'Code',
    skills: [
      { name: 'React', level: 95, experience: '3+ years', icon: '⚛️' },
      { name: 'TypeScript', level: 90, experience: '2+ years', icon: '🔷' },
      { name: 'JavaScript', level: 95, experience: '4+ years', icon: '🟨' },
      { name: 'Next.js', level: 85, experience: '2+ years', icon: '▲' },
      { name: 'Redux', level: 80, experience: '2+ years', icon: '🔄' },
      { name: 'Angular', level: 75, experience: '1+ years', icon: '🅰️' },
      { name: 'HTML5', level: 95, experience: '4+ years', icon: '🌐' },
      { name: 'CSS3', level: 90, experience: '4+ years', icon: '🎨' },
      { name: 'Tailwind CSS', level: 85, experience: '2+ years', icon: '💨' }
    ]
  },
  backend: {
    title: 'Backend Development',
    description: 'Server-side technologies and APIs for robust application architecture',
    color: 'green',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 90, experience: '3+ years', icon: '🟢' },
      { name: 'Express.js', level: 85, experience: '3+ years', icon: '🚂' },
      { name: 'Java', level: 85, experience: '3+ years', icon: '☕' },
      { name: 'Python', level: 80, experience: '2+ years', icon: '🐍' },
      { name: 'Spring Boot', level: 75, experience: '2+ years', icon: '🍃' },
      { name: 'REST APIs', level: 90, experience: '3+ years', icon: '🔗' },
      { name: 'GraphQL', level: 70, experience: '1+ years', icon: '📊' }
    ]
  },
  cloud: {
    title: 'Cloud & DevOps',
    description: 'Cloud platforms and DevOps tools for scalable infrastructure',
    color: 'purple',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', level: 90, experience: '2+ years', icon: '☁️' },
      { name: 'GCP', level: 80, experience: '1+ years', icon: '🌤️' },
      { name: 'Azure', level: 75, experience: '1+ years', icon: '🔵' },
      { name: 'Docker', level: 85, experience: '2+ years', icon: '🐳' },
      { name: 'Kubernetes', level: 80, experience: '1+ years', icon: '⚓' },
      { name: 'Terraform', level: 85, experience: '2+ years', icon: '🏗️' },
      { name: 'CI/CD', level: 90, experience: '2+ years', icon: '🔄' },
      { name: 'GitHub Actions', level: 85, experience: '2+ years', icon: '⚡' }
    ]
  },
  database: {
    title: 'Databases & Storage',
    description: 'Database technologies for efficient data management and storage',
    color: 'orange',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 85, experience: '3+ years', icon: '🐬' },
      { name: 'MongoDB', level: 80, experience: '2+ years', icon: '🍃' },
      { name: 'DynamoDB', level: 85, experience: '2+ years', icon: '⚡' },
      { name: 'PostgreSQL', level: 80, experience: '2+ years', icon: '🐘' },
      { name: 'Redis', level: 75, experience: '1+ years', icon: '🔴' }
    ]
  }
};

export const certifications = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-CCP-2024',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const testimonials = [
  {
    id: 'testimonial-1',
    name: 'John Smith',
    position: 'Senior Developer',
    company: 'PRGC Group|Live',
    content: 'Dharmil is an exceptional developer who consistently delivers high-quality solutions. His work on The Bat Cage booking system has been instrumental in our success.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 'testimonial-2',
    name: 'Sarah Johnson',
    position: 'Product Manager',
    company: 'KickFreight LLC',
    content: 'Working with Dharmil was a pleasure. His technical expertise and collaborative approach helped us achieve our product goals efficiently.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];