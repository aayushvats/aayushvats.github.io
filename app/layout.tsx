"use client";

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { LoadingScreen } from "@/components/loading-screen";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen onLoadingComplete={() => setIsContentVisible(true)} />
          {isContentVisible && (
            <div className="relative flex min-h-screen flex-col">
              <Navigation />
              <div className="flex-1 pt-20 pb-16 sm:pt-28 sm:pb-20">
                {children}
              </div>
            </div>
          )}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
