import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Toggle from "./Toggle";
import AudioPlayer from "./AudioPlayer";
import useTrans from "../src/hooks/useTrans";



export default function Header() {
    const router = useRouter();
    const trans = useTrans();
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { label: trans.home.home, href: "#home", id: "home" },
        { label: trans.home.about, href: "#about", id: "about" },
        { label: trans.home.projects, href: "#projects", id: "projects" },
        { label: trans.home.contact, href: "#contact", id: "contact" },
    ];

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);

        // Intersection Observer for Active Section
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ["home", "about", "projects", "contact"];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const isActive = (id: string) => activeSection === id;

    return (
        <header
            className="fixed z-50 w-full top-0 left-0 transition-all duration-300"
            style={{
                background: scrolled
                    ? 'var(--bg-header-scrolled)'
                    : 'var(--bg-header-transparent)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: scrolled
                    ? '1px solid rgba(108, 99, 255, 0.15)'
                    : '1px solid transparent',
                boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
            }}
        >
            <Popover className="relative">
                {({ open, close }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-6 md:px-10">
                            <div className="flex justify-between items-center h-16 md:h-20">
                                {/* Logo */}
                                <Link href="/">
                                    <a className="flex items-center gap-2 group">
                                        <img
                                            src="/ChatGPT Image 11_54_38 22 thg 4, 2026.png"
                                            alt="Minh Nguyen"
                                            className="w-9 h-9 rounded-full object-cover"
                                            style={{
                                                border: '2px solid transparent',
                                                background: 'var(--gradient-primary)',
                                                padding: '1px'
                                            }}
                                        />
                                        <span
                                            className="text-lg font-bold hidden sm:block"
                                            style={{
                                                fontFamily: 'var(--font-heading)',
                                                background: 'var(--gradient-text)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                            }}
                                        >
                                            Minh Nguyen
                                        </span>
                                    </a>
                                </Link>

                                {/* Desktop Nav */}
                                <nav className="hidden md:flex items-center gap-8">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.id}
                                            href={link.href}
                                            className="relative text-sm font-medium transition-colors duration-200 py-1 cursor-pointer"
                                            style={{
                                                color: isActive(link.id)
                                                    ? 'var(--accent-primary)'
                                                    : 'var(--text-secondary)',
                                            }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                        >
                                            {link.label}
                                            {isActive(link.id) && (
                                                <span
                                                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                                                    style={{ background: 'var(--gradient-primary)' }}
                                                />
                                            )}
                                        </a>
                                    ))}

                                    {/* Divider */}
                                    <div
                                        className="w-px h-5"
                                        style={{ background: 'var(--border-subtle)' }}
                                    />

                                    {/* Language Toggle */}
                                    <div className="flex items-center gap-2">
                                        {router.locales?.map((locale) => (
                                            <Link key={locale} href={router.asPath} locale={locale}>
                                                <a
                                                    className="transition-transform hover:scale-110 flex items-center"
                                                    title={locale === 'vi' ? 'Tiếng Việt' : 'English'}
                                                    style={{
                                                        opacity: router.locale === locale ? 1 : 0.5,
                                                    }}
                                                >
                                                    <img
                                                        width={22}
                                                        src={locale === 'vi' ? '/vietnam.png' : '/united-kingdom.png'}
                                                        alt={locale}
                                                        style={{ borderRadius: 3 }}
                                                    />
                                                </a>
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Dark Mode Toggle */}
                                    <Toggle />

                                    {/* Audio Player */}
                                    <AudioPlayer />

                                    {/* CTA Button */}
                                    <a
                                        href="mailto:minh0608197@gmail.com"
                                        className="btn-primary text-sm px-5 py-2"
                                    >
                                        {trans.me.hireMe}
                                    </a>
                                </nav>

                                {/* Mobile Menu Button */}
                                <div className="md:hidden flex items-center gap-3">
                                    <Toggle />
                                    <Popover.Button
                                        className="p-2 rounded-lg transition-colors"
                                        style={{
                                            background: 'var(--bg-card)',
                                            border: '1px solid var(--border-subtle)',
                                            color: 'var(--text-secondary)',
                                        }}
                                    >
                                        <span className="sr-only">Open menu</span>
                                        {open ? (
                                            <XIcon className="h-5 w-5" />
                                        ) : (
                                            <MenuIcon className="h-5 w-5" />
                                        )}
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Panel */}
                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition duration-200 ease-out"
                            enterFrom="opacity-0 -translate-y-2"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition duration-150 ease-in"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-2"
                        >
                            <Popover.Panel
                                static
                                className="absolute w-full top-full left-0"
                                style={{
                                    background: 'var(--bg-mobile-menu)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    borderBottom: '1px solid var(--border-subtle)',
                                }}
                            >
                                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <Link key={link.href} href={link.href}>
                                            <a
                                                onClick={() => close()}
                                                className="flex items-center gap-3 py-3 px-4 rounded-xl transition-all"
                                                style={{
                                                    background: isActive(link.href)
                                                        ? 'rgba(108, 99, 255, 0.12)'
                                                        : 'transparent',
                                                    color: isActive(link.href)
                                                        ? 'var(--accent-primary)'
                                                        : 'var(--text-secondary)',
                                                    border: '1px solid',
                                                    borderColor: isActive(link.href)
                                                        ? 'rgba(108, 99, 255, 0.25)'
                                                        : 'transparent',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {link.label}
                                            </a>
                                        </Link>
                                    ))}

                                    {/* Language flags */}
                                    <div className="flex items-center gap-6 pt-4 px-4 border-t border-gray-800" style={{ borderColor: 'var(--border-subtle)' }}>
                                        {router.locales?.map((locale) => (
                                            <Link key={locale} href={router.asPath} locale={locale}>
                                                <a onClick={() => close()} className="flex items-center gap-2 text-sm font-medium" style={{ color: router.locale === locale ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                                                    <img width={24} src={locale === 'vi' ? '/vietnam.png' : '/united-kingdom.png'} alt={locale} style={{ borderRadius: 3, opacity: router.locale === locale ? 1 : 0.6 }} />
                                                    {locale === 'vi' ? 'Tiếng Việt' : 'English'}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>

                                    <a
                                        href="mailto:minh0608197@gmail.com"
                                        className="btn-primary justify-center mt-2"
                                    >
                                        {trans.me.hireMe}
                                    </a>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </header>
    );
}
