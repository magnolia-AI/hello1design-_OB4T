import { motion } from "framer-motion";
import { VibeHero, VibeCard } from "../components/VibeComponents";
import { Search, Filter, TrendingUp } from "lucide-react";

const PROJECTS = [
  {
    id: "1",
    name: "Nebula OS",
    creator: "Cosmic Labs",
    rating: 9.8,
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
    tags: ["AESTHETIC", "OPERATING SYSTEM", "GLITCH"]
  },
  {
    id: "2",
    name: "Ethereal UI",
    creator: "Studio Glaze",
    rating: 9.5,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    tags: ["REACT", "GLASSMORPHISM", "COMPONENTS"]
  },
  {
    id: "3",
    name: "Vibe Engine",
    creator: "Vector Junkie",
    rating: 9.2,
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800",
    tags: ["WEBGL", "CREATIVE CODING", "AUDIO"]
  },
  {
    id: "4",
    name: "Noir Protocol",
    creator: "Night Shift",
    rating: 8.9,
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    tags: ["BLOCKCHAIN", "DARK MODE", "TYPOGRAPHY"]
  },
  {
    id: "5",
    name: "Prism Synth",
    creator: "Luma Code",
    rating: 9.7,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    tags: ["INTERACTIVE", "COLOR", "EXPERIMENTAL"]
  },
  {
    id: "6",
    name: "Kinetics",
    creator: "Motion Flow",
    rating: 9.4,
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
    tags: ["ANIMATION", "LIBRARY", "THREE.JS"]
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20">
      <VibeHero />

      <main className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-vibe-accent" />
            <h2 className="text-2xl font-bold tracking-tight uppercase italic">Trending Vibes</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder="Search projects or creators..." 
                className="glass-card py-2 pl-10 pr-4 rounded-full text-sm focus:outline-none focus:border-vibe-accent/50 w-64 transition-all"
              />
            </div>
            <button className="glass-card p-2 rounded-full hover:border-vibe-accent/50 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <VibeCard key={project.id} {...project} />
          ))}
        </motion.div>

        <div className="mt-20 glass-card p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-vibe-purple/10 blur-[100px] -z-10" />
          <h2 className="text-3xl font-black mb-4 uppercase">Want to be Vibe-Checked?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            If your project has a distinct aesthetic and high-quality implementation, our community wants to see it.
          </p>
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
            APPLY TO FEATURE
          </button>
        </div>
      </main>
    </div>
  );
}
