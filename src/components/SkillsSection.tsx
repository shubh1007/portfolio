
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Layout, Server, PenTool, LineChart, Lock, Globe } from "lucide-react";
import { useState } from "react";

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Layout className="h-6 w-6" />,
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS", "Redux", "HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express", "NestJS", "Python", "Django", "GraphQL", "REST API", "WebSockets"],
  },
  {
    id: 3,
    title: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "Prisma", "Mongoose"],
  },
  {
    id: 4,
    title: "DevOps & Tools",
    icon: <Code className="h-6 w-6" />,
    skills: ["Git", "GitHub Actions", "Docker", "Kubernetes", "AWS", "Vercel", "Netlify", "CI/CD", "Jest", "Cypress"],
  },
  {
    id: 5,
    title: "UI/UX Design",
    icon: <PenTool className="h-6 w-6" />,
    skills: ["Figma", "Adobe XD", "Sketch", "Responsive Design", "Prototyping", "Wireframing", "User Research"],
  },
  {
    id: 6,
    title: "Data Analysis",
    icon: <LineChart className="h-6 w-6" />,
    skills: ["D3.js", "Chart.js", "Data Visualization", "Excel", "Google Analytics", "Tableau"],
  },
  {
    id: 7,
    title: "Security",
    icon: <Lock className="h-6 w-6" />,
    skills: ["OAuth", "JWT", "Authentication", "Authorization", "HTTPS", "CORS", "Security Best Practices"],
  },
  {
    id: 8,
    title: "Other Skills",
    icon: <Globe className="h-6 w-6" />,
    skills: ["RESTful Services", "Technical Writing", "Problem Solving", "Team Collaboration", "Agile Methodologies"],
  },
];

export default function SkillsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 bg-subtle-highlight dark:bg-subtle-highlight">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary/70 dark:bg-primary/50 rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card 
              key={category.id}
              className={`transition-all duration-300 card-hover-effect h-full ${
                activeCard === category.id ? 'ring-2 ring-primary/50 scale-[1.01]' : ''
              }`}
              onMouseEnter={() => setActiveCard(category.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-card-hover flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2 w-full">
                    {category.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 rounded-full bg-background dark:bg-background/40 border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
