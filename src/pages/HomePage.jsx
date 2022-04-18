import React from "react";
import ListOfPost from "../components/ListOfPost";
import "../blog.css";
import NavBar from "../components/NavBar";

const HomePage = ({ allPosts, onDelete, type, cart, setCart }) => {
  return (
    <>
      <NavBar type={type} cart={cart}/>
      {
        type==="home" &&
        <div className="page-title">Home</div>
      }
      {
        type==="admin" &&
        <div className="page-title">Admin</div>
      }
      <div className="container-products">
        <ListOfPost posts={allPosts} onDelete={onDelete} type={type} cart={cart} setCart={setCart} />
      </div>
    </>
  );
};

export default HomePage;
