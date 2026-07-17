"use client";

import { motion } from "framer-motion";

const BorderBeam = () => {
    return (
        <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            <div className="absolute left-1/2 top-0 h-3 w-14 -translate-x-1/2 rounded-full bg-[#FFE998] blur-md" />
        </motion.div>
    );
};

export default BorderBeam;