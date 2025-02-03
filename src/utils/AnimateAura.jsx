import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const AnimateAura = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroudColor = useMotionTemplate`
    radial-gradient(100% 150% at 50% 0%, #020617 60%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <motion.div
      style={{
        // backgroundImage: [
        //   "radial-gradient(90% 40% at 50% 0%, #020617 50%, #DD335C)",
        // ],
        backgroundImage: backgroudColor,
      }}
      className="absolute top-0 left-0 right-0 grid min-h-screen place-items-center overflow-hidden bg-transparent px-4 -z-50 "
    ></motion.div>
  );
};

export default AnimateAura;
