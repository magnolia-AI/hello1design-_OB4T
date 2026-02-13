import { motion } from "framer-motion";
import { Star, ShieldCheck, Heart, Share2, Layers, Palette, Cpu, Wind } from "lucide-react";

const VIBE_CATEGORIES = [
  { name: "Aesthetic", icon: Palette, score: 9.8, color: "text-vibe-accent" },
  { name: "Innovation", icon: Cpu, score: 9.4, color: "text-vibe-purple" },
  { name: "Flow", icon: Wind, score: 9.0, color: "text-vibe-pink" },
  { name: "Soul", icon: Heart, score: 9.6, color: "text-white" },
];

export default function ProjectDetail() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr,400px] gap-12">
        
        {/* Left Column: Visuals & Reviews */}
        <div className="space-y-12">
          <section>
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-3xl overflow-hidden glass-card group"
            >
              <img 
                src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200" 
                alt="Nebula OS" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vibe-black via-transparent to-transparent flex items-end p-8">
                <div className="flex justify-between items-end w-full">
                  <div>
                    <h1 className="text-4xl font-black mb-2">NEBULA OS</h1>
                    <p className="text-vibe-accent font-mono tracking-widest text-sm uppercase">by Cosmic Labs</p>
                  </div>
                  <div className="flex gap-4">
                    <button className="glass-card p-3 rounded-full"><Share2 className="w-5 h-5" /></button>
                    <button className="glass-card p-3 rounded-full text-vibe-pink"><Heart className="w-5 h-5" /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-bold uppercase italic border-l-4 border-vibe-accent pl-4">Review Feed</h2>
            
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="glass-card p-6 rounded-2xl space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-vibe-purple to-vibe-pink" />
                    <div>
                      <p className="font-bold">vibe_hunter_{i}</p>
                      <p className="text-xs text-white/40">Vetted Reviewer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md text-sm font-mono text-vibe-accent">
                    {9.5 - (i * 0.2)} / 10
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed italic">
                  "The micro-interactions in Nebula OS are absolutely unparalleled. Every hover feels purposeful. The way the light refracts through the glass components is chef's kiss."
                </p>
                <div className="flex gap-4 text-xs font-mono text-white/30 truncate">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> VERIFIED VIBE</span>
                  <span>2 DAYS AGO</span>
                </div>
              </motion.div>
            ))}
          </section>
        </div>

        {/* Right Column: Vibe Matrix & CTA */}
        <aside className="space-y-8">
          <div className="glass-card p-8 rounded-3xl sticky top-24">
            <h3 className="text-xl font-bold mb-6 text-center italic">THE VIBE MATRIX</h3>
            
            <div className="space-y-6 mb-8">
              {VIBE_CATEGORIES.map((cat) => (
                <div key={cat.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <cat.icon className={`w-4 h-4 ${cat.color}`} />
                      <span className="font-mono uppercase tracking-wider">{cat.name}</span>
                    </div>
                    <span className="font-bold">{cat.score}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${cat.score * 10}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full bg-gradient-to-r ${cat.color === 'text-vibe-accent' ? 'from-vibe-accent to-vibe-accent/50' : cat.color === 'text-vibe-purple' ? 'from-vibe-purple to-purple-400' : 'from-vibe-pink to-pink-400'}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center p-6 bg-vibe-accent/5 rounded-2xl border border-vibe-accent/20 mb-8">
              <p className="text-xs text-vibe-accent font-mono uppercase mb-1">Overall Vibe</p>
              <p className="text-5xl font-black text-white">9.6</p>
            </div>

            <button className="w-full py-4 bg-vibe-accent text-black font-black rounded-xl mb-4 hover:scale-[1.02] transition-transform">
              DROP A REVIEW
            </button>
            <p className="text-[10px] text-center text-white/40 font-mono">
              ONLY REGISTERED CURATORS CAN SUBMIT REVIEWS
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-vibe-accent" /> Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {["React 19", "Three.js", "Zustand", "Framer Motion", "Shaders"].map(tech => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 text-xs font-mono">{tech}</span>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}

