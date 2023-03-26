import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Posts = ({post}) => {
  return (
    <div className='display-post-container'>
        <div className='display-votes-com'>
            <p>{post.upVote.length - post.downVote.length}</p>
            <p>Votes</p>
        </div>
        <div className='display-votes-com'>
            <p>{post.noOfComments}</p>
            <p>Comments</p>
        </div>
        <div className="display-post-details">
            <Link to={`/Posts/${post._id}`} className='post-title-link'>{post.postTitle.length > (window.innerWidth <= 400 ? 70 : 90)
            ? post.postTitle.substring(
                0,
                window.innerWidth <= 400 ? 70 : 90
              ) + "..."
            : post.postTitle}
            </Link>
            <div className='display-tags-time'>
                <div className='display-tags'>
                    {
                    post.postTags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                    }
                </div>
                <p className='display-time'>
                    Posted {moment(post.postedOn).fromNow()} { post.userPosted }
                </p>
            </div>            
        </div>
    </div>
  ) 
}

export default Posts