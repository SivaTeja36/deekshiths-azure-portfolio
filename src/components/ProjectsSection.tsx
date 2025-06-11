
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Key Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative solutions delivering seamless security and enhanced user experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl border-0 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-2 ocean-gradient"></div>
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-forest-green rounded-full opacity-10 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  HID Biometric Technologies Server
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-ocean-blue text-white">ArcID</Badge>
                  <Badge className="bg-forest-green text-white">LSMS</Badge>
                  <Badge className="bg-ocean-blue text-white">DPSDK</Badge>
                  <Badge className="bg-gray-600 text-white">Biometric Security</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">
                    Project Overview
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive biometric security solution integrating multiple HID technologies 
                    to provide seamless authentication and access control systems. The server 
                    architecture ensures high availability, scalability, and robust security protocols.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-ocean-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Multi-platform biometric authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-forest-green rounded-full mt-2 flex-shrink-0"></div>
                      <span>Real-time security monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-ocean-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Scalable server architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-forest-green rounded-full mt-2 flex-shrink-0"></div>
                      <span>Advanced security protocols</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                  Testing & Quality Assurance
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Led comprehensive testing initiatives including functional testing of biometric 
                  algorithms, performance testing under high-load conditions, security vulnerability 
                  assessments, and cross-platform compatibility testing. Implemented automated 
                  testing frameworks that improved testing efficiency by 60% while maintaining 
                  99.9% accuracy in biometric authentication.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="ocean-gradient text-white hover:scale-105 transition-transform duration-300">
                  View Technical Details
                </Button>
                <Button variant="outline" className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white transition-all duration-300">
                  Performance Metrics
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
