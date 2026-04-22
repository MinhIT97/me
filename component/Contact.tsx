import React, { useState } from 'react';
import useTrans from '../src/hooks/useTrans';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';

const Contact = () => {
    const trans = useTrans();
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "f147ac5c-75fe-4678-955d-34ac82bd68f2");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                setStatus('success');
                setTimeout(() => setStatus('idle'), 3000);
                e.currentTarget.reset();
            } else {
                console.error("Web3Forms Error:", res);
                setStatus('idle');
                alert("Gửi tin nhắn thất bại. Vui lòng thử lại sau.");
            }
        } catch (error) {
            console.error("Submit Error:", error);
            setStatus('idle');
            alert("Có lỗi xảy ra. Vui lòng kiểm tra kết nối mạng.");
        }
    };

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/MinhIT97', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/minh-nguyen-van-a7a2a41a4/', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    ];

    return (
        <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-10 section-separator">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Info */}
                    <div className="animate-fade-in-left">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase"
                            style={{
                                background: 'var(--bg-badge)',
                                border: '1px solid var(--border-badge)',
                                color: 'var(--accent-secondary)',
                            }}
                        >
                            {trans.contact.badge}
                        </div>
                        <h2 className="section-title mb-6">
                            {trans.contact.title}
                        </h2>
                        <p className="text-lg mb-10 max-w-md" style={{ color: 'var(--text-secondary)' }}>
                            {trans.contact.subtitle}
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                                    <MailIcon className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                                </div>
                                <div>
                                    <div className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Email</div>
                                    <a href="mailto:minh0608197@gmail.com" className="text-base font-semibold hover:text-accent-primary transition-colors">
                                        minh0608197@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                                    <LocationMarkerIcon className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                                </div>
                                <div>
                                    <div className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Location</div>
                                    <div className="text-base font-semibold">Hanoi, Vietnam</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
                                {trans.contact.socials}
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
                                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                                        title={social.name}
                                    >
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="animate-fade-in-right">
                        <form
                            onSubmit={handleSubmit}
                            className="glass-card p-8 md:p-10 rounded-3xl"
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-subtle)',
                                boxShadow: 'var(--shadow-glow)',
                            }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2 ml-1" style={{ color: 'var(--text-muted)' }}>
                                        {trans.contact.name}
                                    </label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                                        style={{
                                            background: 'var(--bg-primary)',
                                            border: '1px solid var(--border-subtle)',
                                            color: 'var(--text-primary)',
                                        }}
                                        placeholder="Minh Nguyen"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2 ml-1" style={{ color: 'var(--text-muted)' }}>
                                        {trans.contact.email}
                                    </label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                                        style={{
                                            background: 'var(--bg-primary)',
                                            border: '1px solid var(--border-subtle)',
                                            color: 'var(--text-primary)',
                                        }}
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 ml-1" style={{ color: 'var(--text-muted)' }}>
                                    {trans.contact.subject}
                                </label>
                                <input
                                    required
                                    name="subject"
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                                    style={{
                                        background: 'var(--bg-primary)',
                                        border: '1px solid var(--border-subtle)',
                                        color: 'var(--text-primary)',
                                    }}
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div className="mb-8">
                                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 ml-1" style={{ color: 'var(--text-muted)' }}>
                                    {trans.contact.message}
                                </label>
                                <textarea
                                    required
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all resize-none"
                                    style={{
                                        background: 'var(--bg-primary)',
                                        border: '1px solid var(--border-subtle)',
                                        color: 'var(--text-primary)',
                                    }}
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className={`btn-primary w-full justify-center py-4 rounded-xl font-bold text-lg transition-all ${status !== 'idle' ? 'opacity-70' : ''}`}
                            >
                                {status === 'sending' ? trans.contact.sending : (status === 'success' ? trans.contact.success : trans.contact.send)}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
