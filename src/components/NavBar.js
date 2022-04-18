import {React} from "react";
import { Link } from "react-router-dom";
import logo from "../img/logoipsum-logo-54.svg";
import cartIcon from "../img/shopping-cart.svg";
import "../navBar.css";

const NavBar = ({type, cart}) => {

  return (
    <div className="store-navbar">
      <div className="store-brand">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      {
        type==="home" &&
        <Link to="/checkout">
          <div className="shopping-cart">
            <img src={cartIcon} alt="" />
            <p>{cart.length}</p>
          </div>
        </Link>
      }

      {
        type==="admin" &&
        <Link to="/create-post">
          <button className="btn-new-product">New Product</button>
        </Link>
      }
    </div>
  );
};

export default NavBar;
