import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  
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

  const pastEvents = [
    {
      title: "Introduction to Deep Learning Workshop",
      date: "February 10, 2024",
      type: "Workshop",
      description: "Comprehensive workshop on neural networks, backpropagation, and building deep learning models using TensorFlow.",
      attendees: 75,
    },
    {
      title: "Data Visualization Bootcamp",
      date: "January 20, 2024",
      type: "Bootcamp",
      description: "Hands-on session on creating impactful visualizations using Matplotlib, Seaborn, and Plotly.",
      attendees: 60,
    },
    {
      title: "AI Ethics Seminar",
      date: "December 15, 2023",
      type: "Seminar",
      description: "Discussion on ethical considerations in AI development, bias in ML models, and responsible AI practices.",
      attendees: 95,
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our workshops, hackathons, and collaborative projects
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setActiveTab("upcoming")}
              className={activeTab === "upcoming" ? "bg-gradient-primary text-primary-foreground" : ""}
              variant={activeTab === "upcoming" ? "default" : "outline"}
            >
              Upcoming Events
            </Button>
            <Button
              onClick={() => setActiveTab("past")}
              className={activeTab === "past" ? "bg-gradient-primary text-primary-foreground" : ""}
              variant={activeTab === "past" ? "default" : "outline"}
            >
              Past Events
            </Button>
          </div>
        </div>

        {/* Upcoming Events */}
        {activeTab === "upcoming" && (
          <div className="animate-fade-in-up">
            {/* <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary/10 flex items-center justify-center mb-6">
                <Calendar className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Coming Soon!</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Amazing events are being planned. Stay tuned for exciting workshops, hackathons, and tech talks!
              </p>
            </div> */}

            <div className="space-y-6">
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
        )}

        {/* Past Events */}
        {activeTab === "past" && (
          <div className="animate-fade-in-up">
            <div className="space-y-6">
              {pastEvents.map((event, index) => (
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
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span>{event.attendees} Attended</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="border-primary/50 hover:bg-primary/10 group">
                        View Material
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
