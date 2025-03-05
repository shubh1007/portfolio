
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Code, Database, Layout, Server, Globe, PenTool, Workflow, Layers } from "lucide-react";
import { useState } from "react";

interface TechCategory {
  id: number;
  name: string;
  icon: React.ReactNode;
  technologies: Technology[];
}

interface Technology {
  name: string;
  logo: string; // URL to logo
  proficiency: number; // 1-5
  years: number;
}

const techCategories: TechCategory[] = [
  {
    id: 1,
    name: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", proficiency: 5, years: 4 },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", proficiency: 4, years: 3 },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", proficiency: 4, years: 2 },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", proficiency: 5, years: 3 },
    ],
  },
  {
    id: 2,
    name: "Backend",
    icon: <Server className="h-6 w-6" />,
    technologies: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", proficiency: 4, years: 4 },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", proficiency: 4, years: 3 },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", proficiency: 3, years: 2 },
      { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", proficiency: 3, years: 1 },
    ],
  },
  {
    id: 3,
    name: "Database",
    icon: <Database className="h-6 w-6" />,
    technologies: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", proficiency: 4, years: 3 },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", proficiency: 3, years: 2 },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", proficiency: 4, years: 3 },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", proficiency: 3, years: 1 },
    ],
  },
  {
    id: 4,
    name: "DevOps",
    icon: <Workflow className="h-6 w-6" />,
    technologies: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", proficiency: 3, years: 2 },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", proficiency: 3, years: 2 },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", proficiency: 5, years: 5 },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", proficiency: 4, years: 2 },
    ],
  },
  {
    id: 5,
    name: "Design",
    icon: <PenTool className="h-6 w-6" />,
    technologies: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", proficiency: 4, years: 3 },
      { name: "Adobe XD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", proficiency: 3, years: 2 },
      { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", proficiency: 3, years: 4 },
      { name: "Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", proficiency: 2, years: 2 },
    ],
  },
  {
    id: 6,
    name: "Mobile & Other",
    icon: <Layers className="h-6 w-6" />,
    technologies: [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", proficiency: 3, years: 2 },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", proficiency: 2, years: 1 },
      { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", proficiency: 4, years: 3 },
      { name: "Cypress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", proficiency: 3, years: 2 },
    ],
  },
];

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  function getProficiencyLabel(level: number): string {
    switch (level) {
      case 1: return "Beginner";
      case 2: return "Intermediate";
      case 3: return "Advanced";
      case 4: return "Proficient";
      case 5: return "Expert";
      default: return "Unknown";
    }
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tech I Work With</h2>
          <div className="w-20 h-1 bg-primary/70 dark:bg-primary/50 rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl">
            A showcase of technologies, tools and platforms I specialize in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <Card 
              key={category.id} 
              className={`transition-all duration-300 card-hover-effect ${
                activeCategory === category.id ? 'ring-2 ring-primary/50 scale-[1.01]' : ''
              }`}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-card-hover flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-medium">{category.name}</h3>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-6">
                  {category.technologies.map((tech) => (
                    <TooltipProvider key={tech.name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-card-hover transition-colors">
                            <div className="w-12 h-12 flex items-center justify-center">
                              <img 
                                src={tech.logo} 
                                alt={tech.name} 
                                className="w-10 h-10 object-contain"
                                loading="lazy"
                              />
                            </div>
                            <span className="text-sm font-medium">{tech.name}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="p-3 max-w-xs">
                          <div className="text-sm">
                            <p className="font-medium">{tech.name}</p>
                            <p>Experience: {tech.years} {tech.years === 1 ? 'year' : 'years'}</p>
                            <p>Level: {getProficiencyLabel(tech.proficiency)}</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
