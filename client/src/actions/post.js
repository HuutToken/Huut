import * as api from '../api'

export const createPost = (postData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.createPost(postData)
        dispatch({ type: "POST_POST", payload: data })
        dispatch(fetchAllPosts())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getAllPosts()
        dispatch({ type: 'FETCH_ALL_POSTS', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id, navigate) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch(fetchAllPosts())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const votePost = (id, value) => async (dispatch) => {
    try {
        await api.votePost(id, value)
        dispatch(fetchAllPosts())
    } catch (error) {
        console.log(error)
    }
}

export const postComment = (commentData) => async (dispatch) => {
    try {
        const { id, noOfComments, commentBody, userCommented } = commentData
        const { data } = await api.postComment( id, noOfComments, commentBody, userCommented )
        dispatch({ type: 'POST_COMMENT', payload: data })
        dispatch(fetchAllPosts())
    } catch (error) {
        console.log(error)
    }
}

export const deleteComment = (id, commentId, noOfComments) => async (dispatch) => {
    try {
        await api.deleteComment(id, commentId, noOfComments)
        dispatch(fetchAllPosts())
    } catch (error) {
        console.log(error)
    }
}