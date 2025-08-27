'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
    const [sparks, setSparks] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSparks((prevSparks) => [
                ...prevSparks,
                { id: Math.random(), x: Math.random() * 100, y: Math.random() * 100 },
            ]);
            setTimeout(() => {
                setSparks((prevSparks) => prevSparks.slice(1));
            }, 2000);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="rounded-2xl relative flex flex-col items-center justify-center h-[78vh] lg:h-[86vh] text-white overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/Kashi.jpg')" }} // 🔥 Replace with your image path
        >
            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Floating Sparks Animation */}
            {sparks.map((spark) => (
                <motion.div
                    key={spark.id}
                    className="absolute w-2 h-2 bg-[#f58731] rounded-full shadow-lg"
                    style={{ top: `${spark.y}%`, left: `${spark.x}%` }}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 2 }}
                    transition={{ duration: 2 }}
                />
            ))}

            {/* Main Hero Text */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative z-10 flex flex-col items-center text-center mb-6"
            >
                <div className="mb-4 flex flex-col md:flex-row">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-b2 to-b1"
                    >
                        PRAY.
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400"
                    >
                        EXPLORE.
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-b1 to-b2"
                    >
                        EXPERIENCE.
                    </motion.h1>
                </div>

                {/* Company Description */}
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="text-sm md:text-xl text-gray-200 max-w-4xl px-6"
                >
                    At <span className="text-b2 font-bold">YatraatBharat</span>, we guide you through the sacred city of Kashi and other holy destinations.
                    Discover timeless traditions, spiritual bliss, and journeys that transform your soul.
                </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="relative z-10 flex mt-6 flex-col md:flex-row"
            >
                <motion.a
                    href="/contact"
                    className="shine-button px-6 py-3 bg-b1 text-lg font-bold rounded-full  transition duration-100 m-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Plan My Yatra
                </motion.a>

                <motion.a
                    href="/kashi"
                    className="px-6 py-3 border-2 border-b2 text-lg font-bold rounded-full text-b2 hover:bg-b2 hover:text-white transition duration-100 m-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore Kashi
                </motion.a>
            </motion.div>
        </div>
    );
}
