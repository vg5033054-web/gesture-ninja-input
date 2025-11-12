import { Camera, Circle } from "lucide-react";
import { Card } from "@/components/ui/card";

const CameraFeed = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Live Gesture Detection
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time hand tracking and gesture recognition
          </p>
        </div>

        <Card className="relative overflow-hidden bg-gradient-card backdrop-blur-sm border-2 border-primary/30 shadow-card">
          <div className="aspect-video bg-muted/20 flex items-center justify-center relative">
            {/* Camera placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            
            <div className="relative z-10 text-center">
              <Camera className="w-20 h-20 text-primary/50 mx-auto mb-4 animate-pulse" />
              <p className="text-lg text-muted-foreground">Camera feed will appear here</p>
              <p className="text-sm text-muted-foreground mt-2">Enable camera access to start tracking</p>
            </div>

            {/* Gesture indicators */}
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="px-3 py-1 rounded-full bg-accent/20 border border-accent flex items-center gap-2">
                <Circle className="w-2 h-2 text-accent fill-accent" />
                <span className="text-sm text-accent-foreground">Ready</span>
              </div>
            </div>

            {/* Mock hand tracking points */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          {/* Control indicators */}
          <div className="p-6 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">✊</div>
                <p className="text-sm text-muted-foreground">Click</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">✌️</div>
                <p className="text-sm text-muted-foreground">Scroll</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">👆</div>
                <p className="text-sm text-muted-foreground">Move</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow mb-1">🖐️</div>
                <p className="text-sm text-muted-foreground">Swipe</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CameraFeed;
