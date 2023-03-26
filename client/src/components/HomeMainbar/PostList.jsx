import React from "react";
import Posts from "./Posts";
const PostList = ({ postsList }) => {
  const sortedPosts = [...postsList].sort((a, b) => (b.upVote.length - b.downVote.length) - (a.upVote.length - a.downVote.length));
  return (
    <>
      {sortedPosts.map((post) => (
        <Posts post={post} key={post._id} />
      ))}
    </>
  );
};

export default PostList;