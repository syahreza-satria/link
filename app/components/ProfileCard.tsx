"use client";

import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import ShinyText from "@/components/ShinyText";
import Social from "./Social";
import { motion } from "motion/react";

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
  return (
    <motion.div
      className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-2xl md:w-5/12 w-full"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <Image
        src={avatar}
        width={110}
        height={110}
        className="rounded-full mx-auto border border-white/20 shadow-xl"
        alt={name}
        loading="lazy"
      />

      <div className="flex flex-col space-y-2 w-full mt-4">
        <h1 className="text-xl font-bold flex gap-2 items-center justify-center leading-none">
          {name} <FaCircleCheck className="size-4 text-blue-400" />
        </h1>

        {/* Social Icons */}
        <div className="flex gap-5 justify-center items-center py-1">
          {socials.map((socialLink, index) => (
            <Social key={index} platform={socialLink.platform} url={socialLink.url} icon={socialLink.icon} />
          ))}
        </div>

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
          className="font-semibold text-xs tracking-wider uppercase mt-1"
        />

        {/* Bio */}
        <p className="text-zinc-300 text-sm leading-relaxed px-4 pt-1 drop-shadow-md">
          {bio}
        </p>
      </div>
    </motion.div>
  );
}
