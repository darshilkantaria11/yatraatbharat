// components/Footer.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-white text-black pt-16 pb-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-b1 via-rose-500 to-indigo-500"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-b1/10 blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>

            <motion.div
                className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                {/* Brand section */}
                <div className="lg:col-span-1">
                    <div className="flex items-center mb-5">

                        <Link href="/">
                            <Image
                                src="/Logo.png"      // replace with your logo path
                                alt="YatraatBharat Logo"
                                width={150}          // adjust width as needed
                                height={50}          // adjust height as needed
                                className="object-contain"
                            />
                        </Link>
                    </div>
                    <p className="text-black text-sm leading-relaxed mb-6">
                        YatraatBharat guides spiritual seekers through India's sacred sites —
                        from Kashi to Saurashtra to Thiruvanamalai.
                        Embark on a journey of lifetime to connect with the divine.
                    </p>

                    {/* Social links */}
                    <div className="flex space-x-4">
                        <Link
                            href="https://facebook.com"
                            target="_blank"
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                            aria-label="Facebook"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-colors duration-300"
                            aria-label="Instagram"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <Link
                            href="https://youtube.com"
                            target="_blank"
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                            aria-label="YouTube"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-6 relative inline-block">
                        Quick Links
                        <span className="absolute -bottom-2 left-0 w-8 h-1 bg-b1 rounded-full"></span>
                    </h4>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/" className="text-black hover:text-b1 transition-colors duration-300 flex items-center group">
                                <span className="w-1 h-1 bg-b1 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-black hover:text-b1 transition-colors duration-300 flex items-center group">
                                <span className="w-1 h-1 bg-b1 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-black hover:text-b1 transition-colors duration-300 flex items-center group">
                                <span className="w-1 h-1 bg-b1 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="text-black hover:text-b1 transition-colors duration-300 flex items-center group">
                                <span className="w-1 h-1 bg-b1 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="text-lg font-semibold mb-6 relative inline-block">
                        Resources
                        <span className="absolute -bottom-2 left-0 w-8 h-1 bg-b1 rounded-full"></span>
                    </h4>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/yatra-brochure.pdf" target="_blank" className="text-black hover:text-b1 transition-colors duration-300 flex items-center group">
                                <span className="w-1 h-1 bg-b1 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                E-Brochure
                            </Link>
                        </li>
                        <li>
                            <Link href="/kashi" className="text-black hover:text-b1 transition-colors duration-300 flex items-center group">
                                <span className="w-1 h-1 bg-b1 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                Kashi
                            </Link>
                        </li>
                        <li>
                            <Link href="/saurashtra" className="text-black hover:text-b1 transition-colors duration-300 flex items-center group">
                                <span className="w-1 h-1 bg-b1 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                Saurashtra
                            </Link>
                        </li>
                        <li>
                            <Link href="/thiruvanamalai" className="text-black hover:text-b1 transition-colors duration-300 flex items-center group">
                                <span className="w-1 h-1 bg-b1 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                Thiruvanamalai
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-6 relative inline-block">
                        Contact Us
                        <span className="absolute -bottom-2 left-0 w-8 h-1 bg-b1 rounded-full"></span>
                    </h4>

                    <div className="mb-6 p-4 bg-orange-50 rounded-lg  transition-colors duration-300">
                        <p className="text-sm font-medium text-b1 mb-1">INDIA</p>
                        <p className="font-semibold">Hitarth Jani</p>
                        <Link href="tel:+917227062633" className="text-black hover:text-b1 transition-colors duration-300 flex items-center mt-1">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                            +91 72270 62633
                        </Link>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg  transition-colors duration-300">
                        <p className="text-sm font-medium text-b1 mb-1">USA</p>
                        <p className="font-semibold">Sonal Patel</p>
                        <Link href="tel:+17347251294" className="text-black hover:text-b1 transition-colors duration-300 flex items-center mt-1">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                            +1 734 725 1294
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Bar */}
            <motion.div
                className="border-t border-gray-700 mt-16 pt-8 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400 text-center md:text-left">
                        © {new Date().getFullYear()} <span className="text-b1 font-semibold">YatraatBharat</span>. All Rights Reserved.
                    </p>

                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <span>Made with</span>
                        <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                        <span>for spiritual seekers</span>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}