import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import Logo from "./left_side/Logo.jsx";

export default function App() {
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        function onLoad() {
            setShowIntro(true);
            setTimeout(() => setShowIntro(false), 3500);
        }

        if (document.readyState === "complete") {
            onLoad();
        } else {
            window.addEventListener("load", onLoad);
            return () => window.removeEventListener("load", onLoad);
        }
    }, []);

    // Disable body scroll while intro visible
    useEffect(() => {
        if (showIntro) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [showIntro]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
            },
        },
    };

    const letterVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: [20, -8, 0],
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="relative min-h-screen bg-red-50 overflow-hidden">
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 px-4 bg-red-100"
                        initial={{ y: 0, opacity: 1 }}
                        animate={{ y: "-100%", opacity: 0 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
                    >
                        <motion.div
                            className="flex flex-col items-center gap-6 max-w-4xl mx-auto text-center"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div
                                className="w-32 sm:w-48"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <Logo />
                            </motion.div>
                            <motion.h1 className="text-red-600 text-3xl sm:text-5xl font-bold">
                                { "Welcome to Mamma Mia Restaurant".split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        variants={letterVariants}
                                        style={{ display: "inline-block" }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                )) }
                            </motion.h1>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main content */}
            <Menu />
        </div>
    );
}
