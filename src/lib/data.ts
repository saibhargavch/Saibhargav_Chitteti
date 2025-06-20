import type { Project, ResumeSection } from '@/types';

// Updated with user's details from the provided image
export const resumeData: ResumeSection[] = [
   {
    title: 'Internships', // Renamed from Experience
    items: [
      {
        title: 'Supraja Technologies',
        subtitle: 'Vijayawada, Andhra Pradesh',
        date: 'May 2024 - June 2024',
        description: 'Gained substantial experience in cybersecurity practices, enhancing both foundational and advanced skills. Acquired proficiency in network fundamentals and advanced networking security measures. Utilized Kali Linux and Windows to develop practical skills in various operating system environments. Conducted penetration tests and vulnerability scans on web and mobile applications, identifying and addressing potential security weaknesses.',
        url: 'https://drive.google.com/file/d/17T1jqvjpnPOZtp91bQ5hmT4c-A-gSwhp/view?usp=sharing',
      },
      {
        title: 'The Red Users',
        subtitle: 'Chennai, Tamil Nadu',
        date: 'October 2024 - November 2024', // Assuming current year based on context, adjust if needed
        description: 'Gained hands-on experience in Vulnerability Assessment and Penetration Testing (VAPT) methodologies. Performed penetration testing to identify security flaws and provide actionable recommendations. Conducted risk assessments for various systems and applications, ensuring robust security measures. Learned to use industry-standard tools such as Burp Suite, Nmap, Metasploit, and Wireshark for security testing. Developed an understanding of OWASP Top 10 vulnerabilities and mitigation strategies.',
        url: 'https://drive.google.com/file/d/1gyI9xGmumG_Bxf1Mj_G6vtH9cE-uYr3o/view?usp=sharing',
      },
    ],
  },
  {
    title: 'Education',
    items: [
       {
        title: 'Bachelor of Technology in Computer Science and Engineering (Cyber Security)',
        subtitle: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai',
        date: '2022 - 2026',
        description: 'CGPA: 8.1',
      },
      {
        title: 'Intermediate (MPC)',
        subtitle: 'Narayana Junior College, Vijayawada',
        date: '2019 - 2021',
        description: 'Percentage: 80%',
      },
       {
        title: '10th (SSC)',
        subtitle: 'Montessori High School, Ongole',
        date: '2020',
        description: 'Percentage: 98%',
      },
    ],
  },
   {
    title: 'Achievements', // Added Achievements section
    items: [
      {
        title: 'OTP-Based Secure Locking System Using IoT',
        date: '2022',
        description: 'Selected for a prestigious project expo (exhibition).',
      },
      {
        title: 'Tantraz 2K25',
        date: '2025', // Assuming future event year based on name
        description: 'Won 1st place in the Clueless Coder technical event, organized by the SoC.',
      },
      {
        title: 'Best Performer Award',
        date: '2024',
        description: 'Exceptional contribution during the internship at Supraja Technology.',
      },
    ],
  },
  {
    title: 'Certifications', // Added Certifications section
    items: [
      { title: 'Career Essentials in Cybersecurity by Microsoft and LinkedIn', description: '', url: 'https://drive.google.com/file/d/1zeAyeHcumnlhygrTWleYyahKw4YhbkLO/view?usp=sharing' },
      { title: 'CISCO: Introduction to Cybersecurity', description: '', url: 'https://drive.google.com/file/d/1EcdKzKngMFD7tWWwa-lyw_wl7pMIXWCQ/view?usp=sharing' },
      { title: 'CCNA: Introduction to Networks', description: '', url: 'https://drive.google.com/file/d/1wA1UeoCDK4b-l_HAHz2VDUIMgLb1knWG/view?usp=sharing' },
      { title: 'CCNA: Switching, Routing, and Wireless Essentials', description: '', url: 'https://drive.google.com/file/d/1wnV0hVdOHDwCB-AJ3M9OsGYzBWasxhjq/view?usp=sharing' },
      { title: 'PCAP - Programming Essentials in Python', description: '', url: 'https://drive.google.com/file/d/1D7WjemwnsFTL5OgelRYLxzDDrEg1HqA6/view?usp=sharing' },
    ],
  },
  {
    title: 'Technical Skills and Interests', // Combined sections
    items: [
       // Languages
       { title: 'Python', description: '' },
       // Relevant Coursework / Operating Systems / Tools
       { title: 'Operating Systems (Windows, Kali Linux, Parrot)', description: '' },
       { title: 'Computer Networks', description: '' },
       { title: 'Burp Suite', description: '' },
       { title: 'Nmap', description: '' },
       { title: 'Metasploit', description: '' },
       { title: 'Wireshark', description: '' },
       { title: 'Arduino', description: '' }, // From IoT project
       { title: 'Pandas', description: '' }, // From House Price project
       { title: 'Scikit-learn', description: '' }, // From House Price project
       { title: 'Matplotlib', description: '' }, // From House Price project
       // Areas of Interest
       { title: 'Cyber Security', description: '' },
       { title: 'Ethical Hacking', description: '' },
       { title: 'VAPT', description: '' }, // From summary
       { title: 'Network Security', description: '' }, // From summary
       { title: 'Secure IoT', description: '' }, // From summary
       { title: 'System Hardening', description: '' }, // From summary
       // Soft Skills
       { title: 'Communication', description: '' },
       { title: 'Self-learning', description: '' },
       { title: 'Commitment', description: '' },
    ]
  },
];

