import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  icon?: React.ReactNode;
}

export const ProjectCard = ({ title, description, image, link, date, icon }: ProjectCardProps) => {
  return (
    <Link to={link}>
      <div className="group relative overflow-hidden rounded-lg bg-tech-dark/30 hover:bg-tech-dark/40 transition-all duration-300 border border-tech-purple/20 hover:border-tech-purple/40">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/90 to-transparent" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <p className="text-xs text-tech-purple/80">{date}</p>
          </div>
          <h3 className="text-lg font-display text-tech-light mb-2 group-hover:text-tech-purple transition-colors">
            {title}
          </h3>
          <p className="text-sm text-tech-light/70 line-clamp-2 mb-4">{description}</p>
          <div className="flex items-center text-tech-purple text-sm font-medium">
            Read More
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        <div className="absolute inset-0 border border-tech-purple/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
};
