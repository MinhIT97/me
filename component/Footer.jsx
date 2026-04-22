const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100037561217322",
        icon: (
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/0986082324",
        icon: (
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
    {
        name: "Email",
        href: "mailto:minh0608197@gmail.com",
        icon: (
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        name: "Messenger",
        href: "https://www.facebook.com/messages/t/100037561217322",
        icon: (
            <svg width="18" height="18" fill="currentColor" viewBox="-23 -21 682 682.66669">
                <path d="m317.730469 0c-175.386719 0-317.5625 132.65625-317.5625 296.292969 0 92.660156 45.585937 175.394531 116.972656 229.722656v113.984375l106.574219-60.589844c29.714844 8.558594 61.289062 13.183594 94.015625 13.183594 175.394531 0 317.558593-132.667969 317.558593-296.296875 0-163.640625-142.164062-296.296875-317.558593-296.296875zm32.125 396.46875-81.4375-85.511719-155.859375 85.511719 171.253906-181.328125 82.199219 84.019531 154.128906-84.019531zm0 0" />
            </svg>
        ),
    },
    {
        name: "Skype",
        href: "https://join.skype.com/invite/iHqXa4jo5Y76",
        icon: (
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="m23.309 14.547c1.738-7.81-5.104-14.905-13.139-13.543-4.362-2.707-10.17.352-10.17 5.542 0 1.207.333 2.337.912 3.311-1.615 7.828 5.283 14.821 13.311 13.366 5.675 3.001 11.946-2.984 9.086-8.676zm-7.638 4.71c-2.108.867-5.577.872-7.676-.227-2.993-1.596-3.525-5.189-.943-5.189 1.946 0 1.33 2.269 3.295 3.194.902.417 2.841.46 3.968-.3 1.113-.745 1.011-1.917.406-2.477-1.603-1.48-6.19-.892-8.287-3.483-.911-1.124-1.083-3.107.037-4.545 1.952-2.512 7.68-2.665 10.143-.768 2.274 1.76 1.66 4.096-.175 4.096-2.207 0-1.047-2.888-4.61-2.888-2.583 0-3.599 1.837-1.78 2.731 2.466 1.225 8.75.816 8.75 5.603-.005 1.992-1.226 3.477-3.128 4.253z" />
            </svg>
        ),
    },
];

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            style={{
                background: 'var(--bg-secondary)',
                borderTop: '1px solid var(--border-subtle)',
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2">
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
                                className="text-lg font-bold"
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
                        </div>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                            Full-Stack Developer · Hà Nội, Việt Nam
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.name}
                                className="w-10 h-10 flex items-center justify-center rounded-xl transition-all"
                                style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-subtle)',
                                    color: 'var(--text-secondary)',
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget;
                                    el.style.background = 'var(--bg-badge)';
                                    el.style.borderColor = 'var(--border-accent)';
                                    el.style.color = 'var(--accent-primary)';
                                    el.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget;
                                    el.style.background = 'var(--bg-card)';
                                    el.style.borderColor = 'var(--border-subtle)';
                                    el.style.color = 'var(--text-secondary)';
                                    el.style.transform = 'translateY(0)';
                                }}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-xs text-center md:text-right" style={{ color: 'var(--text-muted)' }}>
                        <div>© {year} Nguyễn Văn Minh</div>
                        <div className="mt-1">Built with Next.js &amp; ❤️</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
