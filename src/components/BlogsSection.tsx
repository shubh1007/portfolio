
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar, X } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  categories: string[];
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development with AI Integration",
    excerpt: "Exploring how artificial intelligence is transforming the landscape of modern web development and creating new opportunities.",
    date: "June 12, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["Web Development", "AI"],
    url: "#",
  },
  {
    id: 2,
    title: "Optimizing React Applications for Performance",
    excerpt: "A deep dive into practical strategies for improving the speed and responsiveness of your React applications.",
    date: "May 28, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["React", "Performance"],
    url: "#",
  },
  {
    id: 3,
    title: "Building Accessible User Interfaces",
    excerpt: "How to ensure your web applications are accessible to all users, including those with disabilities.",
    date: "April 15, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["UI/UX", "Accessibility"],
    url: "#",
  },
  {
    id: 4,
    title: "The Rise of Serverless Architecture",
    excerpt: "Understanding the benefits and challenges of adopting serverless architecture for modern applications.",
    date: "March 3, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["Serverless", "Cloud"],
    url: "#",
  },
  {
    id: 5,
    title: "TypeScript Best Practices in 2023",
    excerpt: "Essential patterns and practices for writing maintainable and scalable TypeScript code.",
    date: "February 18, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    categories: ["TypeScript", "Best Practices"],
    url: "#",
  },
  {
    id: 6,
    title: "Testing Strategies for Modern Applications",
    excerpt: "Comprehensive guide to testing strategies that ensure reliability and maintainability of your applications.",
    date: "January 5, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    categories: ["Testing", "Quality Assurance"],
    url: "#",
  },
];

export default function BlogsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract all unique categories
  const allCategories = Array.from(new Set(blogPosts.flatMap(post => post.categories)));

  // Filter posts based on selected category
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.categories.includes(selectedCategory))
    : blogPosts;

  return (
    <section id="blog" className="py-20 bg-subtle-highlight dark:bg-subtle-highlight">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">From My Blog</h2>
          <div className="w-20 h-1 bg-primary/70 dark:bg-primary/50 rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Insights, tutorials, and thoughts on web development, design, and technology.
          </p>
          
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge 
              variant={selectedCategory === null ? "default" : "outline"} 
              className="cursor-pointer transition-colors"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Badge>
            {allCategories.map(category => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"} 
                className="cursor-pointer transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
            
            {selectedCategory && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 px-2 ml-2" 
                onClick={() => setSelectedCategory(null)}
              >
                <X className="h-3 w-3 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card 
              key={post.id}
              className="card-hover-effect overflow-hidden translate-y-0 hover:-translate-y-2 transition-all duration-300"
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredCard === post.id ? 'scale-110' : 'scale-100'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <Badge 
                      key={category} 
                      variant="secondary" 
                      className="bg-primary/90 text-white border-none cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedCategory(category);
                      }}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <CardHeader className="p-5 pb-0">
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
              </CardHeader>

              <CardContent className="p-5 pt-3">
                <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>

              <CardFooter className="p-5 pt-0">
                <Button variant="ghost" className="p-0 h-auto hover:bg-transparent group" asChild>
                  <a href={post.url} className="flex items-center text-sm font-medium">
                    Read More
                    <ArrowRight className={`h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1`} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="transition-transform hover:scale-105">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
