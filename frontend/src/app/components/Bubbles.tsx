'use client';
import { useEffect, useState } from 'react';

type BubbleProps = {
    left: string;
    animationDelay: string;
    animationDuration: string;
    size: string;
    glow: string;
  };
  

export default function Bubbles() {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);

  useEffect(() => {
    const bubbleArray = [...Array(20)].map(() => {
      const size = `${6 + Math.random() * 20}px`; // 6px to 26px
      const glowColor = `rgba(173, 216, 230, ${0.3 + Math.random() * 0.4})`; // lightblue-ish glow
      return {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 5}s`,
        size,
        glow: glowColor,
      };
    });
    setBubbles(bubbleArray);
  }, []);
  

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble, i) => (
        <span
            key={i}
            className="bubble"
            style={{
            left: bubble.left,
            animationDelay: bubble.animationDelay,
            animationDuration: bubble.animationDuration,
            width: bubble.size,
            height: bubble.size,
            boxShadow: `0 0 10px ${bubble.glow}, 0 0 20px ${bubble.glow}`,
            }}
        />
        ))}

    </div>
  );
}
