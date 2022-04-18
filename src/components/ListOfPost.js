import React from "react";
import Post from "./Post";

const ListOfPost = ({ posts, onDelete, type, cart, setCart }) => {
  return (
    <>
      {posts.map(post => {
        return (
          <Post
            key={post.productName}
            post={post}
            postId={post._id}
            onDelete={onDelete}
            type={type}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </>
  );
};

export default ListOfPost;
