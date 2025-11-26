import { Card } from "@/components/ui/card";
import { Car, Factory, Flame, Wind, Tractor, Building2 } from "lucide-react";

const causes = [
  {
    icon: Car,
    title: "Vehicular Emissions",
    description: "Over 10 million vehicles contribute significantly to NOx and PM2.5 levels in Delhi's air.",
    impact: "30% of pollution",
    color: "text-red-600",
  },
  {
    icon: Factory,
    title: "Industrial Activities",
    description: "Manufacturing plants and industries around NCR release harmful pollutants into the atmosphere.",
    impact: "20% of pollution",
    color: "text-orange-600",
  },
  {
    icon: Flame,
    title: "Crop Burning",
    description: "Stubble burning in neighboring states during harvest season creates massive smoke clouds.",
    impact: "25% in winter",
    color: "text-yellow-600",
  },
  {
    icon: Building2,
    title: "Construction Dust",
    description: "Rapid urbanization and construction activities generate significant particulate matter.",
    impact: "15% of pollution",
    color: "text-amber-600",
  },
  {
    icon: Tractor,
    title: "Waste Burning",
    description: "Open burning of garbage and biomass releases toxic fumes and particles into the air.",
    impact: "10% of pollution",
    color: "text-red-700",
  },
  {
    icon: Wind,
    title: "Weather Conditions",
    description: "Low wind speed and temperature inversions trap pollutants close to the ground.",
    impact: "Amplifies effects",
    color: "text-blue-600",
  },
];

const CausesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
            What Causes Delhi's Pollution?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Multiple factors contribute to Delhi's air quality crisis. Understanding the sources 
            is essential for developing effective solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
            >
              <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 ${cause.color}`}>
                <cause.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{cause.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cause.description}</p>
              <div className="flex items-center gap-2">
                <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-secondary to-danger w-3/4" />
                </div>
                <span className="text-xs font-semibold text-secondary">{cause.impact}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Context */}
        <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Wind className="w-12 h-12 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-display font-bold mb-3">
                The Perfect Storm
              </h3>
              <p className="text-muted-foreground">
                Delhi's geographical location, surrounded by agricultural states and mountains, 
                combined with its dense population and rapid industrialization, creates a unique 
                challenge. Winter months see the worst air quality as cold air traps pollutants 
                close to the ground, creating a toxic blanket over the city.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CausesSection;