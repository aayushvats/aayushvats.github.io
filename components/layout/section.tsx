"use client";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`space-y-2 sm:space-y-8 lg:space-y-10 ${className}`}>
      {children}
    </section>
  );
}