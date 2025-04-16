
import { Navbar } from "@/components/layout/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-tech-light">
      <Navbar />
      <div className="pt-24 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-display text-tech-dark mb-8">About Me</h1>
        <div className="prose prose-lg">
          <p className="text-tech-charcoal/80">
            I'm an Electrical Engineer with a passion for technology and innovation. With experience in both hardware and software development, I create solutions that bridge the physical and digital worlds.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
