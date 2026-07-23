"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery({ product }) {
    const [currentImage, setCurrentImage] = useState(0);

    const gallery =
        product.gallery?.length > 0
            ? product.gallery
            : [
                {
                    id: "default",
                    label: "Product",
                    image: product.image,
                },
            ];
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            >
                <Image
                    src={gallery[currentImage].image}
                    alt={product.title}
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 45vw"
                    className="object-contain p-4 sm:p-6 md:p-8"
                />
            </motion.div>
        </AnimatePresence>
    );
}