import React from 'react';
import ListOfPost from "../components/ListOfPost";
import NavBar from "../components/NavBar";
import "../blog.css";
import Checkout from '../components/Checkout';


const CheckoutPage = ({saveCheckout, type, cart, setCart}) => {
  return (
    <>
      <NavBar type={"home"} cart={cart}/>
      <div className="page-title">Checkout</div>
      <div className="checkout-container">
        <div className="checkout-products">
          <div className='container-products'>
            <ListOfPost saveCheckout={saveCheckout} posts={cart} type={type} cart={cart} setCart={setCart} />
          </div>
        </div>
        <Checkout/>
      </div>
    </>
  )
}

export default CheckoutPage;