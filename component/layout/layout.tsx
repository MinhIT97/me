import Head from "next/head";
import React from "react";
import Example from "../Header";
import Footer from "../Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/outline";

export default function Layout({ children, title, description, thumbnailUrl, url }:
    { children: React.ReactNode, title?: string, description?: string, thumbnailUrl?: string, url?: string }) {
    
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowBackToTop(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <React.StrictMode>
            <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                {/* Reading Progress Bar */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 origin-left z-[60]"
                    style={{ scaleX, background: 'var(--gradient-primary)' }}
                />

                {/* Back to Top Button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0.5 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-3 rounded-full z-[40] shadow-lg transition-transform hover:scale-110 active:scale-95"
                    style={{ 
                        background: 'var(--bg-card)', 
                        border: '1px solid var(--border-accent)',
                        color: 'var(--accent-primary)',
                        display: showBackToTop ? 'flex' : 'none'
                    }}
                >
                    <ChevronUpIcon className="w-6 h-6" />
                </motion.button>
                <Head>
                    <title>Minh Nguyen — Full-Stack Developer</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <meta
                        name="description"
                        content="Professional Portfolio of Nguyễn Văn Minh — Senior Full-Stack Web Developer in Hanoi. Expert in PHP/Laravel, React, Next.js, and Node.js with 6+ years of experience."
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/ChatGPT Image 11_54_38 22 thg 4, 2026.png" />
                    <meta property="og:title" content="Nguyễn Văn Minh — Senior Full-Stack Web Developer" />
                    <meta
                        property="og:description"
                        content="High-performance web applications built with modern technologies. Check out my work and journey."
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Nguyễn Văn Minh — Senior Full-Stack Web Developer" />
                    <meta name="twitter:description" content="Senior Full-Stack Developer specializing in PHP/Laravel and React." />
                    <meta name="twitter:image" content="/ChatGPT Image 11_54_38 22 thg 4, 2026.png" />
                </Head>
                {/* Fixed Navigation */}
                <Example />
                {/* Main Content */}
                <main className="w-full">
                    {children}
                </main>
                {/* Footer */}
                <Footer />
            </div>
        </React.StrictMode>
    )
}