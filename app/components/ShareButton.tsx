"use client";

import { useState } from "react";
import { FaShare, FaCheck } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative flex items-center">
      <motion.button
        onClick={handleCopy}
        className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer border text-xs sm:text-sm font-medium transition-colors duration-300 backdrop-blur-xl shadow-md ${
          copied
            ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
            : "bg-white/10 border-white/15 text-white hover:bg-white/20 hover:border-white/30"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span
              key="copied"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1.5"
            >
              <FaCheck className="size-3.5" />
              <span>Copied!</span>
            </motion.span>
          ) : (
            <motion.span
              key="share"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1.5"
            >
              <FaShare className="size-3.5 text-zinc-300" />
              <span>Share Link</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
