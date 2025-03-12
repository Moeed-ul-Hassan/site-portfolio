import { FadeInView } from "../ui/FadeInView";
import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiPostgresql, SiDocker } from "react-icons/si";

const skills = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiDocker, name: "Docker" }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeInView>
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
        </FadeInView>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <FadeInView key={skill.name} delay={index * 0.1}>
              <Card className="group hover:border-primary transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <skill.icon className="h-12 w-12 mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-medium">{skill.name}</span>
                </CardContent>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
