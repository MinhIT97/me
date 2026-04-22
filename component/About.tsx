import { FolderDownloadIcon } from "@heroicons/react/outline";
import useTrans from "../src/hooks/useTrans";

const skills = [
    "PHP", "Laravel", "JavaScript", "TypeScript",
    "React", "Next.js", "Node.js", "NestJS",
    "MySQL", "MongoDB", "Git", "Docker",
    "Figma", "Ubuntu", "Jenkins", "REST API"
];

function About() {
    const trans = useTrans();

    return (
        <section id="about" style={{ background: 'var(--bg-secondary)' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-10 section-separator">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image */}
                    <div className="relative">
                        {/* Decorative bg element */}
                        <div
                            className="absolute -top-6 -left-6 w-full h-full rounded-2xl"
                            style={{
                                background: 'var(--gradient-primary)',
                                opacity: 0.08,
                                borderRadius: 24,
                                zIndex: 0,
                            }}
                        />
                        {/* Border glow ring */}
                        <div
                            className="absolute -inset-1 rounded-2xl"
                            style={{
                                background: 'var(--gradient-primary)',
                                opacity: 0.25,
                                filter: 'blur(12px)',
                                zIndex: 0,
                            }}
                        />
                        <div
                            className="relative overflow-hidden"
                            style={{
                                borderRadius: 20,
                                border: '1px solid rgba(108, 99, 255, 0.25)',
                                zIndex: 1,
                            }}
                        >
                            <img
                                src="../work.jpg"
                                alt="Minh at work"
                                className="w-full h-auto object-cover"
                                style={{ display: 'block' }}
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(to top, var(--bg-secondary) 0%, transparent 50%)',
                                }}
                            />
                        </div>

                        {/* Experience badge */}
                        <div
                            className="absolute -bottom-5 -right-5 glass-card p-4 rounded-2xl z-10"
                            style={{
                                background: 'var(--bg-tech-icon)',
                                border: '1px solid var(--border-accent)',
                                backdropFilter: 'blur(16px)',
                                WebkitBackdropFilter: 'blur(16px)',
                            }}
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
                                6+
                            </div>
                            <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                                {trans.about.yearsExperience}
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        {/* Section Label */}
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase"
                            style={{
                                background: 'var(--bg-badge)',
                                border: '1px solid var(--border-badge)',
                                color: 'var(--accent-secondary)',
                            }}
                        >
                            {trans.about.badge}
                        </div>

                        <h2 className="section-title mb-4">
                            {trans.home.aboutMe}
                        </h2>

                        <p
                            className="text-base md:text-lg leading-relaxed mb-8"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            {trans.home.introduce}{trans.about.introSuffix}
                        </p>

                        {/* Skills grid */}
                        <div className="mb-8">
                            <h3
                                className="text-sm font-semibold uppercase tracking-wider mb-4"
                                style={{ color: 'var(--text-muted)' }}
                            >
                                {trans.about.techWorking}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Info grid */}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-5 rounded-2xl"
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-subtle)',
                            }}
                        >
                            <div>
                                <div className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>{trans.about.name}</div>
                                <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Nguyễn Văn Minh</div>
                            </div>
                            <div>
                                <div className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>{trans.about.location}</div>
                                <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Hà Nội, Việt Nam</div>
                            </div>
                            <div>
                                <div className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>{trans.about.email}</div>
                                <a
                                    href="mailto:minh0608197@gmail.com"
                                    className="text-sm font-semibold transition-colors break-all"
                                    style={{ color: 'var(--accent-secondary)' }}
                                >
                                    minh0608197@gmail.com
                                </a>
                            </div>
                            <div>
                                <div className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>{trans.about.status}</div>
                                <div className="flex items-center gap-1.5">
                                    <span
                                        className="w-2 h-2 rounded-full"
                                        style={{ background: 'var(--accent-green)', boxShadow: '0 0 6px var(--accent-green)' }}
                                    />
                                    <span className="text-sm font-semibold" style={{ color: 'var(--accent-green)' }}>{trans.about.available}</span>
                                </div>
                            </div>
                        </div>

                        {/* Download CV */}
                        <a
                            href="../Middle-PHP-Laravel-Nguyen-Van-Minh-0986082324.pdf"
                            target="_blank"
                            className="btn-primary inline-flex"
                        >
                            <FolderDownloadIcon width={18} />
                            {trans.about.downloadCV}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
