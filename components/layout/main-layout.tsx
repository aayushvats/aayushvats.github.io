"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <Container className="space-y-10 sm:space-y-12 lg:space-y-14">
          <main>{children}</main>
        </Container>
      </motion.div>
    </div>
  );
} 