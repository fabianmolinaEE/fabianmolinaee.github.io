
import { Navbar } from "@/components/layout/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-tech-light">
      <Navbar />
      <div className="pt-24 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-display text-tech-dark mb-8">Contact</h1>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-tech-charcoal/80 mb-4">
            Feel free to reach out to me for collaborations or opportunities.
          </p>
          <div className="space-y-4">
            <p className="text-tech-charcoal">
              Email: your@email.com
            </p>
            <p className="text-tech-charcoal">
              LinkedIn: linkedin.com/in/yourusername
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
