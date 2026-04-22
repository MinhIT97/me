import Head from "next/head";
import React from "react";
import Example from "../Header";
import Footer from "../Footer";

export default function Layout({ children, title, description, thumbnailUrl, url }:
    { children: React.ReactNode, title?: string, description?: string, thumbnailUrl?: string, url?: string }) {
    return (
        <React.StrictMode>
            <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
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