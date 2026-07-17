import React, { ElementType } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface LinkCardProps {
  title: string;
  url: string;
  icon: ElementType;
  isHighlighted?: boolean;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, url, icon: Icon, isHighlighted = false }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        isHighlighted
          ? "group relative flex items-center justify-between p-4 px-6 w-full bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-emerald-500/10 hover:from-emerald-500/15 hover:via-teal-500/10 hover:to-emerald-500/15 border-2 border-emerald-500/40 hover:border-emerald-500/60 rounded-2xl transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]"
          : "group relative flex items-center justify-between p-4 px-6 w-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/35 rounded-2xl transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]"
      }
      title={title}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {isHighlighted && (
        <span className="absolute -top-2.5 right-6 px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-emerald-400 bg-[#061e14]/90 border border-emerald-500/40 rounded-full uppercase shadow-[0_0_10px_rgba(16,185,129,0.2)]">
          Featured
        </span>
      )}
      
      <div className="flex items-center gap-4">
        {Icon && (
          <div className={
            isHighlighted
              ? "flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 text-emerald-400 group-hover:text-emerald-300 transition-all duration-300"
              : "flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.05] group-hover:bg-white/[0.1] text-zinc-300 group-hover:text-emerald-400 transition-all duration-300"
          }>
            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
          </div>
        )}
        <span className={
          isHighlighted
            ? "font-semibold text-emerald-200 group-hover:text-emerald-100 text-sm uppercase tracking-wider transition-colors duration-300"
            : "font-medium text-white/90 group-hover:text-white text-sm uppercase tracking-wider transition-colors duration-300"
        }>
          {title}
        </span>
      </div>
      
      <div className={
        isHighlighted
          ? "flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300"
          : "flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.02] group-hover:bg-white/[0.1] border border-white/5 group-hover:border-white/10 transition-all duration-300"
      }>
        <ArrowUpRight className={
          isHighlighted
            ? "w-4 h-4 text-emerald-400 group-hover:text-emerald-200 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            : "w-4 h-4 text-zinc-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        } />
      </div>
    </motion.a>
  );
};

export default LinkCard;
