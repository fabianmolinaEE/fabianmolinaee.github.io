import { Navbar } from "@/components/layout/Navbar";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-dark to-tech-darker">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text Content */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl font-display text-cyan-400 mb-8">
                About me
              </h1>
              
              <div className="space-y-6 text-lg">
                <p className="text-white/90 leading-relaxed">
                  Hello! I'm Fabian Molina, a sophomore majoring in Electrical Engineering at Stanford University with
                  great Emphasis on Software. I'm passionate about hardware innovation, particularly in hardware
                  design and chip development. I have a forward-thinking approach to engineering, driven by a desire
                  to push boundaries in technology.
                </p>

                <p className="text-white/90 leading-relaxed">
                  With hands-on experience in Verilog, Python, and C++, I have developed a solid foundation in digital
                  design and programming. I enjoy tackling complex challenges and am constantly looking for
                  opportunities to deepen my expertise. My ultimate goal is to work on developing my own
                  accelerator, optimizing performance to meet the demands of cutting-edge applications.
                </p>

                <p className="text-white/90 leading-relaxed">
                  My interests span the fascinating intersections of computing with both space exploration and
                  finance. I believe that both fields hold enormous potential for hardware advancements that can
                  transform the way we understand and interact with the world. I'm excited to continue building on
                  my knowledge and skills, combining my engineering background with my drive for innovation to
                  make a meaningful impact in these areas.
                </p>
              </div>
            </div>
          </div>

          {/* Image and Contact Section */}
          <div className="space-y-12">
            {/* Image */}
            <div className="relative lg:flex lg:items-start lg:justify-end">
              <div className="sticky top-32 w-full max-w-[360px] mx-auto">
                <div className="aspect-square overflow-hidden rounded-3xl border-2 border-cyan-400/20 shadow-xl shadow-cyan-400/10">
                  <img
                    src="/lovable-uploads/myabout.png"
                    alt="Fabian Molina"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="pt-8 border-t border-cyan-400/20">
              <h2 className="text-3xl font-display text-cyan-400 mb-8">
                Let's Connect
              </h2>
              <div className="space-y-5">
                <a 
                  href="mailto:fabianmolina@stanford.edu"
                  className="flex items-center gap-4 text-white/90 hover:text-cyan-400 transition-colors group"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">fabianmolina@stanford.edu</span>
                </a>
                <div className="flex items-center gap-4 text-white/90">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">786-556-8642</span>
                </div>
                <a 
                  href="https://linkedin.com/in/fabianmolina04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/90 hover:text-cyan-400 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/fabianmolinaee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/90 hover:text-cyan-400 transition-colors group"
                >
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
