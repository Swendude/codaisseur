import axios from 'axios';

const evil_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU5LCJpYXQiOjE2MzY3MjE4ODksImV4cCI6MTYzNjcyOTA4OX0.6HwY8elc0-qTZRK0Jd5y41FVhMGOHkEpOrBziZkYa6E'
const evil_id = '259'

export const storePost = (post) => ({
    type: 'post/storePosts',
    payload: post
})

export const getPostsForMe = async(dispatch, getState) => {
    try {
        const api_response = await axios.get('https://codaisseur-coders-network.herokuapp.com/posts?author=259');
        dispatch(storePost(api_response.data.rows));
    } catch (error) {
        console.log(error);
    }
}

export const createPostForMe = (title, content) => {
    return async(dispatch, getState) => {
        try {
            await axios.post('https://codaisseur-coders-network.herokuapp.com/posts', { title: title, content: content }, {
                headers: { Authorization: `Bearer ${evil_token}` },
            });
            const api_response = await axios.get('https://codaisseur-coders-network.herokuapp.com/posts?author=259');
            dispatch(storePost(api_response.data.rows));
        } catch (error) {
            console.log(error);
        }
    }
}

export const destroyPostForMe = (id) => {
    return async(dispatch, getState) => {
        try {
            await axios.delete(`https://codaisseur-coders-network.herokuapp.com/posts/${id}`, {
                headers: { Authorization: `Bearer ${evil_token}` }
            })
            const api_response = await axios.get('https://codaisseur-coders-network.herokuapp.com/posts?author=259');
            dispatch(storePost(api_response.data.rows));
        } catch (error) {
            console.log(error);
        }
    }
}