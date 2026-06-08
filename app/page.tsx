"use client";

import { profile, links, social } from "@/app/src/data";
import SideRays from "@/components/SideRays";
import Footer from "./components/Footer";
import ShareButton from "./components/ShareButton";
import ProfileCard from "./components/ProfileCard";
import LinksList from "./components/LinksList";
import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-white flex flex-col justify-between">
      {/* Background - Fixed SideRays to cover entire viewport */}
      <div className="fixed inset-0 z-0">
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1.0}
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md md:max-w-4xl mx-auto px-6 py-8 flex flex-col flex-grow justify-between gap-8 min-h-screen">
        {/* Share Button (Top Right alignment) */}
        <motion.div 
          className="flex justify-end"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ShareButton />
        </motion.div>

        {/* Responsive Content Section */}
        <div className="flex flex-col md:flex-row gap-6 my-auto w-full items-stretch justify-center">
          {/* Left Column: Profile Card */}
          <ProfileCard
            name={profile.name}
            role={profile.role}
            avatar={profile.avatar}
            bio={profile.bio}
            socials={social}
            variants={cardVariants}
          />

          {/* Right Column: Links List */}
          <LinksList
            links={links}
            variants={cardVariants}
            listVariants={listVariants}
            itemVariants={itemVariants}
          />
        </div>

        <motion.hr 
          className="border-white/10 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Footer />
        </motion.div>
      </div>
    </main>
  );
}
