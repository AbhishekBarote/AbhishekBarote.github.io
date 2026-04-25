import React, { useRef, useState, useEffect } from "react";

export default function TextPressure({
  text = "Hello!",
  flex = true,
  alpha = false,
  stroke = false,
  width = true,
  weight = true,
  italic = true,
  textColor = "#ffffff",
  strokeColor = "#5227FF",
  minFontSize = 36,
}) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const characters = text.split("");

  return (
    <div
      ref={containerRef}
      style={{
        display: flex ? "flex" : "block",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "100%",
        cursor: "default",
        flexWrap: "wrap",
      }}
    >
      {characters.map((char, index) => {
        return (
          <CharPressure
            key={index}
            char={char}
            mousePos={mousePos}
            alpha={alpha}
            stroke={stroke}
            width={width}
            weight={weight}
            italic={italic}
            textColor={textColor}
            strokeColor={strokeColor}
            minFontSize={minFontSize}
          />
        );
      })}
    </div>
  );
}

function CharPressure({
  char,
  mousePos,
  alpha,
  stroke,
  width,
  weight,
  italic,
  textColor,
  strokeColor,
  minFontSize,
}) {
  const charRef = useRef(null);
  const [distance, setDistance] = useState(1000);

  useEffect(() => {
    if (charRef.current) {
      const rect = charRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const dist = Math.sqrt(
        Math.pow(mousePos.x - centerX, 2) + 
        Math.pow(mousePos.y - centerY, 2)
      );
      setDistance(dist);
    }
  }, [mousePos]);

  // Map distance to font properties
  const maxDist = 400;
  const intensity = Math.max(0, 1 - distance / maxDist);

  const charWeight = weight ? 100 + intensity * 800 : 400;
  const charWidth = width ? 50 + intensity * 150 : 100;
  const charItalic = italic ? intensity * -15 : 0;
  const charAlpha = alpha ? 0.3 + Math.min(1, intensity * 2) : 1;
  const scale = 1 + intensity * 0.3;

  return (
    <span
      ref={charRef}
      style={{
        display: "inline-block",
        color: textColor,
        fontSize: `${Math.max(minFontSize, minFontSize * scale)}px`,
        fontWeight: charWeight,
        fontStretch: `${charWidth}%`,
        transform: `skewX(${charItalic}deg)`,
        opacity: charAlpha,
        WebkitTextStroke: stroke ? `1px ${strokeColor}` : "none",
        transition: "all 0.1s ease-out",
        fontVariationSettings: `"wght" ${charWeight}, "wdth" ${charWidth}`,
        lineHeight: 1.1,
        marginRight: char === " " ? "0.5rem" : "0",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
}
