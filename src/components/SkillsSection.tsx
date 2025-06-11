
import { Card } from "@/components/ui/card";
import { 
  TestTube, 
  CheckCircle, 
  Activity, 
  Bot, 
  Smartphone, 
  Fingerprint, 
  Shield 
} from "lucide-react";

const skills = [
  {
    name: "Software Testing",
    icon: TestTube,
    description: "Comprehensive testing strategies and methodologies",
    color: "from-black to-dark-gray"
  },
  {
    name: "Functional Testing", 
    icon: CheckCircle,
    description: "Ensuring software meets functional requirements",
    color: "from-dark-gray to-medium-gray"
  },
  {
    name: "Performance Testing",
    icon: Activity,
    description: "Load, stress, and performance optimization testing",
    color: "from-black to-medium-gray"
  },
  {
    name: "Automation Testing",
    icon: Bot,
    description: "Automated test framework development and execution",
    color: "from-medium-gray to-accent-orange"
  },
  {
    name: "Device Testing",
    icon: Smartphone,
    description: "Cross-platform and device compatibility testing",
    color: "from-black to-dark-gray"
  },
  {
    name: "Biometric Testing",
    icon: Fingerprint,
    description: "Fingerprint and biometric security testing",
    color: "from-dark-gray to-black"
  },
  {
    name: "Vulnerability Assessment",
    icon: Shield,
    description: "Security testing and vulnerability identification",
    color: "from-black to-accent-orange"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Core Expertise
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
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
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {skill.name}
                </h3>
                <p className="text-warm-gray leading-relaxed">
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
