import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Brain, Target, BarChart3, Zap, Users } from "lucide-react";
import aiSimulation from "@/assets/ai-simulation.jpg";
import analyticsChart from "@/assets/analytics-chart.jpg";

const Features = () => {
  const features = [
    {
      icon: Upload,
      title: "Upload & Test",
      description: "Upload your video + multiple thumbnail variations. Set your testing budget in seconds."
    },
    {
      icon: Brain,
      title: "AI Simulation",
      description: "Our AI simulates real user behavior across TikTok, YouTube Shorts, and Reels platforms."
    },
    {
      icon: Target,
      title: "Real Ad Testing",
      description: "Test thumbnails with actual ad spend across platforms to see real-world performance."
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Get detailed CTR, engagement metrics, and AI-powered recommendations for optimization."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Test Thumbnails at
            <span className="block text-primary">Scale with AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From upload to optimization, our platform automates thumbnail testing 
            so you can focus on creating viral content.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature showcase sections */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-4">AI-Powered Audience Simulation</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our advanced AI simulates real user behavior patterns across different platforms, 
              giving you insights before spending ad budget.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-accent" />
                <span>10,000+ simulated user profiles</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-accent" />
                <span>Platform-specific behavior modeling</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-accent" />
                <span>Results in under 5 minutes</span>
              </div>
            </div>
            <Button variant="cta" size="lg">
              Try AI Simulation
            </Button>
          </div>
          <div className="relative">
            <img 
              src={aiSimulation}
              alt="AI simulation of user behavior"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <h3 className="text-3xl font-bold mb-4">Real-Time Analytics & Recommendations</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Track CTR, engagement, and conversion metrics in real-time. 
              Get AI-powered recommendations to optimize your thumbnails.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-accent" />
                <span>Live performance tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-accent" />
                <span>AI optimization suggestions</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-accent" />
                <span>Cross-platform comparison</span>
              </div>
            </div>
            <Button variant="cta" size="lg">
              View Analytics Demo
            </Button>
          </div>
          <div className="lg:order-1 relative">
            <img 
              src={analyticsChart}
              alt="Analytics dashboard"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;