import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './NewPost.css'
import moment from 'moment'

const NewPost = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const postsList = useSelector((state) => state.postsReducer);

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to create a post");
      navigate("/Auth");
    } else {
      navigate("/CreatePost");
    }
  };

  return (
    <div className='home-container-1'>
    <div className="main-bar">
      <div className="main-bar-header">
          <h1>New Posts</h1>
        
        <button onClick={checkAuth} className="create-btn">
          Create Post
        </button>
      </div>
      <div>
        {postsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{postsList.data.length} Posts</p>
            {postsList.data && postsList.data.map((post) => (
                <>
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
                </>
            ))}
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default NewPost;