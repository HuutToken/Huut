import React, { useState } from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upvote from '../../assets/sortup.png'
import downvote from '../../assets/sortdown.png'
import './Posts.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayComment from './DisplayComment'
import { postComment, deletePost, votePost } from '../../actions/post'


const PostsDetails = () => {

    const { id } = useParams()
    const postsList = useSelector((state) => state.postsReducer);

    const [Comment, setComment] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => state.currentUserReducer)
    const location = useLocation()
    const url = 'https://huut.onrender.com'

    const handlePostCom = (e, commentLength) => {
        e.preventDefault()
        if (User === null){
            alert('Login or Signup to create a post')
            Navigate('/Auth')
        } else {
            if(Comment === ''){
                alert('Enter an comment before submitting')
            } else{
                dispatch(postComment({ id, noOfComments: commentLength + 1, commentBody: Comment, userCommented: User.result.name, }))
                setComment('');
            }
        }
    }

    const handleShare = () => {
        copy(url + location.pathname)
        alert('Copied url : ' + url + location.pathname)
    }

    const handleDelete = () => {
        dispatch(deletePost(id, Navigate))
    }

    const handleUpVote = () => {
        if (User === null) {
            alert("Login or Signup to up vote a post")
            Navigate("/Auth");
        } else {
            dispatch(votePost(id, 'upVote'))
        }
    }

    const handleDownVote = () => {
        if (User === null) {
            alert("Login or Signup to up vote a post")
            Navigate("/Auth");
        } else {
            dispatch(votePost(id, 'downVote'))
        }
    }

  return (
    <div className='post-details-page'>
        {
            postsList.data === null ? (
            <h1>Loading...</h1>
            ) : (
            <>
                {
                    postsList.data.filter((post) => post._id === id).map((post) => (
                        <div key={post._id}>
                            <section className='post-details-container'>
                            <h1>{post.postTitle}</h1>
                            <div className='post-details-container-2'>
                                <div className="post-votes">
                                    <img src={upvote} alt="" width='18' className='votes-icon' onClick={handleUpVote}/>
                                    <p>{post.upVote.length - post.downVote.length}</p>
                                    <img src={downvote} alt="" width='18' className='votes-icon' onClick={handleDownVote}/>
                                </div>
                                <div style={{width: "100%"}}>
                                    <p className='post-body'>{post.postBody}</p>
                                    <div className="post-details-tags">
                                        {
                                            post.postTags.map((tag) => (
                                                <p key={tag}>{tag}</p>
                                            ))
                                        }
                                    </div>
                                    <div className="post-actions-user">
                                        <div>
                                            <button type='button' onClick={handleShare}>Share</button>
                                            {
                                                User?.result?._id === post?.userId && (
                                                    <button type='button' onClick={handleDelete}>Delete</button>
                                                )
                                            }
                                        </div>
                                        <div>
                                            <p>Posted {moment(post.postedOn).fromNow()}</p>
                                            <Link to={`/Users/${post.userId}`} className='user-link' style={{color:'#00fff6'}}>
                                                <Avatar backgroundColor="#11f9d7" px='8px' py='5px'>{post.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>
                                                    {post.userPosted}
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                            </section>
                            {
                                post.noOfComments !== 0 && (
                                    <section>
                                        <h3>{post.noOfComments} Comments</h3>
                                        <DisplayComment key={post._id} post={post} handleShare={handleShare}/>
                                    </section>
                                )
                            }
                            <section className='post-com-container'>
                                <h3>Your Comment</h3>
                                <form onSubmit={(e) => { handlePostCom(e, post.comment.length) }}>
                                    <textarea name="" id="" cols="30" rows="10" value={Comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                    <br />
                                    <input type="Submit" className='post-com-btn' value='Post Your Comment'/>
                                </form>
                                <p>
                                    Browse other Post tagged
                                    {
                                        post.postTags.map((tag) => (
                                            <Link to='/Tags' key={tag} className='com-tags'>{' '} {tag}{' '}</Link>
                                        ))
                                    }{' '} or
                                    <Link to='/CreatePost' style={{textDecoration: "none", color:"#00fff6"}}>{' '} create your own post.</Link>
                                </p>
                            </section>
                        </div>
                    ))
                }
            </>
        )}
    </div>
  )
}

export default PostsDetails