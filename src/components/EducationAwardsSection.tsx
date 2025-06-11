
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const awards = [
  {
    name: "Spot Award",
    description: "Recognition for exceptional performance and immediate impact",
    year: "2023"
  },
  {
    name: "Rising Star Award",
    description: "Outstanding contribution as an emerging talent",
    year: "2023"
  },
  {
    name: "Team Impact Award",
    description: "Excellence in collaborative project delivery",
    year: "2024"
  }
];

const EducationAwardsSection = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Education & Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic foundation and professional achievements that drive excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <Card className="p-8 shadow-xl border-0 h-fit">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 ocean-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🎓</span>
              </div>
              Education
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-700">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-gray-600 mt-2">
                  Comprehensive foundation in computer science principles, 
                  software engineering, and technology systems.
                </p>
              </div>
            </div>
          </Card>

          {/* Awards */}
          <Card className="p-8 shadow-xl border-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 ocean-gradient rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              Awards & Recognition
            </h3>
            
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div 
                  key={award.name}
                  className="border-l-4 border-forest-green pl-4 py-2 hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-700">
                      {award.name}
                    </h4>
                    <Badge variant="secondary" className="text-sm">
                      {award.year}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationAwardsSection;
