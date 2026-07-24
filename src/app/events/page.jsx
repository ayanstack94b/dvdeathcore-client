"use client";

import { UpcomingEvents } from "@/data/upcomingEvents";
import Hero from "./Hero";
import TicketInformation from "./TicketInformation";
import FeaturedTour from "./FeaturedTour";
import PastEventsSection from "./PastEventsSection ";
import { pastEventsData } from "@/data/pastEventsData";


export default function EventsPage() {

    const upcomingTour = UpcomingEvents.find((tour) => tour.status === "upcoming");
    pastEventsData.filter((tour) => tour.status === "completed")

    return (
        <main className="relative overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">

            {/* Global Page Background */}
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

            {/* Body */}

            <div className="relative z-10">

                <Hero />

                <FeaturedTour />

                <TicketInformation />

                <PastEventsSection />

                {/* <Gallery /> */}

                {/* <FAQ />  */}

            </div>
        </main>
    );
}
