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
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionate individuals working to raise awareness about Delhi's air quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl font-display font-bold text-primary group-hover:scale-110 transition-transform">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-display font-semibold mb-1">{member.name}</h3>
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
