import {Code, Layers, Palette, Users, Zap,} from 'lucide-react'

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Code,
    skills: [
      {name: 'React & Next.js', level: 90},
      {name: 'TypeScript', level:70},
      {name: 'HTML & CSS', level:90 },
      {name:'Tailwind CSS' , level:80 },
    ],
  },
    {
    id: 'backend',
    title: 'Backend & Tools',
    icon: Layers,
    skills: [
      {name: 'Node.js & Express', level: 65},
      {name: 'REST APIs', level:70},
      {name: 'Git & GitHub', level:80 },
      {name:'Firebase' , level:70 },
    ],
  },
      {
    id: 'design',
    title: 'Design & UX',
    icon: Palette,
    skills: [
      {name: 'Figma', level: 70},
      {name: 'Responsive Design', level:90},
      {name: 'UI/UX Principles', level:75 },
      {name:'Accessibility' , level:70 },
    ],
  },
      {
    id: 'soft',
    title: 'Soft Skills',
    icon: Users,
    skills: [
      {name: 'Problem Solving', level: 90},
      {name: 'Communication', level:95},
      {name: 'Team Collaboration', level:82 },
      {name:'Time Management' , level:80 },
    ],
  },
]

export const achievements = [
  { id: 'projects', number: '5+', label: 'Projects', icon: Zap },
  { id: 'years', number: '1', label: 'Years of Coding', icon: Code },
  { id: 'techs', number: '10+', label: 'Technologies Learned', icon: Layers },
  
];