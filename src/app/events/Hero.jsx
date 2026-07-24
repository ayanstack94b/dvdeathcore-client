import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import BorderBeam from '@/components/ui/BorderBeam';
import { History } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative flex min-h-screen items-center" id="hero">


            <div className="container relative z-10 mx-auto px-6">

                <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

                    {/* Badge */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative md:py-10 pt-10 pb-6 inline-flex overflow-hidden rounded-full p-px"
                    >


                        <div className="relative inline-flex overflow-hidden rounded-full p-px">

                            <BorderBeam />

                            <div className="relative rounded-full border border-[#C89B3C]/20 bg-black/40 px-5 py-2 backdrop-blur-xl">

                                <span className="text-[9px] text-center font-bold uppercase tracking-[0.3em] text-[#C89B3C] md:text-xs">
                                    Independent Deathcore Band
                                </span>

                            </div>

                        </div>


                    </motion.div>

                    {/* Heading */}

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="md:border-none border-l-4 border-gray-500 pl-5 md:pl-8 md:text-center text-left text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl"
                    >
                        Experience
                        <span className="text-[var(--camel)]">
                            {" "}Disquietude Vengeance{" "}
                        </span>
                        On Stage
                    </motion.h1>

                    {/* Subtitle */}

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="mt-6 max-w-xl text-left text-base leading-8 text-[var(--text-secondary)] md:text-lg"
                    >
                        Explore upcoming tours, festival appearances, exclusive performances,
                        and every milestone from our journey on stage.
                    </motion.p>

                    {/* CTA */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="mt-10"
                    >
                        <a
                            href="#past-events"
                            className="flex h-12 w-full cta-shine items-center justify-center rounded-xl border border-[#FFE998]/80 bg-transparent px-6 text-sm font-semibold tracking-wide text-[#FFE998] backdrop-blur-sm transition-all duration-300 hover:border-[#FFE998] hover:bg-[#FFE998]/8 hover:text-[#FFE998] hover:shadow-[0_0_20px_rgba(255,233,152,0.12)] sm:w-56"
                        >
                            <History size={18} className="mr-2" />
                           Explore Past Events
                        </a>

                    </motion.div>

                </div>
            </div>

        </section>  

    );
};

export default Hero;           