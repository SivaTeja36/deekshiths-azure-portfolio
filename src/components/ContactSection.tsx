
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 portfolio-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on innovative testing solutions. 
            Let's build quality software together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Phone</p>
                      <p className="text-white font-semibold">8050284179</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Email</p>
                      <p className="text-white font-semibold">msdeekshith90@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-xl">💼</span>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Current Role</p>
                      <p className="text-white font-semibold">Software Test Engineer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Dedicated QA Engineer with expertise in comprehensive testing methodologies, 
                  automation frameworks, and security assessment. Passionate about delivering 
                  high-quality software solutions and driving innovation in testing practices.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-gray-800 hover:bg-white/90 hover:scale-105 transition-all duration-300"
                  >
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                  >
                    View LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
