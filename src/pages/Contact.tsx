import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      title: "Club Email",
      email: "contact@nirmaDS.edu",
      description: "For general inquiries and club information",
    },
    {
      title: "President",
      name: "Arjun Patel",
      email: "arjun.patel@nirma.edu",
      description: "For leadership and collaboration inquiries",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, link: "#", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, link: "#", color: "hover:text-pink-600" },
    { name: "GitHub", icon: Github, link: "#", color: "hover:text-purple-600" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-6 mb-16 animate-fade-in-up">
          {contacts.map((contact, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{contact.title}</h3>
                    {contact.name && (
                      <p className="text-lg text-primary font-medium mb-2">{contact.name}</p>
                    )}
                    <p className="text-muted-foreground mb-3">{contact.description}</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-lg font-medium text-primary hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Media */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Follow Us</h2>
          <p className="text-muted-foreground mb-8">
            Stay connected on social media for updates and community highlights
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center transition-all hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
