import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";

const Team = () => {
  const allMembers = [
    // Faculty
    { name: "Dr. Rajesh Kumar", role: "Faculty", year: "Faculty Advisor", linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" },
    { name: "Dr. Anjali Mehta", role: "Faculty", year: "Faculty Mentor", linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" },
    { name: "Dr. Vikram Singh", role: "Faculty", year: "Faculty Guide", linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
    { name: "Dr. Sneha Patel", role: "Faculty", year: "Faculty Advisor", linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },

    // Core Members
    { name: "Arjun Patel", role: "Core Member", year: "4th Year", linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
    { name: "Priya Shah", role: "Core Member", year: "3rd Year", linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
    { name: "Rahul Kumar", role: "Core Member", year: "4th Year", linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" },
    { name: "Sneha Desai", role: "Core Member", year: "3rd Year", linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop" },

    // Executives
    { name: "Isha Gupta", role: "Executive", year: "2nd Year", linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop" },
    { name: "Aditya Sharma", role: "Executive", year: "2nd Year", linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop" },
    { name: "Pooja Nair", role: "Executive", year: "2nd Year", linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop" },
    { name: "Vikram Patel", role: "Executive", year: "2nd Year", linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=200&h=200&fit=crop" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Meet the passionate individuals driving our club forward
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in-up">
          {allMembers.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl hover:-translate-y-1 transition-transform duration-300 backdrop-blur-md"
            >
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="p-6 text-center space-y-4 relative z-10">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden relative ring-2 ring-blue-700/40">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover relative z-10"
                    />
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 bg-gradient-to-r from-blue-700 to-blue-400 blur-xl transition-opacity duration-500"></div>
                  </div>

                  <div>
                    <h3 className="font-bold group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-500 font-medium">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.year}</p>
                  </div>

                  <div className="flex justify-center gap-3 pt-2 border-t border-blue-900/20">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 rounded-full bg-muted/40 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.github}
                      className="w-8 h-8 rounded-full bg-muted/40 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-40 rounded-2xl transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;