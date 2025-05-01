"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
      onLoadingComplete(); // Notify when loading is complete
    }, 3700); // Match the delay with the animation duration

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 3.7 }}
    >
      <div className="relative">
        <motion.div
          className="absolute h-6 w-6 rounded-full bg-foreground"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        />
        <motion.div
          className="h-6 w-6 rounded-full bg-foreground"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.5, 1, 0.5],
            rotate: -360,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
}
