import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import CheckoutPage from "./pages/CheckoutPage";
import CreatePostPage from "./pages/CreatePostPage";
import DetailPostPage from './pages/DetailPostPage';
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import NotFoundPage from './pages/NotFoundPage';

import { getPosts, savePost, updatePost, deletePost } from './api/postsApi';
import { saveCheckout } from './api/checkoutApi';

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts()
  }, [])

  const getAllPosts = async () => {
    const posts = await getPosts()
    setAllPosts(posts)
  }

  const handleOnSave = async post => {
    const savedPost = await savePost(post);
    if (savedPost)
      setAllPosts([...allPosts, savedPost]);
    navigate("/admin", {replace: true});
  };

  const handleSaveCheckout = async checkout => {
    await saveCheckout(checkout);
    navigate("/", {replace: true});
  };

  const handleOnEdit = async (postId, post) => {
    const editedPost = await updatePost(postId, post)
    if (editedPost) {
      const copyOfPosts = Array.from(allPosts);
      const result = copyOfPosts.filter(post => post._id !== postId)
      setAllPosts([...result, editedPost]);
    }
    navigate("/", {replace: true});
  };

  const handleOnDelete = async id => {
    const isDeleted = await deletePost(id)
    if (isDeleted) {
      const copyOfPosts = Array.from(allPosts);
      const result = copyOfPosts.filter(post => post._id !== id)
      setAllPosts(result);
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage allPosts={allPosts} onDelete={handleOnDelete} type={"home"} cart={cart} setCart={setCart} />}/>
        <Route path="admin" element={<HomePage allPosts={allPosts} onDelete={handleOnDelete} type={"admin"} cart={cart}/>} />
        <Route path="checkout" element={<CheckoutPage saveCheckout={handleSaveCheckout} type={"checkout"} cart={cart} setCart={setCart} />} />
        
        <Route
          path="create-post"
          element={
            <CreatePostPage onSave={handleOnSave} cart={cart} />
          }
        />
        
        <Route
          path="create-post/:postId"
          element={
            <CreatePostPage onSave={handleOnEdit} cart={cart} />
          }
        />
        
        <Route 
          path="post/:postId"
          element={<DetailPostPage onDelete={handleOnDelete} cart={cart}/>}
        />
        
        <Route path="*" element={<NotFoundPage cart={cart}/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
