import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, Disc, Headphones, Waves, Radio, Music } from 'lucide-react';

const services = [
  {
    icon: Mic,
    title: 'Recording',
    description: 'State-of-the-art recording facilities with premium microphones and preamps for capturing pristine audio.',
  },
  {
    icon: Waves,
    title: 'Mixing',
    description: 'Expert mixing services that balance and enhance every element of your track for maximum impact.',
  },
  {
    icon: Disc,
    title: 'Mastering',
    description: 'Professional mastering to ensure your music sounds perfect across all platforms and playback systems.',
  },
  {
    icon: Headphones,
    title: 'Sound Design',
    description: 'Custom sound design for film, games, and multimedia projects that captivate your audience.',
  },
  {
    icon: Radio,
    title: 'Podcast Production',
    description: 'Full podcast production services from recording to editing and distribution optimization.',
  },
  {
    icon: Music,
    title: 'Music Production',
    description: 'Complete music production services including arrangement, instrumentation, and creative direction.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive audio solutions tailored to your creative needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="border-border/50 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
