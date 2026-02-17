import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Link, useNavigate } from '@tanstack/react-router';
import CartSheet from '../cart/CartSheet';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#catalog' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      navigate({ to: '/' });
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/assets/generated/logo.dim_512x512.png" 
              alt="SoundCraft Audio" 
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-xl tracking-tight">SoundCraft Audio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Link to="/inquiries">
              <Button variant="ghost" size="sm" className="text-sm">
                Inquiries
              </Button>
            </Link>
            <CartSheet />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <CartSheet />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Link to="/inquiries" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full justify-start">
                      Inquiries
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
