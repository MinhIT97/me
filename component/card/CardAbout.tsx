import { useState } from "react";
import Graduation from "../../src/svg/Graduation";
import FootPrint from "../../src/svg/FootPrint";
import GPA from "../../src/svg/GPA";
import Email from "../../src/svg/Email";
import Passion from "../../src/svg/Passion";
import Gender from "../../src/svg/Gender";

const calculateYearsDifference = () => {
    const startDate = new Date(1997, 7); // Tháng 11 là tháng 10 (vì tháng trong JavaScript bắt đầu từ 0)
    const currentDate = new Date();
    // Tính toán khoảng cách năm
    let yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
    return yearsDifference;
};
export default function CardAbout() {
    const [swiperRef, setSwiperRef] = useState(null);
    const yearsDifference = calculateYearsDifference();
    return (
        <>
            <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: 100, paddingBottom: 60 }}>
                <div className="max-w-2xl mx-auto px-6">
                    <div
                        className="rounded-2xl overflow-hidden"
                        style={{
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            boxShadow: 'var(--shadow-card)',
                        }}
                    >
                        {/* Header bar */}
                        <div
                            style={{
                                background: 'var(--gradient-primary)',
                                height: 6,
                            }}
                        />
                        <div className="px-8 py-8">
                            <div
                                className="text-2xl font-bold mb-6"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    background: 'var(--gradient-text)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Nguyễn Văn Minh
                            </div>

                            {[{
                                icon: <FootPrint width={18} />,
                                label: 'Date of Birth',
                                value: `06/08/1997 (${yearsDifference} tuổi)`,
                            }, {
                                icon: <Graduation width={18} />,
                                label: 'University',
                                value: 'Trường Đại học Mỏ – Địa chất (HUMG)',
                            }, {
                                icon: <Passion width={18} />,
                                label: 'Specialization',
                                value: 'Software Technology',
                            }, {
                                icon: <GPA width={18} />,
                                label: 'Graduation GPA',
                                value: '2.42 / 4.0',
                            }, {
                                icon: <Email width={18} />,
                                label: 'Email',
                                value: 'minh0608197@gmail.com',
                            }, {
                                icon: <Gender width={18} />,
                                label: 'Gender',
                                value: 'Nam',
                            }].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 py-3"
                                    style={{ borderBottom: '1px solid var(--border-subtle)' }}
                                >
                                    <div style={{ color: 'var(--accent-primary)', flexShrink: 0 }}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--text-muted)' }}>
                                            {item.label}
                                        </div>
                                        <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                                            {item.value}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}