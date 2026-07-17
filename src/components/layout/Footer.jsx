"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaSpotify,
    FaYoutube,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden border-t border-[#C89B3C]/10 bg-[#050505]">

            {/* Ambient Background */}
            <div className="pointer-events-none absolute inset-0">

                <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C89B3C]/8 blur-[160px]" />

                <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#C89B3C]/5 blur-[180px]" />

                <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#C89B3C]/5 blur-[180px]" />

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(5,5,5,.85),#050505)]" />

            </div>

            {/* Top Border Glow */}
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C89B3C]/70 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">

                {/* Top Grid */}
                <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.3fr]">

                    {/* ================================================= */}
                    {/* BRAND */}
                    {/* ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                    >

                        <Link href="/" className="inline-block">

                            <Image
                                src="/images/dvLogo.png"
                                alt="Disquietude Vengeance"
                                width={520}
                                height={220}
                                className="w-64 transition duration-500 hover:scale-[1.02]"
                            />

                        </Link>

                        <p className="mt-8 max-w-md text-sm leading-8 text-gray-400 lg:text-base">
                            Disquietude Vengeance is a Deathcore band from Kolkata, India,
                            forging crushing riffs, relentless breakdowns, and emotionally
                            charged soundscapes. Every release is built to leave an impact
                            beyond the final note.
                        </p>

                        {/* Social Icons */}

                        <div className="mt-8 flex items-center gap-4">

                            <a
                                href="https://open.spotify.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Spotify"
                                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#C89B3C]/20 bg-white/5 text-[#C89B3C] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C] hover:bg-[#C89B3C]/10 hover:text-[#FFE998]"
                            >
                                <FaSpotify className="text-lg transition duration-300 group-hover:scale-110" />
                            </a>

                            <a
                                href="https://youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#C89B3C]/20 bg-white/5 text-[#C89B3C] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C] hover:bg-[#C89B3C]/10 hover:text-[#FFE998]"
                            >
                                <FaYoutube className="text-lg transition duration-300 group-hover:scale-110" />
                            </a>

                            <a
                                href="https://instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#C89B3C]/20 bg-white/5 text-[#C89B3C] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C] hover:bg-[#C89B3C]/10 hover:text-[#FFE998]"
                            >
                                <FaInstagram className="text-lg transition duration-300 group-hover:scale-110" />
                            </a>

                            <a
                                href="https://facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#C89B3C]/20 bg-white/5 text-[#C89B3C] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C] hover:bg-[#C89B3C]/10 hover:text-[#FFE998]"
                            >
                                <FaFacebookF className="text-lg transition duration-300 group-hover:scale-110" />
                            </a>

                        </div>

                    </motion.div>

                    {/* ================================================= */}
                    {/* QUICK LINKS */}
                    {/* ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8, delay: .1 }}
                        viewport={{ once: true }}
                    >

                        <h3 className="mb-6 text-lg font-semibold tracking-wide text-white">
                            Navigation
                        </h3>

                        <ul className="space-y-4">

                            <li>
                                <Link href="/" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="/music" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Music
                                </Link>
                            </li>

                            <li>
                                <Link href="/merch" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Merch
                                </Link>
                            </li>

                            <li>
                                <Link href="/gallery" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Gallery
                                </Link>
                            </li>

                            <li>
                                <Link href="/events" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Events
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Contact
                                </Link>
                            </li>

                        </ul>

                    </motion.div>

                    {/* ================================================= */}
                    {/* MUSIC */}
                    {/* ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8, delay: .2 }}
                        viewport={{ once: true }}
                    >

                        <h3 className="mb-6 text-lg font-semibold tracking-wide text-white">
                            Music
                        </h3>

                        <ul className="space-y-4">

                            <li>
                                <Link href="/music" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Discography
                                </Link>
                            </li>

                            <li>
                                <Link href="/music#albums" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Albums
                                </Link>
                            </li>

                            <li>
                                <Link href="/music#singles" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Singles
                                </Link>
                            </li>

                            <li>
                                <Link href="/videos" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Music Videos
                                </Link>
                            </li>

                            <li>
                                <Link href="/lyrics" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Lyrics
                                </Link>
                            </li>

                            <li>
                                <Link href="/spotify" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Stream Online
                                </Link>
                            </li>

                        </ul>

                    </motion.div>

                    {/* ================================================= */}
                    {/* COMMUNITY */}
                    {/* ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8, delay: .3 }}
                        viewport={{ once: true }}
                    >

                        <h3 className="mb-6 text-lg font-semibold tracking-wide text-white">
                            Community
                        </h3>

                        <ul className="space-y-4">

                            <li>
                                <Link href="/newsletter" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Newsletter
                                </Link>
                            </li>

                            <li>
                                <Link href="/fan-club" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Fan Club
                                </Link>
                            </li>

                            <li>
                                <Link href="/blog" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link href="/faq" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link href="/privacy-policy" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link href="/terms-and-conditions" className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#FFE998]">
                                    Terms & Conditions
                                </Link>
                            </li>

                        </ul>

                    </motion.div>

                    {/* ================================================= */}
                    {/* NEWSLETTER */}
                    {/* ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                        className=" grid gap-8 lg:grid-cols-1"
                    >

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .8, delay: .4 }}
                            viewport={{ once: true }}
                        >

                            <h3 className="mb-6 text-lg font-semibold tracking-wide text-white">
                                Newsletter
                            </h3>

                            <p className="mb-5 text-sm leading-7 text-gray-400">
                                Get notified about new releases, live shows, exclusive merch drops, and band updates.
                            </p>

                            <form className="space-y-3">

                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="h-11 w-full rounded-lg border border-[#C89B3C]/15 bg-black/40 px-4 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#C89B3C]"
                                />

                                <button
                                    type="submit"
                                    className="h-11 w-full rounded-lg bg-gradient-to-r from-[#C89B3C] to-[#7A4E18] text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                                >
                                    Subscribe
                                </button>

                            </form>

                            <p className="mt-4 text-xs leading-6 text-gray-500">
                                No spam. Only music, events, merchandise, and important announcements.
                            </p>

                        </motion.div>



                    </motion.div>


                </div>

                

                {/* ================================================= */}
                {/* FOOTER BOTTOM */}
                {/* ================================================= */}

                <div className="mt-20">

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C89B3C]/30 to-transparent" />

                    <div className="flex flex-col items-center justify-between gap-6 py-8 text-center lg:flex-row lg:text-left">

                        {/* Copyright */}

                        <p className="text-sm leading-7 text-gray-500">
                            © {new Date().getFullYear()} Disquietude Vengeance. All Rights Reserved.
                        </p>

                        {/* Legal */}

                        <div className="flex flex-wrap items-center justify-center gap-6">

                            <Link
                                href="/privacy-policy"
                                className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#FFE998]"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms-and-conditions"
                                className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#FFE998]"
                            >
                                Terms & Conditions
                            </Link>

                            <Link
                                href="/cookies"
                                className="text-sm text-gray-500 transition-colors duration-300 hover:text-[#FFE998]"
                            >
                                Cookie Policy
                            </Link>

                        </div>

                    </div>

                    {/* Credits */}

                    <div className="flex flex-col items-center justify-center gap-2 border-t border-[#C89B3C]/10 py-6 text-center">

                        <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
                            Forged Through Chaos • Driven By Vengeance
                        </p>

                        <p className="text-sm text-gray-500">
                            Designed & Developed by{" "}
                            <span className="font-medium text-[#C89B3C]">
                                Disquietude Vengeance
                            </span>
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );

};

export default Footer;