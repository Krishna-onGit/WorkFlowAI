import React from 'react';
import { Button } from './Button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Star, Users, Play, ArrowRight } from 'lucide-react';
import exampleImage from 'figma:asset/e60d0c514a68ce39c28cd875c943379f3e5d3efa.png';

export function Hero() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-[140px] pb-[120px] bg-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3AFF7808_1px,transparent_1px),linear-gradient(to_bottom,#3AFF7808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      {/* Gradient Mesh Background with Green/Blue Neons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#3AFF78] rounded-full blur-[180px] opacity-[0.08]"></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#38F8E4] rounded-full blur-[180px] opacity-[0.10]"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-[#3AFF78] rounded-full blur-[180px] opacity-[0.08]"></div>
      </div>

      {/* Glowing Cursor Follower Dot */}
      <div 
        className="absolute w-2 h-2 rounded-full bg-[#3AFF78] blur-sm pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: `calc(50% + ${mousePosition.x}px)`,
          top: `calc(50% + ${mousePosition.y}px)`,
          boxShadow: '0 0 30px #3AFF78'
        }}
      ></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] relative z-10">
        {/* Centered Content */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Curved Gradient Shape Behind Title */}
          <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-[#3AFF78]/10 via-[#38F8E4]/10 to-[#3AFF78]/10 rounded-[80px] blur-3xl -z-10"></div>

          {/* Main Brand Title */}
          <h1 className="text-[56px] md:text-[72px] lg:text-[96px] mb-4 bg-gradient-to-r from-[#3AFF78] via-[#38F8E4] to-[#3AFF78] bg-clip-text text-transparent animate-pulse-slow" style={{ fontWeight: 800, lineHeight: 1.1 }}>
            WorkflowAI
          </h1>

          {/* Subtitle with Neon Glow */}
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-[#3AFF78]/30 to-[#38F8E4]/30 rounded-full"></div>
            <h2 className="relative text-white text-2xl md:text-3xl lg:text-4xl mb-2">
              The AI SaaS your product needs
            </h2>
          </div>

          {/* Description */}
          <p className="text-white/70 text-xl max-w-2xl mx-auto mb-12">
            Our AI Workspace enhances your product with automation, predictive intelligence and real-time insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary">
              Start Free Trial
              <ArrowRight size={20} />
            </Button>
            <Button variant="glass">
              <Play size={20} />
              Watch Demo
            </Button>
          </div>

          {/* 16:9 Holographic Dashboard */}
          <div className="relative max-w-6xl mx-auto group">
            {/* Glow Effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-[#3AFF78]/20 via-[#38F8E4]/20 to-[#3AFF78]/20 rounded-[32px] blur-3xl group-hover:opacity-100 opacity-70 transition-opacity duration-700"></div>
            
            {/* Glass Container with 16:9 aspect */}
            <div className="relative aspect-video bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-[24px] border border-white/10 rounded-[32px] p-4 shadow-[0px_20px_80px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-transform duration-700">
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#3AFF7808_1px,transparent_1px),linear-gradient(to_bottom,#3AFF7808_1px,transparent_1px)] bg-[size:2rem_2rem] rounded-[28px]"></div>
              
              <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-black">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop"
                  alt="AI Dashboard Interface"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                
                {/* Dashboard Overlay Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3AFF78]/20 to-[#38F8E4]/20 backdrop-blur-xl border border-[#3AFF78]/30 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-[#3AFF78] animate-pulse"></div>
                      <span className="text-[#3AFF78] text-sm">AI Engine Active</span>
                    </div>
                  </div>
                </div>

                {/* Floating metric cards */}
                <div className="absolute top-6 left-6 bg-white/5 backdrop-blur-xl border border-[#3AFF78]/20 rounded-[20px] p-4 text-left max-w-[180px]">
                  <div className="text-[#3AFF78] text-xs mb-1">Automation Rate</div>
                  <div className="text-white text-2xl">+94%</div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/5 backdrop-blur-xl border border-[#38F8E4]/20 rounded-[20px] p-4 text-left max-w-[180px]">
                  <div className="text-[#38F8E4] text-xs mb-1">Tasks Completed</div>
                  <div className="text-white text-2xl">1,247</div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-[#3AFF78] to-[#38F8E4] blur-xl opacity-60"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-[#3AFF78] to-[#38F8E4] blur-xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}