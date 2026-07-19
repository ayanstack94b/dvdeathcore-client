"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaSpotify,
    FaYoutube,
    FaApple,
    FaBandcamp,
} from "react-icons/fa";
import { useLenis } from "@/components/providers/LenisProvider";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reveal = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};


export default function FeaturedMusic() {

    const lenisRef = useLenis();

    const sectionRef = useRef(null);
    const glowRef = useRef(null);
    const artworkRef = useRef(null);
    const ribbonRef = useRef(null);

    const tracksRef = useRef(null);
    const listenersRef = useRef(null);

    const animateTracks = () => {

        if (!tracksRef.current) return;

        const el = tracksRef.current;

        let flashes = 0;

        const scanner = setInterval(() => {

            flashes++;

            // Random values between 10 and 99
            el.textContent = Math.floor(Math.random() * 90 + 10);

            if (flashes >= 20) {

                clearInterval(scanner);

                let value = 12;

                const settle = () => {

                    el.textContent = value;

                    if (value > 7) {

                        value--;

                        setTimeout(settle, 250);

                    }

                };

                settle();

            }

        }, 60);

    };

    useEffect(() => {

        // Live listeners

        const listenerTarget = 183421;

        let currentListeners = listenerTarget;

        if (listenersRef.current) {
            listenersRef.current.textContent = currentListeners.toLocaleString();
        }

        const listenerInterval = setInterval(() => {

            const change = Math.floor(Math.random() * 41) - 20;

            currentListeners += change;

            if (currentListeners < listenerTarget - 120) {
                currentListeners = listenerTarget - 120;
            }

            if (currentListeners > listenerTarget + 120) {
                currentListeners = listenerTarget + 120;
            }

            if (listenersRef.current) {
                listenersRef.current.textContent =
                    currentListeners.toLocaleString();
            }

        }, 1800);

        // Streaming Ribbon Animation

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ribbonRef.current,
                start: "top 80%",
                end: "bottom 40%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(".ribbon-title", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
        })

            .from(
                ".stream-btn",
                {
                    y: 30,
                    opacity: 0,
                    scale: 0.8,
                    stagger: 0.12,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                },
                "-=0.35"
            );

        return () => {
            clearInterval(listenerInterval);
            tl.kill();
        };

    }, []);

    return (
        <motion.section
            ref={sectionRef}
            className="relative overflow-hidden py-24 lg:py-36"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#193126_0%,#111b16_22%,#090909_60%,#050505_100%)]" />

            {/* Green Ambient Glow */}
            <div
                ref={glowRef}
                className="absolute left-1/2 top-40 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2d5b47]/20 blur-[180px] transition-transform duration-300"
            />

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                onAnimationComplete={() => {
                    animateTracks();
                }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            delayChildren: 0.2,
                            staggerChildren: 0.18,
                        },
                    },
                }}
                className="relative mx-auto flex max-w-7xl flex-col gap-14 px-6 lg:flex-row lg:items-center lg:gap-24"
            >

                {/* Album Cover */}

                <motion.div
                    ref={artworkRef}
                    variants={reveal}
                    className="mx-auto w-full max-w-sm shrink-0 will-change-transform"
                >

                    <Image
                        src="/images/album-cover.jpg"
                        alt="Psycho Sadistic Existence"
                        width={700}
                        height={700}
                        loading="eager"
                        className="rounded-2xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.55)] transition-transform duration-300"
                    />

                </motion.div>

                {/* Content */}

                <div className="flex-1">

                    <motion.div variants={reveal}>

                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#FFE998]">
                            Featured Music
                        </p>

                        <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            Psycho Sadistic Existence
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                            The debut studio release from Disquietude Vengeance explores
                            brutality, psychological horror, and modern deathcore through
                            crushing riffs, relentless breakdowns, and cinematic atmosphere.
                        </p>

                    </motion.div>

                    {/* Metadata */}

                    <motion.div
                        variants={reveal}
                        className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 md:grid-cols-4"
                    >

                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                                Released
                            </p>

                            <p className="mt-2 text-lg font-semibold text-white">
                                05 Oct 2024
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                                Genre
                            </p>

                            <p className="mt-2 text-lg font-semibold text-white">
                                Deathcore
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                                Tracks
                            </p>

                            <p
                                ref={tracksRef}
                                className="mt-2 font-mono text-4xl font-bold text-[#FFE998] tabular-nums"
                            >
                                00
                            </p>
                        </div>

                        <div>

                            <div className="flex items-center gap-2">

                                <span className="relative flex h-3 w-3">

                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>

                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]"></span>

                                </span>

                                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                                    Live Listeners
                                </p>

                            </div>

                            <p
                                ref={listenersRef}
                                className="mt-3 text-3xl font-bold text-[#FFE998]"
                            >
                                183,421
                            </p>

                        </div>

                    </motion.div>

                    {/* Streaming Ribbon */}
                    {/* Streaming Ribbon */}

                    <motion.div
                        ref={ribbonRef}
                        initial={{
                            opacity: 0,
                            y: 60,
                            scale: 0.96,
                            rotateX: -8,
                            filter: "blur(8px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            rotateX: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                            y: -4,
                            transition: {
                                duration: 0.35,
                            },
                        }}
                        className="relative mt-12 overflow-hidden [perspective:1200px]"
                    >

                        {/* Ambient Glow */}

                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#1d3328]/20 via-[#2d5b47]/10 to-transparent blur-3xl" />

                        {/* Glass Card */}

                        <div className="streaming-ribbon relative flex flex-wrap items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl">

                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.15,
                                    duration: 0.45,
                                }}
                                className="mr-2 text-xs uppercase tracking-[0.35em] text-zinc-500"
                            >
                                Available On
                            </motion.span>

                            <motion.button
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                whileHover={{ y: -4, scale: 1.08 }}
                                whileTap={{ scale: 0.96 }}
                                className="glass-btn"
                            >
                                <FaSpotify size={18} />
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                                whileHover={{ y: -4, scale: 1.08 }}
                                whileTap={{ scale: 0.96 }}
                                className="glass-btn"
                            >
                                <FaYoutube size={18} />
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.45 }}
                                whileHover={{ y: -4, scale: 1.08 }}
                                whileTap={{ scale: 0.96 }}
                                className="glass-btn"
                            >
                                <FaApple size={18} />
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.55 }}
                                whileHover={{ y: -4, scale: 1.08 }}
                                whileTap={{ scale: 0.96 }}
                                className="glass-btn"
                            >
                                <FaBandcamp size={18} />
                            </motion.button>

                        </div>

                    </motion.div>
                    {/* CTA */}

                    <motion.div
                        variants={reveal}
                        className="mt-12 flex flex-wrap items-center gap-5"
                    >

                        <Link
                            href="/music"
                            className="cta-shine inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#5B5FEF] to-[#7B61FF] px-8 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                        >
                            Explore Discography
                        </Link>

                        <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                            7 Tracks • Debut Album
                        </span>

                    </motion.div>

                </div>

            </motion.div>

        </motion.section>
    );
}