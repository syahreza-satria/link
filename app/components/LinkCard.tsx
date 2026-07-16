import React, { ElementType } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface LinkCardProps {
  title: string;
  url: string;
  icon: ElementType;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, url, icon: Icon }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between p-4 px-6 w-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/35 rounded-2xl transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]"
      title={title}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-center gap-4">
        {Icon && (
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.05] group-hover:bg-white/[0.1] text-zinc-300 group-hover:text-emerald-400 transition-all duration-300">
            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
          </div>
        )}
        <span className="font-medium text-white/90 group-hover:text-white text-sm uppercase tracking-wider transition-colors duration-300">
          {title}
        </span>
      </div>
      
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.02] group-hover:bg-white/[0.1] border border-white/5 group-hover:border-white/10 transition-all duration-300">
        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.a>
  );
};

export default LinkCard;
