
import { Card } from "@/components/ui/card";
import { Settings, FileText, Award, Briefcase, Check } from "lucide-react";

const skills = [
  {
    name: "Software Testing",
    icon: Settings,
    description: "Comprehensive testing strategies and methodologies"
  },
  {
    name: "Functional Testing", 
    icon: Check,
    description: "Ensuring software meets functional requirements"
  },
  {
    name: "Performance Testing",
    icon: Award,
    description: "Load, stress, and performance optimization testing"
  },
  {
    name: "Automation Testing",
    icon: Settings,
    description: "Automated test framework development and execution"
  },
  {
    name: "Device Testing",
    icon: Briefcase,
    description: "Cross-platform and device compatibility testing"
  },
  {
    name: "Biometric Testing",
    icon: FileText,
    description: "Fingerprint and biometric security testing"
  },
  {
    name: "Vulnerability Assessment",
    icon: Award,
    description: "Security testing and vulnerability identification"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Core Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized in comprehensive quality assurance with deep expertise 
            across multiple testing domains and cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="p-8 skill-card-hover bg-white border-0 shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 ocean-gradient rounded-full flex items-center justify-center">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {skill.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
