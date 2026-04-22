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

const projects = [
    {
        title: "WEB BÁN HÀNG",
        link: "https://mobifonehanoi.vn/",
        tasks: [
            "Tạo các module cho core của công ty.",
            "Thiết kế database.",
            "RESTful API.",
            "Đẩy module lên packagist.",
            "Sử dụng module để tạo nhanh các website."
        ],
        company: "VMMS",
        period: "11/2019 - 08/2020",
        role: "Nhân viên",
        teamSize: 2,
        techs: ["Laravel", "Javascript"]
    },
    {
        title: "WEB CRM",
        link: "https://bizfly.vn/giai-phap/bizfly-crm.html",
        tasks: [
            "Phát triển hệ thống CRM quản lý khách hàng.",
            "Phát triển các tính năng báo cáo thống kê.",
            "Phân quyền, Export excel, Push Notification.",
            "Sử dụng module để tạo nhanh các website.",
            "Mã hóa bảo mật, Send sms, Tích hợp Harvan, Kiotviet, Janco."
        ],
        company: "VCCorp",
        period: "08/2020 - 06/2022",
        role: "Nhân viên",
        teamSize: 11,
        techs: ["Laravel", "Javascript", "Mithril"]
    },
    {
        title: "WEB HRTECH",
        link: null,
        tasks: [
            "Phát triển hệ thống HRTECH quản lý ứng viên.",
            "Xây dựng hệ thống HRTECH cho công ty Aeon Việt Nam.",
            "Nhận yêu cầu khách hàng phân tích xây dựng chức năng.",
            "RESTful API.",
            "Sử dụng Vuejs để tạo website cho ứng viên và trang quản lý.",
            "Tích hợp AI đánh giá điểm ứng viên."
        ],
        company: "Nissho Electronics",
        period: "07/2022 - 05/2023",
        role: "Nhân viên",
        teamSize: 8,
        techs: ["Laravel", "Javascript", "Vuejs"]
    },
    {
        title: "WEB SURVEY",
        link: null,
        tasks: [
            "Phát triển hệ thống quản lý tòa nhà cho UK.",
            "Nhận yêu cầu khách hàng phân tích xây dựng chức năng.",
            "Thiết kế database.",
            "RESTful API."
        ],
        company: "Shine Vision",
        period: "05/2023 - Hiện tại",
        role: "Nhân viên",
        teamSize: 10,
        techs: ["Laravel", "Javascript"]
    }
];

export default function CardProject() {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: 100, paddingBottom: 60 }}>
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center mb-12">
                    <h2 className="section-title section-title-center">Project Details</h2>
                    <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Chi tiết các dự án và kinh nghiệm làm việc thực tế.
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
                        navigation={true}
                        className="mySwiper pb-12"
                    >
                        {projects.map((project, index) => (
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
                                                    Đi đến website
                                                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            </div>
                                        )}

                                        <div className="mt-4">
                                            <div className="font-semibold text-sm mb-2" style={{ color: 'var(--text-muted)' }}>Công việc:</div>
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
                                    <div className="p-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
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
                                            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Team size: {project.teamSize}</div>
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
                                                            background: 'rgba(108, 99, 255, 0.1)', 
                                                            border: '1px solid rgba(108, 99, 255, 0.2)',
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
                </div>
            </div>

            {/* Pagination/Navigation custom styles */}
            <style jsx global>{`
                .project-swiper-container .swiper-pagination-bullet {
                    background: var(--text-muted);
                }
                .project-swiper-container .swiper-pagination-bullet-active {
                    background: var(--accent-primary);
                }
                .project-swiper-container .swiper-button-next,
                .project-swiper-container .swiper-button-prev {
                    color: var(--accent-primary);
                }
                .project-swiper-container .swiper-button-next:after,
                .project-swiper-container .swiper-button-prev:after {
                    font-size: 20px;
                }
            `}</style>
        </div>
    );
}