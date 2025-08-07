import Image from "next/image";
import { ubuntu } from "@/data/constants/fonts";
import profileImg from "@/public/profile.jpg";
import { TypewriterEffect } from "./ui/typewritet-effect";
import { color } from "framer-motion";
// import { TypewriterEffect } from "./ui/typewritet-effect";
import { ContainerTextFlip } from "./ui/ContainerTextFlip";


export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center py-32 z-50 relative">
      <div className="rounded-full overflow-hidden w-32 h-32">
        <Image style={{ marginTop: '-14px' }} src={profileImg} alt="profile photo" />
      </div>
      <h2 className={`font-semibold text-lg`}>Hi, I&apos;m Jo 🤗</h2>
      <h1
        className={`${ubuntu.className} font-bold text-3xl md:text-5xl flex flex-col`}
      >
        <span className="my-2">From Design to Development,</span>
        <span>
          <span className="blue my-2">I Craft Exceptional</span> <br />

          <ContainerTextFlip
            words={[
              "Web Experiences",
              "Impactful Experiences",
              "Scalable Solutions",
              "Interactive Experiences",
              "User-Centric Solutions",
            ]}
            className="text-xl md:text-2xl dark:bg-blue my-2 blue text-center h-[40px] sm:h-auto w-auto"
          />

        </span>
      </h1>
      <p className="lg:text-md dark:text-slate-300">
        Leveraging my expertise in both <b>front-end</b>{" "}
        <br className="hidden md:block" /> development, I
        bring ideas to life, <br className="hidden md:block" /> crafting
        seamless user experiences and robust functionality
      </p>
      <a
        href="#contact"
        className="uppercase font-semibold text-xs bg-cool-black dark:bg-white dark:text-black text-white rounded-full px-8 py-4 flex items-center justify-center hover:scale-105 active:scale-100 transition-all duration-300"
      >
        <span>schedule a call</span>
      </a>
    </div>
  );
}
