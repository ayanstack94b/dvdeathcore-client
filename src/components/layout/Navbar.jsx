"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {  HiOutlineXMark } from "react-icons/hi2";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Music", href: "/music" },
    { name: "Videos", href: "/videos" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
];
export default function Navbar() {
    const lastScrollY = useRef(0);
    const isVisible = useRef(true);
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const navbar = document.getElementById("navbar");

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 10) {
                navbar.style.transform = "translateY(0)";
                isVisible.current = true;
            } else if (
                currentScrollY > lastScrollY.current &&
                isVisible.current
            ) {
                navbar.style.transform = "translateY(-110%)";
                isVisible.current = false;
            } else if (
                currentScrollY < lastScrollY.current &&
                !isVisible.current
            ) {
                navbar.style.transform = "translateY(0)";
                isVisible.current = true;
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            id="navbar"
            initial={{ y: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-x-0 top-0 z-50 transition-transform duration-300"
        >
            <nav className="relative h-20 w-full flex items-center justify-between px-6 lg:px-12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_40%,rgba(0,0,0,0.18)_100%)] backdrop-blur-3xl border-b border-[#C89B3C]/15 shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_40px_rgba(200,155,60,0.08)]">
                {/* Logo */}
                <Link
                    href="/"
                   className="font-brand text-[0.8rem] sm:text-[0.95rem] md:text-lg lg:text-xl font-semibold uppercase tracking-[0.18em] bg-gradient-to-r from-[#A67A28] via-[#FFEE98] to-[#A67A28] bg-clip-text text-transparent">
                    Disquietude Vengeance
                </Link>
                
                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={`group relative pb-2 text-sm uppercase tracking-[0.18em] transition-colors duration-300 ${pathname === link.href
                                        ? "text-[#FFEE98]"
                                        : "text-white hover:text-[#FFEE98]"
                                    }`}
                            >
                                {link.name}

                                <span
                                    className={`absolute bottom-0 left-0 h-[2px] bg-[#FFEE98] transition-all duration-300 ${pathname === link.href
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden flex items-center justify-center text-3xl text-white hover:text-[#FFEE98] transition-all duration-300"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
                </button>
            </nav>

            {/* Animated Mobile menu drop down  */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className=" fixed top-20 right-0 h-[calc(100vh-80px)] w-full bg-black/40 backdrop-blur-3xl border-l border-white/10 lg:hidden">
                        <ul className="flex flex-col py-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block px-8 py-4 text-lg uppercase tracking-[0.18em] transition-colors duration-300 ${pathname === link.href
                                                ? "text-[#FFEE98]"
                                                : "text-white hover:text-[#FFEE98]"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}