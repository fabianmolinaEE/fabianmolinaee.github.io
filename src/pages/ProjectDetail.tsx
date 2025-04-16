
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-tech-light">
      <Navbar />
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-display text-tech-dark mb-8">Project {id}</h1>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
            alt="Project Cover"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <p className="text-tech-charcoal/80">
              Detailed project description goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
