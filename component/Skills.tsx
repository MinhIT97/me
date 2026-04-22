import useTrans from "../src/hooks/useTrans";
import { motion } from "framer-motion";

const technicalSkills = [
    { name: "PHP / Laravel", percent: 85, color: '#6c63ff' },
    { name: "JavaScript / TypeScript", percent: 80, color: '#00d4ff' },
    { name: "React / Next.js", percent: 75, color: '#6c63ff' },
    { name: "CSS / SCSS / Tailwind", percent: 82, color: '#00d4ff' },
    { name: "Node.js / NestJS", percent: 60, color: '#6c63ff' },
    { name: "MySQL / MongoDB", percent: 75, color: '#00d4ff' },
];

const professionalSkills = [
    { name: "Communication", percent: 95, strokeDashoffset: 14.9247 },
    { name: "Team Work", percent: 55, strokeDashoffset: 134.322 },
    { name: "Problem Solving", percent: 85, strokeDashoffset: 44.77 },
    { name: "Creativity", percent: 60, strokeDashoffset: 111.397 },
];

const circumference = 298.493;

function CircularProgress({ percent, name, strokeDashoffset }: { percent: number; name: string; strokeDashoffset: number }) {
    const offset = circumference - (percent / 100) * circumference;

    return (
        <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-3 p-4 rounded-2xl transition-all"
            style={{
                background: 'transparent',
            }}
            onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = 'var(--bg-card-hover)';
                target.style.boxShadow = 'var(--shadow-glow)';
            }}
            onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = 'transparent';
                target.style.boxShadow = 'none';
            }}
        >
            <div className="relative" style={{ width: 110, height: 110 }}>
                <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                    <defs>
                        <linearGradient id={`grad-${name.replace(/\s/g, '')}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6c63ff" />
                            <stop offset="100%" stopColor="#00d4ff" />
                        </linearGradient>
                    </defs>
                    {/* Background track */}
                    <path
                        d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                        fill="none"
                        stroke="var(--border-subtle)"
                        strokeWidth="6"
                    />
                    {/* Progress arc */}
                    <path
                        d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                        fill="none"
                        stroke={`url(#grad-${name.replace(/\s/g, '')})`}
                        strokeWidth="6"
                        strokeLinecap="round"
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: offset,
                        }}
                    />
                </svg>
                {/* Percentage Text */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: 'var(--text-primary)',
                    }}
                >
                    {percent}%
                </div>
            </div>
            <span className="text-sm font-medium text-center" style={{ color: 'var(--text-secondary)' }}>
                {name}
            </span>
        </motion.div>
    );
}

function Skills() {
    const trans = useTrans();

    return (
        <section id="skills" style={{ background: 'var(--bg-primary)' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-10 section-separator">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase"
                        style={{
                            background: 'var(--bg-badge)',
                            border: '1px solid var(--border-badge)',
                            color: 'var(--accent-secondary)',
                        }}
                    >
                        {trans.skills.badge}
                    </div>
                    <h2 className="section-title section-title-center">
                        {trans.skills.title}
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        {trans.skills.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Technical Skills */}
                    <div>
                        <h3
                            className="text-xl font-bold mb-8"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                        >
                            {trans.skills.technicalSkills}
                        </h3>
                        <div className="space-y-6">
                            {technicalSkills.map((skill) => (
                                <motion.div 
                                    key={skill.name}
                                    whileHover={{ x: 10 }}
                                    className="p-3 rounded-xl transition-all hover:glass"
                                >
                                    <div className="candidatos">
                                        <div className="parcial">
                                            <div className="info" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                                <span className="nome">{skill.name}</span>
                                                <span className="percentagem-num">{skill.percent}%</span>
                                            </div>
                                            <div className="progressBar">
                                                <div
                                                    className="percentagem"
                                                    style={{
                                                        width: `${skill.percent}%`,
                                                        background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color === '#6c63ff' ? '#00d4ff' : '#6c63ff'} 100%)`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Skills */}
                    <div>
                        <h3
                            className="text-xl font-bold mb-8"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                        >
                            {trans.skills.professionalSkills}
                        </h3>
                        <div className="grid grid-cols-2 gap-8">
                            {professionalSkills.map((skill) => (
                                <CircularProgress
                                    key={skill.name}
                                    percent={skill.percent}
                                    name={skill.name}
                                    strokeDashoffset={skill.strokeDashoffset}
                                />
                            ))}
                        </div>

                        {/* Additional tool tags */}
                        <div
                            className="mt-10 p-6 rounded-2xl"
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-subtle)',
                            }}
                        >
                            <div className="text-sm font-semibold mb-4" style={{ color: 'var(--text-muted)' }}>
                                {trans.skills.toolsEnv}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Git', 'Docker', 'Jenkins', 'VS Code', 'Linux', 'Figma', 'Postman', 'Nginx'].map((tool) => (
                                    <span key={tool} className="skill-tag">{tool}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
