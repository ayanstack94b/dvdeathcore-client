import { motion } from "framer-motion";
import { UpcomingEvents } from '@/data/upcomingEvents';
import { CalendarDays, Landmark, Building2, Castle, Mountain, Ship, Church, Ticket, Users, ExternalLink, MapPin, } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

const cityIcons = {
    pune: Castle,
    mumbai: Building2,
    guwahati: Mountain,
    kolkata: Landmark,
    trivandrum: Church,
    kochi: Ship,
};

const statusStyles = {
    Available: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        text: "text-emerald-400",
    },

    "Coming Soon": {
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        text: "text-yellow-300",
    },

    "Offline Passes": {
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        text: "text-blue-400",
    },

    "Sold Out": {
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        text: "text-red-400",
    },
};

const TicketInformation = () => {

    const upcomingTour = UpcomingEvents.find(
        (tour) => tour.status === "upcoming"
        
    );
    if (!upcomingTour) return null;

    return (
        <section
            id="TicketInformation"
            className="relative py-24"
        >

            <div className="container mx-auto px-6">

                {/* ==========================================================
                        Section Header
                    ========================================================== */}

                <div className="mx-auto max-w-3xl">

                    <div className="border-l-4 border-[var(--camel)] pl-5 md:pl-8">

                        <span className="gold-text text-xs font-semibold uppercase tracking-[0.3em]">
                            Ticket Information
                        </span>

                        <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                            Choose
                            <span className="text-[var(--camel)]">
                                {" "}Your City
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-[var(--text-secondary)]">
                            Each city has its own promoter, venue and ticket partner.
                            Select your preferred city below to find booking links,
                            organizer information and the latest updates.
                        </p>

                    </div>

                </div>

                {/* ==========================================================
                        Tour Summary
                    ========================================================== */}

                <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur-xl">

                    <div className="grid gap-8 p-4 md:p-6 lg:grid-cols-[1fr_auto] lg:p-8">

                        <div>

                            <p className="gold-text text-xs font-semibold uppercase tracking-[0.3em]">
                                {upcomingTour.title}
                            </p>

                            <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                                {upcomingTour.startDate} — {upcomingTour.endDate}
                            </h3>

                            <p className="mt-5 max-w-2xl leading-8 text-[var(--text-secondary)]">
                                Ticket availability is managed independently by each
                                local organizer. Some cities may offer online booking,
                                while others distribute offline passes or announce
                                details closer to the event date.
                            </p>

                        </div>

                        {/* Tour Stats */}

                        <div className="grid grid-cols-2 gap-4 self-start">

                            <div className="rounded-2xl border border-[var(--border)] bg-black/20 p-5 text-center">

                                <CalendarDays
                                    size={22}
                                    className="mx-auto text-[var(--camel)]"
                                />

                                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--camel)]">
                                    Duration
                                </p>

                                <p className="mt-2 text-lg font-bold">
                                    {upcomingTour.cities.length} Stops
                                </p>

                            </div>

                            <div className="rounded-2xl border border-[var(--border)] bg-black/20 p-5 text-center">

                                <Users
                                    size={22}
                                    className="mx-auto text-[var(--camel)]"
                                />

                                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--camel)]">
                                    Cities
                                </p>

                                <p className="mt-2 text-lg font-bold">
                                    {upcomingTour.cities.length}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* ==========================================================
                        City Cards Grid
                    ========================================================== */}

                <div className="mt-10 grid grid-cols-1 gap-4  lg:grid-cols-3 xl:grid-cols-3">

                    {upcomingTour.cities.map((city, index) => {

                        const Icon = cityIcons[city.id] || Landmark;

                        const badge =
                            statusStyles[city.tickets.status] ||
                            statusStyles["Coming Soon"];

                        return (

                            <motion.div
                                key={city.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.05 }}
                                className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--camel)]/60 hover:shadow-[0_0_35px_rgba(179,153,119,0.08)]"
                            >

                                {/* ==========================================================
                        Card Header
                ========================================================== */}

                                <div className="flex items-start justify-between border-b border-[var(--border)] p-4 md:p-6">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-black/20 text-[var(--camel)] md:h-14 md:w-14">

                                            <Icon size={22} />

                                        </div>

                                        <div>

                                            <h3 className="text-lg font-bold leading-tight md:text-2xl">

                                                {city.name}

                                            </h3>

                                            <p className="mt-1 text-xs text-[var(--text-secondary)] md:text-sm">

                                                {city.state}

                                            </p>

                                        </div>

                                    </div>

                                    <div className="hidden rounded-full border border-[var(--border)] bg-black/20 px-3 py-1 text-[10px] font-semibold tracking-[0.25em] text-[var(--camel)] md:block">

                                        STOP {String(index + 1).padStart(2, "0")}

                                    </div>

                                </div>

                                {/* ==========================================================
                        Card Information
                ========================================================== */}

                                <div className="space-y-4 p-4 md:space-y-5 md:p-6">

                                    {/* Venue */}

                                    <div className="flex items-start gap-3">

                                        <MapPin
                                            size={18}
                                            className="mt-0.5 shrink-0 text-[var(--camel)]"
                                        />

                                        <div>

                                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--camel)]">

                                                Venue

                                            </p>

                                            <p className="mt-1 text-xs leading-6 text-[var(--text-secondary)] md:text-sm">

                                                {city.venue || "Official venue will be announced soon."}

                                            </p>

                                        </div>

                                    </div>

                                    {/* Event */}

                                    <div className="flex items-start gap-3">

                                        <CalendarDays
                                            size={18}
                                            className="mt-0.5 shrink-0 text-[var(--camel)]"
                                        />

                                        <div>

                                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--camel)]">

                                                Event

                                            </p>

                                            <p className="mt-1 text-xs leading-6 text-[var(--text-secondary)] md:text-sm">

                                                {city.event || "Independent Headlining Show"}

                                            </p>

                                        </div>

                                    </div>

                                    {/* Ticket Partner */}

                                    <div className="flex items-start gap-3">

                                        <Ticket
                                            size={18}
                                            className="mt-0.5 shrink-0 text-[var(--camel)]"
                                        />

                                        <div>

                                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--camel)]">

                                                Ticket Partner

                                            </p>

                                            <p className="mt-1 text-xs leading-6 text-[var(--text-secondary)] md:text-sm">

                                                {city.tickets.provider || "Local Organizer"}

                                            </p>

                                        </div>

                                    </div>

                                </div>
                                {/* ==========================================================
        Card Footer
========================================================== */}

                                <div className="border-t border-[var(--border)] p-4 md:p-6">

                                    {/* Status */}

                                    <div className="flex items-center justify-between gap-3">

                                        <span
                                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] md:px-4 md:py-2 md:text-xs ${badge.bg} ${badge.border} ${badge.text}`}
                                        >

                                            <span className="h-2 w-2 rounded-full bg-current" />

                                            {city.tickets.status}

                                        </span>

                                        {city.tickets.mode && (

                                            <span className="rounded-full border border-[var(--border)] bg-black/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">

                                                {city.tickets.mode}

                                            </span>

                                        )}

                                    </div>

                                    {/* Status Message */}

                                    <p className="mt-4 text-xs leading-6 text-[var(--text-secondary)] md:text-sm md:leading-7">

                                        {city.tickets.message}

                                    </p>

                                    {/* CTA */}

                                    <div className="mt-5">

                                        {city.tickets.available ? (

                                            <a
                                                href={city.tickets.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cta-shine flex h-10 w-full items-center justify-center rounded-xl bg-linear-to-br from-[#FFE998] to-[#57370D] text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.02] md:h-12 md:text-sm"
                                            >

                                                <Ticket
                                                    size={16}
                                                    className="mr-2"
                                                />

                                                Book via {city.tickets.provider}

                                            </a>

                                        ) : city.tickets.organiserFacebook ? (

                                            <a
                                                href={city.tickets.organiserFacebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-10 w-full items-center justify-center rounded-xl border border-[var(--camel)] text-xs font-semibold text-[var(--camel)] transition-all duration-300 hover:bg-black hover:text-white md:h-12 md:text-sm"
                                            >

                                                <FaFacebook
                                                    size={16}
                                                    className="mr-2"
                                                />

                                                View Organizer

                                            </a>

                                        ) : city.tickets.facebookEvent ? (

                                            <a
                                                href={city.tickets.facebookEvent}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-10 w-full items-center justify-center rounded-xl border border-[var(--camel)] text-xs font-semibold text-[var(--camel)] transition-all duration-300 hover:bg-[var(--camel)] hover:text-black md:h-12 md:text-sm"
                                            >

                                                <ExternalLink
                                                    size={16}
                                                    className="mr-2"
                                                />

                                                View Event

                                            </a>

                                        ) : (

                                            <button
                                                disabled
                                                className="flex h-10 w-full cursor-not-allowed items-center justify-center rounded-xl border border-[var(--border)] bg-white/[0.03] text-xs font-semibold text-[var(--text-muted)] md:h-12 md:text-sm"
                                            >

                                                Tickets Coming Soon

                                            </button>

                                        )}

                                    </div>

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default TicketInformation;