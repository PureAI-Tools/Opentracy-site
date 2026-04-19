"use client";

import { motion } from "framer-motion";

export default function FloatingOrb() {
  return (
    <>
      <motion.div
        className="hero-orb"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Warm amber orb — drifts left */}
      <motion.div
        style={{
          position: "absolute",
          top: "-80px",
          left: "25%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, rgba(134, 239, 172, 0.04) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.25, 0.85, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Blue orb — drifts right */}
      <motion.div
        style={{
          position: "absolute",
          top: "60px",
          right: "20%",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.07) 0%, rgba(96, 165, 250, 0.03) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
        animate={{
          x: [0, -35, 20, 0],
          y: [0, 20, -35, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      {/* Small accent orb */}
      <motion.div
        style={{
          position: "absolute",
          top: "200px",
          left: "60%",
          width: "120px",
          height: "120px",
          background: "radial-gradient(circle, rgba(22, 163, 74, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -15, 25, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </>
  );
}
