import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './CreatePost.css'
import { createPost } from '../../actions/post' 

const CreatePost = () => {

    const [ postTitle, setPostTitle ] = useState('')
    const [ postBody, setPostBody ] = useState('')
    const [ postTags, setPostTags ] = useState('')

    const dispatch = useDispatch()
    const User = useSelector((state) => state.currentUserReducer)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (User) {
            if (postTitle && postBody && postTags) {
              dispatch(
                createPost(
                  {
                    postTitle,
                    postBody,
                    postTags,
                    userPosted: User.result.name,
                  },
                  navigate
                )
              );
            } else alert("Please enter all the fields");
          } else alert("Login to create post");
        };
      
        const handleEnter = (e) => {
          if (e.key === "Enter") {
            setPostBody(postBody + "\n");
          }
        };

  return (
        <div className="create-post">
            <div className="create-post-container">
                <h1 className="create-title">Create a Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className="create-form-container">
                        <label htmlFor="create-post-title">
                        <h4>Title</h4>
                        <p>Be specific about your Post - No racism, spamming, or toxicity & Remain respectful to others.</p>
                        <input type="text" id='create-post-title' onChange={(e) => {setPostTitle(e.target.value);}} placeholder='e.g. Is there anything to ape right now?' />
                        </label>
                        <label htmlFor="create-post-body">
                        <h4>Description</h4>
                        <p>Text (Required)</p>
                        <textarea name="" id="create-post-body" onChange={(e) => {setPostBody(e.target.value);}} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
                        </label>
                        <label htmlFor="create-post-tags">
                        <h4>Tags</h4>
                        <p>Add tags about your post</p>
                        <input type="text" id='create-post-tags' onChange={(e) => {setPostTags(e.target.value.split(" "));}} placeholder='e.g. (ETH, BSC, DISCUSSION, MOONSHOT, NFTS etc)' />
                        </label>
                    </div>
                    <input type="Submit" value='Post' className='review-btn' />
                </form>
            </div>
        </div>
    )
}

export default CreatePost