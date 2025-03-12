import { FadeInView } from "../ui/FadeInView";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeInView>
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
        </FadeInView>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <FadeInView delay={0.2}>
            <img
              src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
              alt="Christina"
              className="rounded-lg w-full"
            />
          </FadeInView>
          
          <FadeInView delay={0.4}>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  With over 5 years of experience in web development, I specialize in creating beautiful, functional, and user-friendly applications.
                </p>
                <p className="text-lg text-muted-foreground">
                  My passion lies in bridging the gap between design and development, creating seamless experiences that users love.
                </p>
              </CardContent>
            </Card>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
