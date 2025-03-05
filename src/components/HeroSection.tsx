
import { ArrowDownCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Full-Stack Developer & UI/UX Enthusiast";

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offset = 80; // Header height + some padding
      const elementPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-subtle-highlight dark:from-background dark:to-subtle-highlight -z-10"></div>
      
      {/* Parallax effect decoration elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl -z-10 parallax-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl -z-10 parallax-medium"></div>
      
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
        <p className="text-sm sm:text-base text-muted-foreground mb-4 animate-fade-in">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
          <span className="block">Hello, I'm</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 dark:from-white dark:to-white/70">
            Shubham Kumar Sharma
          </span>
        </h1>
        <div className="h-8 mb-6">
          <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in inline-block">
            {typedText}
            {!isTypingComplete && <span className="animate-pulse">|</span>}
          </p>
        </div>
        <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground mb-8 animate-fade-in">
          A passionate developer focused on creating elegant, efficient, and user-centered digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button size="lg" className="transition-transform hover:scale-105">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="transition-transform hover:scale-105 group">
            <Download className="h-4 w-4 mr-2 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          onClick={scrollToAbout}
        >
          <ArrowDownCircle className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </div>
    </section>
  );
}
