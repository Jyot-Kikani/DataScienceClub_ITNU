import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const About = () => {
  const activities = [
    {
      icon: Lightbulb,
      title: "Workshops & Training",
      description: "Hands-on sessions covering Python, ML algorithms, data visualization, and more.",
    },
    {
      icon: Users,
      title: "Hackathons",
      description: "Competitive events where you can apply your skills to solve real-world problems.",
    },
    {
      icon: Target,
      title: "Research Projects",
      description: "Collaborate on cutting-edge research in AI, NLP, computer vision, and analytics.",
    },
    {
      icon: Heart,
      title: "Community Events",
      description: "Networking sessions, guest lectures, and meetups with industry professionals.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of data scientists at Nirma University
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in-up">
          <Card className="border-primary/20">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To create a thriving community of data enthusiasts who leverage data science to solve real-world problems and drive innovation across industries.
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">
                <Heart className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible learning opportunities, foster collaboration, and build a supportive environment where students can develop cutting-edge data science skills.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="mb-16 animate-fade-in">
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2023 by a group of passionate students at Nirma University, the Data Science Club was born from a simple idea: to democratize data science education and create a platform where students could learn, experiment, and grow together.
                </p>
                <p>
                  What started as informal study groups has now evolved into a structured community with regular workshops, competitions, and collaborative projects. We've grown from a handful of members to a vibrant community of over 100 students from diverse academic backgrounds.
                </p>
                <p>
                  Today, we continue to push boundaries, explore new technologies, and help our members achieve their career goals in data science, machine learning, and artificial intelligence.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                    <activity.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{activity.title}</h3>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
