import Hero from "@/components/Hero";
import AQIDashboard from "@/components/AQIDashboard";
import CausesSection from "@/components/CausesSection";
import EffectsSection from "@/components/EffectsSection";
import SolutionsSection from "@/components/SolutionsSection";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AQIDashboard />
      <CausesSection />
      <EffectsSection />
      <SolutionsSection />
      <TeamSection />
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-3">About This Project</h3>
              <p className="text-sm text-muted-foreground">
                Raising awareness about Delhi's air pollution crisis and promoting actionable solutions 
                for a healthier future.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-3">Resources</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Live AQI Data</li>
                <li>Health Guidelines</li>
                <li>Policy Updates</li>
                <li>Research Papers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-3">Get Involved</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Community Programs</li>
                <li>Volunteer Opportunities</li>
                <li>Awareness Campaigns</li>
                <li>Report Issues</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Delhi Air Pollution Awareness. Built with care for our environment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
