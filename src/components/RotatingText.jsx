import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RotatingText({
  texts,
  interval = 3000,
  staggerDuration = 0.05,
  className = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  const currentText = texts[index];

  return (
    <div className={className} style={{ position: "relative", display: "inline-block" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: staggerDuration } },
            exit: { transition: { staggerChildren: staggerDuration / 2, staggerDirection: -1 } },
          }}
          style={{ display: "inline-block" }}
        >
          {currentText.split("").map((char, i) => (
            <motion.span
              key={`${index}-${i}`}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 300, damping: 20 } },
                exit: { opacity: 0, y: -20, filter: "blur(4px)", transition: { duration: 0.2 } },
              }}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
