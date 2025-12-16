"use client";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useState } from "react";
import { motion } from "framer-motion";

const ArrowXPositionLeftDiv = ({ className}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      animate={{ x: hovered ? -5 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <HiArrowLongLeft size={26} />
    </motion.div>
  );
};

export default ArrowXPositionLeftDiv;
