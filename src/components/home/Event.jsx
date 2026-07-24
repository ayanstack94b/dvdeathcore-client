"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import BorderBeam from "../ui/BorderBeam";

export default function Events() {

    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
        status: "upcoming",
    });
    const eventDate = new Date("2026-09-06T18:00:00+05:30");

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const target = eventDate.getTime();

            const difference = target - now;

            if (difference <= 0) {
                setTimeLeft({
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00",
                    status: "live",
                });

                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) /
                (1000 * 60)
            );

            const seconds = Math.floor(
                (difference % (1000 * 60)) / 1000
            );

            setTimeLeft({
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
                status: "upcoming",
            });
        };

        updateCountdown();

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section
            id="events"
            className="relative isolate overflow-hidden py-24 md:py-32"
        >

            {/* ============================================================
                                SECTION BACKGROUND
                ============================================================ */}

            <div className="absolute inset-0 z-0 overflow-hidden">

                {/* Base Black */}
                <div className="absolute inset-0 bg-[#050505]" />

                {/* Wine Core */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2b0d12_0%,#1a070a_30%,transparent_72%)]" />

                {/* Left Wine Glow */}
                <div className="absolute -left-56 top-32 h-[560px] w-[560px] rounded-full bg-[#7a1423]/30 blur-[200px]" />

                {/* Right Wine Glow */}
                <div className="absolute -right-56 bottom-20 h-[560px] w-[560px] rounded-full bg-[#5b0b18]/25 blur-[200px]" />

                {/* Center Warm Glow */}
                <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--camel)]/8 blur-[180px]" />

                {/* Top Fade */}
                <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#050505] via-[#050505]/95 to-transparent" />

                {/* Bottom Fade */}
                <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent" />

                {/* Dark Glass */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

            </div>

            {/* ============================================================
                        CONTENT
                ============================================================ */}

            <div className="relative z-10 container mx-auto px-5">

                {/* ========================================================
                    SECTION HEADING
                ======================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-3xl text-center"
                >

                    <div className="relative inline-flex overflow-hidden rounded-full p-px">

                        <BorderBeam />

                        <div className="relative flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 backdrop-blur-xl sm:px-5 sm:py-2">

                            <span className="h-1.5 w-1.5 rounded-full bg-[#C89B3C] shadow-[0_0_10px_rgba(200,155,60,0.8)]" />

                            <span className="gold-text text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.28em]">
                                Upcoming Events
                            </span>

                        </div>

                    </div>

                    <h2 className="pt-8 text-left text-3xl font-bold leading-tight md:text-center md:text-6xl">
                        Catch
                        <span className="text-(--camel)"> Disquietude Vengeance </span>
                        Live
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-left text-base leading-8 text-[var(--text-secondary)] md:text-center">
                        Explore upcoming shows, find your nearest venue, and be part of the next
                        Disquietude Vengeance live experience.
                    </p>
                </motion.div>

                {/* ========================================================
                    EVENT CONTENT
                ======================================================== */}

                <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* ====================================================
                        LEFT COLUMN
                    ==================================================== */}

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.05] px-5 py-2 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.35)]">

                            <span className="h-2 w-2 rounded-full bg-[var(--camel)] shadow-[0_0_10px_rgba(179,153,119,0.8)]" />

                            <span className="gold-text text-[11px] font-semibold uppercase tracking-[0.3em] sm:text-xs">
                                Upcoming Show
                            </span>

                        </div>


                        <h3 className="mt-8 text-3xl font-bold md:text-5xl">
                            Asylum Raid Tour 
                        </h3>

                        <p className="mt-6 max-w-xl leading-8 text-[var(--text-secondary)]">
                            The next chapter begins soon. Join us for an
                            evening of relentless breakdowns, new material,
                            and the full Disquietude Vengeance live
                            experience.
                        </p>

                        {/* Event Details */}

                        <div className="mt-10 space-y-5">

                            <div>
                                <p className="text-xs uppercase tracking-[0.25em] text-[var(--camel)]">
                                    Live Across India
                                </p>

                                <p className="mt-1 text-lg">
                                    Multiple Cities • Limited Dates
                                </p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.25em] text-[var(--camel)]">
                                    Discover More
                                </p>

                                <p className="mt-1 text-lg">
                                    View Venues, Dates & Ticket Information
                                </p>
                            </div>

                        </div>

                    </motion.div>

                    {/* ====================================================
                        RIGHT COLUMN EVENT TIMER
                    ==================================================== */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white/[0.04] p-6 backdrop-blur-xl md:p-10"
                    >

                        {/* Background Glow */}
                        <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[var(--camel)]/10 blur-[120px]" />

                        <div className="relative z-10">

                            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.45em] text-[var(--camel)]">
                                Event Countdown
                            </p>

                            <div className="grid grid-cols-4">

                                {/* Days */}
                                <div className="flex flex-col items-center border-r border-white/10">
                                    <h3 className="text-4xl font-black leading-none md:text-6xl">
                                        {timeLeft.days}
                                    </h3>

                                    <span className="mt-3 text-[11px] uppercase tracking-[0.35em] text-[var(--text-muted)]">
                                        Days
                                    </span>
                                </div>

                                {/* Hours */}
                                <div className="flex flex-col items-center border-r border-white/10">
                                    <h3 className="text-4xl font-black leading-none md:text-6xl">
                                        {timeLeft.hours}
                                    </h3>

                                    <span className="mt-3 text-[11px] uppercase tracking-[0.35em] text-[var(--text-muted)]">
                                        Hrs
                                    </span>
                                </div>

                                {/* Minutes */}
                                <div className="flex flex-col items-center border-r border-white/10">
                                    <h3 className="text-4xl font-black leading-none md:text-6xl">
                                        {timeLeft.minutes}
                                    </h3>

                                    <span className="mt-3 text-[11px] uppercase tracking-[0.35em] text-[var(--text-muted)]">
                                        Min
                                    </span>
                                </div>

                                {/* Seconds */}
                                <div className="flex flex-col items-center">
                                    <motion.h3
                                        animate={{ opacity: [1, 0.75, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="text-4xl font-black leading-none md:text-6xl"
                                    >
                                        {timeLeft.seconds}
                                    </motion.h3>

                                    <span className="mt-3 text-[11px] uppercase tracking-[0.35em] text-[var(--text-muted)]">
                                        Sec
                                    </span>
                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

                {/* ========================================================
                    SECTION CTA
                ======================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mt-16 flex justify-center"
                >
                    <Link
                        href="/events"
                        className="cta-shine group pointer-events-auto inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#6D4C2E] via-[#9B7750] to-[#C8A56A] px-8 text-sm  tracking-wide font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(179,153,119,.35)]"
                    >
                        <span>Explore Events</span>

                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                                duration: 1.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="text-lg"
                        >
                            <FiArrowRight size={18} />
                        </motion.span>
                    </Link>
                </motion.div>

            </div>

            {/* ============================================================
                FUTURE ROADMAP
            ============================================================ */}

        </section>
    );
}