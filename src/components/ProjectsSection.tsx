
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
    longDescription: "This comprehensive e-commerce solution provides businesses with everything they need to sell products online. Features include secure payment processing through Stripe, user account management, product catalog with search and filtering, shopping cart functionality, order management, and an intuitive admin dashboard for inventory management. Built with scalability in mind to handle high traffic and large product catalogs.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    category: "Web Application",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, file sharing, and team chat.",
    longDescription: "Designed for teams to collaborate efficiently, this task management application helps organize projects and track progress in real-time. Users can create and assign tasks, set deadlines, share files, and communicate through an integrated chat system. The application uses WebSockets for instant updates and notifications, ensuring everyone stays on the same page. Special attention was given to the user interface to make it intuitive and responsive across devices.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    category: "Web Application",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "An AI-powered image generation tool that creates unique artwork based on text prompts.",
    longDescription: "This cutting-edge application leverages deep learning models to generate unique images from text descriptions. Users can enter detailed prompts to create custom artwork for various purposes. The backend uses TensorFlow and PyTorch to process these requests and generate high-quality images. The platform includes features for saving favorite generations, adjusting parameters to refine results, and sharing creations on social media. This project demonstrates the powerful intersection of art and artificial intelligence.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    tags: ["Python", "TensorFlow", "React", "Flask", "AWS"],
    category: "AI & Machine Learning",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Finance Dashboard",
    description: "A comprehensive financial dashboard for tracking investments, expenses, and financial goals.",
    longDescription: "This finance dashboard provides users with a complete overview of their financial health. It integrates with bank accounts and investment platforms to display real-time data on spending habits, investment performance, and progress toward savings goals. Users can create budgets, receive alerts for unusual activity, and view personalized insights to improve their financial decisions. The dashboard includes interactive charts and graphs that make complex financial information easy to understand at a glance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["React", "D3.js", "Redux", "Node.js", "MongoDB"],
    category: "Data Visualization",
    github: "#",
    demo: "#",
  },
];

export default function ProjectsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(projects.map(project => project.category)));

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
    return matchesCategory;
  });

  const handleExpandCard = (id: number) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  const clearFilters = () => {
    setSelectedCategory(null);
  };

  return (
    <section id="projects" className="py-20 bg-subtle-highlight dark:bg-subtle-highlight">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary/70 dark:bg-primary/50 rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Explore some of my recent work and the technologies I've been working with.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 w-full max-w-3xl">
            <div className="space-y-2 w-full sm:w-auto">
              <p className="text-sm font-medium">Filter by Category:</p>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Badge 
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"} 
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            
            {selectedCategory && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-4 sm:mt-auto" 
                onClick={clearFilters}
              >
                <X className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No projects match the selected filters.</p>
            <Button variant="outline" className="mt-4" onClick={clearFilters}>Clear Filters</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id}
                className={`overflow-hidden transition-all duration-300 card-hover-effect ${
                  activeCard === project.id ? 'ring-2 ring-primary/50 scale-[1.01]' : ''
                } ${expandedCard === project.id ? 'col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4' : ''}`}
                onMouseEnter={() => setActiveCard(project.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`${expandedCard === project.id ? 'h-64 md:h-80' : 'h-48'} overflow-hidden transition-all duration-500`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge>{project.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <CardDescription className="mb-4">
                    {expandedCard === project.id && project.longDescription 
                      ? project.longDescription 
                      : project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal text-xs py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex flex-wrap justify-between items-center gap-2">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                  
                  {project.longDescription && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleExpandCard(project.id)}
                      className="ml-auto"
                    >
                      {expandedCard === project.id ? (
                        <>
                          <ChevronUp className="h-4 w-4 mr-1" /> 
                          Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 mr-1" /> 
                          More
                        </>
                      )}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="transition-transform hover:scale-105"
            onClick={clearFilters}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
