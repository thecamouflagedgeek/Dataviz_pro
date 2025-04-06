"use client";

import { motion } from "framer-motion";
import {
  FaFileCsv,
  FaChartBar,
  FaMagic,
  FaDollarSign,
  FaSearch,
  FaRobot,
  FaPaintBrush,
  FaLightbulb,
} from "react-icons/fa";
import Bubbles from "./Bubbles";

const steps = [
  {
    title: "1. Enter Your Data",
    description: "Upload CSV files, Excel sheets, or paste raw data.",
    icon: <FaFileCsv size={32} />,
  },
  {
    title: "2. Choose Graph Type",
    description: "Bar, line, pie, scatter – pick your vibe.",
    icon: <FaChartBar size={32} />,
  },
  {
    title: "3. Let Us Work the Magic",
    description: "Chart It takes over and brings the magic. ✨",
    icon: <FaMagic size={32} />,
    substeps: [
        {
          title: "Analyze",
          icon: <FaSearch />,
          description: "We scan your data for patterns, missing values, and outliers.",
        },
        {
          title: "Recommend",
          icon: <FaRobot />,
          description: "AI suggests the best chart types and smart insights tailored to your data.",
        },
        {
          title: "Visualize",
          icon: <FaPaintBrush />,
          description: "Your data is transformed into sleek, interactive charts with zero hassle.",
        },
        {
          title: "Insights",
          icon: <FaLightbulb />,
          description: "We highlight key trends, anomalies, and actionable takeaways from your data.",
        },
      ],      
  },
  {
    title: "4. Profit",
    description: "Export, share, or present— you're all set!",
    icon: <FaDollarSign size={32} />,
  },
];

export default function Instructions() {
  return (
    <section className="relative bg-gradient-to-b from-[#00091a] to-[#42c3e7] py-10 sm:py-16 md:py-20 text-white px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* 🐠 Floating Fish & Jelly Container */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Bubbles/>
        {/* Dory going right to left */}
        <motion.img
          src="/images/doryright.png"
          alt="dory fish"
          className="absolute top-[50%] right-[-500px] w-[150px] sm:w-[250px] md:w-[300px] lg:w-[400px] opacity-30 select-none"
          animate={{ x: ['500px', '-110%'], y: ['0px', '-30px', '0px'] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Jellyfish going down */}
        <motion.img
          src="/images/jellydown.png"
          alt="jellyfish floating down"
          className="absolute top-[-100px] left-[50%] w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] opacity-20 select-none"
          animate={{ y: ['-200px', '100%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Jellyfish 1 going up */}
        <motion.img
          src="/images/jellyup.png"
          alt="jellyfish floating up"
          className="absolute bottom-[-300px] left-[10%] w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] opacity-20 select-none hidden sm:block"
          animate={{ y: ['100%', '-300px'] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Jellyfish 2 going up */}
        <motion.img
          src="/images/jellyup2.png"
          alt="jellyfish floating up again"
          className="absolute bottom-[-300px] left-[70%] w-[100px] sm:w-[150px] md:w-[200px] lg:w-[250px] opacity-20 select-none hidden sm:block"
          animate={{ y: ['100%', '-300px'] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* 💬 Instructions Content */}
      <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto text-center relative z-10">

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          How to Visualize Data Using Chart It?
        </motion.h2>

        <div className="mx-auto grid gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-xl text-left border border-white/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-2 sm:mb-3 md:mb-4">
                <div className="text-aqua-300 bg-white/20 p-2 sm:p-3 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">{step.description}</p>

              {step.substeps && (
                <div className="space-y-2 sm:space-y-3 md:space-y-4 mt-3 sm:mt-4 pl-3 sm:pl-4 md:pl-6 border-l-2 border-aqua-300">
                  {step.substeps.map((sub, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start space-x-2 sm:space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.3 }}
                    >
                      <div className="text-white mt-1">{sub.icon}</div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">{sub.title}</p>
                        <p className="text-white/70 text-xs sm:text-sm">{sub.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}