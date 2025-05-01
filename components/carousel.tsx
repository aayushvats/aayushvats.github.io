"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselProps {
  images: { src: string; alt: string }[];
  autoSlide?: boolean; // Enable or disable auto-slide
  slideInterval?: number; // Interval for auto-slide (ms)
}

export function Carousel({
  images,
  autoSlide = false,
  slideInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex(
        (prev) => (prev + newDirection + images.length) % images.length
      );
    },
    [images.length]
  );

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => paginate(1), slideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, slideInterval, paginate]);

  return (
    <div
      className="relative w-full aspect-video max-h-[300px] bg-secondary/5 rounded-lg overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      {/* Slide Animation */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 1 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover z-50"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-0  z-50 flex items-center justify-between px-2 sm:px-4 opacity-80">
        <button
          className="p-1 sm:p-2 bg-background/80 rounded-full hover:bg-background/90 transition-colors"
          onClick={() => paginate(-1)}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          className="p-1 sm:p-2 z-50 bg-background/80 rounded-full hover:bg-background/90 transition-colors"
          onClick={() => paginate(1)}
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-2 z-50 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-background"
                : "bg-background/50 hover:bg-background/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
