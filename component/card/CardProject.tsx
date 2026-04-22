import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Building from "../../src/svg/Building";
import Programer from "../../src/svg/Programer";
import Clock from "../../src/svg/Clock";
import Skills from "../../src/svg/Skills";
import TeamWork from "../../src/svg/TeamWork";
import useTrans from "../../src/hooks/useTrans";



export default function CardProject() {
    const [swiperRef, setSwiperRef] = useState(null);
    const trans = useTrans();

    return (
        <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: 100, paddingBottom: 60 }}>
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center mb-12">
                    <h2 className="section-title section-title-center">{trans.project.title}</h2>
                    <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        {trans.project.subtitle}
                    </p>
                </div>

                <div className="relative project-swiper-container">
                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        modules={[Mousewheel, Pagination, Navigation]}
                        mousewheel={true}
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        className="mySwiper pb-12"
                    >
                        {trans.project.projectsData.map((project: any, index: number) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div
                                    className="h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
                                    style={{
                                        background: 'var(--bg-surface)',
                                        border: '1px solid var(--border-subtle)',
                                    }}
                                >
                                    {/* Top Content */}
                                    <div className="p-6 flex-grow border-b border-gray-800" style={{ borderColor: 'var(--border-subtle)' }}>
                                        <div 
                                            className="font-bold text-xl mb-2" 
                                            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                                        >
                                            {project.title}
                                        </div>
                                        
                                        {project.link && (
                                            <div className="mb-4">
                                                <a 
                                                    href={project.link} 
                                                    target="_blank" 
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
                                                    style={{ color: 'var(--accent-secondary)' }}
                                                >
                                                    {trans.project.goToWebsite}
                                                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            </div>
                                        )}

                                        <div className="mt-4">
                                            <div className="font-semibold text-sm mb-2" style={{ color: 'var(--text-muted)' }}>{trans.project.tasks}</div>
                                            <ul className="space-y-1.5 pl-4">
                                                {project.tasks.map((task, i) => (
                                                    <li key={i} className="text-sm list-disc" style={{ color: 'var(--text-secondary)' }}>
                                                        {task}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Bottom Info */}
                                    <div className="p-6" style={{ background: 'var(--bg-card-footer)' }}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div style={{ color: 'var(--accent-primary)' }}><Building width={18} /></div>
                                            <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{project.company}</div>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 mb-3">
                                            <div style={{ color: 'var(--accent-primary)' }}><Clock width={18} /></div>
                                            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{project.period}</div>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 mb-3">
                                            <div style={{ color: 'var(--accent-primary)' }}><Programer width={18} /></div>
                                            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{project.role}</div>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 mb-4">
                                            <div style={{ color: 'var(--accent-primary)' }}><TeamWork width={18} /></div>
                                            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{trans.project.teamSize} {project.teamSize}</div>
                                        </div>

                                        {/* Tech tags */}
                                        <div className="flex items-start gap-3 mt-4 pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                                            <div style={{ color: 'var(--accent-primary)', marginTop: '2px' }}><Skills width={18} /></div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techs.map(tech => (
                                                    <span 
                                                        key={tech} 
                                                        className="px-2 py-1 rounded text-xs font-medium"
                                                        style={{ 
                                                            background: 'var(--bg-badge)', 
                                                            border: '1px solid var(--border-badge)',
                                                            color: 'var(--text-secondary)'
                                                        }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Desktop Navigation Arrows */}
                    <div className="hidden md:block">
                        <div className="swiper-button-prev !text-accent-primary !w-10 !h-10 !-left-12 after:!text-xl"></div>
                        <div className="swiper-button-next !text-accent-primary !w-10 !h-10 !-right-12 after:!text-xl"></div>
                    </div>
                </div>
            </div>

            {/* Pagination/Navigation custom styles */}
            <style jsx global>{`
                .project-swiper-container {
                    padding: 0 10px;
                }
                @media (min-width: 768px) {
                    .project-swiper-container {
                        padding: 0;
                    }
                }
                .project-swiper-container .swiper-pagination-bullet {
                    background: var(--text-muted);
                }
                .project-swiper-container .swiper-pagination-bullet-active {
                    background: var(--accent-primary);
                }
                .project-swiper-container .swiper-button-next,
                .project-swiper-container .swiper-button-prev {
                    color: var(--accent-primary);
                    background: var(--bg-surface);
                    border: 1px solid var(--border-subtle);
                    border-radius: 50%;
                    box-shadow: var(--shadow-glow);
                }
                .project-swiper-container .swiper-button-next:after,
                .project-swiper-container .swiper-button-prev:after {
                    font-size: 16px;
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
}