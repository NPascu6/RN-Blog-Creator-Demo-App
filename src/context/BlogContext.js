import createDataContext from '../context/createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blog_post':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case 'delete_blog_post':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    try {
        return async (title, content, callback) => {
            await dispatch({
                type: 'add_blog_post',
                payload: { title: title, content: content }
            });
            callback();
        };
    }
    catch (err) {
        console.log(err);
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blog_post', payload: id });
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
);