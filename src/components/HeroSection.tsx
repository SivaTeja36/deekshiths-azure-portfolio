
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen portfolio-gradient flex items-center justify-center relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-ocean-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-forest-green rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-ocean-blue rounded-full mix-blend-multiply filter blur-xl opacity-10 floating-animation" style={{ animationDelay: '-1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-gradient">Deekshith</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
            QA Engineer & Testing Specialist
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Seasoned professional in software testing, automation, and quality assurance, 
            seeking expert industry opportunities to drive excellence in software delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="ocean-gradient text-white hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <a href="#projects" className="flex items-center gap-2">
                View Projects
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-forest-green rounded-full"></span>
              <span>8050284179</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-ocean-blue rounded-full"></span>
              <span>msdeekshith90@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
