import Image from "next/image";
import useTrans from "../../src/hooks/useTrans";
import mountains from '../../public/photo_2024-05-26_13-10-25-removebg-preview.png';
import git from '../../public/Git-Logo-1788C.png';
import laravel from '../../public/laravel.png';
import nextjs from '../../public/next-js.png';
import mysql from '../../public/mysql.png';
import vscode from '../../public/vscode.png';
import ubuntu from '../../public/ubuntu.png';
import figma from '../../public/figma.png';
import nestjs from '../../public/nestjs.png';
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import FloatingBubbles from "../FloatingBubbles";
import { motion } from "framer-motion";

const calculateYearsDifference = () => {
    const startDate = new Date(2019, 10);
    const currentDate = new Date();
    let yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
    if (currentDate.getMonth() < startDate.getMonth() ||
        (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())) {
        yearsDifference--;
    }
    return yearsDifference;
};

const roles = ["Full-Stack Developer", "PHP / Laravel Expert", "React / Next.js Dev", "UI Enthusiast"];

// Tech icons with positions for the floating orbit
const techIcons = [
    { src: git, alt: "Git", style: { top: '12%', left: '5%' }, delay: '0s', size: 44 },
    { src: laravel, alt: "Laravel", style: { top: '5%', right: '12%' }, delay: '0.5s', size: 40 },
    { src: nextjs, alt: "Next.js", style: { top: '38%', left: '-2%' }, delay: '1s', size: 42 },
    { src: mysql, alt: "MySQL", style: { top: '38%', right: '2%' }, delay: '1.5s', size: 46 },
    { src: vscode, alt: "VS Code", style: { bottom: '30%', left: '4%' }, delay: '2s', size: 40 },
    { src: ubuntu, alt: "Ubuntu", style: { bottom: '30%', right: '8%' }, delay: '2.5s', size: 38 },
    { src: figma, alt: "Figma", style: { bottom: '10%', left: '20%' }, delay: '3s', size: 40 },
    { src: nestjs, alt: "NestJS", style: { bottom: '10%', right: '20%' }, delay: '3.5s', size: 40 },
];

function TypewriterText({ texts }: { texts: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const current = texts[currentIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            if (charIndex < current.length) {
                timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            if (charIndex > 0) {
                timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
            } else {
                setIsDeleting(false);
                setCurrentIndex((i) => (i + 1) % texts.length);
            }
        }

        setDisplayText(current.slice(0, charIndex));
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentIndex, texts]);

    return (
        <span>
            <span style={{ color: 'var(--accent-secondary)', fontFamily: 'var(--font-heading)' }}>
                {displayText}
            </span>
            <span
                className="inline-block w-0.5 h-8 ml-1 align-middle"
                style={{
                    background: 'var(--accent-primary)',
                    animation: 'blink 1s step-end infinite',
                    verticalAlign: 'middle',
                }}
            />
        </span>
    );
}

