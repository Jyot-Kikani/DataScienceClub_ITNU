import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
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
      description: "Learn the fundamentals of ML algorithms and build your first predictive model.",
    },
    {
      title: "Data Science Hackathon 2024",
      date: "March 25-26, 2024",
      time: "24 hours",
      venue: "Computer Lab A",
      type: "Hackathon",
      description: "Compete with teams to solve real-world data challenges and win exciting prizes.",
    },
    {
      title: "Career in AI: Industry Talk",
      date: "April 5, 2024",
      time: "4:00 PM - 5:30 PM",
      venue: "Conference Hall",
      type: "Lecture",
      description: "Guest lecture from industry experts on building a career in AI and data science.",
    },
  ];

  const pastEvents = [
    {
      title: "Introduction to Deep Learning Workshop",
      date: "February 10, 2024",
      type: "Workshop",
      description: "Comprehensive workshop on neural networks, backpropagation, and building deep learning models using TensorFlow.",
    },
    {
      title: "Data Visualization Bootcamp",
      date: "January 20, 2024",
      type: "Bootcamp",
      description: "Hands-on session on creating impactful visualizations using Matplotlib, Seaborn, and Plotly.",
    },
    {
      title: "AI Ethics Seminar",
      date: "December 15, 2023",
      type: "Seminar",
      description: "Discussion on ethical considerations in AI development, bias in ML models, and responsible AI practices.",
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
          <div className="space-y-6 animate-fade-in-up">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-transparent rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <CardContent className="p-6 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start gap-3 flex-wrap">
                        <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                          {event.type}
                        </Badge>
                        <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-500" />
                          <span>{event.date} • {event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-500" />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-primary-foreground group">
                      Register
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>

                {/* Subtle blue hover overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-lg bg-gradient-to-t from-blue-900 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </Card>
            ))}
          </div>
        )}

        {/* Past Events */}
        {activeTab === "past" && (
          <div className="space-y-6 animate-fade-in-up">
            {pastEvents.map((event, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-transparent rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <CardContent className="p-6 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start gap-3 flex-wrap">
                        <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                          {event.type}
                        </Badge>
                        <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-500" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="border-blue-600 hover:bg-blue-900/10 group">
                      View Material
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>

                {/* Subtle blue hover overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-lg bg-gradient-to-t from-blue-900 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;