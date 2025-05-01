"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface GalleryProps {
  images: {
    url: string;
    caption: string;
  }[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <motion.div
          key={image.url}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={image.url}
                  alt={image.caption}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <p className="p-4 text-sm text-center text-muted-foreground">
                {image.caption}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}