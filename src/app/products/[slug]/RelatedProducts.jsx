"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RelatedProducts({ products }) {
    if (!products?.length) return null;

    return (
        <section className="relative overflow-hidden border-t border-[var(--border)] py-20">

            <div className="mx-auto mb-12 max-w-7xl px-5 lg:px-8">

                <p className="text-xs uppercase tracking-[0.3em] text-[#d2bc98]">
                    By Vengeance House
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                    More Products
                </h2>

            </div>

            {/* Desktop */}

            <div className="mx-auto hidden max-w-7xl grid-cols-4 gap-8 px-5 lg:grid lg:px-8">

                {products.map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

            {/* Mobile Marquee */}

            <div className="overflow-hidden lg:hidden">

                <motion.div
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 22,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex w-max gap-5"
                >

                    {[...products, ...products].map((product, index) => (

                        <div
                            key={`${product.id}-${index}`}
                            className="w-[170px]"
                        >

                            <ProductCard product={product} />

                        </div>

                    ))}

                </motion.div>

            </div>

        </section>
    );
}

function ProductCard({ product }) {
    return (
        <Link href={`/products/${product.slug}`}>

            <motion.div
                whileHover={{
                    y: -8,
                }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition"
            >

                <div className="relative aspect-square overflow-hidden rounded-xl">

                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="200px"
                        className="object-contain transition duration-500 group-hover:scale-105"
                    />

                </div>

                <h3 className="mt-5 line-clamp-2 text-lg font-semibold">
                    {product.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                    {product.subtitle}
                </p>

                <div className="mt-4 flex items-center justify-between">

                    <span className="text-lg font-bold">
                        ₹{product.price}
                    </span>

                    <span
                        href={`/products/${product.slug}`}
                        className="inline-flex cta-shine items-center gap-2 rounded-lg bg-[#d2bc98] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#522a02] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dfcba9] hover:shadow-[0_8px_20px_rgba(210,188,152,0.35)]"
                    >
                        View
                    </span >

                </div>

            </motion.div>

        </Link>
    );
}