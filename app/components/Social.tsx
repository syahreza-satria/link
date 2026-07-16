import { ElementType } from "react";
import { motion } from "motion/react";

interface SocialProps {
  platform: string;
  url: string;
  icon: ElementType;
}

const brandColors: Record<string, { hoverText: string; border: string; bg: string }> = {
  instagram: {
    hoverText: "hover:text-[#E1306C]",
    border: "hover:border-[#E1306C]/40",
    bg: "hover:bg-[#E1306C]/10",
  },
  youtube: {
    hoverText: "hover:text-[#FF0000]",
    border: "hover:border-[#FF0000]/40",
    bg: "hover:bg-[#FF0000]/10",
  },
  threads: {
    hoverText: "hover:text-white",
    border: "hover:border-white/40",
    bg: "hover:bg-white/10",
  },
  linkedin: {
    hoverText: "hover:text-[#0077B5]",
    border: "hover:border-[#0077B5]/40",
    bg: "hover:bg-[#0077B5]/10",
  },
  mail: {
    hoverText: "hover:text-[#EA4335]",
    border: "hover:border-[#EA4335]/40",
    bg: "hover:bg-[#EA4335]/10",
  },
  github: {
    hoverText: "hover:text-white",
    border: "hover:border-white/40",
    bg: "hover:bg-white/10",
  },
  tiktok: {
    hoverText: "hover:text-[#FE2C55]",
    border: "hover:border-[#FE2C55]/40",
    bg: "hover:bg-[#FE2C55]/10",
  },
};

const Social: React.FC<SocialProps> = ({ platform, url, icon: Icon }) => {
  const brand = brandColors[platform.toLowerCase()] || {
    hoverText: "hover:text-white",
    border: "hover:border-white/25",
    bg: "hover:bg-white/10",
  };

  return (
    <motion.a
      href={url}
      title={platform}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 transition-all duration-300 text-zinc-400 ${brand.hoverText} ${brand.bg} ${brand.border}`}
    >
      <Icon className="size-5 transition-colors duration-300" />
    </motion.a>
  );
};

export default Social;
