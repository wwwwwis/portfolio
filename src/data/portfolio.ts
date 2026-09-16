import type { Project, ExperienceEntry, StackGroup, ApproachStep, SocialLink } from '@/types'

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/wwwwwis/', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/grape-kurtluis', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:grape.kurtluis.pecson@gmail.com', icon: 'mail' },
]

export const projects: Project[] = [
  { 
    title: 'eTickette Platform', 
    type: 'Web App', 
    tech: 'HTML, CSS, JavaScript, Firebase', 
    year: '2026', 
    desc: "Architected and deployed a full-stack web application for event ticketing. Won Best Application, Best Capstone Project, 2nd Best Tech Innovation, and People's Choice Award.",
    url: 'https://etickette.web.app/',
    image: '/etickette.png'
  },
]

export const profile = {
  name: 'Kurt Luis Grape',
  initials: 'KG',
  role: ['Fullstack', 'Developer'],
  avatarSrc: '/headshot.jpg',
  bio: "Motivated Computer Science student and full-stack developer with hands-on experience building web applications and competing in high-intensity programming tournaments. Proven track record in rapid software development and leading technical teams.",
  available: true,
  email: 'grape.kurtluis.pecson@gmail.com',
  cvHref: '/resume.pdf',
  stats: [
    { value: '3+', label: 'Awards' },
    { value: String(projects.length).padStart(2, '0'), label: projects.length === 1 ? 'Major Project' : 'Major Projects' },
    { value: '15+', label: 'Technologies' },
  ],

}

export const experience: ExperienceEntry[] = [
  {
    period: '2025 — 2026',
    role: 'Competitive Programmer & Lead Developer',
    company: 'Tagisan ng Talino Codefest',
    description:
      'Secured 2nd Runner-Up (2026) and 1st Runner-Up (2025). Engineered functional software solutions using Java and C# to solve complex algorithmic problem sets under strict time constraints.',
    logo: '🏆'
  },
  {
    period: '2026',
    role: 'Lead Full-Stack Developer & Technical Presenter',
    company: 'STI College Fairview Expo',
    description:
      'Awarded Best Programmer and 3rd Best Presenter. Managed project architecture, live code demonstrations, and booth coordination for panel evaluation.',
    logo: '🎤'
    },
  {
    period: '2026 — 2030',
    role: 'Bachelor of Science in Computer Science',
    company: 'Quezon City University',
    description: 'Focused on data structures, algorithms, and object-oriented programming.',
    logo: '/qcu-logo.png'
  },
  {
    period: '2024 — 2026',
    role: 'Information and Communications Technology',
    company: 'STI College Fairview',
    description: 'Built foundational projects in web and software development, leading to multiple national competition wins.',
    logo: '/sti-logo.png'},
]

export const stack: StackGroup[] = [
 {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Lua']
  },
  {
    label: 'Frontend',
    items: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite', 'Framer Motion']
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'Supabase']
  },
  {
    label: 'Deployment & Tools',
    items: ['Vercel', 'Docker', 'AWS', 'Git', 'GitHub']
  }
]

export const marqueeWords: string[] = [
  'Next.js', 'TypeScript', 'React', 'Node.js', 'Firebase', 'Tailwind CSS',
  'JavaScript', 'Python', 'Java', 'C#', 'Lua', 'Git', 'GitHub', 'Vercel'
]

export const approach: ApproachStep[] = [
  {
    number: '01',
    title: 'Understand first',
    description: 'Every build starts with the problem, not the stack — talking through goals and constraints before touching code.',
  },
  {
    number: '02',
    title: 'Build in the open',
    description: "Regular check-ins and working versions early, so direction can shift before it's expensive to change.",
  },
  {
    number: '03',
    title: 'Ship and support',
    description: 'Launch is the start, not the finish — I stay close for fixes, tuning, and the next iteration.',
  },
]

export const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'GitHub', href: '#github' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]