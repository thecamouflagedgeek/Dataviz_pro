"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hovered, setHovered] = useState(false);
  const sparkleRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // load the sound
    sparkleRef.current = new Audio("/sounds/sparkle.mp3");
    sparkleRef.current.volume = 0.3; // optional: set volume
  }, []);

  const playSparkle = () => {
    if (sparkleRef.current) {
      sparkleRef.current.currentTime = 0; // rewind
      sparkleRef.current.play();
    }
  };

  return (
    <nav className="w-full bg-[#001d38] shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo + Chart It! */}
        <Link
          href="/"
          className="flex items-center space-x-2 relative"
          onMouseEnter={() => {
            setHovered(true);
            playSparkle(); // 🎵
          }}
          onMouseLeave={() => setHovered(false)}
        >
          <img src="/images/chartitlogo.png" alt="Logo" className="h-8 w-8" />
          <motion.span
            className="text-xl font-bold text-[#d2eae8] relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ fontFamily: 'Delvona' }}
          >
            Chart It!
          </motion.span>

          {/* Sparkle! */}

          <AnimatePresence>
  {hovered && (
    <motion.img
      key="sparkle"
      src="/icons/sparkle.svg"
      alt="sparkle"
      initial={{ opacity: 0, x: -5, scale: 0.5 }}
      animate={{ opacity: 1, x: 5, scale: 1.2 }}
      exit={{ opacity: 0, x: -5, scale: 0.5 }}
      transition={{ duration: 0.4 }}
      className="absolute left-full top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none"
    />
  )}
</AnimatePresence>



        </Link>

        {/* Right: Links */}
        <div className="flex items-center space-x-6">
          <Link href="/about" className="text-[#d2eae8] hover:text-[#81c5c0] transition"
          style={{ fontFamily: 'Delvona' }}>
            About Us
          </Link>
          <Link
            href="/login"
            className="px-4 py-1 bg-[#58c0db] text-[#d2eae8] rounded-xl hover:bg-[#3d8699] transition"
            style={{ fontFamily: 'Delvona' }}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
