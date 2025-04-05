"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudUpload, FileCheck2, FlaskConical, Brain, BarChart2, ScrollText, Sparkles, Droplets,} from "lucide-react";
import Bubbles from "./Bubbles"; // Import your existing Bubbles component

export default function VisualizeUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(false);
  const [ripples, setRipples] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setUploaded(true);
      triggerRippleWave();
    }
  };

  const triggerRippleWave = () => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        setRipples((prev) => [...prev, Date.now() + i]);
      }, i * 300);
    }
  };

  const handleOptionClick = (option: string) => {
    setLoading(true);
    setSelectedOption(null);
    triggerRippleWave();
    setTimeout(() => {
      setSelectedOption(option);
      setLoading(false);
    }, 1500);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Analyze":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-100">Data Analysis</h3>
            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <p className="text-white">We found 12 null values and 3 outliers in your dataset.</p>
              <div className="mt-3 w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 1 }}
                  className="h-full bg-[#063467]"
                />
              </div>
              <div className="mt-2 text-xs text-blue-100">Data completeness: 70%</div>
            </div>
          </div>
        );
      case "Recommend":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-100">Recommendations</h3>
            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <p className="text-white">Try normalizing column X and using the KNN algorithm.</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">KNN</div>
                <div className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">Normalization</div>
                <div className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">Random Forest</div>
              </div>
            </div>
          </div>
        );
      case "Visualize":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-100">Visualization</h3>
            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <div className="h-40 flex items-center justify-center bg-white/5 rounded border border-white/10">
                <BarChart2 size={64} className="text-blue-200 opacity-50" />
              </div>
              <div className="mt-3 flex justify-center gap-3">
                <button className="px-3 py-1 bg-blue-500/30 rounded-md text-xs hover:bg-blue-500/50 transition">Bar Chart</button>
                <button className="px-3 py-1 bg-blue-500/30 rounded-md text-xs hover:bg-blue-500/50 transition">Line Chart</button>
                <button className="px-3 py-1 bg-blue-500/30 rounded-md text-xs hover:bg-blue-500/50 transition">Scatter Plot</button>
              </div>
            </div>
          </div>
        );
      case "Insights":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-100">Key Insights</h3>
            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="bg-white/10 p-2 rounded text-center">
                  <div className="text-xs text-blue-200">Mean</div>
                  <div className="text-xl font-bold text-white">45.2</div>
                </div>
                <div className="bg-white/10 p-2 rounded text-center">
                  <div className="text-xs text-blue-200">Median</div>
                  <div className="text-xl font-bold text-white">40</div>
                </div>
                <div className="bg-white/10 p-2 rounded text-center">
                  <div className="text-xs text-blue-200">Mode</div>
                  <div className="text-xl font-bold text-white">38</div>
                </div>
              </div>
              <p className="text-white text-sm">Correlation detected between A and B (r=0.78)</p>
            </div>
          </div>
        );
      case "All":
        return (
          <div className="text-white space-y-6">
            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <h3 className="text-lg font-semibold text-blue-100 mb-2">Data Analysis</h3>
              <p>We found 12 null values and 3 outliers in your dataset.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <h3 className="text-lg font-semibold text-blue-100 mb-2">Recommendations</h3>
              <p>Try normalizing column X and using the KNN algorithm.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <h3 className="text-lg font-semibold text-blue-100 mb-2">Visualization</h3>
              <div className="h-40 flex items-center justify-center bg-white/5 rounded border border-white/10">
                <BarChart2 size={48} className="text-blue-200 opacity-50" />
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <h3 className="text-lg font-semibold text-blue-100 mb-2">Key Insights</h3>
              <p>Mean: 45.2, Median: 40, Mode: 38. Correlation detected between A and B.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
<div className="relative bg-[url('/images/ocean-bg.jpg')] bg-cover bg-center flex flex-col items-center px-4 overflow-hidden pt-32 pb-32 min-h-screen">

      <Bubbles />

      {/* Ripples Effect */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        {ripples.map((ripple) => (
          <motion.div
            key={ripple}
            initial={{ scale: 0, opacity: 0.4 }}
            animate={{ scale: 6, opacity: 0 }}
            transition={{ duration: 2.5 }}
            className="absolute w-60 h-60 rounded-full bg-white/30"
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center mb-6"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <h1 className="text-white text-4xl md:text-5xl font-bold">DataOcean</h1>
        </div>
        <p className="text-blue-200 text-lg">Drop your data into the ocean of insights</p>
      </motion.div>

      {/* Upload Box */}
      <motion.label
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative mt-6 z-10 border-4 border-dashed border-white/70 rounded-2xl p-10 w-full max-w-md cursor-pointer text-white flex flex-col items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 transition shadow-lg shadow-blue-900/50"
      >
        {uploaded ? (
          <>
            <FileCheck2 size={48} className="text-blue-200" />
            <p className="mt-4 font-medium">{file?.name}</p>
            <p className="text-xs mt-2 text-blue-200">File uploaded successfully</p>
          </>
        ) : (
          <>
            <CloudUpload size={48} className="text-blue-200" />
            <p className="mt-4 font-medium">Click or drag a file to upload</p>
            <p className="text-xs mt-2 text-blue-200">Supports CSV, XLSX files</p>
          </>
        )}
        <input
          type="file"
          accept=".csv,.xlsx"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </motion.label>

      {/* Options Section - Using original styling */}
      <AnimatePresence>
        {uploaded && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-5 gap-6 mt-16 z-10"
          >
            {[
              { label: "Analyze", icon: <FlaskConical size={32} /> },
              { label: "Recommend", icon: <Brain size={32} /> },
              { label: "Visualize", icon: <BarChart2 size={32} /> },
              { label: "Insights", icon: <ScrollText size={32} /> },
              { label: "All", icon: <Sparkles size={32} /> },
            ].map((opt) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={opt.label}
                onClick={() => handleOptionClick(opt.label)}
                className="bg-white/20 border border-white/40 backdrop-blur-md text-white p-4 rounded-xl shadow-lg hover:bg-white/30 transition flex flex-col items-center"
              >
                <div className="mb-2">{opt.icon}</div>
                {opt.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result Section */}
      <AnimatePresence>
        {selectedOption && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center max-w-xl z-10 bg-black/30 p-6 rounded-2xl border border-white/30 backdrop-blur shadow-xl"
          >
            {renderContent()}
          </motion.div>
        )}
      </AnimatePresence>

      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mt-12 text-white z-10 flex flex-col items-center"
        >
          <div className="relative w-16 h-16">
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 border-4 border-t-[#063467] border-r-[#166da6] border-b-[#375c85] border-l-transparent rounded-full"
            />
          </div>
          <p className="mt-4 text-blue-100">Diving into your data...</p>
        </motion.div>
      )}
    </div>
    
  );
}