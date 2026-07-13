"use client";

import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { X } from "lucide-react";
import ShinyText from "@/components/ShinyText";
import Social from "./Social";
import { AnimatePresence, motion } from "motion/react";

interface SocialLink {
  platform: string;
  url: string;
  icon: any;
}

interface ProfileCardProps {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socials: SocialLink[];
  variants?: any;
}

export default function ProfileCard({
  name,
  role,
  avatar,
  bio,
  socials,
  variants
}: ProfileCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <motion.div
        className="py-4 px-2 sm:p-6 flex flex-col items-center justify-center text-center w-full"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <div 
          className="relative group mb-2 cursor-zoom-in"
          onClick={() => setIsPreviewOpen(true)}
        >
          {/* Glowing background aura matching the SideRays colors */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-full blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
          <img
            src={avatar}
            width={110}
            height={110}
            className="relative rounded-full mx-auto border-2 border-white/20 shadow-2xl object-cover h-[110px] w-[110px] transition-transform duration-300 group-hover:scale-105"
            alt={name}
            loading="eager"
          />
        </div>

        <div className="flex flex-col space-y-2 w-full mt-4">
          <h1 className="text-xl font-bold flex gap-2 items-center justify-center leading-none">
            {name} <FaCircleCheck className="size-4 text-blue-400" />
          </h1>

          {/* Role Title */}
          <ShinyText
            text={role}
            speed={5}
            delay={0}
            color="#a1a1aa"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            className="font-semibold text-xs tracking-wider uppercase mt-2"
          />

          {/* Bio */}
          <p className="text-zinc-300 text-sm leading-relaxed px-4 pt-1 drop-shadow-md">
            {bio}
          </p>

          {/* Social Icons (Moved below bio with wrap/gap styling) */}
          <div className="flex flex-wrap gap-3.5 justify-center items-center pt-3 pb-1 w-full">
            {socials.map((socialLink, index) => (
              <Social key={index} platform={socialLink.platform} url={socialLink.url} icon={socialLink.icon} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Full-screen Lightbox Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-full max-h-[85vh] aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 flex items-center justify-center p-1"
            >
              <img
                src={avatar}
                alt={name}
                className="max-w-[90vw] max-h-[75vh] md:max-w-[500px] md:max-h-[500px] rounded-2xl object-contain"
              />
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 text-white cursor-pointer transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
