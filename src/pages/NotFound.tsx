import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4">
      <Card className="max-w-lg w-full text-center border-0 shadow-lg bg-transparent backdrop-blur-sm animate-fade-in">
        <CardContent className="py-16">
          <div className="flex flex-col items-center space-y-6">
            <div className="p-4 rounded-full bg-blue-900/20 text-blue-400">
              <AlertTriangle className="w-12 h-12" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">404</h1>
            <p className="text-xl text-muted-foreground">
              Oops! The page you’re looking for doesn’t exist.
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-blue-500">{location.pathname}</span> was not found.
            </p>
            <Button
              asChild
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow mt-4"
            >
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Return to Home
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
