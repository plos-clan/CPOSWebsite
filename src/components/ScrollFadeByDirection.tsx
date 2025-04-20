"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollFadeByDirection({
                                                  children,
                                                  className = "",
                                              }: {
    children: React.ReactNode;
    className?: string;
}) {
    const controls = useAnimation();
    const [lastScrollY, setLastScrollY] = useState(0);
    const ticking = useRef(false);

    const updateScrollDir = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY + 10) {
            controls.start({ opacity: 0 });
        } else if (currentScrollY < lastScrollY - 10) {
            controls.start({ opacity: 1 });
        }

        setLastScrollY(currentScrollY);
        ticking.current = false;
    };

    const handleScroll = () => {
        if (!ticking.current) {
            window.requestAnimationFrame(updateScrollDir);
            ticking.current = true;
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={controls}
            transition={{ duration: 0.3 }}
            className={`absolute bottom-0 left-0 w-full z-0 pointer-events-none ${className}`}
        >
            {children}
        </motion.div>
    );
}