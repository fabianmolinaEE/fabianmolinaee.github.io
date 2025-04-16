
import { Navbar } from "@/components/layout/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { CircuitBoard, Cpu, Keyboard } from "lucide-react";

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

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-dark to-tech-charcoal">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display text-tech-purple mb-4 animate-fade-in">
            Projects & Innovations
          </h1>
          <p className="text-gray-300/80 max-w-2xl mx-auto animate-slide-up">
            Stanford Electrical Engineering and Computer Science projects showcasing hardware and software innovations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
