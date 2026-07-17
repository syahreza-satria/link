"use client";

import LinkCard from "./LinkCard";
import { motion } from "motion/react";

interface LinkItem {
  title: string;
  url: string;
  icon: any;
  isHighlighted?: boolean;
}

interface LinksListProps {
  links: LinkItem[];
  variants?: any;
  listVariants?: any;
  itemVariants?: any;
}

export default function LinksList({
  links,
  variants,
  listVariants,
  itemVariants
}: LinksListProps) {
  return (
    <motion.div
      className="py-4 px-2 flex flex-col justify-center w-full gap-4"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1 }}
    >
      <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest text-center mb-1">
        Featured Links
      </h2>
      <motion.div
        className="flex flex-col gap-4 w-full"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map((link, index) => (
          <motion.div key={index} variants={itemVariants}>
            <LinkCard 
              title={link.title} 
              url={link.url} 
              icon={link.icon} 
              isHighlighted={link.isHighlighted} 
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
