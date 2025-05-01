"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface CompanyCardProps {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export function CompanyCard({
  company,
  role,
  duration,
  description,
}: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{company}</span>
            <span className="text-sm text-muted-foreground">{duration}</span>
          </CardTitle>
          <p className="text-sm font-medium text-muted-foreground">{role}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground sm:text-[8px] ">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
