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
                        content="Portfolio của Nguyễn Văn Minh — Full-Stack Web Developer tại Hà Nội. Chuyên PHP/Laravel, React, Next.js và Node.js."
                    />
                    <meta property="og:image" content="./ChatGPT Image 11_54_38 22 thg 4, 2026.png" />
                    <meta property="og:title" content="Minh Nguyen — Full-Stack Developer" />
                    <meta
                        property="og:description"
                        content="Portfolio của Nguyễn Văn Minh — Full-Stack Web Developer tại Hà Nội."
                    />
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