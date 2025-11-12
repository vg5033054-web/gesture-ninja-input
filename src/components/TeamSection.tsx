import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Vikash Gupta",
    role: "Team Lead",
    linkedin: "#",
  },
  {
    name: "Aman Chaursiya",
    role: "Developer",
    linkedin: "#",
  },
  {
    name: "Farhanullah Khan",
    role: "Developer",
    linkedin: "#",
  },
  {
    name: "Mo. Sahil",
    role: "Developer",
    linkedin: "#",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground">
            The brilliant minds behind Gesture Control Interface
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
