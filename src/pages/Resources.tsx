import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code2, Database, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Resources = () => {
  const learningPaths = [
    {
      level: "Beginner",
      title: "Start Your Data Science Journey",
      skills: ["Python Basics", "Statistics", "Data Visualization", "Pandas & NumPy"],
      color: "bg-green-500/10 text-green-500 border-green-500/20",
    },
    {
      level: "Intermediate",
      title: "Master Machine Learning",
      skills: ["ML Algorithms", "Scikit-learn", "Feature Engineering", "Model Evaluation"],
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      level: "Advanced",
      title: "Deep Learning & AI",
      skills: ["Neural Networks", "TensorFlow", "PyTorch", "Computer Vision", "NLP"],
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
  ];

  const tools = [
    { name: "Python", icon: Code2, category: "Programming" },
    { name: "Jupyter", icon: BookOpen, category: "IDE" },
    { name: "TensorFlow", icon: Code2, category: "ML Framework" },
    { name: "PyTorch", icon: Code2, category: "ML Framework" },
    { name: "Scikit-learn", icon: Code2, category: "Library" },
    { name: "Pandas", icon: Database, category: "Data Processing" },
  ];

  const courses = [
    {
      title: "Machine Learning by Andrew Ng",
      platform: "Coursera",
      type: "Free",
      link: "#",
    },
    {
      title: "Python for Data Science",
      platform: "DataCamp",
      type: "Paid",
      link: "#",
    },
    {
      title: "Deep Learning Specialization",
      platform: "Coursera",
      type: "Paid",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learning <span className="bg-gradient-primary bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to master data science
          </p>
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Learning Paths</h2>
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
            {learningPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Badge className={path.color}>{path.level}</Badge>
                  <CardTitle className="mt-4">{path.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {path.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Libraries */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Essential Tools & Libraries</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-fade-in-up">
            {tools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{tool.name}</p>
                    <p className="text-xs text-muted-foreground">{tool.category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-8">Recommended Courses</h2>
          <div className="space-y-4">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <div className="flex gap-3">
                        <Badge variant="outline">{course.platform}</Badge>
                        <Badge className={course.type === "Free" ? "bg-green-500/10 text-green-500" : "bg-blue-500/10 text-blue-500"}>
                          {course.type}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="group/btn">
                      View Course
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* YouTube Videos */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-8">Featured YouTube Videos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Introduction to Machine Learning", channel: "Data Science Club", duration: "45:32" },
              { title: "Python for Data Science - Complete Tutorial", channel: "Tech Academy", duration: "2:15:20" },
              { title: "Deep Learning Fundamentals", channel: "AI Learning", duration: "1:30:15" },
              { title: "Data Visualization with Python", channel: "Code Masters", duration: "55:40" },
            ].map((video, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg bg-gradient-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground">
                        ▶
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{video.channel}</p>
                      <Badge variant="outline" className="text-xs">{video.duration}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
