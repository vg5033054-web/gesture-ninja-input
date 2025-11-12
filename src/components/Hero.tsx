import { Button } from "@/components/ui/button";
import { Hand, Camera, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-4 mb-6 animate-pulse-glow">
          <Hand className="w-12 h-12 text-primary" />
          <Camera className="w-12 h-12 text-secondary" />
          <Zap className="w-12 h-12 text-accent" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient glow">
          Gesture Control Interface
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          Control your computer with simple hand gestures using advanced camera tracking technology
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-glow">
            Try Demo
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-gradient-card backdrop-blur-sm border border-border">
            <Hand className="w-10 h-10 text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Natural Gestures</h3>
            <p className="text-sm text-muted-foreground">Intuitive hand movements for seamless control</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-card backdrop-blur-sm border border-border">
            <Camera className="w-10 h-10 text-secondary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Real-Time Tracking</h3>
            <p className="text-sm text-muted-foreground">Advanced camera technology with zero latency</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-card backdrop-blur-sm border border-border">
            <Zap className="w-10 h-10 text-accent mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">Instant response for smooth interaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
