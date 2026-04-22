import { motion } from 'framer-motion';
import Link from 'next/link';
import useTrans from '../src/hooks/useTrans';
import { posts } from '../src/data/posts';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from '@heroicons/react/outline';

const Blog = () => {
    const trans = useTrans();

    const featuredPosts = posts.slice(0, 3);

    return (
        <section id="blog" style={{ background: 'var(--bg-primary)' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-10 section-separator">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase"
                        style={{
                            background: 'var(--bg-badge)',
                            border: '1px solid var(--border-badge)',
                            color: 'var(--accent-secondary)',
                        }}
                    >
                        {trans.blog?.badge || 'Latest Insights'}
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title"
                    >
                        {trans.blog?.title || 'Tech & Thoughts'}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group"
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-subtle)',
                                boxShadow: 'var(--shadow-sm)',
                            }}
                        >
                            {/* Image Container */}
                            <Link href={`/blog/${post.slug}`}>
                                <a className="relative h-52 overflow-hidden block">
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

                            {/* Content */}
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

                {/* View All Button */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link href="/blog">
                        <a className="btn-secondary px-8 py-3 rounded-full font-bold text-sm">
                            {trans.blog?.viewAll || 'View All Stories'}
                        </a>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
