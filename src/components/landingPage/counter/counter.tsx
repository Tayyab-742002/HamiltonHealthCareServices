"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

// AnimatedCounter component that animates from 0 to the target value
function AnimatedCounter({
  target,
  duration = 2,
  label,
}: {
  target: number;
  duration?: number;
  label: string;
}) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, target, { duration });
    return controls.stop;
  }, [target, duration, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="counter-value text-[3.5rem] text-dark-blue"
      >
        {value.toLocaleString()}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="label mt-2 text-lg"
      >
        {label}
      </motion.div>
    </div>
  );
}

// CounterSection component with responsive grid
export default function CounterSection() {
  return (
    <div className="bg-[#f8f9fa] py-5 text-center flex justify-center">
      <div className="container" id="counter">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  place-items-center px-20">
          <AnimatedCounter
            target={30}
            duration={2}
            label="Years in Operation"
          />
          <AnimatedCounter
            target={124}
            duration={2}
            label="Contracted Healthcare Facilities"
          />
          <AnimatedCounter target={1558} duration={2} label="Active Staff" />
          <AnimatedCounter
            target={1512058}
            duration={2}
            label="Annual Hours of Care Delivered"
          />
        </div>
      </div>
    </div>
  );
}
