import { BenefitCard } from "@/components/BenefitCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Brain, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Data science skills are in high demand. Launch your career with cutting-edge expertise in AI, machine learning, and analytics.",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Learn to tackle real-world challenges using data-driven approaches. Develop critical thinking and analytical skills.",
    },
    {
      icon: Code,
      title: "Interdisciplinary Learning",
      description: "Combine mathematics, programming, and business insights. Build a unique skill set that spans multiple domains.",
    },
    {
      icon: Users,
      title: "Community & Collaboration",
      description: "Join a vibrant community of learners and innovators. Work on projects, share knowledge, and grow together.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 animated-bg opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Welcome to the
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Data Science Club
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Learn, Build, and Innovate with Data. Join Nirma University's premier community for aspiring data scientists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button size="lg" className="group bg-gradient-primary hover:opacity-90 text-primary-foreground">
                  Explore Events
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Data Science Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                What is
                <span className="block text-primary">Data Science?</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Data Science is the art and science of extracting meaningful insights from data. It combines statistics, programming, and domain expertise to solve complex problems.
                </p>
                <p>
                  In today's digital age, data is everywhere. From predicting customer behavior to diagnosing diseases, data science is revolutionizing every industry.
                </p>
                <p>
                  By learning data science, you'll gain the power to turn raw data into actionable intelligence, making you invaluable in the modern workforce.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                {["Machine Learning", "AI", "Analytics", "Big Data", "Python", "Statistics"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="aspect-square rounded-2xl overflow-hidden border border-primary/30 relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop" 
                  alt="Data Science Visualization" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 flex items-end justify-center p-8">
                  <div className="text-center space-y-2">
                    <Brain className="h-16 w-16 mx-auto text-primary animate-glow-pulse" />
                    <p className="text-2xl font-bold">Transform Data</p>
                    <p className="text-muted-foreground">into Intelligence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Learn Data Science?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages of mastering data science and how it can transform your future
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {benefits.map((benefit, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <BenefitCard {...benefit} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs and Events Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stay <span className="bg-gradient-primary bg-clip-text text-transparent">Connected</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our latest content and upcoming activities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
            <div className="p-8 rounded-2xl bg-gradient-primary/10 border border-primary/20 hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mb-6">
                📝
              </div>
              <h3 className="text-2xl font-bold mb-4">Read Our Blogs</h3>
              <p className="text-muted-foreground mb-6">
                Dive into tutorials, project showcases, and insights from our community members on data science, AI, and machine learning.
              </p>
              <Button variant="outline" className="group border-primary/50 hover:bg-primary/10">
                Read Blogs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <Link to="/events">
              <div className="p-8 rounded-2xl bg-gradient-primary/10 border border-primary/20 hover:shadow-glow transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mb-6">
                  🎯
                </div>
                <h3 className="text-2xl font-bold mb-4">View Events</h3>
                <p className="text-muted-foreground mb-6">
                  Check out our upcoming workshops, hackathons, and tech talks. Join us to learn and grow together.
                </p>
                <Button variant="outline" className="group border-primary/50 hover:bg-primary/10">
                  Explore Events
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
