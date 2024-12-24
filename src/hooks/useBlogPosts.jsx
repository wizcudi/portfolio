import { useState, useEffect } from 'react';
import { 
    collection, 
    getDocs, 
    addDoc, 
    deleteDoc, 
    doc, 
    updateDoc,
    query,
    orderBy,
    where,
    getDoc
} from 'firebase/firestore';
import { db } from '../firebase/config'

export function useBlogPosts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Helper function to generate URL slug from title
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');
    };

    // Fetch all blog posts
    const fetchPosts = async () => {
        try {
            const q = query(
                collection(db, 'blog-posts'), 
                orderBy('datePublished', 'desc')
            );
            const querySnapshot = await getDocs(q);
            const postsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                // Convert Firestore Timestamp to JavaScript Date
                datePublished: doc.data().datePublished?.toDate(),
                lastModified: doc.data().lastModified?.toDate()
            }));
            setPosts(postsData);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch blog posts');
            setLoading(false);
            console.error('Error fetching blog posts:', err);
        }
    };

    // Fetch a single post by slug
    const fetchPostBySlug = async (slug) => {
        try {
            const q = query(collection(db, 'blog-posts'), where('slug', '==', slug));
            const querySnapshot = await getDocs(q);
            
            if (querySnapshot.empty) {
                return null;
            }

            const postDoc = querySnapshot.docs[0];
            return {
                id: postDoc.id,
                ...postDoc.data(),
                datePublished: postDoc.data().datePublished?.toDate()
            };
        } catch (err) {
            console.error('Error fetching post by slug:', err);
            return null;
        }
    };

    // Add a new blog post
    const addPost = async (postData) => {
        try {
            const slug = generateSlug(postData.title);
            // Check if slug already exists
            const existingPost = await fetchPostBySlug(slug);
            if (existingPost) {
                throw new Error('A post with this title already exists');
            }

            const newPost = {
                ...postData,
                slug,
                // datePublished: new Date(),
                lastModified: new Date(),
                datePublished: postData.isDraft ? null : new Date()
            };

            await addDoc(collection(db, 'blog-posts'), newPost);
            await fetchPosts(); // Refresh the posts list
            return true;
        } catch (err) {
            setError(err.message || 'Failed to add blog post');
            console.error('Error adding blog post:', err);
            return false;
        }
    };

    // Delete a blog post
    const deletePost = async (postId) => {
        try {
            await deleteDoc(doc(db, 'blog-posts', postId));
            await fetchPosts(); // Refresh the posts list
            return true;
        } catch (err) {
            setError('Failed to delete blog post');
            console.error('Error deleting blog post:', err);
            return false;
        }
    };

    // Update a blog post
    const updatePost = async (postId, updatedData) => {
        try {
            const postRef = doc(db, 'blog-posts', postId);
            const currentPost = await getDoc(postRef);
            
            // If title changed, generate new slug
            let slug = currentPost.data().slug;
            if (updatedData.title !== currentPost.data().title) {
                slug = generateSlug(updatedData.title);
                // Check if new slug already exists (excluding current post)
                const existingPost = await fetchPostBySlug(slug);
                if (existingPost && existingPost.id !== postId) {
                    throw new Error('A post with this title already exists');
                }
            }


            // Handle publishing a draft
            const wasPublished = !currentPost.data().isDraft && updatedData.isDraft;
            const wasUnpublished = currentPost.data().isDraft && !updatedData.isDraft;



            await updateDoc(postRef, {
                ...updatedData,
                slug,
                lastModified: new Date(),
                // Update datePublished if publishing for the first time
                ...(wasUnpublished && { datePublished: new Date() }),
                // Clear datePublished if unpublishing
                ...(wasPublished && { datePublished: null }),
            });
            await fetchPosts(); // Refresh the posts list
            return true;
        } catch (err) {
            setError(err.message || 'Failed to update blog post');
            console.error('Error updating blog post:', err);
            return false;
        }
    };

    // New method to get only published posts (for public view)
    const getPublishedPosts = async () => {
        try {
            const q = query(
                collection(db, 'blog-posts'),
                where('isDraft', '==', false),
                orderBy('datePublished', 'desc')
            );
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                datePublished: doc.data().datePublished?.toDate(),
                lastModified: doc.data().lastModified?.toDate()
            }));
        } catch (err) {
            console.error('Error fetching published posts:', err);
            return [];
        }
    };

    // Filter posts by tag
    const getPostsByTag = (tag) => {
        return posts.filter(post => post.tags.includes(tag));
    };

    // Get all unique tags
    const getAllTags = () => {
        const tagSet = new Set();
        posts.forEach(post => {
            post.tags.forEach(tag => tagSet.add(tag));
        });
        return Array.from(tagSet);
    };

    // Load posts on component mount
    useEffect(() => {
        fetchPosts();
    }, []);
    
    return {
        posts,
        loading,
        error,
        addPost,
        deletePost,
        updatePost,
        fetchPostBySlug,
        getPostsByTag,
        getAllTags,
        getPublishedPosts,
        refreshPosts: fetchPosts
    };
}
