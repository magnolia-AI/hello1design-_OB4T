import { Outlet, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Zap, Menu, User } from "lucide-react";

export default function RootLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-screen">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-vibe-accent origin-left z-50"
        style={{ scaleX }}
      />
      
      <header className="fixed top-0 w-full z-40 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3 rounded-full">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-vibe-accent rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="font-black text-xl tracking-tighter">VIBECHECK</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-white/60">
            <Link to="/" className="hover:text-vibe-accent transition-colors">Trending</Link>
            <Link to="/" className="hover:text-vibe-accent transition-colors">Categories</Link>
            <Link to="/" className="hover:text-vibe-accent transition-colors">Manifesto</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-vibe-accent" />
            <span className="font-black text-xl tracking-tighter">VIBECHECK</span>
          </div>
          <p className="text-sm text-white/40 font-mono">
            &copy; 2026 CODED WITH SOUL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

