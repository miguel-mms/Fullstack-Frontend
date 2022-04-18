import React from "react";
import { Link } from "react-router-dom";
import "../blog.css";

const Post = ({ post, postId, onDelete, type, cart, setCart }) => {

  const addToCart = () => {
    setCart([...cart, post])
    console.log(cart)
  }

  const removeFromCart = () => {
    const result = cart.filter(product => product !== post);
    setCart(result);
  }

 return (
  <div className="product-card">

    <div className="product-image">
      <img src={post.imageUrl} alt="img" width="250" height = "200" />
    </div>

    <div className="product-details">
      <h1>{post.productName}</h1>
      <p>{post.description}</p>
    </div>

    {
      type==="home" &&
      <button className="btn-add-to-cart" onClick={addToCart}>Add to cart</button>
    }

    {
      type==="admin" &&
      <div className="product-action-buttons">
        <button className="btn-delete-product" onClick={() => onDelete(postId)}>Delete product</button>
        <Link to={`/create-post/${postId}`} >
          <button className="btn-edit-product">Edit product</button>
        </Link>
      </div>
    }

    {
      type==="checkout" &&
      <button className="btn-remove-from-cart" onClick={removeFromCart}>Remove</button>
    }
  </div>
 )
}

export default Post;