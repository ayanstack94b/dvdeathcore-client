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
import { HiArrowLongRight } from "react-icons/hi2";

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


        return () => {
            clearInterval(listenerInterval);
            tl.kill();
        };

    }, []);

    return (
        <motion.section
            ref={sectionRef}
            className="relative overflow-hidden py-28 md:py-36 lg:py-44"
        >
            {/* Background */}

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.3,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
            >

                {/* Base */}

                <div className="absolute inset-0 bg-[#050505]" />

                {/* Main Green Atmosphere */}

                <div className="absolute inset-0 bg-[linear-gradient(180deg,#07100c_0%,#0d1d16_18%,#163126_45%,#173428_72%,#12281f_100%)]" />

                {/* Top Black Fade */}

                <div className="absolute inset-x-0 top-0 h-[240px] bg-gradient-to-b from-[#050505] via-[#050505]/90 to-transparent" />

                {/* Left Bloom */}

                <div className="absolute -left-56 top-44 h-[620px] w-[620px] rounded-full bg-[#2b6049]/16 blur-[200px]" />

                {/* Main Glow */}

                <div
                    ref={glowRef}
                    className="absolute left-[42%] top-[48%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#4f8c69]/12 blur-[230px] will-change-transform"
                />

                {/* Right Accent */}

                <div className="absolute -right-40 top-52 h-[460px] w-[460px] rounded-full bg-[#376d55]/10 blur-[180px]" />

                {/* Bottom Bloom */}

                <div className="absolute bottom-[-160px] left-[35%] h-[520px] w-[520px] rounded-full bg-[#29543f]/10 blur-[200px]" />

                {/* Top Vignette */}

                <div className="absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-[#050505] via-transparent to-transparent" />

                {/* Bottom Vignette */}

                <div className="absolute inset-x-0 bottom-0 h-[320px] bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent" />

                {/* Edge Vignette */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,.25)_100%)]" />
            </motion.div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_52%,rgba(0,0,0,.5)_100%)]" />

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
                className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-[500px_minmax(0,1fr)] lg:gap-24 lg:items-start"
            >
                {/* Left Column */}

                <div className="mx-auto w-full max-w-[420px] shrink-0 lg:max-w-[480px]">
                    {/* Album Cover left div */}

                    <motion.div
                        ref={artworkRef}
                        variants={reveal}
                        className="mx-auto w-full max-w-[420px] shrink-0 will-change-transform lg:max-w-[480px]"
                    >

                        <Image
                            src="/images/album-cover.jpg"
                            alt="Psycho Sadistic Existence"
                            width={700}
                            height={700}
                            loading="eager"
                            className="w-full rounded-[28px] border border-white/10 shadow-[0_45px_140px_rgba(0,0,0,.65)] transition-all duration-500"
                        />

                    </motion.div>

                    {/* Desktop Only - Support the Band */}

                    <motion.div
                        variants={reveal}
                        className="relative mt-6 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl"
                    >

                        {/* Ambient Glow */}

                        <div className="absolute inset-0 bg-gradient-to-br from-[#629AA9]/10 via-transparent to-transparent" />

                        {/* Mirror Shine */}

                        <motion.div
                            // animate={{
                            //     x: ["-220%", "700%"],
                            // }}
                            // transition={{
                            //     duration: 1.4,
                            //     ease: "easeInOut",
                            //     repeat: Infinity,
                            //     repeatDelay: 5,
                            // }}
                            className="pointer-events-none absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-xl"
                        />

                        <div className="relative lg:block hidden z-10 p-7">

                            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#FFE998]">
                                SUPPORT THE BAND
                            </p>

                            <h3 className="mt-3 text-2xl font-bold text-white">
                                Own the Album
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-zinc-400">
                                Purchase <span className="font-medium text-white">Psycho Sadistic Existence</span> on
                                Bandcamp and directly support future releases, recordings,
                                merchandise and independent touring.
                            </p>

                            {/* BandCamp CTA */}
                            <Link
                                href="https://dvdeathcore.bandcamp.com/"
                                target="_blank"
                                className="group relative mt-8 flex overflow-hidden items-center justify-between rounded-2xl border border-white/10 bg-[#629AA9]/10 px-6 py-5 transition-all duration-300 hover:border-[#629AA9]/40 hover:bg-[#629AA9]/15"
                            >

                                {/* Mirror Shine */}

                                <motion.div
                                    animate={{
                                        x: [-180, 700],
                                    }}
                                    transition={{
                                        duration: 1.3,
                                        ease: [0.22, 1, 0.36, 1],
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                    className="pointer-events-none absolute inset-y-0 -left-32 w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-lg"
                                />

                                <div className="relative z-10 flex items-center gap-4">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#629AA9]/15">

                                        <FaBandcamp
                                            size={28}
                                            className="text-[#629AA9]"
                                        />

                                    </div>

                                    <div>

                                        <h4 className="text-lg font-semibold text-white">
                                            Buy on Bandcamp
                                        </h4>

                                        <p className="text-sm text-zinc-400">
                                            High-quality digital download
                                        </p>

                                    </div>

                                </div>

                                <HiArrowLongRight
                                    className="relative z-10 text-4xl text-white transition-transform duration-300 group-hover:translate-x-2"
                                />

                            </Link>

                        </div>

                    </motion.div>
                </div>

                {/* Content Right div*/}

                <div className="w-full">

                    <motion.div variants={reveal}>

                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#FFE998]">
                            Featured Music
                        </p>

                        <h2 className=" max-w-3xl text-[2.7rem] font-black leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
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
                        className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 md:grid-cols-4 md:gap-8"
                    >

                        <div className="ml-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                                Released
                            </p>

                            <p className="mt-2 text-lg font-semibold text-white">
                                05 Oct 2024
                            </p>
                        </div>

                        <div className="ml-4">
                            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                                Genre
                            </p>

                            <p className="mt-2 text-lg font-semibold text-white">
                                Deathcore
                            </p>
                        </div>

                        <div className="ml-2">
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

                        <div className="ml-1">

                            <div className="flex items-center gap-2">

                                <span className="relative flex h-3 w-3">

                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>

                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]"></span>

                                </span>

                                <p className="md:text-xs text-[11px] uppercase tracking-[0.25em] text-zinc-500">
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

                    <motion.div
                        ref={ribbonRef}
                        initial={{
                            opacity: 0,
                            y: 50,
                            scale: 0.98,
                            filter: "blur(8px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative mt-14"
                    >

                        {/* Ambient Glow */}

                        <div className="absolute inset-0 rounded-[32px] bg-[#2d5b47]/20 blur-3xl" />

                        {/* Breathing Glow */}

                        <motion.div
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[#3d7a5a]/10 via-[#5d9874]/10 to-[#3d7a5a]/10 blur-2xl"
                        />

                        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
                            {/* Mirror Shine */}
                            <motion.div
                                animate={{
                                    x: [-250, 1300],
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.22, 1, 0.36, 1],
                                    repeat: Infinity,
                                    repeatDelay: 5,
                                }}
                                className="pointer-events-none absolute inset-y-0 -left-40 w-40 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-xl"
                            />

                            {/* Header */}

                            <div className="mb-8">

                                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#FFE998]">
                                    Listen Now
                                </p>

                                <h3 className="ribbon-title listen-title mt-3 text-2xl font-bold text-white">
                                    We are Available Everywhere
                                </h3>

                                <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">
                                    Stream <span className="font-medium text-white">Psycho Sadistic Existence </span>
                                    on your favourite platform or support the band directly through Bandcamp.
                                </p>

                            </div>

                            {/* Streaming Platforms */}
                            <div className="grid grid-cols-2 gap-4">

                                {/* Spotify */}
                                <Link
                                    href="#"
                                    className="stream-card  group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 transition-all duration-300 hover:border-[#b39977]/40 hover:bg-white/[0.06]"
                                >

                                    <FaSpotify
                                        size={28}
                                        className="mb-4 text-[#1DB954]"
                                    />

                                    <h4 className="text-base font-semibold text-white">
                                        Spotify
                                    </h4>

                                    <p className="mt-1 text-xs text-zinc-500">
                                        Stream Album
                                    </p>

                                </Link>

                                {/* Apple */}
                                <Link
                                    href="#"
                                    className="stream-card group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 transition-all duration-300 hover:border-[#b39977]/40 hover:bg-white/[0.06]"
                                >
                                    <FaApple
                                        size={24}
                                        className="mb-4 text-white"
                                    />

                                    <h4 className="text-base font-semibold text-white">
                                        Apple
                                    </h4>

                                    <p className="mt-1 text-xs text-zinc-500">
                                        Stream Album
                                    </p>

                                </Link>

                                {/* YouTube */}
                                <Link
                                    href="#"
                                    className="stream-card group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 transition-all duration-300 hover:border-[#b39977]/40 hover:bg-white/[0.06]"
                                >

                                    <FaYoutube
                                        size={24}
                                        className="mb-4 text-[#FF0000]"
                                    />
                                    <h4 className="text-base font-semibold text-white">
                                        Youtube
                                    </h4>

                                    <p className="mt-1 text-xs text-zinc-500">
                                        Stream Album
                                    </p>

                                </Link>


                                {/* Bandcamp */}
                                <Link
                                    href="#"
                                    className="stream-card group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 transition-all duration-300 hover:border-[#b39977]/40 hover:bg-white/[0.06]"
                                >

                                    <FaBandcamp
                                        size={24}
                                        className="text-[#629AA9] mb-4"
                                    />

                                    <h4 className="text-base font-semibold text-white">
                                        Spotify
                                    </h4>

                                    <p className="mt-1 text-xs text-zinc-500">
                                        Stream Album
                                    </p>

                                </Link>

                            </div>

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