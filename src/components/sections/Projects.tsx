import { FadeInView } from "../ui/FadeInView";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Image, Instagram, CheckSquare, Utensils } from "lucide-react";

const projects = [
  {
    title: "Background Remover",
    description: "Web application that removes background from images using AI technology",
    icon: Image,
    link: "#",
    tech: ["React", "Node.js", "Express", "MongoDB", "Machine Learning"]
  },
  {
    title: "Instagram Frontend Clone",
    description: "Pixel-perfect recreation of Instagram's user interface with core functionalities",
    icon: Instagram,
    link: "#",
    tech: ["React", "TailwindCSS", "Redux", "Firebase"]
  },
  {
    title: "Task Buddy App",
    description: "Collaborative task management application with real-time updates",
    icon: CheckSquare,
    link: "#",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"]
  },
  {
    title: "Food Rescue App",
    description: "Platform connecting food donors with those in need to reduce food waste",
    icon: Utensils,
    link: "#",
    tech: ["React Native", "Node.js", "MongoDB", "Express"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <FadeInView key={project.title} delay={index * 0.1}>
              <Card className="overflow-hidden group backdrop-blur-sm bg-background/50 border-primary/10 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className="h-8 w-8 text-primary" />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}