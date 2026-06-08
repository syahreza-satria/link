import React, { ElementType } from "react";
import { motion } from "motion/react";

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
      className="group relative flex items-center justify-center p-4 w-full bg-white/10 border border-white/20 rounded-full transition-colors duration-300 backdrop-blur-xl hover:bg-white/20 hover:border-white"
      title={title}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {Icon && (
        <span className="absolute left-6 text-xl text-white group-hover:text-emerald-400 transition-colors duration-300">
          <Icon />
        </span>
      )}
      <span className="font-semibold text-white text-sm uppercase tracking-wider">{title}</span>
    </motion.a>
  );
};

export default LinkCard;
