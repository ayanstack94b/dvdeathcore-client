"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowRight, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { products } from "@/data/products";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
const updateVisibleCount = () => {
    if (window.innerWidth < 1280) {
        setVisibleCount(2);
    } else {
        setVisibleCount(4);
    }
};


export default function Products() {

    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);

    const nextProducts = () => {
        setStartIndex((prev) => (prev + 1) % products.length);
    };

    const prevProducts = () => {
        setStartIndex((prev) =>
            prev === 0 ? products.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const updateVisibleCount = () => {
            setVisibleCount(window.innerWidth >= 1280 ? 4 : 2);
        };

        updateVisibleCount();

        window.addEventListener("resize", updateVisibleCount);

        return () =>
            window.removeEventListener("resize", updateVisibleCount);
    }, []);

    useEffect(() => {
        if (products.length <= visibleCount) return;

        const interval = setInterval(() => {
            nextProducts();
        }, 4000);

        return () => clearInterval(interval);
    }, [visibleCount]);

    const visibleProducts = Array.from(
        { length: Math.min(visibleCount, products.length) },
        (_, i) => products[(startIndex + i) % products.length]
    );
    

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 24,
            filter: "blur(8px)",
        },
        show: (i) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.04,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };
    const title = "Vengeance House";
    const words = title.split(" ");
    return (
        <section className="relative overflow-hidden bg-[#050505] py-10 md:py-38">
            <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />

            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">

                {/* Base */}
                <div className="absolute inset-0 bg-[#050505]" />

                {/* Main VH Ambient Glow */}
                <div className="absolute left-1/2 top-1/2 h-[900px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(52,37,25,0.65)_0%,rgba(179,153,119,0.18)_35%,transparent_78%)] blur-[170px]" />

                {/* Left Warm Atmosphere */}
                <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--bistre)]/18 blur-[190px]" />

                {/* Right Warm Atmosphere */}
                <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--camel)]/12 blur-[180px]" />

                {/* Lower Ambient Reflection */}
                <div className="absolute left-1/2 bottom-[-220px] h-[500px] w-[1400px] -translate-x-1/2 rounded-full bg-[var(--bistre)]/20 blur-[220px]" />

                {/* Soft Grain / Grid */}
                <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:90px_90px]" />

                {/* Top Black Blend */}
                <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#050505] via-[#050505]/85 to-transparent" />

                {/* Bottom Black Blend */}
                <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent" />

                {/* Edge Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(0,0,0,0.78)_100%)]" />

            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"

                className="relative z-10 mx-auto flex max-w-7xl flex-col px-6"
            >
                {/* Section Heading */}
                <motion.div
                    variants={itemVariants}
                    className="mx-auto  flex max-w-5xl flex-col items-center text-center"
                >

                    <p className="text-[11px] uppercase tracking-[0.6em] text-[var(--camel)]">
                        OFFICIAL MERCHANDISE
                    </p>

                    <motion.h2
                        className="mt-4 text-center text-[44px] font-black leading-[0.9] tracking-[-0.05em] text-white sm:text-[58px] lg:text-[76px]"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {words.map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-block whitespace-nowrap">
                                {word.split("").map((char, charIndex) => {
                                    const index =
                                        words.slice(0, wordIndex).join("").length +
                                        wordIndex +
                                        charIndex;

                                    return (
                                        <motion.span
                                            key={charIndex}
                                            custom={index}
                                            variants={letterVariants}
                                            className="inline-block"
                                        >
                                            {char}
                                        </motion.span>
                                    );
                                })}
                                {wordIndex !== words.length - 1 && (
                                    <span className="inline-block w-[0.3em]" />
                                )}
                            </span>
                        ))}
                    </motion.h2>

                    <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[var(--camel)] to-transparent" />

                    <p className="mt-8 max-w-2xl text-[15px] leading-8 text-zinc-400 lg:text-[17px]">
                        Designed with the same uncompromising identity that defines
                        Disquietude Vengeance. Premium apparel and collectibles created for
                        those who live beyond the stage.
                    </p>

                </motion.div>

                {/* Product Showcase Placeholder */}

                <motion.div
                    layout
                    className="mt-16 flex items-center gap-3 md:gap-5"
                >
                    {/* Previous Button */}
                    <button
                        onClick={prevProducts}
                        aria-label="Previous Products"
                        className="hidden sm:flex h-10 w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-zinc-300 transition-all duration-300 hover:border-[var(--camel)] hover:text-white"
                    >
                        <HiOutlineChevronLeft className="text-xl md:text-2xl" />
                    </button>

                    {/* Products */}
                    <div className="flex flex-1 items-stretch gap-4 lg:gap-8 xl:gap-10 overflow-hidden">
                        {visibleProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -60 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative flex-1 rounded-3xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden"
                            >
                                <Link href = {`/products/${product.slug}`} className="block h-full">

                                    {/* Image */}
                                    <div className="relative aspect-square bg-[#0f0f10]">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                                            className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                            priority={product.featured}
                                        />
                                    </div>

                                    {/* Bottom */}
                                    <div className="px-4 pt-4">

                                        <h3 className="truncate text-[13px] font-semibold text-white lg:text-[15px]">
                                            {product.title}
                                        </h3>

                                        <p className="mt-1 text-[12px] font-medium text-[#d2bc98] lg:text-[14px]">
                                            ₹{product.price}
                                        </p>

                                    </div>

                                    <div className="mt-6">
                                        <span className="flex h-11 w-full items-center justify-center bg-[#181716]  text-[11px] font-semibold uppercase tracking-[0.12em] text-[#d2bc98] transition-all duration-300 group-hover:brightness-110 sm:h-12 sm:text-[12px] lg:text-[13px]">
                                            View Product
                                        </span>
                                    </div>

                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextProducts}
                        aria-label="Next Products"
                        className="hidden sm:flex h-10 w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-zinc-300 transition-all duration-300 hover:border-[var(--camel)] hover:text-white"
                    >
                        <HiOutlineChevronRight className="text-xl md:text-2xl" />
                    </button>
                </motion.div>

                {/* CTA */}
                <motion.div
                    variants={itemVariants}
                    className="mt-14 flex justify-center"
                >
                    <Link
                        href="/products"
                        className="group relative inline-flex h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[var(--bistre)] via-[var(--camel)] to-[var(--bistre)] px-6 text-[13px] font-semibold uppercase tracking-[0.15em] text-white shadow-[0_8px_35px_rgba(52,37,25,0.45)] transition-all duration-500 hover:scale-[1.02] sm:h-14 sm:w-auto sm:min-w-[260px] sm:px-10"
                    >
                        {/* Mirror Shine */}
                        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                            <span className="absolute left-[-35%] top-0 h-full w-[30%] -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-[shine_2s_linear_infinite]" />
                        </span>

                        <span className="relative z-10">
                            Browse Collection
                        </span>

                        <HiArrowRight className="relative z-10 text-lg animate-[arrowMove_1.5s_ease-in-out_infinite]" />
                    </Link>
                </motion.div>

            </motion.div>
        </section>
    );
}