import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Erlang Observability</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80 text-foreground" href="/">Home</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">About</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">Features</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#documentation">Documentation</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-6"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;