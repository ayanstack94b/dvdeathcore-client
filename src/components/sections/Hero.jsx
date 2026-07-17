"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineBeaker, HiOutlineCommandLine, HiOutlineHeadphones, HiOutlineMusicalNote } from "react-icons/hi2";
import { useMemo } from "react";


const Hero = () => {
    const colors = ["#FFE998", "#F6D56D", "#C89B3C"];

    const embers = useMemo(
        () =>
            Array.from({ length: 16 }, () => ({
                left: Math.random() * 100,
                size: 2 + Math.random() * 3,
                delay: Math.random() * 10,
                duration: 8 + Math.random() * 8,
                color: colors[Math.floor(Math.random() * colors.length)],
            })),
        []
    );

    return (
        <section className="relative py-6 flex md:min-h-screen lg:min-h-screen items-start justify-center overflow-hidden bg-[#050505] pt-5 lg:pt-20 sm:pt-24 md:items-center md:pt-0">

            {/* Static Ambient Gold Light */}
            <div className="absolute -left-52 -top-52 h-125 w-125 rounded-full bg-[#C89B3C]/6 blur-[180px] sm:-left-64 sm:-top-64 sm:h-162.5 sm:w-162.5 sm:bg-[#C89B3C]/8 sm:blur-[200px] lg:-left-72 lg:-top-72 lg:h-225 lg:w-225 lg:bg-[#C89B3C]/12 lg:blur-[220px]" />

            {/* Floating Embers */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {embers.map((ember, i) => (
                    <span
                        key={i}
                        className="ember"
                        style={{
                            left: `${ember.left}%`,
                            width: `${ember.size}px`,
                            height: `${ember.size}px`,
                            backgroundColor: ember.color,
                            animationDelay: `${ember.delay}s`,
                            animationDuration: `${ember.duration}s`,
                        }}
                    />
                ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 mt-8 flex w-full flex-col items-center px-4 md:mt-0">

                {/* Floating Logo */}
                <motion.div
                    animate={{
                        y: [0, -5, 0],
                        scale: [1, 1.008, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="flex justify-center "
                >
                    <Image
                        src="/images/dvLogo.png"
                        alt="Disquietude Vengeance"
                        width={1400}
                        height={700}
                        priority
                        className="h-auto w-[90%] max-w-75 select-none sm:w-full sm:max-w-120 md:max-w-162.5 lg:max-w-212.5 xl:max-w-237.5 lg:mt-15"
                    />
                </motion.div>

                {/* Hero Actions */}
                <div className="mt-5 flex flex-col items-center gap-2.5 sm:mt-10 sm:flex-row sm:gap-4">

                    <button className="flex h-10 w-40 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#FFE998] to-[#57370D] px-4 text-[13px] font-semibold text-white transition-all duration-300 hover:brightness-110 sm:h-11 sm:w-[185px] sm:px-5 sm:text-sm lg:h-12 lg:w-[220px] lg:px-6 lg:text-[15px]">
                        <HiOutlineCommandLine className="text-lg" />
                        Deathcore Lab
                    </button>

                    <button className="flex h-10 w-[160px] items-center justify-center gap-2 rounded-lg border border-[#C89B3C] bg-transparent px-4 text-[13px] font-semibold text-[#C89B3C] transition-all duration-300 hover:bg-[#C89B3C]/10 sm:h-11 sm:w-[185px] sm:px-5 sm:text-sm lg:h-12 lg:w-[220px] lg:px-6 lg:text-[15px]">
                        <HiOutlineMusicalNote className="text-lg" />
                        Listen Now
                    </button>

                </div>

            </div>

        </section>
    );
};

export default Hero;