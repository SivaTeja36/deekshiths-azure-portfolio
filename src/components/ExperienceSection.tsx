
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building quality software solutions through rigorous testing and innovative approaches.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl border-0 relative overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-32 h-32 ocean-gradient opacity-10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    Software Test Engineer
                  </h3>
                  <h4 className="text-xl text-gradient font-semibold mb-2">
                    NSPlus Technologies
                  </h4>
                  <Badge variant="secondary" className="text-sm">
                    2022 - Present
                  </Badge>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="w-20 h-20 ocean-gradient rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">NS+</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-gray-700 mb-4">
                  Key Responsibilities & Achievements:
                </h5>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-forest-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Led comprehensive testing initiatives for biometric security solutions, ensuring 99.9% accuracy rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developed and implemented automated testing frameworks, reducing testing time by 60%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-forest-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conducted performance testing and optimization for high-traffic applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Specialized in device compatibility testing across multiple platforms and environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-forest-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Performed security vulnerability assessments and penetration testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
