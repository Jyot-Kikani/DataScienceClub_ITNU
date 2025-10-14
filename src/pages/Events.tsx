import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Introduction to Machine Learning",
      date: "March 15, 2024",
      time: "5:00 PM - 7:00 PM",
      venue: "Auditorium, Nirma University",
      type: "Workshop",
      attendees: 45,
      description: "Learn the fundamentals of ML algorithms and build your first predictive model.",
    },
    {
      title: "Data Science Hackathon 2024",
      date: "March 25-26, 2024",
      time: "24 hours",
      venue: "Computer Lab A",
      type: "Hackathon",
      attendees: 80,
      description: "Compete with teams to solve real-world data challenges and win exciting prizes.",
    },
    {
      title: "Career in AI: Industry Talk",
      date: "April 5, 2024",
      time: "4:00 PM - 5:30 PM",
      venue: "Conference Hall",
      type: "Lecture",
      attendees: 120,
      description: "Guest lecture from industry experts on building a career in AI and data science.",
    },
  ];

  const ongoingProjects = [
    {
      title: "Healthcare Predictive Analytics",
      description: "Building ML models to predict patient outcomes and optimize treatment plans.",
      skills: ["Python", "TensorFlow", "Healthcare Data"],
      team: 6,
    },
    {
      title: "NLP Sentiment Analysis",
      description: "Analyzing social media sentiment to understand public opinion on current events.",
      skills: ["NLP", "BERT", "PyTorch"],
      team: 4,
    },
    {
      title: "Computer Vision: Object Detection",
      description: "Developing real-time object detection system for autonomous applications.",
      skills: ["OpenCV", "YOLO", "Computer Vision"],
      team: 5,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Events & <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our workshops, hackathons, and collaborative projects
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Upcoming Events</h2>
          <div className="space-y-6 animate-fade-in-up">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start gap-3 flex-wrap">
                        <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                          {event.type}
                        </Badge>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{event.date} • {event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{event.venue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{event.attendees} Registered</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground group">
                      Register
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ongoing Projects */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-8">Ongoing Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t">
                    <Users className="h-4 w-4" />
                    <span>{project.team} Members</span>
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

export default Events;
