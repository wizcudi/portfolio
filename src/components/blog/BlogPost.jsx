import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useBlogPosts } from '../../hooks/useBlogPosts';

export default function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { fetchPostBySlug } = useBlogPosts();

    useEffect(() => {
        const loadPost = async () => {
            const postData = await fetchPostBySlug(slug);
            if (!postData || postData.isDraft) {
                navigate('/blog');
                return;
            }
            setPost(postData);
            setLoading(false);
        };
        loadPost();
    }, [slug, navigate]);

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
                    <p className="text-color30">Loading post...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-color60 py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* Back to blog link */}
                <Link 
                    to="/blog" 
                    className="inline-flex items-center text-color30 hover:text-color10a mb-8"
                >
                    ← Back to Blog
                </Link>

                <article className="bg-color10b rounded-lg shadow-lg p-8">
                    <header className="mb-8">
                        <h1 className="text-4xl font-bold text-color30 mb-4">
                            {post.title}
                        </h1>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                                <Link
                                    key={index}
                                    to={`/blog?tag=${tag}`}
                                    className="px-2 py-1 bg-color30/10 text-color30 rounded-full text-sm hover:bg-color30/20"
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>

                        <div className="text-color30/70">
                            Published on {formatDate(post.datePublished)}
                        </div>
                    </header>

                    {/* Blog content */}
                    <div 
                        className="prose prose-lg max-w-none text-color30/90"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                {/* Navigation between posts could be added here */}
            </div>
        </div>
    );
}