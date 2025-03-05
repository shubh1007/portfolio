
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleToggle = () => {
    setIsAnimating(true);
    if (theme === 'dark') {
      setShowStars(false);
    } else {
      setShowStars(true);
      setTimeout(() => setShowStars(false), 1500);
    }
    toggleTheme();
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="relative w-10 h-10 rounded-full transition-colors hover:bg-secondary overflow-hidden"
    >
      {/* Stars for the night sky effect */}
      {showStars && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, index) => (
            <span
              key={index}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1000}ms`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Sun with rays */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
        theme === 'dark' 
          ? 'scale-0 opacity-0 rotate-90' 
          : isAnimating 
            ? 'scale-110 opacity-100 rotate-180' 
            : 'scale-100 opacity-100 rotate-0'
      }`}>
        <Sun className="h-5 w-5" />
        {isAnimating && theme === 'light' && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, index) => (
              <span
                key={index}
                className="absolute w-6 h-[1px] bg-primary/80 origin-center"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${index * 45}deg) translateX(7px)`,
                  animation: 'sunray 1.5s ease-out',
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Moon with craters */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
        theme === 'light' 
          ? 'scale-0 opacity-0 rotate-90' 
          : isAnimating 
            ? 'scale-110 opacity-100 rotate-180' 
            : 'scale-100 opacity-100 rotate-0'
      }`}>
        <Moon className="h-5 w-5" />
        {isAnimating && theme === 'dark' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-transparent border-4 border-primary/20 animate-pulse"></div>
          </div>
        )}
      </div>
      
      <span className="sr-only">Toggle theme</span>
      
      {/* Add clouds for transition effect */}
      <div className={`absolute inset-0 pointer-events-none ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute w-6 h-2 bg-white/50 rounded-full blur-sm top-2 left-1 animate-cloud-shift-1"></div>
        <div className="absolute w-8 h-3 bg-white/40 rounded-full blur-sm bottom-2 right-1 animate-cloud-shift-2"></div>
      </div>
    </Button>
  );
}
