import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import CreatePost from '../components/CreatePost';
import NavBar from "../components/NavBar";

import { getPost } from "../api/postsApi";

const CreatePostPage = ({ onSave, cart }) => {
  const params = useParams()
  const { postId } = params
  
  const [post, setPost] = useState()

  useEffect(() => {
    getPostWId(postId)
  }, [postId])

  const getPostWId = async id => {
    if (id) {
      const post = await getPost(id)
      if (post)
        setPost(post)
    }
  }

  return (
    <>
      <NavBar type={"admin"} cart={cart}/>
      <CreatePost
        product={post}
        onSave={onSave}
      />
    </>
  );
};

export default CreatePostPage;
