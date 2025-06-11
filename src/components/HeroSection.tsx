
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen portfolio-gradient flex items-center justify-center relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-dark-gray rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-orange rounded-full mix-blend-multiply filter blur-xl opacity-15 floating-animation" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-black rounded-full mix-blend-multiply filter blur-xl opacity-10 floating-animation" style={{ animationDelay: '-1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-gradient">Deekshith</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
              QA Engineer & Testing Specialist
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Seasoned professional in software testing, automation, and quality assurance, 
              seeking expert industry opportunities to drive excellence in software delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="professional-gradient text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg border-0"
              >
                <a href="#contact" className="flex items-center gap-2 text-white">
                  Get In Touch
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-accent-orange text-accent-orange bg-transparent hover:bg-accent-orange hover:text-black hover:scale-105 transition-all duration-300 font-semibold"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-orange rounded-full animate-pulse-ring"></span>
                <span>8050284179</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-dark-gray rounded-full animate-pulse-ring"></span>
                <span>msdeekshith90@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div className="flex justify-center lg:justify-end fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bordered-image relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-dark-gray/20 to-accent-orange/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white/80">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">QA Professional</h3>
                  <p className="text-sm opacity-75">Expert in Quality Assurance</p>
                </div>
              </div>
              
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-dark-gray rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-orange rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
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
