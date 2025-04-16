
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <Link to={link}>
      <div className="group relative overflow-hidden rounded-lg bg-tech-dark/5 hover:bg-tech-dark/10 transition-all duration-300">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-display text-tech-dark mb-2">{title}</h3>
          <p className="text-sm text-tech-charcoal/80 line-clamp-2">{description}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
};
