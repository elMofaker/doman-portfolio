"use client";
import React, { useState } from "react";
// import { ToggleButton } from "@/components/toggle-theme";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ToggleButton } from "../toggle-theme";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() <= 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit w-[97%] fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-white/18 dark:bg-white/10 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-3 sm:px-5 md:px-8 py-2 items-center justify-center space-x-2 md:space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-black dark:text-white font-semibold items-center flex space-x-1 hover:text-gray-700 dark:hover:text-gray-300"
            )}
          >

            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden. sm:block. m-0 text-sm">{navItem.name}</span>
          </Link>
        ))}
        <ToggleButton />

      </motion.div>
    </AnimatePresence>
  );
};
