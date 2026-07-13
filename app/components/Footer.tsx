"use client";

import { motion } from "motion/react";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full text-center py-4 flex flex-col items-center justify-center gap-2 text-xs text-zinc-500 font-medium tracking-wide">
      <div className="flex items-center gap-1.5">
        <span>Made with</span>
        <motion.span
          animate={{ scale: [1, 1.25, 1] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-red-500 inline-block"
        >
          <FaHeart className="size-3.5 fill-rose-500" />
        </motion.span>
        <span>by</span>
        <a
          href="https://syahreza-satria.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white transition-colors duration-300 font-semibold underline decoration-zinc-700 hover:decoration-white underline-offset-4"
        >
          Syahreza Satria
        </a>
      </div>
      <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">
        &copy; 2026 Link &bull; All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
