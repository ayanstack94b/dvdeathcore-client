
import Image from "next/image";
import Link from "next/link";
import BorderBeam from "../ui/BorderBeam";
import { HiOutlineMusicalNote } from "react-icons/hi2";

export default function AboutUs() {
    return (
        <section className="relative overflow-hidden bg-[#050505] py-16 md:py-20 lg:py-32">

            {/* Ambient Glow */}
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[180px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5">

                {/* Section Heading */}
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">

                    <span className="mb-4 inline-flex rounded-full border border-[#C89B3C]/20 bg-[#C89B3C]/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#C89B3C] backdrop-blur-xl md:text-xs">
                        ABOUT DISQUIETUDE VENGEANCE
                    </span>

                    <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
                        Forged Through Chaos.
                        <br />
                        Driven By Vengeance.
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-8 text-gray-400 md:text-base">
                        More than a deathcore band, Disquietude Vengeance is a creative force built upon relentless music,
                        immersive visuals, uncompromising craftsmanship, and an ever-growing community united through heavy art.
                    </p>

                </div>

                {/* Main Glass Card */}
                <div className="relative isolate overflow-hidden rounded-[32px] border border-white/10">

                    {/* Background Image */}
                    <Image
                        src="/images/Band-2.png"
                        alt="Disquietude Vengeance performing live"
                        fill
                        priority
                        className="object-cover object-center grayscale"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/75" />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#050505]/70 via-[#050505]/45 to-[#050505]/90" />

                    {/* Gold Glow */}
                    <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#C89B3C]/15 blur-[160px]" />

                    <div className="absolute -left-20 bottom-0 h-[320px] w-[320px] rounded-full bg-[#C89B3C]/10 blur-[160px]" />

                    {/* Glass Layer */}
                    <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[3px]" />

                    {/* Noise */}
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url('/images/noise.png')" }} />

                    {/* Content */}
                    <div className="relative z-20 flex min-h-[520px] items-center p-8 md:min-h-[600px] md:p-12 lg:min-h-170 lg:w-3/5 lg:p-16">

                        <div>

                            <div className="mb-8 flex justify-center md:justify-start">

                                <div className="relative inline-flex overflow-hidden rounded-full p-px">

                                    <BorderBeam />

                                    <div className="relative rounded-full border border-[#C89B3C]/20 bg-black/40 px-5 py-2 backdrop-blur-xl">

                                        <span className="text-[9px] text-center font-bold uppercase tracking-[0.3em] text-[#C89B3C] md:text-xs">
                                            Independent Deathcore Band
                                        </span>

                                    </div>

                                </div>

                            </div>

                            <h3 className="mb-6 text-left text-4xl font-black leading-tight text-white md:text-left md:text-5xl">
                                Music That Leaves
                                <br />
                                Scars, Not Memories.
                            </h3>

                            <p className="mb-6 text-left text-sm leading-8 text-gray-300 md:text-left md:text-base">
                                Emerging from Kolkata, India, Disquietude Vengeance delivers an uncompromising blend of crushing
                                deathcore, cinematic storytelling, and emotionally charged songwriting. Every release is built to
                                confront fear, suffering, resilience, and the darker realities of human existence.
                            </p>

                            <p className="mb-10 text-left text-sm leading-8 text-gray-300 md:text-left md:text-base">
                                Beyond the music, Disquietude Vengeance continues to
                                evolve into a complete creative ecosystem. From
                                immersive live performances and cinematic visuals to
                                exclusive merchandise and ambitious future projects,
                                every creation is designed to leave a lasting impact
                                on listeners and strengthen the global underground
                                metal community.
                            </p>

                            {/* Stats */}
                            <div className="mb-10 grid grid-cols-2 gap-5 md:grid-cols-4">

                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

                                    <h4 className="mb-2 text-3xl font-black text-[#C89B3C]">
                                        2021
                                    </h4>

                                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                                        Founded
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

                                    <h4 className="mb-2 text-3xl  font-black text-[#C89B3C]">
                                        9
                                    </h4>

                                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                                        Tracks Released
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

                                    <h4 className="mb-2 text-3xl font-black text-[#C89B3C]">
                                        1
                                    </h4>

                                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                                        Studio Album
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

                                    <h4 className="mb-2 text-3xl font-black text-[#C89B3C]">
                                        IN
                                    </h4>

                                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                                        Kolkata, India
                                    </p>

                                </div>

                            </div>

                            {/* CTA */}
                            <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">

                                <Link
                                    href="/about"
                                    className="flex h-12 w-full items-center justify-center rounded-xl bg-linear-to-br from-[#FFE998] to-[#57370D] text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110 sm:w-56"
                                >
                                    Discover Our Story
                                </Link>

                                <Link
                                    href="/music"
                                    className="flex h-12 w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[#C89B3C]/40 hover:bg-white/10 sm:w-56"
                                >
                                    <HiOutlineMusicalNote className="text-lg mr-3 text-[#FFE998]" />
                                    Explore Music
                                </Link>

                            </div>

                        </div>

                    </div>

                    {/* Bottom Gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />

                    {/* Top Highlight */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                    {/* Left Highlight */}
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

                    {/* Right Highlight */}
                    <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                </div>

            </div>

        </section>
    );
}


