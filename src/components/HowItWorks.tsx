import { Card } from "@/components/ui/card";
import { Camera, Cpu, Hand, Monitor } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Camera Capture",
    description: "Your webcam captures real-time video of your hand movements",
    color: "text-primary",
  },
  {
    icon: Cpu,
    title: "AI Processing",
    description: "Advanced algorithms detect and interpret your gestures instantly",
    color: "text-secondary",
  },
  {
    icon: Hand,
    title: "Gesture Recognition",
    description: "System recognizes specific hand patterns and their meanings",
    color: "text-accent",
  },
  {
    icon: Monitor,
    title: "Control Action",
    description: "Translated gestures control your mouse and keyboard naturally",
    color: "text-primary-glow",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple technology, powerful results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative p-6 bg-gradient-card backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-primary">
                {index + 1}
              </div>
              
              <step.icon className={`w-12 h-12 ${step.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-card backdrop-blur-sm border-2 border-primary/30">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gradient">
                Experience the Future Today
              </h3>
              <p className="text-muted-foreground">
                Our gesture control system combines cutting-edge computer vision with intuitive design to create a seamless interaction experience. No special hardware required - just your webcam and natural hand movements.
              </p>
            </div>
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center animate-pulse-glow">
              <Hand className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
