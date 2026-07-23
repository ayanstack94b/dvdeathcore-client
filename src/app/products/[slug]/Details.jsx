"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

export default function Details({ product }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
        >
            {/* Collection */}

            <p className="text-xs uppercase tracking-[0.3em] text-[var(--camel)]">
                {product.collection}
            </p>

            {/* Title */}

            <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl xl:text-5xl">
                {product.title}
            </h1>

            {/* Subtitle */}

            <p className="mt-3 text-lg text-zinc-400">
                {product.subtitle}
            </p>

            {/* Price */}

            <div className="mt-8">
                <span className="text-4xl font-bold text-white">
                    ₹{product.price}
                </span>
            </div>

            {/* Description */}

            <div className="mt-8">
                <h2 className="mb-3 text-sm uppercase tracking-[0.25em] text-[var(--camel)]">
                    Description
                </h2>

                <p className="leading-8 text-zinc-300">
                    {product.description}
                </p>
            </div>

            {/* Sizes */}

            {product.sizes?.length > 0 && (
                <div className="mt-8">
                    <h2 className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--camel)]">
                        Available Sizes
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {product.sizes.map((size) => (
                            <span
                                key={size}
                                className="rounded-lg border border-[var(--border)] px-5 py-2 text-sm"
                            >
                                {size}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Specifications */}

            {product.specifications && (
                <div className="mt-10">
                    <h2 className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--camel)]">
                        Specifications
                    </h2>

                    <div className="space-y-4">
                        {Object.entries(product.specifications).map(
                            ([key, value]) => (
                                <div
                                    key={key}
                                    className="flex justify-between border-b border-[var(--border)] pb-3"
                                >
                                    <span className="capitalize text-zinc-500">
                                        {key}
                                    </span>

                                    <span className="text-right text-white">
                                        {value}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}

            {/* CTA */}
            <Link
                href={`https://vengeancehouse.com/products/${product.slug}`}
                className="mt-12 cta-shine inline-flex items-center justify-center gap-3 rounded-xl border border-[#f1efec] bg-[#d2bc98] px-8 py-4 font-bold text-[#522a02] shadow-[0_10px_35px_rgba(179,153,119,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_18px_50px_rgba(179,153,119,0.42)]"
            >
                Buy on Vengeance House

                <HiOutlineArrowTopRightOnSquare className="text-lg" />
            </Link>
        </motion.div>
    );
}