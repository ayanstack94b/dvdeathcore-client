"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineCommandLine, HiOutlineMusicalNote } from "react-icons/hi2";



const Hero = () => {
    const embers = [
        { left: 4, size: 2.5, delay: 0.3, duration: 11, color: "#FFE998" },
        { left: 9, size: 3, delay: 2.1, duration: 13, color: "#C89B3C" },
        { left: 15, size: 2, delay: 5.8, duration: 10, color: "#F6D56D" },
        { left: 22, size: 3.5, delay: 1.7, duration: 14, color: "#FFE998" },
        { left: 29, size: 2.8, delay: 7.4, duration: 12, color: "#C89B3C" },
        { left: 36, size: 2.2, delay: 3.5, duration: 11, color: "#F6D56D" },
        { left: 43, size: 4, delay: 6.1, duration: 15, color: "#FFE998" },
        { left: 50, size: 2.5, delay: 4.2, duration: 12, color: "#C89B3C" },
        { left: 57, size: 3.2, delay: 8.3, duration: 13, color: "#F6D56D" },
        { left: 64, size: 2.6, delay: 2.9, duration: 10, color: "#FFE998" },
        { left: 71, size: 3.7, delay: 5.4, duration: 14, color: "#C89B3C" },
        { left: 78, size: 2.4, delay: 0.8, duration: 11, color: "#F6D56D" },
        { left: 84, size: 3, delay: 6.8, duration: 12, color: "#FFE998" },
        { left: 89, size: 2.2, delay: 4.5, duration: 10, color: "#C89B3C" },
        { left: 94, size: 3.4, delay: 7.9, duration: 13, color: "#F6D56D" },
        { left: 98, size: 2.7, delay: 1.4, duration: 12, color: "#FFE998" },
    ];

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