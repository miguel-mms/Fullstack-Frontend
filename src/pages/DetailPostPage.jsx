import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from "../components/NavBar";

import Post from '../components/Post'

import { getPost } from '../api/postsApi'

const DetailPostPage = ({ onDelete, cart }) => {
  const params = useParams()
  const { postId } = params

  const [post, setPost] = useState({})

  const getPostWithComments = useCallback(async id => {
    const post = await getPost(id)
    if (post) {
      setPost(post)
    }
  }, [postId])

  useEffect(() => {
    getPostWithComments(postId)
  }, [postId, getPostWithComments])

  return (
    <>
      <NavBar type={"home"} cart={cart}/>
      <Post
        postId={ post._id }
        post={ post }
        isDetails={ true }
        onDelete={ onDelete }
      />
    </>
  )
}

export default DetailPostPage