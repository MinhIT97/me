import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { posts } from '../../src/data/posts';
import Layout from '../../component/layout/layout';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/outline';

const BlogListPage = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen" style={{ background: 'var(--bg-primary)' }}>
            <Head>
                <title>Blog | Nguyễn Văn Minh - Fullstack Developer</title>
                <meta name="description" content="Sharing my thoughts on technology, web development, and software architecture." />
            </Head>

            <div className="max-w-7xl mx-auto px-6 md:px-10">
                {/* Page Header */}
                <div className="mb-20 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Tech <span className="gradient-text">Insights</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Sharing my thoughts on software development, new technologies, and my journey in the tech world.
                    </motion.p>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group"
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-subtle)',
                                boxShadow: 'var(--shadow-sm)',
                            }}
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <a className="block relative h-52 overflow-hidden">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                                    <div 
                                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                                        style={{ background: post.color }}
                                    >
                                        {post.category}
                                    </div>
                                </a>
                            </Link>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
                                    <div className="flex items-center gap-1">
                                        <CalendarIcon className="w-3.5 h-3.5" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <ClockIcon className="w-3.5 h-3.5" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <Link href={`/blog/${post.slug}`}>
                                    <a 
                                        className="text-xl font-bold mb-3 line-clamp-2 transition-colors hover:text-accent-primary"
                                        style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                                    >
                                        {post.title}
                                    </a>
                                </Link>
                                
                                <p className="text-sm line-clamp-3 mb-6 flex-grow" style={{ color: 'var(--text-secondary)' }}>
                                    {post.excerpt}
                                </p>

                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                    <Link href={`/blog/${post.slug}`}>
                                        <a className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: 'var(--accent-primary)' }}>
                                            Read More <ArrowRightIcon className="w-4 h-4" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

BlogListPage.getLayout = (page: any) => <Layout>{page}</Layout>;

export default BlogListPage;
