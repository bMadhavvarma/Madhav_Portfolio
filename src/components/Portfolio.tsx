import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  Github
} from "lucide-react";
import avatarImage from "@/assets/rai-babu-avatar.jpg";

type Section = 'about' | 'skills' | 'resume' | 'projects' | 'contact';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState<Section>('about');

  const skills = [
    { name: "React.js", usage: 90, tag: "🔥 Core Stack", projects: "8+ projects" },
    { name: "Node.js", usage: 85, tag: "⚙️ Backend Pro", projects: "6+ projects" },
    { name: "JavaScript", usage: 95, tag: "🔥 Core Stack", projects: "10+ projects" },
    { name: "MongoDB", usage: 75, tag: "💾 Database", projects: "5+ projects" },
    { name: "Tailwind CSS", usage: 80, tag: "🎨 Styling", projects: "7+ projects" },
    { name: "Java", usage: 70, tag: "☕ Enterprise", projects: "4+ projects" },
    { name: "Spring Boot", usage: 65, tag: "🚀 Framework", projects: "3+ projects" },
    { name: "MySQL", usage: 60, tag: "💾 Database", projects: "4+ projects" },
    { name: "Git", usage: 88, tag: "📝 Version Control", projects: "All projects" },
    { name: "Docker", usage: 45, tag: "🐳 DevOps", projects: "2+ projects" }
  ];

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      category: "web development",
      image: "/placeholder.svg",
      github: "https://github.com/madhav/ecommerce",
      demo: "https://ecommerce-demo.com"
    },
    {
      name: "Task Management App",
      description: "Modern task management with real-time collaboration",
      category: "web development", 
      image: "/placeholder.svg",
      github: "https://github.com/madhav/taskmanager",
      demo: "https://taskmanager-demo.com"
    },
    {
      name: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      category: "web development",
      image: "/placeholder.svg", 
      github: "https://github.com/madhav/weather",
      demo: "https://weather-demo.com"
    },
    {
      name: "Portfolio Website",
      description: "Responsive portfolio website with modern design",
      category: "web development",
      image: "/placeholder.svg",
      github: "https://github.com/madhav/portfolio", 
      demo: "https://portfolio-demo.com"
    }
  ];

  const education = [
    {
      institution: "Indian Institute of Technology",
      period: "2018 - 2022",
      degree: "Bachelor of Technology in Computer Science"
    },
    {
      institution: "Delhi Public School",
      period: "2016 - 2018", 
      degree: "Higher Secondary Education"
    }
  ];

  const experience = [
    {
      company: "Tech Solutions Pvt Ltd",
      period: "2022 Jan - Present",
      position: "Full Stack Developer",
      description: "Developing scalable web applications using React, Node.js, and MongoDB"
    },
    {
      company: "Digital Innovations",
      period: "2021 Jun - 2021 Dec",
      position: "Frontend Developer Intern", 
      description: "Built responsive user interfaces and collaborated with design team"
    }
  ];


  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="flex max-w-7xl mx-auto">
        
        {/* Sidebar */}
        <div className="w-80 bg-[#2a2a2a] p-8 min-h-screen">
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-[#3a3a3a]">
              <img 
                src={avatarImage} 
                alt="Madhav Varma"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">Madhav Varma</h1>
            <p className="text-gray-400 text-sm">Full Stack Java Developer</p>
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
                <p className="text-sm">madhav@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#3a3a3a] rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">PHONE</p>
                <p className="text-sm">+91-98********</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#3a3a3a] rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">BIRTHDAY</p>
                <p className="text-sm">May 05, 1999</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#3a3a3a] rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">LOCATION</p>
                <p className="text-sm">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Navigation */}
          <div className="mb-8">
            <div className="bg-[#2a2a2a] rounded-full p-2 inline-flex space-x-2">
              <Button
                onClick={() => setCurrentSection('about')}
                variant={currentSection === 'about' ? 'default' : 'ghost'}
                className={`rounded-full px-6 ${
                  currentSection === 'about' 
                    ? 'bg-orange-400 text-black hover:bg-orange-500' 
                    : 'text-gray-400 hover:text-white hover:bg-[#3a3a3a]'
                }`}
              >
                About
              </Button>
              <Button
                onClick={() => setCurrentSection('skills')}
                variant={currentSection === 'skills' ? 'default' : 'ghost'}
                className={`rounded-full px-6 ${
                  currentSection === 'skills' 
                    ? 'bg-orange-400 text-black hover:bg-orange-500' 
                    : 'text-gray-400 hover:text-white hover:bg-[#3a3a3a]'
                }`}
              >
                Skills
              </Button>
              <Button
                onClick={() => setCurrentSection('resume')}
                variant={currentSection === 'resume' ? 'default' : 'ghost'}
                className={`rounded-full px-6 ${
                  currentSection === 'resume' 
                    ? 'bg-orange-400 text-black hover:bg-orange-500' 
                    : 'text-gray-400 hover:text-white hover:bg-[#3a3a3a]'
                }`}
              >
                Resume
              </Button>
              <Button
                onClick={() => setCurrentSection('projects')}
                variant={currentSection === 'projects' ? 'default' : 'ghost'}
                className={`rounded-full px-6 ${
                  currentSection === 'projects' 
                    ? 'bg-orange-400 text-black hover:bg-orange-500' 
                    : 'text-gray-400 hover:text-white hover:bg-[#3a3a3a]'
                }`}
              >
                Projects
              </Button>
              <Button
                onClick={() => setCurrentSection('contact')}
                variant={currentSection === 'contact' ? 'default' : 'ghost'}
                className={`rounded-full px-6 ${
                  currentSection === 'contact' 
                    ? 'bg-orange-400 text-black hover:bg-orange-500' 
                    : 'text-gray-400 hover:text-white hover:bg-[#3a3a3a]'
                }`}
              >
                Contact
              </Button>
            </div>
          </div>

          {/* About Section */}
          {currentSection === 'about' && (
            <div>
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <div className="w-12 h-1 bg-orange-400 mb-8"></div>
              
              <div className="space-y-6 mb-12">
                <p className="text-gray-300 leading-relaxed">
                  I am Full Stack Java and Web Developer from Hyderabad, Telangana. I am interested in working as a full stack 
                  developer. I enjoy turning complex problems into simple, beautiful and intuitive design.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I am Full Stack Java and Web Developer from Hyderabad, Telangana. I am interested in working as a full stack 
                  developer. I enjoy turning complex problems into simple, beautiful and intuitive design.
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
                        <h4 className="text-xl font-semibold mb-2">Web Design</h4>
                        <p className="text-gray-400 text-sm">
                          The most modern and high quality design made at a professional level.
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
                        <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                        <p className="text-gray-400 text-sm">
                          The most modern and high quality design made at a professional level.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Resume Section */}
          {currentSection === 'resume' && (
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
                      <h4 className="text-lg font-semibold mb-1">{edu.institution}</h4>
                      <p className="text-orange-400 text-sm mb-2">{edu.period}</p>
                      <p className="text-gray-400 text-sm">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <Briefcase className="w-6 h-6 text-orange-400" />
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>
                
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-orange-400 rounded-full"></div>
                      {index < experience.length - 1 && (
                        <div className="absolute left-1.5 top-5 w-0.5 h-20 bg-[#3a3a3a]"></div>
                      )}
                      <h4 className="text-lg font-semibold mb-1">{exp.company}</h4>
                      <p className="text-orange-400 text-sm mb-2">{exp.period}</p>
                      <p className="text-gray-300 font-medium mb-2">{exp.position}</p>
                      <p className="text-gray-400 text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Skills Section */}
          {currentSection === 'skills' && (
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
                      <span className="text-orange-400 text-xs font-bold">#{index + 1}</span>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                        {skill.name}
                      </h3>
                      <div className="text-orange-400 font-semibold text-sm mb-1">
                        {skill.usage}% Proficiency
                      </div>
                      <div className="text-gray-400 text-xs">
                        {skill.tag.replace(/[🔥⚙️💾🎨☕🚀📝🐳]/g, '').trim()}
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
                  <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">10+</div>
                  <div className="text-gray-400 text-sm">Technologies Mastered</div>
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
              
              <div className="relative">
                <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
                  {projects.map((project, index) => (
                    <Card key={index} className="min-w-[320px] bg-[#2a2a2a] border-[#3a3a3a] overflow-hidden hover:bg-[#333] transition-colors flex-shrink-0">
                      <div className="aspect-video bg-[#3a3a3a] flex items-center justify-center">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
                        <p className="text-gray-400 text-sm mb-4">{project.category}</p>
                        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" asChild className="flex-1 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-1" />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" className="flex-1 bg-orange-400 text-black hover:bg-orange-500" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          {currentSection === 'contact' && (
            <div>
              <h2 className="text-4xl font-bold mb-4">Contact</h2>
              <div className="w-12 h-1 bg-orange-400 mb-12"></div>
              
              <div className="max-w-2xl">
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, creative ideas, or just having a friendly chat about technology and development.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Email</h4>
                      <a href="mailto:madhav@gmail.com" className="text-orange-400 hover:underline">
                        madhav@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Phone</h4>
                      <a href="tel:+919876543210" className="text-orange-400 hover:underline">
                        +91-98********
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Location</h4>
                      <p className="text-gray-400">Hyderabad, Telangana, India</p>
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