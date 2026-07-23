"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// import { tours } from "@/data/tours";
import { CalendarDays, ChevronDown, History } from "lucide-react";
import { tours } from "@/data/tours";

export default function EventsPage() {

    const upcomingTour = tours.find((tour) => tour.status === "upcoming");

    return (
        <main className="relative overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">

            {/* ==========================================================
                                Hero Section
            ========================================================== */}

            <section className="relative flex min-h-screen items-center overflow-hidden">

                {/* Background */}

                <div className="absolute inset-0">

                    <div className="absolute inset-0 bg-[var(--bg-primary)]" />

                    <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#5a0e18]/20 blur-[180px]" />

                    <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[var(--camel)]/5 blur-[140px]" />

                    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#7b1324]/20 blur-[140px]" />

                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

                </div>

                <div className="container relative z-10 mx-auto px-6">

                    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

                        {/* Badge */}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative inline-flex overflow-hidden rounded-full p-px"
                        >

                            <div className="rounded-full border border-[var(--camel)]/20 bg-black/40 px-4 py-2 backdrop-blur-xl">

                                <span className="gold-text text-[10px] font-semibold uppercase tracking-[0.25em]">
                                    Live Events
                                </span>

                            </div>

                        </motion.div>

                        {/* Heading */}

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="mt-8 text-5xl font-bold leading-tight md:text-7xl"
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
                            className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg"
                        >
                            Explore upcoming tours, festival appearances,
                            exclusive performances, and every milestone from
                            our journey on stage.
                        </motion.p>

                        {/* CTA */}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-12 flex flex-col gap-4 sm:flex-row"
                        >

                            <a
                                href="#upcoming-tour"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--camel)] px-7 py-3 font-semibold text-black transition hover:scale-[1.03]"
                            >
                                <CalendarDays size={18} />
                                Upcoming Tour
                            </a>

                            <a
                                href="#past-events"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--camel)]/30 px-7 py-3 font-semibold transition hover:border-[var(--camel)]"
                            >
                                <History size={18} />
                                Past Shows
                            </a>

                        </motion.div>

                    </div>

                </div>

                {/* Scroll */}

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.8,
                    }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >

                    <ChevronDown
                        size={32}
                        className="text-[var(--camel)]"
                    />

                </motion.div>

            </section>

            {/* ==========================================================
                    Featured Upcoming Tour
========================================================== */}

            <section
                id="upcoming-tour"
                className="relative py-24"
            >

                <div className="container mx-auto px-6">

                    <div className="mb-16">

                        <span className="gold-text text-xs font-semibold uppercase tracking-[0.3em]">
                            Featured Tour
                        </span>

                        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
                            Upcoming
                            <span className="text-[var(--camel)]">
                                {" "}Tour
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-[var(--text-secondary)] leading-8">
                            The next chapter begins. Discover the latest tour,
                            upcoming cities, ticket availability and everything
                            you need before stepping into the pit.
                        </p>

                    </div>

                    <div className="grid gap-10 lg:grid-cols-[430px_1fr]">

                        {/* Poster */}

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .7 }}
                            className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]"
                        >

                            {upcomingTour?.poster ? (

                                <img
                                    src={upcomingTour.poster}
                                    alt={upcomingTour.title}
                                    className="aspect-[4/5] h-full w-full object-cover"
                                />

                            ) : (

                                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden">

                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0b0b0b] to-black" />

                                    <div className="absolute top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[var(--camel)]/10 blur-[100px]" />

                                    <div className="relative text-center">

                                        <p className="gold-text text-xs uppercase tracking-[0.4em]">
                                            Disquietude Vengeance
                                        </p>

                                        <h3 className="mt-6 text-4xl font-bold">
                                            {upcomingTour?.title}
                                        </h3>

                                        <p className="mt-5 text-sm text-[var(--text-secondary)]">
                                            Official Tour Artwork
                                            <br />
                                            Coming Soon
                                        </p>

                                    </div>

                                </div>

                            )}

                        </motion.div>

                        {/* Content */}

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .7 }}
                            className="flex flex-col justify-center"
                        >

                            <div className="inline-flex w-fit rounded-full border border-[var(--camel)]/20 bg-[var(--surface)] px-4 py-2">

                                <span className="gold-text text-xs uppercase tracking-[0.25em]">
                                    Upcoming
                                </span>

                            </div>

                            <h3 className="mt-8 text-4xl font-bold md:text-6xl">
                                {upcomingTour?.title}
                            </h3>

                            <p className="mt-8 max-w-2xl leading-8 text-[var(--text-secondary)]">

                                Join us on the road as we bring our latest chapter
                                across multiple cities. Find every show, venue,
                                ticket update and announcement from one place.

                            </p>

                            {/* Stats */}

                            <div className="mt-10 grid gap-4 sm:grid-cols-3">

                                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">

                                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--camel)]">
                                        Starts
                                    </p>

                                    <p className="mt-3 text-xl font-semibold">
                                        {upcomingTour?.startDate}
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">

                                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--camel)]">
                                        Ends
                                    </p>

                                    <p className="mt-3 text-xl font-semibold">
                                        {upcomingTour?.endDate}
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">

                                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--camel)]">
                                        Cities
                                    </p>

                                    <p className="mt-3 text-xl font-semibold">
                                        {upcomingTour?.cities?.length}
                                    </p>

                                </div>

                            </div>

                            {/* CTA */}

                            <div className="mt-12 flex flex-wrap gap-4">

                                <button className="rounded-xl bg-[var(--camel)] px-7 py-3 font-semibold text-black transition hover:scale-[1.03]">
                                    View Schedule
                                </button>

                                <button className="rounded-xl border border-[var(--camel)]/30 px-7 py-3 transition hover:border-[var(--camel)]">
                                    Ticket Information
                                </button>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

        </main>
    );
}
