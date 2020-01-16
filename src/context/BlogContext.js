import createDataContext from '../context/createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blog_posts':
            return action.payload
        case 'delete_blog_post':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'edit_blog_post':
            return state.map(blogPost =>
                blogPost.id === action.payload.id ? action.payload : blogPost
            );
        default:
            return state;
    }
};

const getBlogPosts = dispatch => {
    try {
        return async () => {
            const response = await jsonServer.get('/blogposts');
            dispatch({ type: 'get_blog_posts', payload: response.data })
        }
    }
    catch (err) {
        console.log(err);
    }
}

const addBlogPost = () => {
    try {
        return async (title, content, callback) => {
            await jsonServer.post('/blogposts', { title: title, content: content });
            callback ? callback() : null;
        }
    }
    catch (err) {
        console.log(err);
    }
};

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content });
        dispatch({
            type: 'edit_blog_post',
            payload: { id: id, title: title, content: content }
        });
        callback ? callback() : null;
    };
};


const deleteBlogPost = dispatch => {
    return async id => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blog_post', payload: id })
    }
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);