
import { User, Mail, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary/70 dark:bg-primary/50 rounded mb-8"></div>
          <p className="text-muted-foreground max-w-2xl">
            Get to know more about me, my background, and what drives my passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
            <p className="mb-4 text-balance">
              I'm a passionate Full-Stack Developer based in San Francisco with over 5 years of experience creating web applications that deliver exceptional user experiences.
            </p>
            <p className="mb-6 text-balance">
              My journey in tech began at the University of California, where I studied Computer Science. Since then, I've worked with startups and established companies to build scalable, user-centered applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="p-4 flex items-center space-x-3 card-hover-effect">
                <User className="h-5 w-5 text-primary/70" />
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">Shubham Kumar Sharma</p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-center space-x-3 card-hover-effect">
                <Mail className="h-5 w-5 text-primary/70" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hello@example.com</p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-center space-x-3 card-hover-effect">
                <MapPin className="h-5 w-5 text-primary/70" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-center space-x-3 card-hover-effect">
                <Calendar className="h-5 w-5 text-primary/70" />
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">5+ Years</p>
                </div>
              </Card>
            </div>

            <Button className="transition-transform hover:scale-105">
              <ExternalLink className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-primary/5 blur-xl -z-10"></div>
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-border/40 relative">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Shubham Kumar Sharma"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
