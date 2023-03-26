import axios from 'axios'

const API = axios.create({ baseURL: 'https://huut.onrender.com',})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const createPost = (postData) => API.post('/posts/CreatePost', postData)
export const getAllPosts = () => API.get('/posts/get');
export const deletePost = (id) => API.delete(`/posts/delete/${id}`)
export const votePost = (id, value, userId) => API.patch(`/posts/vote/${id}`, { value, userId })

export const postComment = (id, noOfComments, commentBody, userCommented ) => API.patch(`/comment/post/${id}`, { noOfComments, commentBody, userCommented })
export const deleteComment = (id, commentId, noOfComments) => API.patch(`/comment/delete/${id}`, { commentId, noOfComments})

export const getAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)