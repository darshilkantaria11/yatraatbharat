// components/ServicesSection.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ServicesSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            id: 1,
            title: "Ancient Kashi",
            description: "Kashi is an ancient name of this mystical city given by ancient Hindus. Nobody knows how old this archaic city is. Another name of Kashi is “Varanasi”, linked with two Ganges tributaries forming the city’s borders: Varuna and Assi. Banaras, the most famous local name, means the one full of ‘Rasa’ or juice of life, symbolizing the nine emotions (Navrasas) that make human life rich with experiences.",
            image: "/aarti.webp", // replace with WhatsApp image path
            category: "Our Offerings"
        },
        {
            id: 2,
            title: "Spiritual Thiruvanamalai",
            description: "The holy town of Tiruvannamalai surrounds mystical Arunachala Hill, the abode of Shiva and a premier place of pilgrimage. According to the Puranas, this is where Shiva appeared to Brahma and Vishnu as a pillar of fire, resolving their dispute over supremacy.",
            image: "/thiru.jpeg", // replace with actual image
            category: "Our Offerings"
        },
        {
            id: 3,
            title: "Glorious Saurashtra",
            description: "Saurashtra, also known as Kathiawar, is a peninsular region in Gujarat along the Arabian Sea. Covering about a third of Gujarat, it was once a princely region before merging with Bombay state and later Gujarat in 1961. Its rich history and cultural heritage make it a land of enduring glory.",
            image: "/saurashtra.webp", // replace with actual image
            category: "Our Offerings"
        }
    ];

    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .substring(0, 60);
    };

    // Animation configs
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    const cardHover = {
        scale: 1.03,
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 }
    };

    return (
        <section className="w-full bg-white py-8 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Our Offerings
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Explore the spiritual, cultural, and historical essence of India through our handpicked journeys.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className="relative overflow-hidden shadow-md h-[400px] cursor-pointer rounded-xl"
                            variants={item}
                            whileHover={cardHover}
                            onMouseEnter={() => setHoveredCard(service.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Image with overlay */}
                            <div className="absolute inset-0 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    title={service.title}
                                    fill
                                    className="object-fit transition-transform duration-500"
                                    style={{ transform: hoveredCard === service.id ? 'scale(1.05)' : 'scale(1)' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10">
                                <motion.h3
                                    className="text-xl md:text-2xl font-bold mb-2"
                                    animate={{ y: hoveredCard === service.id ? -10 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {service.title}
                                </motion.h3>

                                <motion.div
                                    animate={{
                                        height: hoveredCard === service.id ? "auto" : 0,
                                        opacity: hoveredCard === service.id ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.p className="text-gray-200 text-sm md:text-base mb-4">
                                        {service.description}
                                    </motion.p>
                                    <Link href={`/offerings/${createSlug(service.title)}`} passHref>
                                        <motion.p
                                            className="inline-flex items-center gap-1 bg-white text-gray-900 font-medium px-3 py-2 text-sm lg:text-base"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            Read More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </motion.p>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
