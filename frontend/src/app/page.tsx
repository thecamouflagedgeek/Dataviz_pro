"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";
import Bubbles from "./components/Bubbles";

export default function LandingPage() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    // Play the whoosh sound
    const whooshSound = new Audio("/sounds/whoosh.wav");
    whooshSound.play();

    // Scroll smoothly
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <div className="relative h-screen w-full text-[#d2eae8]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/underwater.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Chart It!
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Button
              onClick={handleScroll}
              className="mt-6 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-[#58c0db] text-[#050c12] hover:text-[#d2eae8] rounded-2xl shadow-lg"
            >
              Get Started
            </Button>
          </motion.div>
        </div>

        {/* Next Section */}
        <div ref={nextSectionRef}>
          <Instructions />
        </div>

        <section className="bg-gradient-to-b from-[#42c3e7] to-[#011f40] text-[#daecef] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 text-center relative overflow-hidden">
          <Bubbles />
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            What are you waiting for?
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Your data deserves to look good.
          </motion.p>
          <motion.a
            href="/visualize"
            className="inline-block px-4 sm:px-6 py-2 bg-[#58c0db] text-[#d2eae8] hover:bg-[#3d8699] font-semibold rounded-xl shadow-lg transition-all duration-300 text-sm sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Start Visualizing
          </motion.a>
        </section>

        <footer className="bg-[#050c12] text-white/50 py-4 text-center text-xs sm:text-sm">
          Designed & Created by Goose, Fish, and Batman :3
        </footer>
      </div>
    </div>
  );
}
