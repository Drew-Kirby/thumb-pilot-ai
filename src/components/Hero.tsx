import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Zap } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative bg-hero-gradient min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
              <Zap className="w-6 h-6 text-secondary" />
              <span className="text-white/90 font-medium">AI-Powered Thumbnail Testing</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Find Your
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Winning Thumbnail
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
              A/B test video thumbnails at scale using AI simulation + real ad traffic. 
              Discover which thumbnails drive the highest CTR across TikTok, YouTube Shorts, and Reels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" className="group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Testing Free
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <TrendingUp className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-white/70 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm">Tests Run</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">94%</div>
                <div className="text-sm">CTR Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3 Min</div>
                <div className="text-sm">Setup Time</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Dashboard preview */}
          <div className="relative">
            <div className="relative transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <img 
                src={heroImage}
                alt="Thumbnail testing dashboard preview"
                className="w-full rounded-2xl shadow-2xl border border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
              <div className="text-sm text-muted-foreground">CTR Improvement</div>
              <div className="text-2xl font-bold text-accent">+127%</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
              <div className="text-sm text-muted-foreground">Tests Active</div>
              <div className="text-2xl font-bold text-primary">24</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;