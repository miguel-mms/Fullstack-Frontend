import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logoipsum-logo-54.svg";
import "../blog.css";
import "../navBar.css";

const AdminNavBar = () => {
  return (
    <div className="store-navbar">
      <div className="store-brand">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <Link to="/create-post">
        <button className="btn-new-product">New Product</button>
      </Link>
    </div>
  );
};

export default AdminNavBar;
