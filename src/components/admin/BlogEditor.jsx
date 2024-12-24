import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useBlogPosts } from '../../hooks/useBlogPosts';

export default function BlogEditor() {
    const { posts, addPost, deletePost, updatePost, loading } = useBlogPosts();
    const [isEditing, setIsEditing] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const editorRef = useRef(null);


    // Form state
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tags: '', // Comma-separated tags
        isDraft: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle editor content change
    const handleEditorChange = (content) => {
        setFormData(prev => ({
            ...prev,
            content
        }));
    };

    const handleSubmit = async (e, saveAsDraft = false) => {
    // const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Convert comma-separated tags to array and trim whitespace
        const tagsArray = formData.tags
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag !== ''); // Remove empty tags

        const postData = {
            ...formData,
            tags: tagsArray,
            isDraft: saveAsDraft,
        };

        if (isEditing && editingPost) {
            await updatePost(editingPost.id, postData);
            setIsEditing(false);
            setEditingPost(null);
        } else {
            await addPost(postData);
        }

        // Reset form
        setFormData({
            title: '',
            content: '',
            tags: '',
            isDraft: false,
        });
        if (editorRef.current) {
            editorRef.current.setContent('');
        }
    };

    const startEditing = (post) => {
        setIsEditing(true);
        setEditingPost(post);
        setFormData({
            title: post.title,
            content: post.content,
            tags: post.tags.join(', '),
            isDraft: post.isDraft,
        });
        if (editorRef.current) {
            editorRef.current.setContent(post.content);
        }
    };

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-color30">
                {isEditing ? 'Edit Blog Post' : 'Write New Blog Post'}
            </h2>

            {/* Blog Post Form */}
            {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-color30 mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-color30/20 rounded-md"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-color30 mb-1">
                        Content
                    </label>
                    <Editor
                        apiKey="okystszvos2fs65oyrqujlx1bz93zo9puj8sk33719cu6idp" // You'll need to get this from TinyMCE
                        onInit={(evt, editor) => editorRef.current = editor}
                        value={formData.content}
                        onEditorChange={handleEditorChange}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                'preview', 'anchor', 'searchreplace', 'visualblocks', 'code',
                                'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-color30 mb-1">
                        Tags (comma-separated)
                    </label>
                    <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-color30/20 rounded-md"
                        placeholder="react, web development, tutorials"
                    />
                </div>

                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-color30 text-color60 rounded hover:bg-color30/80"
                    >
                        {isEditing ? 'Update Post' : 'Publish Post'}
                    </button>
                    <button
                        type="button"
                        onClick={(e) => handleSubmit(e, true)}
                        className="px-4 py-2 bg-color30/20 text-color30 rounded hover:bg-color30/30"
                    >
                        Save as Draft
                    </button>
                    {isEditing && (
                        <button
                            type="button"
                            onClick={() => {
                                setIsEditing(false);
                                setEditingPost(null);
                                setFormData({
                                    title: '',
                                    content: '',
                                    tags: '',
                                    isDraft: false,
                                });
                                if (editorRef.current) {
                                    editorRef.current.setContent('');
                                }
                            }}
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        >
                            Cancel Edit
                        </button>
                    )}
                </div>
            </form>

            {/* Existing Posts List */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-color30 mb-6">Published Posts</h2>
                {loading ? (
                    <p>Loading posts...</p>
                ) : (
                    <div className="space-y-4">
                        {posts.map((post) => (
                            <div 
                                key={post.id}
                                className={`border border-color30/20 rounded-lg p-4 space-y-2 ${
                                    post.isDraft ? 'bg-color30/5' : ''
                                }`}
                                // className="border border-color30/20 rounded-lg p-4 space-y-2"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold text-color30">
                                            {post.title}
                                        </h3>
                                        {post.isDraft && (
                                            <span className="inline-block px-2 py-1 bg-color30/10 text-color30 rounded text-sm mt-1">
                                                Draft
                                            </span>
                                        )}
                                    </div>
                                    {/* <h3 className="text-xl font-semibold text-color30">
                                        {post.title}
                                    </h3> */}


                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => startEditing(post)}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deletePost(post.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <span 
                                            key={index}
                                            className="px-2 py-1 bg-color30/10 text-color30 rounded text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-color30/70">
                                    {post.isDraft 
                                        ? `Last modified: ${post.lastModified?.toLocaleDateString()}` 
                                        : `Published: ${post.datePublished?.toLocaleDateString()}`
                                    }
                                </p>
                                {/* <p className="text-sm text-color30/70">
                                    Published: {post.datePublished.toLocaleDateString()}
                                </p> */}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
