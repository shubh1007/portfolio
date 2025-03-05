
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Compass, Map } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isExploring, setIsExploring] = useState<boolean>(false);
  const [explorationComplete, setExplorationComplete] = useState<boolean>(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Extract search term from URL path
    if (location.pathname !== "/") {
      const term = location.pathname.split("/").pop();
      if (term) setSearchTerm(term);
    }
  }, [location.pathname]);

  const simulateExploration = () => {
    setIsExploring(true);
    // Simulate exploration finding a path
    setTimeout(() => {
      setExplorationComplete(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-subtle-highlight dark:bg-subtle-highlight">
      <div className="text-center p-6 max-w-md">
        <div className="relative">
          <h1 className="text-9xl font-bold text-primary/30 dark:text-primary/20 animate-scale-in">404</h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {isExploring ? (
              <div className="relative">
                <Compass className="h-20 w-20 animate-spin text-primary/70" style={{ animationDuration: "3s" }} />
                {explorationComplete && (
                  <Map className="h-20 w-20 text-primary/70 absolute inset-0 animate-fade-in" />
                )}
              </div>
            ) : (
              <Search className="h-20 w-20 text-primary/70" />
            )}
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-6 mb-4 animate-slide-in-left">Page Not Found</h2>
        
        <p className="text-muted-foreground mb-6 animate-slide-in-left stagger-1">
          {explorationComplete 
            ? "Good news! We've found a way back home." 
            : isExploring 
              ? "Exploring uncharted territory..." 
              : "The page you're looking for doesn't exist or has been moved."}
        </p>
        
        {!isExploring && !explorationComplete && (
          <div className="mb-6 animate-slide-in-left stagger-2">
            <p className="text-sm text-muted-foreground mb-2">
              Looking for <span className="font-semibold">"{searchTerm || location.pathname}"</span>?
            </p>
            <Button 
              variant="outline" 
              className="mt-2" 
              onClick={simulateExploration}
            >
              <Compass className="h-4 w-4 mr-2" />
              Explore Alternative Routes
            </Button>
          </div>
        )}
        
        <Button 
          asChild 
          className={`transition-transform hover:scale-105 animate-slide-in-left ${explorationComplete ? "stagger-1" : "stagger-3"}`}
        >
          <a href="/" className="inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to Home
          </a>
        </Button>

        {explorationComplete && (
          <p className="text-xs text-muted-foreground mt-8 animate-fade-in">
            Pro tip: Bookmark your favorite pages to find them quickly next time.
          </p>
        )}
      </div>
    </div>
  );
};

export default NotFound;
