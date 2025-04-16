
import { Navbar } from "@/components/layout/Navbar";
import { ProjectCard } from "@/components/ProjectCard";

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
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-tech-light">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-display text-tech-dark mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
