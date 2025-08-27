"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export default function AboutYatraatbharat() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <div
            ref={ref}
            className="min-h-screen mt-4 bg-white px-4 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
            {/* Left: Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="w-full flex justify-center flex-col"
            >
                <div className="overflow-hidden w-full max-w-md md:max-w-full lg:p-20">
                    <Image
                        src="/mahadevnew.webp" // replace with your HD image
                        alt="Kashi Pilgrimage"
                        title="Kashi Spiritual Journey"
                        width={500}
                        height={500}
                        className="object-cover w-full h-auto rounded-xl shadow-lg"
                    />
                </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-4 lg:space-y-6"
            >
                <h3 className="text-b1 font-bold ">About Yatraatbharat</h3>
                <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                    A Spiritual Journey through Kashi, Saurashtra & Thiruvanamalai
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    Yatra is a journey that bridges the gap between sincere spiritual seekers and 
                    Bharat&apos;s ancient, powerful sacred sites. Our mission is to guide participants 
                    on a transformative exploration of India&apos;s hidden spiritual gems, reviving the 
                    traditional pilgrimage paths of the past. 
                </p>
                <p className="text-gray-700 leading-relaxed">
                    &apos;Yatra&apos; a Sanskrit word meaning <em>“journey to the divine”</em>, invites you to 
                    embark on this enriching adventure with us. Join us as we delve into the heart of 
                    India&apos;s spiritual heritage. 
                </p>
                <p className="text-b1 font-semibold italic">Om Namah Shivaya 🙏</p>

                {/* Highlights */}
                <div className="bg-orange-50 p-4 space-y-4 rounded-lg">
                    <div className="flex items-center gap-3">
                        <span className="text-b1 text-xl">✔</span>
                        <p className="font-semibold text-gray-800">Guided Pilgrimages to Kashi, Saurashtra & Thiruvanamalai</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-b1 text-xl">✔</span>
                        <p className="font-semibold text-gray-800">Reviving Traditional Yatra Pathways</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-b1 text-xl">✔</span>
                        <p className="font-semibold text-gray-800">Transformative Spiritual Experiences</p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/contact"
                            className="bg-b1 shine-button text-white font-bold px-6 py-3 flex items-center gap-2 rounded-lg"
                        >
                            Start Your Journey <ArrowRight size={20} />
                        </Link>
                    </motion.div>

                    <Link href="tel:+917227062633" title="Call Yatraatbharat" passHref>
                        <motion.p
                            className="bg-white text-b1 border-2 border-b1 font-bold px-6 py-3 hover:bg-gray-100 transition flex items-center justify-center gap-2 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Call Us: +91 72270 62633
                        </motion.p>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
