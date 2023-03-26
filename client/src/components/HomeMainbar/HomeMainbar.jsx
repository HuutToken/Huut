import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import PostList  from "./PostList";

const HomeMainbar = () => {
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
    <div className="main-bar">
      <div className="main-bar-header">
          <h1>Trending Posts</h1>
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
            <PostList postsList={postsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;