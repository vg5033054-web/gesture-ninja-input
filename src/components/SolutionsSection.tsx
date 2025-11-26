import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Bus, Zap, Recycle, TreePine, ShieldCheck } from "lucide-react";

const solutions = [
  {
    icon: Bus,
    title: "Public Transportation",
    description: "Expand metro network, increase bus fleet with electric vehicles, and promote carpooling.",
    action: "Use metro/bus for daily commute",
  },
  {
    icon: Zap,
    title: "Clean Energy",
    description: "Transition to renewable energy sources like solar and wind power for industries and homes.",
    action: "Install solar panels at home",
  },
  {
    icon: TreePine,
    title: "Urban Greening",
    description: "Plant more trees, create green belts, and develop urban forests to absorb pollutants.",
    action: "Participate in tree planting drives",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    description: "Implement proper waste segregation, ban open burning, and promote recycling.",
    action: "Segregate waste at source",
  },
  {
    icon: Leaf,
    title: "Sustainable Agriculture",
    description: "Support farmers with alternatives to crop burning and promote organic farming practices.",
    action: "Buy organic produce locally",
  },
  {
    icon: ShieldCheck,
    title: "Personal Protection",
    description: "Use N95 masks, air purifiers, and monitor AQI before outdoor activities.",
    action: "Install air purifiers at home",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
            Solutions & Actions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everyone has a role to play in combating air pollution. Here are practical 
            solutions at individual, community, and policy levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 flex flex-col"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <solution.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{solution.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{solution.description}</p>
              <div className="pt-4 border-t border-border">
                <div className="text-xs font-semibold text-primary mb-1">YOU CAN:</div>
                <div className="text-sm text-foreground">{solution.action}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30">
            <Leaf className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-display font-bold mb-3">Government Initiatives</h3>
            <p className="text-muted-foreground mb-6">
              Support and demand action on policies like odd-even vehicle schemes, construction 
              regulations, industrial emission controls, and stubble burning alternatives.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Learn About Policies
            </Button>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30">
            <ShieldCheck className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-2xl font-display font-bold mb-3">Take Action Today</h3>
            <p className="text-muted-foreground mb-6">
              Small changes in daily habits can create significant impact. Start with reducing 
              vehicle use, planting trees, and spreading awareness in your community.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Involved
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;