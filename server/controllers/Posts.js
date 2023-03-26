import Posts from '../models/Posts.js'
import mongoose from 'mongoose'

export const CreatePost = async (req, res) => {
    const postPostData = req.body;
    const userId = req.userId;
    const postPost = new Posts({ ...postPostData, userId });
    try {
        await postPost.save();
        res.status(200).json("Posted successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't post a new post")
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const postList = await Posts.find().sort({ postedOn: -1 });
        res.status(200).json(postList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('post unavailable...');
    }

    try {
        await Posts.findByIdAndRemove(_id);
        res.status(200).json({ message: "successfully deleted..."})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const votePost = async (req, res) => {
    const { id: _id } = req.params;
    const { value } = req.body;
    const userId = req.userId;

    if (!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('post unavailable...');
    }

    try {
        const post = await Posts.findById(_id)
        const upIndex = post.upVote.findIndex((id) => id === String(userId))
        const downIndex = post.downVote.findIndex((id) => id === String(userId))
        if (value === 'upVote'){
            if(downIndex !== -1){
                post.downVote = post.downVote.filter((id) => id !== String(userId))
            }
            if(upIndex === -1){
                post.upVote.push(userId)
            }
            else {
            post.upVote = post.upVote.filter((id) => id !== String(userId))
            }
        }
        else if (value === 'downVote'){
            if(upIndex !== -1){
                post.upVote = post.upVote.filter((id) => id !== String(userId))
            }
            if(downIndex === -1){
                post.downVote.push(userId)
            }
            else {
            post.downVote = post.downVote.filter((id) => id !== String(userId))
            }
        }
        await Posts.findByIdAndUpdate( _id, post )
        res.status(200).json({ message: "Voted successfully..."})
    } catch (error) {
        res.status(404).json({ message: "id not found"})
    }
}