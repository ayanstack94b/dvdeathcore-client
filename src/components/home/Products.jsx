"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

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
export default function Products() {
    const products = [...Array(10)];

    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        const updateVisibleCount = () => {
            setVisibleCount(window.innerWidth >= 1280 ? 4 : 2);
        };

        updateVisibleCount(); // Initial check

        window.addEventListener("resize", updateVisibleCount);

        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % products.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [products.length]);

    const visibleProducts = Array.from(
        { length: visibleCount },
        (_, i) => products[(startIndex + i) % products.length]
    );


    return (
        <section className="relative overflow-hidden bg-[#050505] py-20 md:py-28">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#3A2A21]/30 blur-[180px]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_65%)]" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="relative z-10 mx-auto flex max-w-7xl flex-col px-6"
            >
                {/* Section Heading */}

                <motion.div
                    variants={itemVariants}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--camel)]">
                        Premium Clothing Label
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                        Vengeance House
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                        More than merchandise. A premium collection designed for those who
                        carry the sound beyond the stage.
                    </p>
                </motion.div>

                {/* Product Showcase Placeholder */}

                <motion.div
                    layout
                    className="mt-16 flex gap-5 overflow-hidden"
                >
                    {visibleProducts.map((_, index) => (
                        <motion.div
                            key={`${startIndex}-${index}`}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.6 }}
                            className="group relative w-1/2 xl:w-1/4 shrink-0 overflow-hidden rounded-2xl border border-white/5 bg-[#181818]/80 backdrop-blur-md"
                        >
                            <div className="aspect-[4/5] bg-gradient-to-br from-[#2A2018] via-[#1A1A1A] to-black" />

                            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4">
                                <Link
                                    href="/products/sample-product"
                                    className="cta-shine mb-2 inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#FFE998] to-[#57370D] px-4 text-xs font-medium text-white sm:text-sm"
                                >
                                    View Product
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}

                <motion.div
                    variants={itemVariants}
                    className="mt-14 flex justify-center"
                >
                    <Link
                        href="/products"
                        className="cta-shine inline-flex items-center rounded-lg bg-gradient-to-r from-[#FFE998] to-[#57370D] px-8 py-3 text-sm font-semibold text-white"
                    >
                        Explore Collection
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}