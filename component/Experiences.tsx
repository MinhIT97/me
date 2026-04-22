import useTrans from "../src/hooks/useTrans";
import { motion } from "framer-motion";



const techColors: Record<string, string> = {
    Laravel: '#FF2D20',
    React: '#61DAFB',
    Angular: '#DD0031',
    jQuery: '#0769AD',
    MySQL: '#4479A1',
    MongoDB: '#47A248',
    Jenkins: '#D33833',
    MithrilJS: '#7b63ff',
    'Node.js': '#339933',
    'Next.js': '#ffffff',
    Vuejs: '#4FC08D',
    Javascript: '#F7DF1E',
};

function TimelineItem({ item, index, isLast }: { item: any; index: number; isLast: boolean }) {
    const isEdu = item.type === 'education';
    const trans = useTrans();

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-12 pb-12 last:pb-0"
        >
            {/* Timeline Line & Light Beam Container */}
            <div 
                className="absolute z-0"
                style={{ 
                    left: '7px',
                    top: '32px',
                    bottom: '8px',
                    width: '100px', // Large area for light to spread
                    pointerEvents: 'none'
                }}
            >
                {/* The Neon Beam casting right */}
                <div 
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '100%',
                        background: `linear-gradient(90deg, ${isEdu ? 'var(--accent-primary)' : 'var(--accent-secondary)'}80, transparent)`,
                        filter: 'blur(12px)',
                        opacity: 0.6
                    }}
                />

                {/* The Sharp Core Line */}
                <div 
                    style={{ 
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        borderRadius: '2px',
                        background: isLast 
                            ? `linear-gradient(to bottom, ${isEdu ? 'var(--accent-primary)' : 'var(--accent-secondary)'}, transparent)` 
                            : (isEdu ? 'var(--accent-primary)' : 'var(--accent-secondary)'),
                        boxShadow: `0 0 10px ${isEdu ? 'var(--accent-primary)' : 'var(--accent-secondary)'}`
                    }}
                />
            </div>

            {/* Timeline Node (Firefly Effect) */}
            <motion.div 
                animate={{ 
                    y: [0, -3, 0, 3, 0],
                    x: [0, 2, 0, -2, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                    duration: 4 + index, 
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute left-0 top-2 w-4 h-4 rounded-full flex items-center justify-center z-10"
                style={{ 
                    background: 'var(--bg-primary)',
                    border: `2px solid ${isEdu ? 'var(--accent-primary)' : 'var(--accent-secondary)'}`,
                    boxShadow: `0 0 15px ${isEdu ? 'var(--accent-primary)' : 'var(--accent-secondary)'}`
                }}
            >
                <motion.div 
                    animate={{ 
                        opacity: [0.4, 1, 0.4],
                        scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                        duration: 2 + index * 0.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ 
                        background: isEdu ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                        boxShadow: `0 0 10px ${isEdu ? 'var(--accent-primary)' : 'var(--accent-secondary)'}`
                    }}
                />
            </motion.div>

            <motion.div
                whileHover={{ y: -5, boxShadow: `0 20px 40px rgba(0,0,0,0.4)` }}
                className="glass-card p-6 rounded-2xl relative"
                style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderLeft: `2px solid ${isEdu ? 'var(--accent-primary)' : 'var(--accent-secondary)'}44`,
                    boxShadow: `15px 15px 30px rgba(0,0,0,0.3), inset 0 0 20px ${isEdu ? 'var(--accent-primary)' : 'var(--accent-secondary)'}05`
                }}
            >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                        <h4
                            className="text-lg font-bold mb-1"
                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                        >
                            {item.title || item.degree}
                        </h4>
                        <div className="flex items-center gap-2">
                            <span
                                className="text-sm font-semibold"
                                style={{ color: isEdu ? 'var(--accent-primary)' : 'var(--accent-secondary)' }}
                            >
                                {item.company || item.school}
                            </span>
                            {item.schoolFull && (
                                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                    – {item.schoolFull}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        {item.current && (
                            <span
                                className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium"
                                style={{
                                    background: 'rgba(0, 229, 160, 0.12)',
                                    border: '1px solid rgba(0, 229, 160, 0.3)',
                                    color: 'var(--accent-green)',
                                }}
                            >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: 'var(--accent-green)', boxShadow: '0 0 6px var(--accent-green)' }}
                                    />
                                    {trans.experiences.current}
                                </span>
                            )}
                        <span
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                                background: 'rgba(108, 99, 255, 0.05)',
                                border: '1px solid var(--border-subtle)',
                                color: 'var(--text-secondary)',
                            }}
                        >
                            {item.period}
                        </span>
                    </div>
                </div>

                {/* Details / Responsibilities */}
                {(item.details || item.responsibilities) && (
                    <ul className="space-y-2 mb-4">
                        {(item.details || item.responsibilities).map((detail: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                <span style={{ color: isEdu ? 'var(--accent-primary)' : 'var(--accent-secondary)', marginTop: 4, flexShrink: 0 }}>▸</span>
                                {detail}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech tags */}
                {item.tech && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800" style={{ borderColor: 'var(--border-subtle)' }}>
                        {item.tech.map((tech: string) => (
                            <span
                                key={tech}
                                className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-colors hover:bg-opacity-20"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: `1px solid ${techColors[tech] || 'var(--border-subtle)'}44`,
                                    color: techColors[tech] || 'var(--text-muted)',
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}

function Experiences() {
    const trans = useTrans();

    return (
        <section id="experiences" style={{ background: 'var(--bg-secondary)' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-10 section-separator">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase"
                        style={{
                            background: 'rgba(108, 99, 255, 0.1)',
                            border: '1px solid rgba(108, 99, 255, 0.2)',
                            color: 'var(--accent-secondary)',
                        }}
                    >
                        {trans.experiences.badge}
                    </div>
                    <h2 className="section-title section-title-center">
                        {trans.experiences.title}
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        {trans.experiences.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ background: 'rgba(108, 99, 255, 0.15)', border: '1px solid rgba(108, 99, 255, 0.25)' }}
                            >
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent-primary)' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                                {trans.experiences.education}
                            </h3>
                        </div>
                        <div className="relative">
                            {trans.experiences.educationData.map((item: any, i: number) => (
                                <TimelineItem 
                                    key={i} 
                                    item={{...item, type: 'education'}} 
                                    index={i} 
                                    isLast={i === trans.experiences.educationData.length - 1} 
                                />
                            ))}
                        </div>
                    </div>

                    {/* Work Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.2)' }}
                            >
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent-secondary)' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                                {trans.experiences.workExperience}
                            </h3>
                        </div>
                        <div className="relative">
                            {trans.experiences.workData.map((item: any, i: number) => (
                                <TimelineItem 
                                    key={i} 
                                    item={{...item, type: 'work'}} 
                                    index={i} 
                                    isLast={i === trans.experiences.workData.length - 1} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experiences;