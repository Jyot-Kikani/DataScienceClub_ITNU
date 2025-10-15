import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Linkedin, Github, Search } from "lucide-react";

const Team = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allMembers = [
    // Faculty (4)
    { name: "Dr. Rajesh Kumar", role: "Faculty", domain: "AI & Machine Learning", year: "Faculty Advisor", skills: ["AI", "Research", "Mentorship"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" },
    { name: "Dr. Anjali Mehta", role: "Faculty", domain: "Data Analytics", year: "Faculty Mentor", skills: ["Analytics", "Statistics", "Research"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" },
    { name: "Dr. Vikram Singh", role: "Faculty", domain: "Deep Learning", year: "Faculty Guide", skills: ["Deep Learning", "Neural Networks"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
    { name: "Dr. Sneha Patel", role: "Faculty", domain: "NLP Research", year: "Faculty Advisor", skills: ["NLP", "Research", "AI Ethics"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },

    // Core Members (11)
    { name: "Arjun Patel", role: "Core Member", domain: "Leadership & ML", year: "4th Year", skills: ["Leadership", "ML", "Python"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
    { name: "Priya Shah", role: "Core Member", domain: "Events & Analytics", year: "3rd Year", skills: ["Organization", "Data Analytics", "R"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
    { name: "Rahul Kumar", role: "Core Member", domain: "Deep Learning", year: "4th Year", skills: ["Deep Learning", "TensorFlow", "PyTorch"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" },
    { name: "Sneha Desai", role: "Core Member", domain: "NLP & Writing", year: "3rd Year", skills: ["Writing", "NLP", "Documentation"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop" },
    { name: "Ankit Verma", role: "Core Member", domain: "Machine Learning", year: "3rd Year", skills: ["ML", "Python"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop" },
    { name: "Divya Agarwal", role: "Core Member", domain: "Data Analytics", year: "3rd Year", skills: ["Analytics", "Visualization"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" },
    { name: "Karan Singh", role: "Core Member", domain: "Computer Vision", year: "4th Year", skills: ["CV", "PyTorch"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop" },
    { name: "Neha Joshi", role: "Core Member", domain: "NLP", year: "3rd Year", skills: ["NLP", "BERT"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop" },
    { name: "Rohan Mehta", role: "Core Member", domain: "Deep Learning", year: "3rd Year", skills: ["Neural Networks"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop" },
    { name: "Sanya Kapoor", role: "Core Member", domain: "AI Research", year: "4th Year", skills: ["Research", "AI"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop" },
    { name: "Varun Reddy", role: "Core Member", domain: "Data Engineering", year: "3rd Year", skills: ["ETL", "Big Data"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=200&h=200&fit=crop" },

    // Executives (10)
    { name: "Isha Gupta", role: "Executive", domain: "Business Analytics", year: "2nd Year", skills: ["Analytics", "SQL"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop" },
    { name: "Aditya Sharma", role: "Executive", domain: "ML Engineering", year: "2nd Year", skills: ["MLOps", "Python"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop" },
    { name: "Pooja Nair", role: "Executive", domain: "Data Science", year: "2nd Year", skills: ["Statistics", "ML"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop" },
    { name: "Vikram Patel", role: "Executive", domain: "Big Data", year: "2nd Year", skills: ["Spark", "Hadoop"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=200&h=200&fit=crop" },
    { name: "Riya Das", role: "Executive", domain: "AI Ethics", year: "2nd Year", skills: ["Ethics", "AI"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=200&h=200&fit=crop" },
    { name: "Siddharth Jain", role: "Executive", domain: "Python Development", year: "2nd Year", skills: ["Python", "Django"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=200&h=200&fit=crop" },
    { name: "Meera Kulkarni", role: "Executive", domain: "Data Visualization", year: "2nd Year", skills: ["Tableau", "D3.js"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop" },
    { name: "Akash Rao", role: "Executive", domain: "Cloud Computing", year: "2nd Year", skills: ["AWS", "Azure"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&h=200&fit=crop" },
    { name: "Tanvi Sharma", role: "Executive", domain: "Web Scraping", year: "2nd Year", skills: ["BeautifulSoup", "Selenium"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop" },
    { name: "Dev Chawla", role: "Executive", domain: "Time Series", year: "2nd Year", skills: ["Forecasting", "ARIMA"], linkedin: "#", github: "#", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" },
  ];

  const filteredMembers = allMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const domains = ["All", "Faculty", "Core Member", "Executive"];
  const [selectedDomain, setSelectedDomain] = useState("All");

  const domainFilteredMembers = selectedDomain === "All"
    ? filteredMembers
    : filteredMembers.filter((member) => member.role === selectedDomain);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-background text-foreground transition-colors duration-700">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Meet the passionate individuals driving our club forward
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, role, or domain..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Domain Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
          {domains.map((domain) => (
            <Badge
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`cursor-pointer transition-all ${
                selectedDomain === domain
                  ? "bg-green-600 text-green-50 hover:bg-green-700"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {domain}
            </Badge>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in-up">
          {domainFilteredMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-xl bg-black transition-all duration-300 hover:-translate-y-1 hover:shadow-glow cursor-pointer"
            >
              {/* Light green hover overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-t from-green-900 to-green-700 opacity-0 group-hover:opacity-10 transition-opacity"></div>

              <CardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-green-900/10 group-hover:bg-green-900/20 flex items-center justify-center transition-transform group-hover:scale-110">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white group-hover:text-green-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-green-400 font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.year}</p>
                </div>
                <Badge className="text-xs bg-green-900/10 text-green-400 border-green-700">
                  {member.domain}
                </Badge>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-3 pt-2 border-t border-muted">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-green-900/20 hover:text-green-400 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.github}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-green-900/20 hover:text-green-400 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {domainFilteredMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No members found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
