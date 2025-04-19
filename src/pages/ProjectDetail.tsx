import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { CircuitBoard, Cpu, Keyboard, Ruler, Zap, Cloud, Bot, Mic } from "lucide-react";

const projects = [
  {
    id: "ar-smart-glasses",
    title: "AR Mango Smart Glasses",
    description: "Built custom AR smart glasses using a Mango Pi, accelerometer, and OLED display, with a custom graphics library for star visualization...",
    image: "/lovable-uploads/glasses.jpg",
    date: "20 December 2024",
    icon: <Cpu className="text-tech-purple" />,
    detailedDescription: `This project emerged from my computer systems class where we built C libraries from assembly up to a working console. Building upon this foundation, I developed AR smart glasses using a Mango Pi as the core processor.

I wrote custom drivers in C to establish I2C communication between the Mango Pi and an accelerometer, along with an OLED display. The display is cleverly reflected onto specialized lenses, creating an augmented reality experience for viewing virtual stars in the user's field of vision.

The project features a custom panning graphics library that I developed, which takes into account the user's head position and orientation. This allows users to look around and see stars rendered in different positions based on their head movement, creating an immersive AR star-gazing experience.

The entire hardware assembly is housed in a custom 3D-printed case that I designed and printed. What makes this project particularly noteworthy is that it was conceived, developed, and completed within a tight two-week timeframe, showcasing rapid prototyping and development capabilities.`,
    skills: [
      "C Programming",
      "Assembly",
      "Driver Development",
      "I2C Communication",
      "Hardware Integration",
      "3D Printing",
      "Graphics Programming",
      "Embedded Systems",
      "Accelerometer",
      "OLED Display",
      "Rapid Prototyping"
    ],
    learnings: `This project significantly deepened my understanding of low-level system programming and hardware integration. Writing drivers from scratch taught me the intricacies of I2C communication protocols and hardware timing considerations. The graphics library development enhanced my skills in real-time rendering and spatial computing, particularly in handling orientation data from accelerometers to create responsive AR experiences.

The rapid development cycle forced me to make efficient decisions about feature implementation and optimization. Working with the Mango Pi and developing in C gave me valuable experience in resource-constrained programming and memory management. Additionally, the physical design aspects, including 3D printing and optics considerations, broadened my understanding of hardware product development.`
  },
  {
    id: "fpga-synthesizer",
    title: "FPGA Music Synthesizer",
    description: "A music synthesizer written in Verilog and programmed onto a PYNQ-Z2 FPGA with various add ons...",
    image: "/lovable-uploads/FPGA.jpg",
    date: "15 October 2024",
    icon: <CircuitBoard className="text-tech-purple" />,
    detailedDescription: `In my Digital System Design course, I developed a music player on an FPGA using Verilog, building modules that read and played notes stored in ROM. The project included a Note Player module that generated accurate frequencies, a Sine Reader to read audio wave samples, and a Song Reader module that managed note sequences through a finite state machine (FSM) for precise playback timing.

I extended the music player with a visual waveform display, capturing audio samples with a sine reader and ROM and rendering them on a raster display using VGA output, effectively turning the FPGA into a fully functioning audio player with real-time graphics.

I further extended the project by adding hardware rotary encoders (knobs are difficult to implement, but rather interesting to learn about) to add another level of user control. Also included in the synthesizer is a harmonics and a chords module that adds the ability to play multiple notes at the same time, as well as weighting the harmonics to emphasize the effect different instruments. There is also a module incorporated(not shown in the demo) that shows the current note playing on the VGA display.

And composed Christmas songs to be played! :)`,
    demoVideo: "https://youtu.be/DhnJTezJc8k",
    skills: [
      "Verilog",
      "FlipFlops",
      "Sine reader",
      "ROMs",
      "Rotary Encoders",
      "Shift Registers",
      "Codec",
      "Audio"
    ],
    learnings: `This project strengthened my Verilog programming skills, particularly in digital signal processing and control logic. Designing FSMs for the Song Reader taught me how to control complex timing flows, and I gained experience managing real-time audio data through precise synchronization. Implementing the waveform display required an understanding of real-time data processing and graphics programming, including memory management and double buffering techniques to avoid display artifacts. Working on this project helped me develop a comprehensive skill set in digital design, FPGA programming, and the integration of audio and visual outputs—essential abilities for designing complex, resource-efficient digital systems.`
  },
  {
    id: "ultrasonic-ruler",
    title: "Arduino Ultrasonic Ruler",
    description: "The UltraSonic ruler is a device that sends out ultrasonic waves to then measure the time it takes to get back...",
    image: "/lovable-uploads/ultrasonic.png",
    date: "1 June 2024",
    icon: <Ruler className="text-tech-purple" />,
    detailedDescription: `In this project, I created an ultrasonic ruler using Arduino that measures the distance to an object and displays the result in centimeters on a 16x2 LCD screen. The device utilizes an HC-SR04 ultrasonic sensor to send out sound waves and record the time it takes for them to reflect back. Using these measurements, the Arduino calculates the distance to the object and displays it clearly on the LCD. This setup allows for easy, real-time distance readings and serves as a compact digital ruler that showcases the capabilities of ultrasonic sensing.`,
    skills: [
      "C++",
      "Arduino IDE",
      "ESP-32",
      "Circuits",
      "LCD Display",
      "UltraSonic timing"
    ],
    learnings: `Through building this project, I gained a deep understanding of the timing mechanics behind ultrasonic sensors. I learned to precisely control the timing of the sound waves emitted and received by the sensor, which is crucial for accurate distance calculations. Working with the 16x2 LCD interface taught me how to structure and format data for clear display output, control the screen, and ensure that measurements are updated in real time. This project helped me develop a solid foundation in signal timing and display interfacing—both essential skills in embedded systems and hardware projects.`
  },
  {
    id: "ac-dc-converter",
    title: "AC-DC Converter",
    description: "The AC-DC converter uses diodes, a capacitor, and a zener diode to convert the AC signal from a wall outlet...",
    image: "/lovable-uploads/acdcConverter.jpg",
    date: "2 June 2024",
    icon: <Zap className="text-tech-purple" />,
    detailedDescription: `For this project, I designed and built an AC-DC converter circuit that rectifies an AC signal and outputs a stable DC voltage. Using diodes, I created a rectifier to convert the AC input into a pulsating DC signal, which is then smoothed and stored in a capacitor. To maintain a stable DC output at the desired RMS voltage, I used a Zener diode to regulate the discharge, ensuring a consistent voltage level. This approach results in a reliable DC output that approximates the RMS value of the original AC input. There is also a MOSFET that serves as a voltage regulator and prevents short circuiting anything. Next to the output wires there is a bypass capacitor to filter output and prevent noise.`,
    skills: [
      "Circuits",
      "Soldering",
      "Waveform Display",
      "Oscilloscope",
      "Capacitors",
      "MOSFETs",
      "Diodes",
      "Waveform Generators",
      "Digital Multimeter"
    ],
    learnings: `This project deepened my understanding of rectification and voltage regulation. Working with diodes taught me about the principles of AC-DC conversion, including the importance of selecting appropriate diode ratings for effective rectification. I also gained insight into capacitive filtering for smoothing DC output and the role of Zener diodes in voltage stabilization. This hands-on experience helped me appreciate the design considerations in power electronics and improved my skills in analyzing and building circuits for efficient signal conversion.`
  },
  {
    id: "magic-mirror",
    title: "Magic Mirror Dashboard",
    description: "My magic mirror is a TV screen with a reflective film over it connected to a raspberry pi...",
    image: "/lovable-uploads/MIRROR.png",
    date: "25 September 2024",
    icon: <Cpu className="text-tech-purple" />,
    detailedDescription: `In this project, I designed and built a "Magic Mirror" dashboard that functions as both a smart display and a mirror. Using a Raspberry Pi, I set up the mirror to display essential information, like the time, weather, and calendar events, on a TV monitor with a reflective film. This setup creates the illusion that the information is floating on the mirror's surface. Additionally, I integrated a voice assistant to enable hands-free control, making the mirror interactive and adaptable to user commands. The final product is a visually engaging, practical dashboard with a modern interface. I even added a DIY built wooden frame that I made at the Stanford Product Realization Lab.`,
    skills: [
      "Python",
      "Git",
      "RaspberryPi",
      "Woodwork",
      "MagicMirror",
      "APIs"
    ],
    learnings: `Through this project, I not only developed technical skills but also learned strategies for minimizing costs. I sourced affordable materials and focused on maximizing the functionality of the Raspberry Pi and the TV, keeping the project budget-friendly without sacrificing quality. I also learned to use Git more effectively, incorporating and managing Git modules to streamline the software side of the build, which made it easier to add and update different functionalities. This project gave me hands-on experience in IoT design, cost management, and version control, all of which will be invaluable in future projects that balance creativity with practical, scalable solutions.`
  },
  {
    id: "weather-station",
    title: "ESP32 Weather Station",
    description: "Uses an ESP32 to send API request to OpenWeather API to retrieve live weather for a given latitude and longitude...",
    image: "/lovable-uploads/weather.png",
    date: "20 June 2024",
    icon: <Cloud className="text-tech-purple" />,
    detailedDescription: `I developed a weather station using an ESP32 microcontroller that fetches live weather data from the OpenWeather API and displays it on an OLED or LCD screen, with code options for both display types. The device allows users to scroll through various cities using a scroll wheel, selecting each location for updated weather conditions. It also features custom animations that reflect the current weather—like raindrops, sunshine, or clouds—adding a visually engaging element to the interface. This compact weather station is a practical tool for checking local and international weather in real time.`,
    skills: [
      "C++",
      "APIs",
      "Arduino IDE",
      "ESP-32",
      "Circuits",
      "LCD Display",
      "OLED Display"
    ],
    learnings: `This project helped me deepen my understanding of API integration with microcontrollers. I learned how to handle HTTP requests on the ESP32 to pull data from the OpenWeather API and parse the JSON responses for relevant information. Coding for both OLED and LCD screens taught me how to adapt the display output for different formats and sizes, improving my flexibility in display interfacing. Additionally, implementing animations based on weather conditions gave me valuable experience in graphics programming for embedded displays. Overall, this project strengthened my skills in IoT, API integration, and UI design on constrained hardware.`
  },
  {
    id: "robosub",
    title: "RoboSub Work",
    description: "A detailed list of most of my work with my autonomous robot team at Stanford...",
    image: "/lovable-uploads/robosub.png",
    date: "10 April 2024",
    icon: <Bot className="text-tech-purple" />,
    detailedDescription: `In Stanford RoboSub I am responsible for building and testing circuits for our Autonomous Robot that is to compete at the annual RoboSub competition.

I have built overcurrent protection systems to prevent short circuits, power distribution boards, microcontroller breakout boards, and undervoltage systems.`,
    skills: [
      "PCBs",
      "Circuitry",
      "KiCad",
      "Git",
      "MOSFETs",
      "Capacitors",
      "Diodes",
      "Oscilloscope",
      "Digital Multimeter"
    ],
    learnings: `Through my work with RoboSub, I've gained extensive experience in designing and implementing complex electronic systems for autonomous underwater vehicles. I've learned to create robust power distribution systems, implement safety features like overcurrent protection, and work with various sensors and actuators. This experience has given me a deep understanding of embedded systems, power electronics, and the challenges of designing reliable systems for harsh environments.`
  },
  {
    id: "keyboard",
    title: "Mechanical Keyboard Build",
    description: "Designed and created a Mechanical keyboard pcb and case with custom features tailored to my needs...",
    image: "/lovable-uploads/KeyboardPCB.png",
    date: "28 August 2024",
    icon: <Keyboard className="text-tech-purple" />,
    detailedDescription: `In this project, I designed and built a custom mechanical keyboard, creating the PCB layout from scratch in KiCad. The design includes various components like diodes, rotary encoders, a sliding potentiometer, multiplexers, and an OLED display, all powered by a Raspberry Pi Pico. The keyboard uses MX Key Switches for a responsive typing experience, and I customized the plate and case using Fusion 360 to achieve a unique look and feel. The result is a fully functional, programmable keyboard tailored to my specifications, with advanced features like volume control and custom display readouts.`,
    skills: [
      "Circuits",
      "KiCad",
      "Fusion360",
      "Multiplexers",
      "Matrix Circuit (grid)",
      "Schematics",
      "PCB",
      "Soldering"
    ],
    learnings: `This project taught me a great deal about PCB design and hardware integration. I became proficient with KiCad, learning to route complex circuits and incorporate multiple components like encoders and multiplexers into a cohesive design. Designing a custom case and plate in Fusion 360 deepened my understanding of 3D modeling and its role in electronics projects. Additionally, working with the Raspberry Pi Pico gave me hands-on experience with microcontroller-based keyboards, helping me understand how to balance power requirements and component placement. This project strengthened my skills in electronics design, 3D modeling, and embedded systems, giving me a strong foundation for future hardware development projects.`
  },
  {
    id: "voice-assistant",
    title: "Gemini AI-Powered Voice Assistant",
    description: "A voice assistant capable of text-to-speech and responding. Serves as a voice assistent and home automator...",
    image: "/lovable-uploads/jarvis.jpeg",
    date: "15 August 2024",
    icon: <Mic className="text-tech-purple" />,
    detailedDescription: `For this project, I built an AI-powered voice assistant on a Raspberry Pi 4 using Google's Gemini API to handle speech recognition and response. The assistant includes both text-to-speech and speech-to-text functionalities, allowing it to interact with users and automate home processes like controlling lights and playing music. To enhance user experience and privacy, I developed a custom wake word feature using a PyTorch-based model called Porcupine, which ensures that the assistant listens only after hearing its designated wake word. This setup provides a seamless and responsive voice interface for smart home automation. In the future I hope to make it a trained model as to be able to store memory and user interactions (hopefully soon after machine learning courses).`,
    skills: [
      "Python",
      "APIs",
      "Pytorch",
      "PVporcupine Library",
      "Audio Libraries",
      "Raspberry Pi"
    ],
    learnings: `This project taught me a lot about the practical implementation of AI-driven speech recognition. I gained experience working with Google's Gemini API, which deepened my understanding of cloud-based AI services. Implementing the wake word feature with PyTorch allowed me to explore custom machine learning models on resource-constrained hardware like the Raspberry Pi, teaching me about the balance between model efficiency and performance. Additionally, I enhanced my skills in creating reliable text-to-speech and speech-to-text workflows. Overall, this project strengthened my knowledge in AI, edge computing, and home automation, while also highlighting the importance of optimizing AI models for responsiveness and privacy.`
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-tech-dark to-tech-darker">
        <Navbar />
        <div className="pt-24 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-display text-tech-light mb-8">Project Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-dark to-tech-darker">
      <Navbar />
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <div className="bg-tech-dark/50 rounded-lg overflow-hidden shadow-xl border border-tech-purple/20">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              {project.icon}
              <p className="text-sm text-cyan-400">{project.date}</p>
            </div>
            <h1 className="text-3xl font-display text-white mb-4">{project.title}</h1>
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-white whitespace-pre-line">
                {project.detailedDescription}
              </p>
              
              {project.demoVideo && (
                <div className="mt-12 mb-8">
                  <h2 className="text-xl font-display text-cyan-400 mb-6">Demo Video</h2>
                  <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
                    <iframe
                      src={project.demoVideo.replace('youtu.be/', 'youtube.com/embed/')}
                      title="Project Demo Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg w-full h-[500px]"
                    />
                  </div>
                </div>
              )}
              
              {project.skills && (
                <div className="mt-8">
                  <h2 className="text-xl font-display text-cyan-400 mb-4">Skills Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-500/10 text-cyan-200 rounded-full text-sm border border-cyan-400/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {project.learnings && (
                <div className="mt-8">
                  <h2 className="text-xl font-display text-cyan-400 mb-4">What I Learned</h2>
                  <p className="text-white whitespace-pre-line">
                    {project.learnings}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
