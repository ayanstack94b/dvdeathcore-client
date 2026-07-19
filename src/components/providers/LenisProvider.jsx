"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

export const LenisContext = createContext(null);

export default function LenisProvider({ children }) {

    const lenisRef = useRef(null);

    useEffect(() => {

        const lenis = new Lenis({
            autoRaf: true,
            duration: 1.2,
            smoothWheel: true,
            touchMultiplier: 1.2,
            wheelMultiplier: 1,
        });

        lenisRef.current = lenis;

        return () => {
            lenis.destroy();
        };

    }, []);

    return (
        <LenisContext.Provider value={lenisRef}>
            {children}
        </LenisContext.Provider>
    );
}

export function useLenis() {
    return useContext(LenisContext);
}