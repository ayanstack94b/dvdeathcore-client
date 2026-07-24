"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ChevronDown, History } from "lucide-react";
import { tours } from "@/data/tours";
import Image from "next/image";
import BorderBeam from "@/components/ui/BorderBeam";

export default function EventsPage() {

    const upcomingTour = tours.find((tour) => tour.status === "upcoming");

    return (
        <main className="relative overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">

            {/* ==========================================================
                        Global Page Background
                ========================================================== */}

            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

                {/* Base */}

                <div className="absolute inset-0 bg-[#050505]" />

                {/* Wine Gradient Across Entire Page */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#321015_0%,#1b080c_28%,#090909_72%)]" />

                {/* Hero Glow */}

                <div className="absolute left-1/2 top-[-250px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#7a1423]/35 blur-[220px]" />

                {/* Upcoming Tour */}

                <div className="absolute -left-64 top-[900px] h-[650px] w-[650px] rounded-full bg-[#7a1423]/30 blur-[220px]" />

                <div className="absolute -right-64 top-[1200px] h-[650px] w-[650px] rounded-full bg-[#5b0b18]/25 blur-[220px]" />

                {/* Timeline */}

                <div className="absolute left-1/2 top-[2200px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#66101d]/25 blur-[220px]" />

                {/* Gallery */}

                <div className="absolute -right-64 top-[3300px] h-[650px] w-[650px] rounded-full bg-[#7a1423]/25 blur-[220px]" />

                <div className="absolute -left-64 top-[3800px] h-[650px] w-[650px] rounded-full bg-[#5b0b18]/20 blur-[220px]" />

                {/* Gold Highlights */}

                <div className="absolute left-1/2 top-[650px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--camel)]/8 blur-[180px]" />

                <div className="absolute left-20 top-[2600px] h-[350px] w-[350px] rounded-full bg-[var(--camel)]/6 blur-[150px]" />

                {/* Vignette */}

                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

                {/* Glass Overlay */}

                <div className="absolute inset-0 bg-black/15 backdrop-blur-[2px]" />

            </div>


            {/* Hero */}

            <section className="relative flex min-h-screen items-center">


                <div className="container relative z-10 mx-auto px-6">

                    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

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
                                className="flex h-12 w-full cta-shine items-center justify-center rounded-xl border border-[#FFE998]/80 bg-transparent px-6 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-[#FFE998] hover:bg-[#FFE998]/8 hover:text-[#FFE998] hover:shadow-[0_0_20px_rgba(255,233,152,0.12)] sm:w-56"
                            >
                                <History size={18} className="mr-2" />
                                Past Shows
                            </a>

                        </motion.div>

                    </div>
                </div>

            </section>

            {/* ==========================================================
                    Featured Upcoming Tour
                ========================================================== */}

            <section
                id="upcoming-tour"
                className="relative py-10"
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

                    <div className="grid items-center gap-10 lg:grid-cols-[420px_minmax(0,1fr)] xl:grid-cols-[480px_minmax(0,1fr)]">

                        {/* Poster */}

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .7 }}
                            className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]"
                        >

                            {upcomingTour?.poster ? (

                                <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">

                                    <Image
                                        src="/images/ART-DXM_Poster.png"
                                        alt={upcomingTour?.title}
                                        width={800}
                                        height={1200}
                                        priority
                                        className="h-auto w-full object-cover transition duration-500 hover:scale-[1.03]"
                                    />

                                </div>

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
                            className="flex flex-col justify-center items-start"
                        >

                            <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.05] px-5 py-2 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.35)]">

                                <span className="h-2 w-2 rounded-full bg-[var(--camel)] shadow-[0_0_10px_rgba(179,153,119,0.8)]" />

                                <span className="gold-text text-[11px] font-semibold uppercase tracking-[0.3em] sm:text-xs">
                                    Upcoming Show
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
