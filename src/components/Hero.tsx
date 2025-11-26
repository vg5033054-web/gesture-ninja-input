import { Button } from "@/components/ui/button";
import { Wind, AlertTriangle, TrendingDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-8 animate-fade-in">
          <div className="p-4 rounded-full bg-primary/10">
            <Wind className="w-10 h-10 text-primary" />
          </div>
          <div className="p-4 rounded-full bg-secondary/10">
            <AlertTriangle className="w-10 h-10 text-secondary" />
          </div>
          <div className="p-4 rounded-full bg-accent/10">
            <TrendingDown className="w-10 h-10 text-accent" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground animate-slide-up">
          Delhi Air Pollution
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Track Real-Time Air Quality & Discover Solutions
        </p>
        
        <p className="text-base md:text-lg mb-10 text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Understanding Delhi's air pollution crisis is the first step toward breathing cleaner air. 
          Explore data, causes, effects, and actionable solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Check AQI Now
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Learn Solutions
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl bg-white border-2 border-border shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-display font-bold text-danger mb-2">350+</div>
            <div className="text-sm font-medium text-muted-foreground">Average AQI in Winter</div>
            <div className="text-xs text-muted-foreground mt-1">Hazardous levels</div>
          </div>
          <div className="p-8 rounded-2xl bg-white border-2 border-border shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-4xl font-display font-bold text-secondary mb-2">20M+</div>
            <div className="text-sm font-medium text-muted-foreground">People Affected</div>
            <div className="text-xs text-muted-foreground mt-1">In Delhi NCR region</div>
          </div>
          <div className="p-8 rounded-2xl bg-white border-2 border-border shadow-lg hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl font-display font-bold text-primary mb-2">15μg/m³</div>
            <div className="text-sm font-medium text-muted-foreground">WHO Safe Limit</div>
            <div className="text-xs text-muted-foreground mt-1">Delhi exceeds by 10x+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;