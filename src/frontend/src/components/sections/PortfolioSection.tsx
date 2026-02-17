import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Midnight Dreams',
    artist: 'Luna Eclipse',
    description: 'Full album production and mastering for indie electronic artist. Mixed and mastered 12 tracks with analog warmth and digital precision.',
    audioSrc: '/assets/audio/sample-1.mp3',
  },
  {
    title: 'Urban Stories Podcast',
    artist: 'City Tales Media',
    description: 'Weekly podcast production including recording, editing, sound design, and distribution for a top-rated urban culture show.',
    audioSrc: '/assets/audio/sample-2.mp3',
  },
  {
    title: 'Cinematic Soundscapes',
    artist: 'Horizon Films',
    description: 'Original score composition and sound design for an award-winning independent film. Created immersive audio environments.',
    audioSrc: '/assets/audio/sample-3.mp3',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground">
            Listen to some of our recent projects and collaborations
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item) => (
            <Card key={item.title} className="border-border/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="h-48 bg-muted rounded-md mb-4 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5" />
                  <Play className="h-12 w-12 text-accent relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-accent">
                  {item.artist}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <audio 
                  controls 
                  className="w-full"
                  preload="metadata"
                >
                  <source src={item.audioSrc} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
