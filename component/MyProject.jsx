import Slider from "react-slick";
import useTrans from "../src/hooks/useTrans";

const projects = [
    {
        title: "Sim Selling Website",
        description: "Website bán SIM được phát triển với hiệu suất cao, chuẩn SEO, phù hợp mục đích bán hàng online. Trang quản trị phát triển bằng Angular, mang đến trải nghiệm tuyệt vời cho admin.",
        image: "../Group67.png",
        link: "https://mobifonehanoi.vn/",
        tags: ["Laravel", "Angular", "SEO", "MySQL", "jQuery"],
        color: "#6c63ff",
    },
    {
        title: "CRM Software",
        description: "Phần mềm CRM giúp doanh nghiệp quản lý các hoạt động tương tác, chăm sóc với khách hàng, hình thành mối quan hệ khách hàng trung thành trong doanh nghiệp.",
        image: "../Group68.png",
        link: "https://bizfly.vn/giai-phap/bizfly-crm.html",
        tags: ["Laravel", "MongoDB", "MithrilJS", "Jenkins"],
        color: "#00d4ff",
    },
];

function ArrowNext(props) {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-all"
            style={{
                background: 'rgba(108, 99, 255, 0.15)',
                border: '1px solid rgba(108, 99, 255, 0.3)',
                color: 'var(--text-primary)',
                backdropFilter: 'blur(8px)',
            }}
            aria-label="Next"
        >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    );
}

function ArrowPrev(props) {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-all"
            style={{
                background: 'rgba(108, 99, 255, 0.15)',
                border: '1px solid rgba(108, 99, 255, 0.3)',
                color: 'var(--text-primary)',
                backdropFilter: 'blur(8px)',
            }}
            aria-label="Previous"
        >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );
}

function MyProject() {
    const trans = useTrans();

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
    };

    return (
        <section id="projects" style={{ background: 'var(--bg-primary)' }}>
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
                        ✦ Portfolio
                    </div>
                    <h2 className="section-title section-title-center">
                        {trans.myProject.myProject}
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        {trans.myProject.content}
                    </p>
                </div>

                {/* Slider */}
                <div className="relative">
                    <Slider {...settings}>
                        {projects.map((project) => (
                            <div key={project.title} className="focus:outline-none px-2">
                                <div
                                    className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden"
                                    style={{
                                        borderRadius: 20,
                                        border: '1px solid rgba(255,255,255,0.07)',
                                        background: 'var(--bg-surface)',
                                    }}
                                >
                                    {/* Image */}
                                    <div className="lg:col-span-3 relative overflow-hidden" style={{ minHeight: 280 }}>
                                        <img
                                            className="w-full h-full object-cover"
                                            src={project.image}
                                            alt={project.title}
                                            style={{ display: 'block', minHeight: 280 }}
                                        />
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: 'linear-gradient(to right, transparent 60%, var(--bg-surface) 100%)',
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                                        {/* Project number */}
                                        <div
                                            className="text-xs font-semibold uppercase tracking-wider mb-3"
                                            style={{ color: 'var(--text-muted)' }}
                                        >
                                            Featured Project
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-2xl md:text-3xl font-bold mb-4"
                                            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                                        >
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm md:text-base mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                            {project.description}
                                        </p>

                                        {/* Tech tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="skill-tag text-xs">{tag}</span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary self-start"
                                        >
                                            View Project
                                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default MyProject;