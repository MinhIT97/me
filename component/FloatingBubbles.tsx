import React, { useEffect, useState } from 'react';

const FloatingBubbles = () => {
    const [bubbles, setBubbles] = useState<any[]>([]);

    useEffect(() => {
        // Generate on client side to avoid hydration mismatch
        const newBubbles = Array.from({ length: 35 }).map((_, i) => ({
            id: i,
            size: Math.random() * 40 + 15, // 15px to 55px
            left: Math.random() * 100, // 0 to 100%
            top: Math.random() * 100, // 0 to 100%
            delay: Math.random() * 5,
            duration: Math.random() * 15 + 15, // 15s to 30s
            isPrimary: Math.random() > 0.5
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="absolute"
                    style={{
                        left: `${bubble.left}%`,
                        top: `${bubble.top}%`,
                        animation: `floatBubble ${bubble.duration}s ease-in-out infinite`,
                        animationDelay: `${bubble.delay}s`,
                        pointerEvents: 'none'
                    }}
                >
                    <div
                        className="rounded-full"
                        style={{
                            width: bubble.size,
                            height: bubble.size,
                            background: bubble.isPrimary 
                                ? 'radial-gradient(circle at 30% 30%, var(--accent-primary) 0%, transparent 70%)' 
                                : 'radial-gradient(circle at 30% 30%, var(--accent-secondary) 0%, transparent 70%)',
                            opacity: 0.25,
                            filter: 'blur(2px)',
                            pointerEvents: 'auto', // enable hover
                            cursor: 'pointer',
                            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            // Scatter in random direction
                            const x = (Math.random() - 0.5) * 200;
                            const y = (Math.random() - 0.5) * 200;
                            el.style.transform = `translate(${x}px, ${y}px) scale(1.8)`;
                            el.style.opacity = '0.9';
                            el.style.filter = 'blur(0px)';
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            // Return to original state after a delay
                            setTimeout(() => {
                                el.style.transform = 'translate(0px, 0px) scale(1)';
                                el.style.opacity = '0.25';
                                el.style.filter = 'blur(2px)';
                            }, 1000);
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default FloatingBubbles;
