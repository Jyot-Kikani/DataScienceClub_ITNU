import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Linkedin, Github, Search } from "lucide-react";

const Team = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allMembers = [
    { name: "Arjun Patel", role: "President", domain: "Leadership & ML", year: "4th Year", skills: ["Leadership", "ML", "Python"], linkedin: "#", github: "#" },
    { name: "Priya Shah", role: "Vice President", domain: "Events & Analytics", year: "3rd Year", skills: ["Organization", "Data Analytics", "R"], linkedin: "#", github: "#" },
    { name: "Rahul Kumar", role: "Technical Lead", domain: "Deep Learning", year: "4th Year", skills: ["Deep Learning", "TensorFlow", "PyTorch"], linkedin: "#", github: "#" },
    { name: "Sneha Desai", role: "Content Head", domain: "NLP & Writing", year: "3rd Year", skills: ["Writing", "NLP", "Documentation"], linkedin: "#", github: "#" },
    { name: "Ankit Verma", role: "Member", domain: "Machine Learning", year: "3rd Year", skills: ["ML", "Python"], linkedin: "#", github: "#" },
    { name: "Divya Agarwal", role: "Member", domain: "Data Analytics", year: "2nd Year", skills: ["Analytics", "Visualization"], linkedin: "#", github: "#" },
    { name: "Karan Singh", role: "Member", domain: "Computer Vision", year: "4th Year", skills: ["CV", "PyTorch"], linkedin: "#", github: "#" },
    { name: "Neha Joshi", role: "Member", domain: "NLP", year: "3rd Year", skills: ["NLP", "BERT"], linkedin: "#", github: "#" },
    { name: "Rohan Mehta", role: "Member", domain: "Deep Learning", year: "2nd Year", skills: ["Neural Networks"], linkedin: "#", github: "#" },
    { name: "Sanya Kapoor", role: "Member", domain: "AI Research", year: "4th Year", skills: ["Research", "AI"], linkedin: "#", github: "#" },
    { name: "Varun Reddy", role: "Member", domain: "Data Engineering", year: "3rd Year", skills: ["ETL", "Big Data"], linkedin: "#", github: "#" },
    { name: "Isha Gupta", role: "Member", domain: "Business Analytics", year: "2nd Year", skills: ["Analytics", "SQL"], linkedin: "#", github: "#" },
    { name: "Aditya Sharma", role: "Member", domain: "ML Engineering", year: "4th Year", skills: ["MLOps", "Python"], linkedin: "#", github: "#" },
    { name: "Pooja Nair", role: "Member", domain: "Data Science", year: "3rd Year", skills: ["Statistics", "ML"], linkedin: "#", github: "#" },
    { name: "Vikram Patel", role: "Member", domain: "Big Data", year: "2nd Year", skills: ["Spark", "Hadoop"], linkedin: "#", github: "#" },
    { name: "Riya Das", role: "Member", domain: "AI Ethics", year: "4th Year", skills: ["Ethics", "AI"], linkedin: "#", github: "#" },
  ];

  const filteredMembers = allMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const domains = ["All", "Machine Learning", "Data Analytics", "Computer Vision", "NLP", "Deep Learning", "Leadership & ML"];
  const [selectedDomain, setSelectedDomain] = useState("All");

  const domainFilteredMembers = selectedDomain === "All"
    ? filteredMembers
    : filteredMembers.filter((member) => member.domain.includes(selectedDomain));

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
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
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
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
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold group-hover:scale-110 transition-transform">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-bold group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.year}</p>
                </div>
                <Badge className="text-xs bg-primary/10 text-primary border-primary/20">
                  {member.domain}
                </Badge>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-3 pt-2 border-t">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.github}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
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
