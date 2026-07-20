"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const headerReveal = {
    hidden: {
        opacity: 0,
        y: 60,
        filter: "blur(12px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const LiveExperience = () => {
    return (
        <section
            id="live-experience"
            className="relative isolate overflow-hidden py-10"
        >

            {/* Background */}

            <motion.div
                className="absolute inset-0 -z-10 pointer-events-none"
            >

                {/* Base */}

                {/* Ambient Shadow */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Top Fade */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />

                {/* Bottom Fade */}
                <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                {/* Warm Stage Light */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#b86a2c]/15 via-transparent to-transparent" />
                {/* Moving Ambient Glow */}

                <motion.div
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b66b2c]/8 blur-[240px]"
                />

                {/* Top Fade */}

                <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#050505] to-transparent" />

                {/* Bottom Fade */}

                <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050505] to-transparent" />

            </motion.div>

            {/* Content */}

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    staggerChildren: 0.18,
                }}
                className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-8"
            >
                <div className="mx-auto flex w-full max-w-5xl flex-col items-start"> 
                    <motion.p
                        variants={headerReveal}
                        className="text-xs font-semibold uppercase tracking-[0.45em] text-[#FFE998]"
                    >
                        LIVE EXPERIENCE
                    </motion.p>

                    <motion.h2
                        variants={headerReveal}
                        className="mt-5 text-left text-[3rem] font-black leading-[0.9] tracking-tight text-white md:text-7xl lg:text-8xl"
                    >
                        Beyond
                        <br />
                        the Studio
                    </motion.h2>

                    <motion.div
                        variants={headerReveal}
                        className="mt-10 max-w-3xl border-l border-[rgba(179,153,119,.28)] pl-6"
                    >
                        <p className="text-left text-base leading-8 text-zinc-400 md:text-lg">
                            The music begins in the studio, but it comes alive on stage.
                            Every performance is built around intensity, precision and a
                            connection with the crowd that cannot be recreated anywhere else.
                        </p>
                    </motion.div>
                </div>
       

                {/* Hero Live Image */}

                <motion.div
                    variants={headerReveal}
                    className="relative mt-20 w-full"
                >

                    <div className="group relative overflow-hidden rounded-[32px] border border-[rgba(179,153,119,.18)] bg-[#0f0f10] p-2 shadow-[0_40px_120px_rgba(0,0,0,.45)]">
                        <Image
                            src="/images/live-snap.png"
                            alt="Disquietude Vengeance performing live"
                            width={1800}
                            height={1100}
                            className="h-[460px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[520px] lg:h-[680px]"
                            priority={false}
                        />

                        {/* Editorial Tag */}

                        <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/35 px-5 py-2 backdrop-blur-xl">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#FFE998]">
                                LIVE EXPERIENCE
                            </p>
                        </div>

                        {/* Bottom Content */}

                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-8 md:pb-12">

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="max-w-4xl text-center text-3xl font-black leading-tight text-white md:text-5xl lg:text-6xl"
                            >
                                Every Show Leaves
                                <br />
                                A Scar.
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                                className="mt-4 max-w-2xl text-center text-sm leading-7 text-zinc-300 md:text-base"
                            >
                                Moments from the stage, the crowd and everything in between.
                                Explore our live performances through the official gallery.
                            </motion.p>

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />

                            {/* Warm Stage Glow */}
                            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute inset-x-0 bottom-10 z-20 flex justify-center"
                            >
                                <Link
                                    href="/gallery"
                                    className="cta-shine pointer-events-auto inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-[#6D4C2E] via-[#9B7750] to-[#C8A56A] px-8 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(179,153,119,.35)]"
                                >
                                    Explore Gallery
                                </Link>
                            </motion.div>

                        </div>
                        {/* Dark Overlay */}

                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />
                        {/* Warm Stage Glow */}

                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

                    </div>

                </motion.div>



            </motion.div>

        </section>
    );
};

export default LiveExperience;