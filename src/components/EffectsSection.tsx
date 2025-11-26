import { Card } from "@/components/ui/card";
import { Heart, Brain, Droplets, Users, Baby, TrendingDown } from "lucide-react";

const effects = [
  {
    icon: Heart,
    title: "Respiratory Diseases",
    description: "Asthma, bronchitis, and chronic lung diseases are significantly more common in Delhi residents.",
    stats: "3x higher risk",
  },
  {
    icon: Brain,
    title: "Neurological Impact",
    description: "Long-term exposure affects cognitive function, memory, and increases risk of neurodegenerative diseases.",
    stats: "40% decline in lung function",
  },
  {
    icon: Droplets,
    title: "Cardiovascular Problems",
    description: "Air pollution increases risk of heart attacks, strokes, and other cardiovascular conditions.",
    stats: "2.5M premature deaths yearly",
  },
  {
    icon: Baby,
    title: "Child Development",
    description: "Children exposed to pollution face stunted lung growth and compromised immune systems.",
    stats: "Affects 1.7M children",
  },
  {
    icon: Users,
    title: "Reduced Life Expectancy",
    description: "Delhi residents lose an average of 10 years of life expectancy due to air pollution.",
    stats: "10 years lost",
  },
  {
    icon: TrendingDown,
    title: "Economic Impact",
    description: "Healthcare costs, lost productivity, and reduced quality of life impact the economy significantly.",
    stats: "₹2.6 lakh crore annually",
  },
];

const EffectsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Health & Environmental Effects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Air pollution doesn't just affect visibility—it has severe consequences for human health, 
            the environment, and the economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {effects.map((effect, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-danger/50"
            >
              <div className="w-16 h-16 rounded-full bg-danger/10 flex items-center justify-center mb-4">
                <effect.icon className="w-8 h-8 text-danger" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{effect.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{effect.description}</p>
              <div className="inline-block px-4 py-2 bg-danger/10 rounded-full">
                <span className="text-sm font-semibold text-danger">{effect.stats}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Warning Banner */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-danger/10 to-secondary/10 border-2 border-danger/30">
          <div className="text-center">
            <Heart className="w-12 h-12 text-danger mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold mb-3 text-danger">
              Public Health Emergency
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The World Health Organization has declared Delhi's air quality a public health emergency. 
              On severe pollution days, breathing Delhi air is equivalent to smoking 25-30 cigarettes per day. 
              Vulnerable groups including children, elderly, and those with pre-existing conditions face the highest risks.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EffectsSection;