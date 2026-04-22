import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { posts } from '../../src/data/posts';
import Layout from '../../component/layout/layout';
import { CalendarIcon, ClockIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/outline';

const BlogDetailPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        return <div className="pt-40 text-center min-h-screen">Post not found</div>;
    }

    return (
        <div className="pt-32 pb-20 min-h-screen" style={{ background: 'var(--bg-primary)' }}>
            <Head>
                <title>{post.title} | Nguyễn Văn Minh</title>
                <meta name="description" content={post.excerpt} />
            </Head>

            <div className="max-w-4xl mx-auto px-6 md:px-10">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link href="/blog">
                        <a className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-accent-primary transition-colors group">
                            <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to Insights
                        </a>
                    </Link>
                </motion.div>

                {/* Article Header */}
                <header className="mb-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 text-white"
                        style={{ background: post.color }}
                    >
                        {post.category}
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                    >
                        {post.title}
                    </motion.h1>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center gap-6 text-sm"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        <div className="flex items-center gap-3">
                            <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border border-white/10" />
                            <div>
                                <div className="font-bold text-white">{post.author.name}</div>
                                <div className="text-xs">{post.author.role}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-10">
                            <div className="flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <ClockIcon className="w-4 h-4" />
                                {post.readTime}
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Featured Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16 rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl"
                >
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </motion.div>

                {/* Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="prose prose-invert max-w-none prose-lg"
                    style={{
                        '--tw-prose-body': 'var(--text-secondary)',
                        '--tw-prose-headings': 'var(--text-primary)',
                        '--tw-prose-bold': 'var(--text-primary)',
                        '--tw-prose-links': 'var(--accent-primary)',
                        '--tw-prose-quotes': 'var(--accent-secondary)',
                    } as any}
                >
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </motion.div>

                {/* Share / Footer */}
                <footer className="mt-20 pt-10 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm font-bold">
                            <ShareIcon className="w-4 h-4" />
                            Share
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

BlogDetailPage.getLayout = (page: any) => <Layout>{page}</Layout>;

export default BlogDetailPage;
