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
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Icon className="size-6 text-gray-400 hover:text-white transition-colors duration-300" />
    </motion.a>
  );
};

export default Social;
