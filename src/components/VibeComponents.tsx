import { motion } from "framer-motion";
import { Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface VibeCardProps {
  id: string;
  name: string;
  creator: string;
  rating: number;
  image: string;
  tags: string[];
}

export const VibeCard = ({ id, name, creator, rating, image, tags }: VibeCardProps) => {
  return (
    <Link to={`/project-${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vibe-black/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div>
              <p className="text-xs font-mono text-vibe-accent uppercase tracking-widest mb-1">{creator}</p>
              <h3 className="text-xl font-bold">{name}</h3>
            </div>
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
              <Star className="w-3 h-3 fill-vibe-accent text-vibe-accent" />
              <span className="text-sm font-mono">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/5 bg-white/5 text-white/60">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export const VibeHero = () => (
  <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vibe-accent/10 blur-[120px] rounded-full -z-10"
    />
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="text-6xl md:text-8xl font-black mb-6 vibe-gradient-text tracking-tighter">
        CODE THE VIBE.
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-white/60 mb-10 leading-relaxed italic font-serif">
        The definitive review platform for aesthetic engineering, creative coding, and digital souls.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-vibe-accent text-black font-bold rounded-full flex items-center gap-2 neo-shadow"
        >
          <Zap className="w-4 h-4" />
          DISCOVER PROJECTS
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 glass-card font-bold rounded-full flex items-center gap-2"
        >
          SUBMIT WORK
        </motion.button>
      </div>
    </motion.div>
  </section>
);
