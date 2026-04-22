import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Toggle from "./Toggle";
import AudioPlayer from "./AudioPlayer";
import useTrans from "../src/hooks/useTrans";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
];

export default function Header() {
    const router = useRouter();
    const trans = useTrans();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => router.pathname === href;

    return (
        <header
            className="fixed z-50 w-full top-0 left-0 transition-all duration-300"
            style={{
                background: scrolled
                    ? 'rgba(7, 7, 15, 0.85)'
                    : 'rgba(7, 7, 15, 0.4)',
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
                                        <Link key={link.href} href={link.href}>
                                            <a
                                                className="relative text-sm font-medium transition-colors duration-200 py-1"
                                                style={{
                                                    color: isActive(link.href)
                                                        ? 'var(--accent-primary)'
                                                        : 'var(--text-secondary)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (!isActive(link.href))
                                                        (e.target as HTMLElement).style.color = 'var(--text-primary)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (!isActive(link.href))
                                                        (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                                                }}
                                            >
                                                {link.label}
                                                {isActive(link.href) && (
                                                    <span
                                                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                                                        style={{ background: 'var(--gradient-primary)' }}
                                                    />
                                                )}
                                            </a>
                                        </Link>
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
                                                        src={locale === 'vi' ? './vietnam.png' : './united-kingdom.png'}
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
                                        Hire Me
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
                                    background: 'rgba(7, 7, 15, 0.95)',
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
                                    <div className="flex items-center gap-3 pt-2">
                                        {router.locales?.map((locale) => (
                                            <Link key={locale} href={router.asPath} locale={locale}>
                                                <a onClick={() => close()} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                                    <img width={20} src={locale === 'vi' ? './vietnam.png' : './united-kingdom.png'} alt={locale} style={{ borderRadius: 2 }} />
                                                    {locale === 'vi' ? 'Tiếng Việt' : 'English'}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>

                                    <a
                                        href="mailto:minh0608197@gmail.com"
                                        className="btn-primary justify-center mt-2"
                                    >
                                        Hire Me
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