// Updated with user's project data from the image
export const projectsData: Project[] = [
  {
    title: 'OTP Based Secured Locking System using IoT',
    description: 'An IoT based device having two layered authentication. Designed and implemented an advanced locking mechanism incorporating OTP (One-Time Password) authentication via cellular networks. Developed the prototype using IoT technologies, including Arduino Uno and SIM modules, ensuring robust and reliable performance. Incorporated a two-tier authentication process combining RFID and OTP mechanisms to provide multi-layered security. Employed Python programming to develop the system’s logic and functionality, enabling seamless interaction between components and user authentication.',
    // Updated image path to the provided electronicsforu URL
    image: 'https://www.electronicsforu.com/wp-contents/uploads/2019/02/fig-8.jpg',
    techStack: ['IoT', 'Arduino Uno', 'SIM Modules', 'Python', 'RFID'],
    // liveUrl: '#', // No live URL provided
    // githubUrl: '#', // No GitHub URL provided
    aiHint: 'circuit diagram iot lock system', // Updated AI hint
    date: 'July 2022 - November 2022' // Added date
  },
  {
    title: 'USB Physical Security using Python',
    description: 'An application to prevent unauthorized USB device connections to a system. Implemented mechanisms to block USB connections, significantly reducing the risk of malware and virus infections. Developed an application using Python to prevent unauthorized USB device connections to a system. Designed the application to enhance overall system security by preventing potential threats associated with external USB devices. Utilized Python programming to create a robust solution that integrates seamlessly with the system’s existing security protocols.',
    // Updated image URL
    image: 'https://connectivitycenter.com/wp-content/uploads/2023/03/A-Cybersecurity-Guide-to-USB-Ports.jpg',
    techStack: ['Python', 'System Security'],
    // liveUrl: '#', // No live URL provided
    githubUrl: 'https://github.com/saibhargavch/USB-Physical-Security-using-Python', // Added GitHub URL
    aiHint: 'usb security python application system',
    date: 'May 2024 - June 2024' // Added date
  },
  {
    title: 'House Price Prediction (Industry Project)',
    description: 'A machine learning model to predict house prices based on various features. Built a regression-based model to predict house prices using key attributes like location, area, and amenities. Helped identify key features impacting house prices, enabling better decision-making for stakeholders. Performed data preprocessing, visualization, and feature engineering. Technology Used: Python, Pandas, Scikit-learn, Matplotlib.',
    // Updated image URL for House Price Prediction
    image: 'data:image/jpeg;base64,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',
    techStack: ['Machine Learning', 'Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Data Preprocessing', 'Feature Engineering'],
    // liveUrl: '#', // No live URL provided
    githubUrl: 'https://github.com/saibhargavch/House-Price-Prediction-Using-Machine-Learning.git', // Added GitHub URL
    aiHint: 'machine learning prediction house price data',
    date: 'November 2024 - January 2025' // Added date
  },
];

// Navigation links - updated based on new sections
export const navLinks = [
  { name: 'Home', hash: '#home' },
  { name: 'Resume', hash: '#resume' }, // Combined Internships, Education, Achievements, Certs, Skills
  { name: 'Projects', hash: '#projects' },
  // { name: 'Contact', hash: '#contact' }, // Removed Contact link
];
