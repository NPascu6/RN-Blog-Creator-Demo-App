import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        console.log('pressed')
        setBlogPosts([...blogPosts, { title: `Blog Post number #${blogPosts.length + 1}` }])
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;