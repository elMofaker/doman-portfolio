"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { oswald } from "@/data/constants/fonts";
import { works as allWorks } from "@/data/index";
import { AnimatePresence, motion } from "framer-motion";

const filters = [
  { label: "All", value: "all" },
  { label: "Landing Pages", value: "landing" },
  { label: "Web Apps", value: "webapp" },
  { label: "Templates", value: "template" },
];

export default function Works() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredWorks =
    selectedFilter === "all"
      ? allWorks
      : allWorks.filter((work) => work.type === selectedFilter);

  return (
    <section id="works" className="pb-32">
      <h1
        className={`${oswald.className} font-semibold text-2xl md:text-4xl flex flex-col text-center`}
      >
        <span className="text-base text-amber-600">Works</span>
        <span>
          <span>Here are</span>{" "}
          <span className="text-yellow-500">My Latest Projects</span>
        </span>
        <span>with their presentations</span>
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mt-8">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setSelectedFilter(filter.value)}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-all",
              selectedFilter === filter.value
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 hover:bg-yellow-100 text-gray-800"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <BentoGrid className="mx-auto md:auto-rows-[20rem] py-10">
        <AnimatePresence mode="wait">
          {filteredWorks.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <BentoGridItem
                title={item.title}
                link={item.link}
                description={item.description}
                image={item.image}
                className={cn("md:col-span-1")}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </BentoGrid>
    </section>
  );
}
