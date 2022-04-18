import React from 'react'
import "../blog.css"
import NavBar from "../components/NavBar";

const NotFoundPage = (cart) => {
  return (
    <>
      <NavBar type={"home"} cart={cart}/>
      <div className='not-found'>404 Page Not Found</div>
    </>
  )
}

export default NotFoundPage