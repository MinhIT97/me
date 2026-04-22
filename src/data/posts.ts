export const posts = [
    {
        id: '1',
        slug: 'mastering-nextjs-performance',
        title: 'Mastering Next.js Performance Optimization',
        excerpt: 'Learn how to achieve 100/100 Lighthouse scores with advanced Next.js techniques and best practices.',
        content: `
            <p>Performance is not just a feature; it's a fundamental part of the user experience. In modern web development, especially with frameworks like Next.js, optimizing for speed can be the difference between a successful product and a high bounce rate.</p>
            
            <h2>1. Image Optimization</h2>
            <p>The next/image component is a game-changer. It automatically serves correctly sized images, prevents layout shifts, and uses modern formats like WebP.</p>
            
            <pre><code>import Image from 'next/image'

<Image
  src="/me.png"
  alt="Picture of the author"
  width={500}
  height={500}
/></code></pre>

            <h2>2. Incremental Static Regeneration (ISR)</h2>
            <p>ISR allows you to create or update static pages after you’ve built your site. This gives you the benefits of static sites with the flexibility of dynamic ones.</p>

            <blockquote>"The best way to optimize performance is to do less work."</blockquote>
        `,
        date: 'Apr 20, 2026',
        readTime: '8 min read',
        category: 'Next.js',
        image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800&auto=format&fit=crop',
        color: 'var(--accent-primary)',
        author: {
            name: 'Nguyễn Văn Minh',
            role: 'Fullstack Developer',
            avatar: '/ChatGPT Image 11_54_38 22 thg 4, 2026.png'
        }
    },
    {
        id: '2',
        slug: 'future-of-ai-web-dev',
        title: 'The Future of AI in Modern Web Development',
        excerpt: 'How AI agents are transforming the way we write code and build user experiences in 2026.',
        content: `
            <p>We are living in an era where AI is no longer a futuristic concept but a daily reality for developers. From Copilot to automated testing, AI is everywhere.</p>
            
            <h2>The Rise of Agentic Coding</h2>
            <p>Next-generation AI agents can now understand entire codebases, plan complex features, and even debug edge cases with minimal human intervention.</p>
        `,
        date: 'Apr 15, 2026',
        readTime: '6 min read',
        category: 'AI / Tech',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
        color: 'var(--accent-secondary)',
        author: {
            name: 'Nguyễn Văn Minh',
            role: 'Fullstack Developer',
            avatar: '/ChatGPT Image 11_54_38 22 thg 4, 2026.png'
        }
    },
    {
        id: '3',
        slug: 'clean-code-architecture',
        title: 'Clean Code Architecture in Large Scale Apps',
        excerpt: 'A deep dive into SOLID principles and clean architecture for maintaining massive React codebases.',
        content: `
            <p>Software architecture is the art of making important decisions early and often. Clean code is about writing code for humans first, machines second.</p>
            
            <h2>SOLID Principles</h2>
            <ul>
                <li>Single Responsibility</li>
                <li>Open/Closed</li>
                <li>Liskov Substitution</li>
                <li>Interface Segregation</li>
                <li>Dependency Inversion</li>
            </ul>
        `,
        date: 'Apr 10, 2026',
        readTime: '10 min read',
        category: 'Architecture',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
        color: '#ffcc00',
        author: {
            name: 'Nguyễn Văn Minh',
            role: 'Fullstack Developer',
            avatar: '/ChatGPT Image 11_54_38 22 thg 4, 2026.png'
        }
    }
];
