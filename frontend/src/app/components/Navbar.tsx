"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sparkleRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    sparkleRef.current = new Audio("/sounds/sparkle.mp3");
    sparkleRef.current.volume = 0.3;
  }, []);

  const playSparkle = () => {
    if (sparkleRef.current) {
      sparkleRef.current.currentTime = 0;
      sparkleRef.current.play();
    }
  };

  return (
    <nav className="w-full bg-[#001d38] shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Title */}
          <Link
            href="/"
            className="flex items-center space-x-2 relative"
            onMouseEnter={() => {
              setHovered(true);
              playSparkle();
            }}
            onMouseLeave={() => setHovered(false)}
          >
            <img src="/images/chartitlogo.png" alt="Logo" className="h-8 w-8" />
            <motion.span
              className="text-xl font-bold text-[#d2eae8] relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ fontFamily: "Delvona" }}
            >
              Chart It!
            </motion.span>

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/about"
              className="text-[#d2eae8] hover:text-[#81c5c0] transition"
              style={{ fontFamily: "Delvona" }}
            >
              About Us
            </Link>
            <Link
              href="/login"
              className="px-4 py-1 bg-[#58c0db] text-[#d2eae8] rounded-xl hover:bg-[#3d8699] transition"
              style={{ fontFamily: "Delvona" }}
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-[#d2eae8] hover:text-[#81c5c0] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-3 flex flex-col items-center">
                <Link
                  href="/about"
                  className="text-[#d2eae8] hover:text-[#81c5c0] transition block px-3 py-2"
                  style={{ fontFamily: "Delvona" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/login"
                  className="w-full text-center px-4 py-2 bg-[#58c0db] text-[#d2eae8] rounded-xl hover:bg-[#3d8699] transition block"
                  style={{ fontFamily: "Delvona" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}