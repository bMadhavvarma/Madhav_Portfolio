import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import docspotImg from "../assets/docspot.jpg";
import taskManagerImg from "../assets/taskmanager.png";
import superAppImg from "../assets/super app.png";
import ticTacToeImg from "../assets/tic-tac-toe.webp";
import adminImg from "../assets/admin.jpeg";
import careerImg from "../assets/career.png";
import weatherImg from "../assets/weather.webp";
import calculatorImg from "../assets/calculator.jpg";


import {
  User,
  Code,
  Rocket,
  FileText,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Monitor,
  Palette,
  Users,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Github,
  Award,
} from "lucide-react";
import avatarImage from "@/assets/rai-babu-avatar.jpg";

type Section = "about" | "skills" | "resume" | "projects" | "contact";

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState<Section>("about");

  const skills = [
    {
      name: "React.js",
      usage: 90,
      tag: "🔥 Core Stack",
      projects: "8+ projects",
    },
    {
      name: "Node.js",
      usage: 75,
      tag: "⚙️ Backend",
      projects: "5+ projects",
    },
    {
      name: "Express.js",
      usage: 75,
      tag: "⚙️ Backend",
      projects: "5+ projects",
    },
    {
      name: "JavaScript",
      usage: 90,
      tag: "🔥 Core Stack",
      projects: "10+ projects",
    },
    { name: "MongoDB", usage: 75, tag: "💾 Database", projects: "5+ projects" },
    {
      name: "Tailwind CSS",
      usage: 80,
      tag: "🎨 Styling",
      projects: "7+ projects",
    },
    { name: "Java", usage: 70, tag: "☕ Programming Language" },
  
    { name: "MySQL", usage: 60, tag: "Programming Language" },
    {
      name: "Git",
      usage: 88,
      tag: "📝 Version Control",
      projects: "All projects",
    },
 
  ];

  const projects = [
    {
      name: "DocSpot",
      description: "Responsive doctor appointment booking app with role-based access using MERN stack",
      category: "Mern Stack",
      image: docspotImg,
      github: "https://github.com/bMadhavvarma/Docspot",
      demo: "https://docspot-mauve.vercel.app/login",
    },
    {
      name: "MERN Task Manager",
      description: "Full-stack task manager with CRUD operations using MERN stack",
      category: "Mern Stack",
      image: taskManagerImg,
      github: "https://github.com/bMadhavvarma/MERN_TASK",
      demo: "https://mern-taskmanager-chi.vercel.app/",
    },
    {
      name: "Super App",
      description: "AI-powered no-code platform aggregating tools like Gemini, Hugging Face, and more",
      category: "No-Code Platform",
      image: superAppImg,
      github: "https://github.com/bMadhavvarma/super-ai-station",
      demo: "https://super-ai-station.vercel.app/",
    },
    {
      name: "Tic Tac Toe",
      description: "Classic Tic Tac Toe game built with React featuring CPU opponent logic",
      category: "React js",
      image: ticTacToeImg,
      github: "https://github.com/bMadhavvarma/TicTacToe",
      demo: "https://tic-tac-toe-sqlu.vercel.app/",
    },
    {
      name: "Admin Task Manager",
      description: "Task manager dashboard built in React with role-based UI for admin control",
      category: "React js",
      image: adminImg,
      github: "https://github.com/bMadhavvarma/TaskManagerX",
      demo: "https://task-manager-x-nine.vercel.app/",
    },
    {
      name: "Career Guidance Website",
      description: "Static website built with HTML, CSS, and JS to guide 10th & 12th students in choosing careers",
      category: "Html Css Js",
      image: careerImg,
      github: "https://github.com/bMadhavvarma/Career-Guidance",
      demo: "https://career-guidance-nu.vercel.app/",
    },
    {
      name: "Weather App",
      description: "Weather forecasting app using Axios with real-time data and responsive UI",
      category: "Html Css Js",
      image: weatherImg,
      github: "https://github.com/bMadhavvarma/Weather",
      demo: "https://bmadhavvarma.github.io/Weather/",
    },
    {
      name: "Calculator",
      description: "Basic calculator built with HTML, CSS, and JavaScript for simple arithmetic operations",
      category: "Html Css Js",
      image: calculatorImg,
      github: "https://github.com/bMadhavvarma/Calculator",
      demo: "https://bmadhavvarma.github.io/Calculator/",
    }
  ];
  

  const education = [
    {
      institution: "Sri Venkateswara College of Engineering, Tirupati",
      period: "2022 - 2026",
      degree: "Bachelor of Technology in Information Technology",
    },
    {
      institution: "Krishna Chaitanya Junior College, Nellore",
      period: "2020 - 2022",
      degree: "Intermediate Education (MPC)"
    },
    {
      institution: "Viswa Bharathi [E.M] High School, Nellore",
      period: "~2020",
      degree: "High School Education (SSC)"
    },
  ];

  const achievements = [
    {
      title: "Salesforce Certified AI Associate",
      date: "2025",
      type: "Certification",
      description:
        "Validated foundational AI knowledge and its practical usage in real-world business settings.",
    },
    {
      title: "All India NCAT 2025 – Naukri Campus",
      date: "2025",
      type: "Achievement",
      description:
        "Secured an All-India Rank of 2552 with a score of 48/60. Percentiles: Reasoning – 95.38, Quant – 87.74, Verbal – 73.72. Ranked in the 94.68 percentile nationwide and 96.15 percentile in Andhra Pradesh.",
    },
    {
      title: "Google Developer Group (GDG) Core Team Member",
      date: "Sep 2024 –Feb 2025",
      type: "Leadership",
      description:
        "Actively contributed to organizing tech events, workshops, and developer community initiatives at campus level.",
    },
  ];
  

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-80 bg-[#2a2a2a] p-8 h-screen fixed left-0 top-0 overflow-y-auto">
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-[#3a3a3a]">
              <img
                src={avatarImage}
                alt="Madhav Varma"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">Madhav Varma B</h1>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          <Separator className="my-6 bg-[#3a3a3a]" />

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#3a3a3a] rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">EMAIL</p>
                <p className="text-sm">varmamadhav71@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#3a3a3a] rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">PHONE</p>
                <p className="text-sm">+91-8688500291</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#3a3a3a] rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">BIRTHDAY</p>
                <p className="text-sm">May 26, 2004</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#3a3a3a] rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">LOCATION</p>
                <p className="text-sm">Nellore, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-80 p-8 overflow-y-auto max-h-screen">
          {/* Navigation */}
          <div className="mb-8">
            <div className="bg-[#2a2a2a] rounded-full p-2 inline-flex space-x-2">
              <Button
                onClick={() => setCurrentSection("about")}
                variant={currentSection === "about" ? "default" : "ghost"}
                className={`rounded-full px-6 ${
                  currentSection === "about"
                    ? "bg-orange-400 text-black hover:bg-orange-500"
                    : "text-gray-400 hover:text-white hover:bg-[#3a3a3a]"
                }`}
              >
                About
              </Button>
              <Button
                onClick={() => setCurrentSection("skills")}
                variant={currentSection === "skills" ? "default" : "ghost"}
                className={`rounded-full px-6 ${
                  currentSection === "skills"
                    ? "bg-orange-400 text-black hover:bg-orange-500"
                    : "text-gray-400 hover:text-white hover:bg-[#3a3a3a]"
                }`}
              >
                Skills
              </Button>
              <Button
                onClick={() => setCurrentSection("resume")}
                variant={currentSection === "resume" ? "default" : "ghost"}
                className={`rounded-full px-6 ${
                  currentSection === "resume"
                    ? "bg-orange-400 text-black hover:bg-orange-500"
                    : "text-gray-400 hover:text-white hover:bg-[#3a3a3a]"
                }`}
              >
                Resume
              </Button>
              <Button
                onClick={() => setCurrentSection("projects")}
                variant={currentSection === "projects" ? "default" : "ghost"}
                className={`rounded-full px-6 ${
                  currentSection === "projects"
                    ? "bg-orange-400 text-black hover:bg-orange-500"
                    : "text-gray-400 hover:text-white hover:bg-[#3a3a3a]"
                }`}
              >
                Projects
              </Button>
              <Button
                onClick={() => setCurrentSection("contact")}
                variant={currentSection === "contact" ? "default" : "ghost"}
                className={`rounded-full px-6 ${
                  currentSection === "contact"
                    ? "bg-orange-400 text-black hover:bg-orange-500"
                    : "text-gray-400 hover:text-white hover:bg-[#3a3a3a]"
                }`}
              >
                Contact
              </Button>
            </div>
          </div>

          {/* About Section */}
          {currentSection === "about" && (
            <div>
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <div className="w-12 h-1 bg-orange-400 mb-8"></div>

              <div className="space-y-6 mb-12">
                <p className="text-gray-300 leading-relaxed">
                  I'm an aspiring full-stack developer with hands-on experience
                  in building modern web applications using the MERN stack. My
                  core strengths lie in crafting clean, responsive UIs and
                  scalable systems. I'm particularly drawn to tools like React,
                  Tailwind CSS, and Chakra UI for frontend development, and I
                  enjoy diving into backend work with Node.js and MongoDB.
                </p>
                <p>
                  I’m focused, adaptable, and always up for a challenge —
                  whether it’s debugging a tricky issue or picking up a new
                  tool. With a balance of creativity and discipline, I aim to
                  keep improving and making meaningful contributions wherever I
                  go.
                </p>
              </div>

              {/* What I'm Doing */}
              <h3 className="text-3xl font-bold mb-8">What I'm Doing</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-[#2a2a2a] border-[#3a3a3a] p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Monitor className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Web Design
                        </h4>
                        <p className="text-gray-400 text-sm">
                          A fresh, modern design built with passion as I
                          continue learning and growing in UI/UX.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#2a2a2a] border-[#3a3a3a] p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <Code className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Web Development
                        </h4>
                        <p className="text-gray-400 text-sm">
                          A clean, modern, and high-quality web design built
                          with professional standards and attention to detail.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Resume Section */}
          {currentSection === "resume" && (
            <div>
              <h2 className="text-4xl font-bold mb-4">Resume</h2>
              <div className="w-12 h-1 bg-orange-400 mb-12"></div>

              {/* Education */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-8">
                  <GraduationCap className="w-6 h-6 text-orange-400" />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-orange-400 rounded-full"></div>
                      <div className="absolute left-1.5 top-5 w-0.5 h-16 bg-[#3a3a3a]"></div>
                      <h4 className="text-lg font-semibold mb-1">
                        {edu.institution}
                      </h4>
                      <p className="text-orange-400 text-sm mb-2">
                        {edu.period}
                      </p>
                      <p className="text-gray-400 text-sm">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
  <div className="flex items-center space-x-3 mb-8">
    <Award className="w-6 h-6 text-orange-400" />
    <h3 className="text-2xl font-bold">Certifications & Achievements</h3>
  </div>

  <div className="space-y-6">
    {achievements.map((item, index) => (
      <div key={index} className="relative pl-8">
        <div className="absolute left-0 top-2 w-3 h-3 bg-orange-400 rounded-full"></div>
        {index < achievements.length - 1 && (
          <div className="absolute left-1.5 top-5 w-0.5 h-20 bg-[#3a3a3a]"></div>
        )}
        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
        <p className="text-orange-400 text-sm mb-2">{item.date}</p>
        <p className="text-gray-300 font-medium mb-2">{item.type}</p>
        <p className="text-gray-400 text-sm">{item.description}</p>
      </div>
    ))}
  </div>
</div>

            </div>
          )}

          {/* Skills Section */}
          {currentSection === "skills" && (
            <div>
              <h2 className="text-4xl font-bold mb-4">Skills</h2>
              <div className="w-12 h-1 bg-orange-400 mb-8"></div>

              <p className="text-gray-400 mb-8">Technologies I work with</p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-[#2a2a2a] to-[#222] border border-[#3a3a3a] rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-400/10"
                  >
                    <div className="absolute top-0 right-0 w-8 h-8 bg-orange-400/10 rounded-bl-lg flex items-center justify-center">
                      <span className="text-orange-400 text-xs font-bold">
                        #{index + 1}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                        {skill.name}
                      </h3>
                      <div className="text-orange-400 font-semibold text-sm mb-1">
                        {skill.usage}% Proficiency
                      </div>
                      <div className="text-gray-400 text-xs">
                        {skill.tag.replace(/[🔥⚙️💾🎨☕🚀📝🐳]/g, "").trim()}
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="text-xs text-gray-500 bg-[#1a1a1a] rounded px-2 py-1">
                        {skill.projects}
                      </div>
                    </div>

                    {/* Floating background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Additional Skills Info */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    1.5+
                  </div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    25+
                  </div>
                  <div className="text-gray-400 text-sm">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    5+
                  </div>
                  <div className="text-gray-400 text-sm">
                    Technologies Mastered
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Section */}
 {currentSection === 'projects' && (
  <div>
    <h2 className="text-4xl font-bold mb-4">Projects</h2>
    <div className="w-12 h-1 bg-orange-400 mb-8"></div>

    <p className="text-gray-400 mb-8">Web development</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative bg-gradient-to-br from-[#2a2a2a] to-[#222] border border-[#3a3a3a] rounded-xl overflow-hidden hover:border-orange-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-400/10"
        >
          {/* Image & Icons */}
          <div className="relative aspect-video bg-[#3a3a3a]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />

            {/* Hover Icons */}
            <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a]/80 backdrop-blur p-2 rounded-full text-orange-400 hover:text-white hover:bg-orange-500 transition"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a]/80 backdrop-blur p-2 rounded-full text-orange-400 hover:text-white hover:bg-orange-500 transition"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6">
            <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
              {project.name}
            </h4>
            <p className="text-gray-400 text-sm">{project.category}</p>
          </div>

          {/* Floating Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      ))}
    </div>
  </div>
)}




          {/* Contact Section */}
          {currentSection === "contact" && (
            <div>
              <h2 className="text-4xl font-bold mb-4">Contact</h2>
              <div className="w-12 h-1 bg-orange-400 mb-12"></div>

              <div className="max-w-2xl">
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, creative
                  ideas, or just having a friendly chat about technology and
                  development.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Email</h4>
                      <a
                        href="mailto:varmamadhav71@gmail.com"
                        className="text-orange-400 hover:underline"
                      >
                        varmamadhav71@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Phone</h4>
                      <a
                        href="tel:+918688500291"
                        className="text-orange-400 hover:underline"
                      >
                        +91-8688500291
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Location</h4>
                      <p className="text-gray-400">
                        Nellore, Andhra Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
