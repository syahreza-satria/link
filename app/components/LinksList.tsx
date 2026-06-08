"use client";

import LinkCard from "./LinkCard";
import { motion } from "motion/react";

interface LinkItem {
  title: string;
  url: string;
  icon: any;
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
      className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-2xl md:w-7/12 w-full gap-4"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1 }}
    >
      <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest text-center md:text-left mb-1">
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
            <LinkCard title={link.title} url={link.url} icon={link.icon} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
