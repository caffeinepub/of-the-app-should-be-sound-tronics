import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: '15+ Years',
    description: 'Industry Experience',
  },
  {
    icon: Users,
    title: '500+',
    description: 'Projects Completed',
  },
  {
    icon: Zap,
    title: 'Premium',
    description: 'Equipment & Software',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-muted-foreground">
              Crafting exceptional audio experiences since 2011
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <Card key={highlight.title} className="text-center border-border/50">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground text-center md:text-left">
              At SoundCraft Audio, we believe that great sound is the foundation of memorable experiences. 
              Our team of experienced audio engineers and producers combines technical expertise with creative 
              passion to deliver exceptional results for every project.
            </p>
            <p className="text-muted-foreground text-center md:text-left">
              We work with artists, filmmakers, podcasters, and brands to create audio that resonates. 
              Our acoustically treated studio features industry-leading equipment from Neve, SSL, and Universal Audio, 
              ensuring your project receives the professional treatment it deserves.
            </p>
            <p className="text-muted-foreground text-center md:text-left">
              Whether you're recording your debut album, producing a podcast series, or need sound design 
              for your next film, we're here to help you achieve sonic excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
