import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      title: "Club Email",
      icon: Mail,
      link: "mailto:dsc.it@nirmauni.ac.in",
      description: "For general inquiries and club information",
    },
    {
      title: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/company/data-science-club-nirma-university",
      description: "Connect with us on LinkedIn",
    },
    {
      title: "WhatsApp Group",
      icon: MessageCircle,
      link: "https://chat.whatsapp.com/your-group-link",
      description: "Join our WhatsApp group for updates",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-background text-foreground transition-colors duration-700">
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
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow cursor-pointer bg-card text-card-foreground border border-border">
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-t from-primary/10 to-primary/5 opacity-0 group-hover:opacity-20 transition-opacity"></div>

                <CardContent className="p-6 md:p-8 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Icon with theme-aware background */}
                    <div className="w-16 h-16 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <contact.icon className="h-8 w-8" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{contact.title}</h3>
                      <p className="text-muted-foreground mb-3">{contact.description}</p>
                      <span className="text-lg font-medium text-primary hover:underline break-all">
                        {contact.link}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {contacts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No contacts found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;