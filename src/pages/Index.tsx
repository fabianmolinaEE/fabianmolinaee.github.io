
import { Navbar } from "@/components/layout/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { CircuitBoard, Cpu, Keyboard, Github, Linkedin, Mail, Maximize2 } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const projects = [
  {
    title: "FPGA Music Synthesizer",
    description: "A music synthesizer written in Verilog and programmed onto a PYNQ-Z2 FPGA with various add ons...",
    image: "/lovable-uploads/1b2acfb6-0466-4c03-911d-fd3adab664ef.png",
    link: "/projects/fpga-synthesizer",
    date: "15 October 2024",
    icon: <CircuitBoard className="text-tech-purple" />
  },
  {
    title: "Magic Mirror Dashboard",
    description: "My magic mirror is a TV screen with a reflective film over it connected to a raspberry pi...",
    image: "/lovable-uploads/b992642e-0c73-4092-8a8c-f9b3262fad9b.png",
    link: "/projects/magic-mirror",
    date: "25 September 2024",
    icon: <Cpu className="text-tech-purple" />
  },
  {
    title: "Mechanical Keyboard Build",
    description: "Designed and created a Mechanical keyboard pcb and case with custom features tailored to my needs...",
    link: "/projects/keyboard",
    date: "28 August 2024",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    icon: <Keyboard className="text-tech-purple" />
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-dark to-tech-darker">
      <Navbar />
      
      {/* Hero Section with Headshot */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center animate-fade-in">
            <div className="relative mx-auto w-64 h-64 mb-6 group">
              <div className="relative">
                <Avatar className="w-full h-full border-4 border-tech-purple/30 group-hover:border-tech-purple/60 transition-all duration-300 transform group-hover:scale-105 shadow-2xl">
                  <AvatarImage
                    src="/lovable-uploads/1b2acfb6-0466-4c03-911d-fd3adab664ef.png"
                    alt="Fabian Molina"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-tech-dark text-tech-purple text-3xl">FM</AvatarFallback>
                </Avatar>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="text-tech-purple/70 hover:text-tech-purple" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-tech-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-display text-tech-light mb-6 animate-slide-up">
              Hello, I'm <span className="text-tech-purple">Fabian Molina</span>
            </h1>
            <p className="text-lg md:text-xl text-tech-light/80 max-w-2xl mx-auto animate-slide-up">
              Electrical Engineer & Developer focused on creating innovative solutions that bridge hardware and software
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center">
              <a href="https://github.com/yourusername" className="text-tech-purple hover:text-tech-light transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-tech-purple hover:text-tech-light transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your@email.com" className="text-tech-purple hover:text-tech-light transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-tech-charcoal/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display text-tech-purple mb-8 text-center">
            Projects & Innovations
          </h2>
          <p className="text-tech-light/80 max-w-2xl mx-auto text-center mb-12">
            Stanford Electrical Engineering and Computer Science projects showcasing hardware and software innovations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
