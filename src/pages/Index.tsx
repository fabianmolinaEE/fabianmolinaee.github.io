import { Navbar } from "@/components/layout/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { CircuitBoard, Cpu, Keyboard, Ruler, Zap, Cloud, Bot, Mic, Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useRef } from "react";

// Circuit animation component
const CircuitAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Circuit node class
    class Node {
      x: number;
      y: number;
      connections: Node[];
      pulseOffset: number;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.connections = [];
        this.pulseOffset = Math.random() * 2 * Math.PI;
      }
    }

    // Create grid of nodes
    const gridSize = 40;
    const nodes: Node[] = [];
    const rows = Math.ceil(canvas.height / gridSize);
    const cols = Math.ceil(canvas.width / gridSize);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        nodes.push(new Node(
          j * gridSize + Math.random() * 20 - 10,
          i * gridSize + Math.random() * 20 - 10
        ));
      }
    }

    // Connect nodes
    nodes.forEach((node) => {
      nodes.forEach((otherNode) => {
        if (node !== otherNode) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          if (distance < gridSize * 1.5) {
            node.connections.push(otherNode);
          }
        }
      });
    });

    // Animation loop
    let animationFrame: number;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections with pulse effect
      nodes.forEach((node) => {
        node.connections.forEach((connectedNode) => {
          const dx = connectedNode.x - node.x;
          const dy = connectedNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Pulse effect
          const pulse = Math.sin(time / 1000 + node.pulseOffset) * 0.5 + 0.5;
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.05 + pulse * 0.1})`;
          ctx.lineWidth = 1;
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

const projects = [
  {
    title: "AR Mango Smart Glasses",
    description: "Built custom AR smart glasses using a Mango Pi, accelerometer, and OLED display, with a custom graphics library for star visualization...",
    image: "/lovable-uploads/glasses.jpg",
    link: "/projects/ar-smart-glasses",
    date: "20 December 2024",
    icon: <Cpu className="text-tech-purple w-5 h-5" />
  },
  {
    title: "FPGA Music Synthesizer",
    description: "A music synthesizer written in Verilog and programmed onto a PYNQ-Z2 FPGA with various add ons...",
    image: "/lovable-uploads/music1.png",
    link: "/projects/fpga-synthesizer",
    date: "15 October 2024",
    icon: <CircuitBoard className="text-tech-purple w-5 h-5" />
  },
  {
    title: "Arduino Ultrasonic Ruler",
    description: "The UltraSonic ruler is a device that sends out ultrasonic waves to then measure the time it takes to get back...",
    image: "/lovable-uploads/ultrasonic.png",
    link: "/projects/ultrasonic-ruler",
    date: "1 June 2024",
    icon: <Ruler className="text-tech-purple w-5 h-5" />
  },
  {
    title: "AC-DC Converter",
    description: "The AC-DC converter uses diodes, a capacitor, and a zener diode to convert the AC signal from a wall outlet...",
    image: "/lovable-uploads/acdcConverter.jpg",
    link: "/projects/ac-dc-converter",
    date: "2 June 2024",
    icon: <Zap className="text-tech-purple w-5 h-5" />
  },
  {
    title: "Magic Mirror Dashboard",
    description: "My magic mirror is a TV screen with a reflective film over it connected to a raspberry pi...",
    image: "/lovable-uploads/MIRROR.png",
    link: "/projects/magic-mirror",
    date: "25 September 2024",
    icon: <Cpu className="text-tech-purple w-5 h-5" />
  },
  {
    title: "ESP32 Weather Station",
    description: "Uses an ESP32 to send API request to OpenWeather API to retrieve live weather for a given latitude and longitude...",
    image: "/lovable-uploads/weather.png",
    link: "/projects/weather-station",
    date: "20 June 2024",
    icon: <Cloud className="text-tech-purple w-5 h-5" />
  },
  {
    title: "RoboSub Work",
    description: "A detailed list of most of my work with my autonomous robot team at Stanford...",
    image: "/lovable-uploads/robosub.png",
    link: "/projects/robosub",
    date: "10 April 2024",
    icon: <Bot className="text-tech-purple w-5 h-5" />
  },
  {
    title: "Mechanical Keyboard Build",
    description: "Designed and created a Mechanical keyboard pcb and case with custom features tailored to my needs...",
    image: "/lovable-uploads/KeyboardPCB.png",
    link: "/projects/keyboard",
    date: "28 August 2024",
    icon: <Keyboard className="text-tech-purple w-5 h-5" />
  },
  {
    title: "Gemini AI-Powered Voice Assistant",
    description: "A voice assistant capable of text-to-speech and responding. Serves as a voice assistent and home automator...",
    image: "/lovable-uploads/jarvis.jpeg",
    link: "/projects/voice-assistant",
    date: "15 August 2024",
    icon: <Mic className="text-tech-purple w-5 h-5" />
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-dark to-tech-darker relative overflow-hidden">
      <CircuitAnimation />
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section with Headshot */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center animate-fade-in">
              <div className="relative mx-auto w-64 h-64 mb-6 group">
                <div className="relative">
                  <Avatar className="w-full h-full border-4 border-tech-purple/30 group-hover:border-tech-purple/60 transition-all duration-300 transform group-hover:scale-105 shadow-2xl">
                    <AvatarImage
                      src="/lovable-uploads/MyHeadShot.JPG"
                      alt="Fabian Molina"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-tech-dark text-tech-purple text-3xl">FM</AvatarFallback>
                  </Avatar>
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
                <a href="https://github.com/fabianmolinaee" target="_blank" rel="noopener noreferrer" className="text-tech-purple hover:text-tech-light transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/fabianmolina04" target="_blank" rel="noopener noreferrer" className="text-tech-purple hover:text-tech-light transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:fabianmolina@stanford.edu" className="text-tech-purple hover:text-tech-light transition-colors">
                  <Mail size={24} />
                </a>
              </div>

              {/* Scroll Indicator */}
              <div className="mt-12 flex flex-col items-center animate-bounce">
                <p className="text-tech-purple mb-2 text-sm font-medium">Scroll down to see my work!</p>
                <div className="w-6 h-6 border-2 border-tech-purple rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-tech-purple rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4 bg-tech-charcoal/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-display text-tech-purple mb-8 text-center">
              Projects & Innovations
            </h2>
            <p className="text-tech-light/80 max-w-2xl mx-auto text-center mb-12">
              Stanford Electrical Engineering and Computer Science projects showcasing hardware and software innovations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((project, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <ProjectCard {...project} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
