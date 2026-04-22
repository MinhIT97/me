import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        document.body.classList.remove('custom-cursor-active');
      } else {
        document.body.classList.add('custom-cursor-active');
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('skill-tag');
      
      setIsHovering(!!isClickable);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.3)" : "rgba(108, 99, 255, 0.4)",
          border: isHovering ? "none" : "2px solid rgba(255, 255, 255, 0.5)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
      />
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: 12,
          y: 12
        }}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
    </>
  );
};
