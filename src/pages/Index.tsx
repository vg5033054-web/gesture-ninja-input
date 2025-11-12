import Hero from "@/components/Hero";
import CameraFeed from "@/components/CameraFeed";
import HowItWorks from "@/components/HowItWorks";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CameraFeed />
      <HowItWorks />
      <TeamSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Gesture Control Interface. Built with innovation and passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
