import { ElementType } from "react";
import { motion } from "motion/react";

interface SocialProps {
  platform: string;
  url: string;
  icon: ElementType;
}

const Social: React.FC<SocialProps> = ({ platform, url, icon: Icon }) => {
  return (
    <motion.a
      href={url}
      title={platform}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all duration-300 text-zinc-400 hover:text-white"
    >
      <Icon className="size-5 transition-colors duration-300" />
    </motion.a>
  );
};

export default Social;
