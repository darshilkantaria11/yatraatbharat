// components/ParallaxSection.js
'use client';
import { motion } from "framer-motion";
import Link from "next/link";

const ParallaxSection = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/sleepingsadhu.webp')", // replace with your image path
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Kashi</h2>
        <p className="text-xl md:text-2xl font-light mb-8">A Journey Of Lifetime</p>

        <Link
          href="/yatra-brochure.pdf" // replace with actual brochure link
          target="_blank"
          className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Download Our E-Brochure
        </Link>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
