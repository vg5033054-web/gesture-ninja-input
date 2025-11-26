import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wind, Droplets, Cloud, AlertCircle } from "lucide-react";

const AQIDashboard = () => {
  // Simulated real-time data - in production, this would come from an API
  const currentAQI = 287;
  const aqiCategory = "Unhealthy";
  const aqiColor = "aqi-unhealthy";

  const pollutants = [
    { name: "PM2.5", value: "156 μg/m³", icon: Cloud, status: "High" },
    { name: "PM10", value: "284 μg/m³", icon: Wind, status: "Very High" },
    { name: "NO₂", value: "68 μg/m³", icon: Droplets, status: "Moderate" },
    { name: "SO₂", value: "12 μg/m³", icon: AlertCircle, status: "Low" },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Real-Time Air Quality
          </h2>
          <p className="text-lg text-muted-foreground">
            Live data from monitoring stations across Delhi
          </p>
        </div>

        {/* Main AQI Display */}
        <Card className={`p-12 mb-8 text-center ${aqiColor} border-none shadow-2xl`}>
          <div className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-90">
            Current Air Quality Index
          </div>
          <div className="text-8xl font-display font-bold mb-4">{currentAQI}</div>
          <Badge className="text-lg px-6 py-2 bg-white/20 hover:bg-white/30">
            {aqiCategory}
          </Badge>
          <p className="mt-6 text-sm opacity-90 max-w-2xl mx-auto">
            Unhealthy for sensitive groups. Everyone may begin to experience health effects. 
            Members of sensitive groups may experience more serious health effects.
          </p>
        </Card>

        {/* Pollutants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pollutants.map((pollutant, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-4">
                <pollutant.icon className="w-8 h-8 text-primary" />
                <Badge 
                  variant={pollutant.status === "Very High" || pollutant.status === "High" ? "destructive" : "secondary"}
                  className="text-xs"
                >
                  {pollutant.status}
                </Badge>
              </div>
              <div className="text-2xl font-display font-bold mb-1">{pollutant.name}</div>
              <div className="text-sm text-muted-foreground">{pollutant.value}</div>
            </Card>
          ))}
        </div>

        {/* AQI Scale Reference */}
        <Card className="p-8">
          <h3 className="text-2xl font-display font-bold mb-6 text-center">AQI Scale Reference</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { range: "0-50", label: "Good", color: "aqi-good" },
              { range: "51-100", label: "Moderate", color: "aqi-moderate" },
              { range: "101-200", label: "Poor", color: "aqi-poor" },
              { range: "201-300", label: "Unhealthy", color: "aqi-unhealthy" },
              { range: "301-400", label: "Severe", color: "aqi-severe" },
              { range: "401+", label: "Hazardous", color: "aqi-hazardous" },
            ].map((level, index) => (
              <div key={index} className={`p-4 rounded-lg ${level.color} text-center`}>
                <div className="font-bold text-sm mb-1">{level.range}</div>
                <div className="text-xs opacity-90">{level.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AQIDashboard;