import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltedCard({
  imageSrc,
  altText,
  captionText,
  containerHeight,
  containerWidth,
  imageHeight,
  imageWidth,
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
  displayOverlayContent,
  overlayContent,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [rotateAmplitude, -rotateAmplitude]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-rotateAmplitude, rotateAmplitude]
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        width: containerWidth || "300px",
        height: containerHeight || "300px",
        perspective: 1000,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <motion.div
        style={{
          width: imageWidth || "100%",
          height: imageHeight || "100%",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative"
        }}
        whileHover={{ scale: scaleOnHover }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={imageSrc}
          alt={altText}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        />
        {displayOverlayContent && (
          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "1.5rem",
              transform: "translateZ(50px)",
              color: "white",
            }}
          >
            {overlayContent}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
