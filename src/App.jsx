import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import Logo from "./left_side/Logo.jsx";

export default function App() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowIntro(false), 3000);
        return () => clearTimeout(timer);
    }, []);

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

    const welcomeText = "Welcome to Mamma Mia Restaurant";

    return (
        <div className="relative min-h-screen bg-red-50 overflow-hidden">
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        className="fixed inset-0 flex flex-col items-center justify-center z-50 px-4 bg-white"
                        initial={{ y: 0, opacity: 1 }}
                        animate={{ y: "-100%", opacity: 0 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
                    >
                        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto text-center">
                            <div className="w-32 sm:w-48">
                                <Logo />
                            </div>
                            <motion.h1
                                className="text-black text-3xl sm:text-5xl font-bold"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {welcomeText.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={letterVariants}
                                        style={{ display: "inline-block" }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.h1>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main content */}
            <Menu />
        </div>
    );
}
