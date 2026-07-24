"use client";

import { pastEventsData } from "@/data/pastEventsData";
import { motion } from "framer-motion";
import { Music2 } from "lucide-react";
import Image from "next/image";
import { GiChewedSkull } from "react-icons/gi";


export default function PastEventsSection() {

    const groupedEvents = pastEventsData.reduce((acc, event) => {

        if (!acc[event.year]) {
            acc[event.year] = [];
        }

        acc[event.year].push(event);

        return acc;

    }, {});

    const years = Object.keys(groupedEvents)
        .sort((a, b) => Number(b) - Number(a));

return (

        <section
            id="past-events"
            className="relative overflow-hidden py-24"
        >

            {/* ==========================================================
                    Background
            ========================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-[var(--camel)]/10 blur-[170px]" />

                <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--bistre)]/25 blur-[180px]" />

            </div>

            <div className="container relative z-10 mx-auto px-6">

                {/* ==========================================================
                        Section Header
                ========================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-20 max-w-3xl text-center"
                >

                    <span className="gold-text text-xs font-semibold uppercase tracking-[0.35em]">

                        Live History

                    </span>

                    <h2 className="mt-5 text-4xl font-bold md:text-6xl">

                        Past

                        <span className="text-[var(--camel)]">

                            {" "}Events

                        </span>

                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl leading-8 text-[var(--text-secondary)]">

                        Every stage tells part of the story. Explore
                        Disquietude Vengeance's journey through album launches,
                        tours, festivals and underground performances across
                        India and Nepal.

                    </p>

                </motion.div>
                {/* ==========================================================
                        Event Archive
                ========================================================== */}

                <div className="space-y-20">

                    {years.map((year) => (

                        <motion.div
                            key={year}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >

                            {/* ==========================================================
                                    Year Header
                            ========================================================== */}

                            <div className="mb-10 flex items-center gap-6">

                                <h3 className="text-5xl font-bold text-[var(--camel)] md:text-7xl">

                                    {year}

                                </h3>

                                <div className="h-px flex-1 bg-[var(--border)]" />

                            </div>

                            {/* ==========================================================
                                    Year Events
                            ========================================================== */}

                            <div className="space-y-6">

                                {groupedEvents[year].map((event) => (

                                    <motion.article
                                        key={event.id}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.25 }}
                                        className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur-xl"
                                    >

                                        {/* ==========================================================
                                                Card Content
                                        ========================================================== */}

                                        <div className="grid gap-8 p-6 lg:grid-cols-[220px_1fr] lg:p-8">

                                            {/* ==========================================================
        Left Side
========================================================== */}

                                            <div className="flex items-center justify-center">

                                                {event.poster ? (

                                                    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-black/20">

                                                        <Image
                                                            src={event.poster}
                                                            alt={event.title}
                                                            width={320}
                                                            height={427}
                                                            className="h-[220px] w-[165px] object-cover transition duration-500 group-hover:scale-105"
                                                        />

                                                    </div>

                                                ) : (

                                                    <div className="flex aspect-[3/4] w-40 items-center justify-center rounded-2xl border border-[var(--border)] bg-black/20">

                                                            <GiChewedSkull
                                                            size={56}
                                                            className="text-[var(--camel)]"
                                                        />

                                                    </div>

                                                )}

                                            </div>

                                            {/* Right Side */}

                                            <div>

                                                {/* ==========================================================
            Badges
    ========================================================== */}

                                                <div className="flex flex-wrap items-center gap-3">

                                                    <span className="rounded-full border border-[var(--border)] bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--camel)]">

                                                        {(event.type || "Show").toUpperCase()}

                                                    </span>

                                                    {event.featured && (

                                                        <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--glass)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--camel)] backdrop-blur-md">

                                                            ★ Featured

                                                        </span>

                                                    )}

                                                    <span className="rounded-full border border-[var(--border)] bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-secondary)]">

                                                        {event.year || "Unknown"}

                                                    </span>

                                                </div>



                                                {/* ==========================================================
            Title
    ========================================================== */}

                                                <h4 className="mt-5 text-3xl font-bold text-[var(--text-primary)]">

                                                    {event.title || "Untitled Event"}

                                                </h4>



                                                {/* ==========================================================
            Organizer
    ========================================================== */}

                                                <p className="mt-3 text-sm text-[var(--text-secondary)]">

                                                    <span className="font-semibold text-[var(--camel)]">

                                                        Organized by

                                                    </span>

                                                    {" "}

                                                    {event.organizer || "Unknown Organizer"}

                                                </p>



                                                {/* ==========================================================
            Information Grid
    ========================================================== */}

                                                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                                                    <div className="rounded-xl border border-[var(--border)] bg-black/20 p-4">

                                                        <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">

                                                            Date

                                                        </p>

                                                        <p className="mt-2 font-medium text-[var(--text-primary)]">

                                                            {event.date
                                                                ? new Date(event.date).toLocaleDateString("en-GB", {
                                                                    day: "2-digit",
                                                                    month: "long",
                                                                    year: "numeric",
                                                                })
                                                                : "TBA"}

                                                        </p>

                                                    </div>

                                                    <div className="rounded-xl border border-[var(--border)] bg-black/20 p-4">

                                                        <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">

                                                            Venue

                                                        </p>

                                                        <p className="mt-2 font-medium text-[var(--text-primary)]">

                                                            {event.venue || "Venue TBA"}

                                                        </p>

                                                    </div>

                                                    <div className="rounded-xl border border-[var(--border)] bg-black/20 p-4">

                                                        <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">

                                                            City

                                                        </p>

                                                        <p className="mt-2 font-medium text-[var(--text-primary)]">

                                                            {event.city || "Unknown"}

                                                        </p>

                                                    </div>

                                                    <div className="rounded-xl border border-[var(--border)] bg-black/20 p-4">

                                                        <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">

                                                            Country

                                                        </p>

                                                        <p className="mt-2 font-medium text-[var(--text-primary)]">

                                                            {[event.state, event.country].filter(Boolean).join(", ") || "Unknown"}

                                                        </p>

                                                    </div>

                                                </div>



                                                {/* ==========================================================
            Description
    ========================================================== */}

                                                {event.description && (

                                                    <p className="mt-8 leading-8 text-[var(--text-secondary)]">

                                                        {event.description}

                                                    </p>

                                                )}

                                            </div>
                                        </div>

                                    </motion.article>

                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}