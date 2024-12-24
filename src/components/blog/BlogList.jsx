import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../..//hooks/useBlogPosts';

export default function BlogList() {
    const [publishedPosts, setPublishedPosts] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);
    const [loading, setLoading] = useState(true);
    const { getPublishedPosts, getAllTags } = useBlogPosts();

    useEffect(() => {
        const loadPosts = async () => {
            const posts = await getPublishedPosts();
            setPublishedPosts(posts);
            setLoading(false);
        };
        loadPosts();
    }, []);

    const tags = getAllTags();
    
    const filteredPosts = selectedTag
        ? publishedPosts.filter(post => post.tags.includes(selectedTag))
        : publishedPosts;

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-color60 py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-color30">Loading posts...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-color60 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-color30 mb-8">Blog</h1>
                
                {/* Tags filter */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-3 py-1 rounded-full text-sm ${
                                selectedTag === null
                                    ? 'bg-color30 text-color60'
                                    : 'bg-color30/10 text-color30 hover:bg-color30/20'
                            }`}
                        >
                            All Posts
                        </button>
                        {tags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-3 py-1 rounded-full text-sm ${
                                    selectedTag === tag
                                        ? 'bg-color30 text-color60'
                                        : 'bg-color30/10 text-color30 hover:bg-color30/20'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog posts */}
                <div className="space-y-12">
                    {filteredPosts.map(post => (
                        <article 
                            key={post.id} 
                            className="bg-color10b rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <Link to={`/blog/${post.slug}`} className="block p-6">
                                <h2 className="text-2xl font-bold text-color30 mb-2">
                                    {post.title}
                                </h2>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-color30/10 text-color30 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-color30/70 text-sm mb-4">
                                    {formatDate(post.datePublished)}
                                </div>
                                <div 
                                    className="text-color30/90 line-clamp-3"
                                    dangerouslySetInnerHTML={{
                                        __html: post.content.substring(0, 200) + '...'
                                    }}
                                />
                                <div className="mt-4 text-color10a font-medium">
                                    Read more →
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-color30/70">
                            {selectedTag 
                                ? `No posts found with tag "${selectedTag}"`
                                : 'No blog posts yet'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}