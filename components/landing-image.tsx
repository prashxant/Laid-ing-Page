"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";

export const LandingImage = () => {
  return (
    <div className="relative min-h-72 w-full pt-20 perspective-distant sm:min-h-80 md:min-h-100 lg:min-h-140 translat-x-40">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.1,
        }}
        className=" perspective-[4000px] shadow-2xl"
      >
        <Image
          src="https://assets.aceternity.com/screenshots/4.jpg"
          alt="demo 1"
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl",
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.1,
        }}
        className="translate-x-20 -translate-y-10 perspective-[4000px] md:-translate-y-40"
      >
        <Image
          src="https://assets.aceternity.com/screenshots/4.jpg"
          alt="demo 1"
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0 translate-x-2 rounded-lg mask-r-from-50% mask-b-from-50% shadow-2xl",
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
    </div>
  );
};