function Me() {
    const yearsDifference = calculateYearsDifference();
    const trans = useTrans();

    const stats = [
        { value: `${yearsDifference}+`, label: trans.me.yearsExp },
        { value: "15+", label: trans.me.projects },
        { value: "4", label: trans.me.companies },
    ];

    return (
        <section id="home" className="hero-section relative overflow-hidden">
            {/* Mesh Background */}
            <div className="mesh-bg">
                <div
                    className="mesh-blob"
                    style={{
                        width: 600,
                        height: 600,
                        background: 'var(--accent-primary)',
                        top: '-10%',
                        left: '-10%',
                        animation: 'mesh-move 20s ease-in-out infinite',
                    }}
                />
                <div
                    className="mesh-blob"
                    style={{
                        width: 400,
                        height: 400,
                        background: 'var(--accent-secondary)',
                        bottom: '-5%',
                        right: '10%',
                        animation: 'mesh-move 15s ease-in-out infinite reverse',
                    }}
                />
                <div
                    className="mesh-blob"
                    style={{
                        width: 300,
                        height: 300,
                        background: 'var(--accent-tertiary)',
                        top: '40%',
                        left: '40%',
                        animation: 'mesh-move 25s ease-in-out infinite 5s',
                    }}
                />
            </div>

            <FloatingBubbles />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 hero-content">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen pt-20 pb-16">

                    {/* Left: Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="hero-text"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium"
                            style={{
                                background: 'var(--bg-badge)',
                                border: '1px solid var(--border-badge)',
                                color: 'var(--accent-secondary)',
                            }}
                        >
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{ background: 'var(--accent-green)', boxShadow: '0 0 8px var(--accent-green)', animation: 'pulse-glow 2s infinite' }}
                            />
                            {trans.me.availableForWork}
                        </motion.div>

                        {/* Greeting */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="text-lg font-medium mb-2"
                            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}
                        >
                            {trans.me.hello}
                        </motion.p>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            <span style={{ color: 'var(--text-primary)' }}>Nguyễn</span>
                            <br />
                            <span className="gradient-text">Văn Minh</span>
                        </motion.h1>

                        {/* Typewriter Role */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="text-2xl md:text-3xl font-semibold mb-6 h-10"
                        >
                            <TypewriterText texts={roles} />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="text-base md:text-lg mb-8 leading-relaxed max-w-lg"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            {trans.me.description1}{' '}
                            <strong style={{ color: 'var(--text-primary)' }}>{yearsDifference} {trans.me.description2}</strong>
                            <br />{trans.me.description3} <strong style={{ color: 'var(--accent-secondary)' }}>PHP/Laravel</strong>,{' '}
                            <strong style={{ color: 'var(--accent-secondary)' }}>React</strong> &amp;{' '}
                            <strong style={{ color: 'var(--accent-secondary)' }}>Next.js</strong>.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            className="flex flex-wrap gap-4 mb-10"
                        >
                            <a href="mailto:minh0608197@gmail.com" className="btn-primary">
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {trans.me.hireMe}
                            </a>
                            <Link href="/projects">
                                <a className="btn-outline">
                                    {trans.me.viewProjects}
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.4 }}
                            className="flex flex-wrap gap-8"
                        >
                            {stats.map((stat, i) => (
                                <motion.div 
                                    key={i} 
                                    className="text-center"
                                    whileHover={{ y: -5 }}
                                >
                                    <div
                                        className="text-3xl font-bold"
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            background: 'var(--gradient-primary)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Avatar + Floating Icons */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Glow ring */}
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: 380,
                                height: 380,
                                background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
                                opacity: 0.15,
                                animation: 'pulse-glow 4s ease-in-out infinite',
                            }}
                        />

                        {/* Avatar Container */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative flex items-end justify-center overflow-hidden"
                            style={{
                                width: 320,
                                height: 380,
                                borderRadius: '50% 50% 40% 40% / 60% 60% 40% 40%',
                                background: 'var(--gradient-card)',
                                border: '1px solid var(--border-accent)',
                                boxShadow: 'var(--shadow-glow-strong)',
                            }}
                        >
                            <Image
                                alt="Nguyễn Văn Minh"
                                src={mountains}
                                placeholder="blur"
                                quality={100}
                                layout="fill"
                                objectFit="contain"
                                objectPosition="center bottom"
                            />
                        </motion.div>

                        {/* Floating Tech Icons */}
                        {techIcons.map((icon, index) => (
                            <motion.div
                                key={icon.alt}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + (index * 0.05), duration: 0.4 }}
                                className="absolute flex items-center justify-center rounded-xl"
                                style={{
                                    ...icon.style,
                                    width: 56,
                                    height: 56,
                                    background: 'var(--bg-tech-icon)',
                                    border: '1px solid var(--border-accent)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                                    animation: `float 4s ease-in-out infinite`,
                                    animationDelay: icon.delay,
                                    padding: 8,
                                }}
                                title={icon.alt}
                            >
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={icon.size}
                                    height={icon.size}
                                    objectFit="contain"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
                style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}
            >
                <span style={{ cursor: 'default' }}>{trans.me.scrollDown}</span>
                <div
                    className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
                    style={{ border: '1px solid var(--border-accent)' }}
                >
                    <div
                        className="w-1 h-2 rounded-full"
                        style={{
                            background: 'var(--accent-primary)',
                            animation: 'float 1.5s ease-in-out infinite',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Me;