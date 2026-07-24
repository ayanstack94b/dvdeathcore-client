"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Ticket, History } from "lucide-react";

import { UpcomingEvents } from "@/data/upcomingEvents";

const FeaturedTour = () => {
    const featuredTour = UpcomingEvents.find(
        (tour) => tour.status === "upcoming"
    );

    if (!featuredTour) return null;

    return (
        <section
            id="featured-tour"
            className="relative overflow-hidden pt-5 pb-24"
        >

            {/* Background */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-[var(--camel)]/10 blur-[160px]" />

                <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--bistre)]/30 blur-[180px]" />

            </div>

            <div className="container relative z-10 mx-auto px-6">

                {/* Section Header */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="gold-text text-xs font-semibold uppercase tracking-[0.35em]">
                        Upcoming Tour
                    </span>

                    <h2 className="mt-5 text-4xl font-bold md:text-6xl">
                        Featured
                        <span className="text-[var(--camel)]">
                            {" "}Tour
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl leading-8 text-[var(--text-secondary)]">
                        Catch Disquietude Vengeance live as we take our music
                        across India. Explore the latest tour announcement,
                        cities, dates and prepare for the next chapter.
                    </p>

                </div>

                {/* Main Grid */}

                <div className="grid items-center gap-12 lg:grid-cols-[420px_1fr]">

                    {/* ======================================================
                                    Poster
                    ====================================================== */}

                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/70 p-5 backdrop-blur-xl">

                            <div className="mb-5 inline-flex rounded-full border border-[var(--border)] bg-black/30 px-4 py-2">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--camel)]">
                                    Featured Tour
                                </span>

                            </div>

                            <div className="overflow-hidden rounded-2xl">

                                <Image
                                    src={'/images/ART-DXM_Poster.png'}
                                    alt={featuredTour.title}
                                    width={700}
                                    height={1000}
                                    priority
                                    className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                                />

                            </div>

                        </div>

                    </motion.div>

                    {/* ======================================================
                                    Content
                    ====================================================== */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >

                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--camel)]">

                            {featuredTour.year} INDIA TOUR

                        </span>

                        <h2 className="mt-5 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">

                            {featuredTour.title}

                        </h2>

                        <p className="mt-8 max-w-2xl leading-8 text-[var(--text-secondary)]">

                            {featuredTour.description}

                        </p>

                        {/* Stats */}

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-5 backdrop-blur-xl"
                        >

                            <CalendarDays
                                size={22}
                                className="text-[var(--camel)]"
                            />

                            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[var(--camel)]">
                                Duration
                            </p>

                            <h3 className="mt-2 text-2xl font-bold">
                                {featuredTour.startDate}
                            </h3>

                            <p className="mt-1 text-sm text-[var(--text-secondary)]">
                                to {featuredTour.endDate}
                            </p>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-5 backdrop-blur-xl"
                        >

                            <MapPin
                                size={22}
                                className="text-[var(--camel)]"
                            />

                            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[var(--camel)]">
                                Cities
                            </p>

                            <h3 className="mt-2 text-2xl font-bold">
                                {featuredTour.cities.length}
                            </h3>

                            <p className="mt-1 text-sm text-[var(--text-secondary)]">
                                Across India
                            </p>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-5 backdrop-blur-xl"
                        >

                            <Ticket
                                size={22}
                                className="text-[var(--camel)]"
                            />

                            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[var(--camel)]">
                                Status
                            </p>

                            <h3 className="mt-2 text-2xl font-bold">
                                {featuredTour.status}
                            </h3>

                            <p className="mt-1 text-sm text-[var(--text-secondary)]">
                                Tour Announced
                            </p>

                        </motion.div>

                </div>

                {/* Cities */}

                <div className="mt-10">

                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--camel)]">
                        Tour Stops
                    </p>

                    <div className="flex flex-wrap gap-3">

                        {featuredTour.cities.map((city) => (

                            <span
                                key={city.id}
                                className="rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-4 py-2 text-sm font-medium text-[var(--text-secondary)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--camel)] hover:text-white"
                            >
                                {city.name}
                            </span>

                        ))}

                    </div>

                </div>

                {/* CTA */}

                <div className="mt-12 flex flex-col gap-4 sm:flex-row">

                    <Link
                        href="#TicketInformation"
                        className="cta-shine flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-[#FFE998] to-[#57370D] px-8 text-sm font-semibold text-white"
                    >
                        <Ticket
                            size={18}
                            className="mr-2"
                        />
                        Get Tickets
                    </Link>

                    <Link
                        href="#past-events"
                        className="flex h-12 items-center justify-center rounded-xl border border-[var(--camel)] px-8 text-sm font-semibold text-[var(--camel)] transition-all duration-300 hover:bg-[var(--camel)] hover:text-black"
                    >
                        <History
                            size={18}
                            className="mr-2"
                        />
                        View Timeline
                    </Link>

                </div>

            </motion.div>

        </div>

            </div >

        </section >
    );
};

export default FeaturedTour;