
import { Navbar } from "@/components/layout/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Github, Linkedin, Mail } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of the project and its key features",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    link: "/projects/1"
  },
  {
    title: "Project 2",
    description: "A brief description of the project and its key features",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    link: "/projects/2"
  },
  // Add more projects as needed
];

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display text-tech-dark mb-6 animate-fade-in">
            Hello, I'm <span className="text-tech-purple">Fabian Molina</span>
          </h1>
          <p className="text-lg md:text-xl text-tech-charcoal/80 max-w-2xl animate-slide-up">
            Electrical Engineer & Developer creating innovative solutions
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/yourusername" className="text-tech-dark hover:text-tech-purple transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-tech-dark hover:text-tech-purple transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your@email.com" className="text-tech-dark hover:text-tech-purple transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display text-tech-dark mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
