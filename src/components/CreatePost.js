import React, { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import "../forms.css"

const CreatePost = ({ onSave, product }) => {

  const defaultNewProduct = {
    productName: '',
    imageUrl: '',
    description: '',
    price: '',
  }

  const [newProduct, setNewProduct] = useState(defaultNewProduct)

  useEffect(() => {
    if (product)
      setNewProduct(product)
  }, [product])

  const handleOnChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setNewProduct({ ...newProduct, [name]: value })
  }

  return (
    <div className="container">
      <form id='create-post-form' className="post-form">

        <div className="input-field">
          <label>Product name</label>
          <input
            type="text"
            name="productName"
            placeholder="Add a product name"
            value={newProduct.productName}
            onChange={handleOnChange}
          />
        </div>

        <div className="input-field">
          <label>Add an image</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Add an image url"
            value={newProduct.imageUrl}
            onChange={handleOnChange}
          />
          {
            newProduct.imageUrl !== '' &&
            <img
              style={{
                marginTop: "40px",
                maxHeight: "200px",
                maxWidth: "200px",
                alignSelf: "center",
                borderRadius: "8px",
              }}
              src={newProduct.imageUrl}
              alt="img"
            />
          }
        </div>

        <div className="input-field">
          <label>Product description</label>
          <textarea
            style={{ height: "200px" }}
            type="text"
            name="description"
            placeholder="Add a description for the product"
            value={newProduct.description}
            onChange={handleOnChange}
          />
        </div>

        <div className="input-field">
          <label>Price</label>
          <input
            type="text"
            name="price"
            placeholder="Add a price"
            value={newProduct.price}
            onChange={handleOnChange}
          />
        </div>

        <div className="buttons-container">
          <Link to="/">
            Cancel
          </Link>
          <button
            type="button"
            disabled={newProduct.productName === '' || newProduct.imageUrl === '' || newProduct.price === ''}
            onClick={() => {
              if (product?._id)
                onSave(product._id, newProduct)
              else
                onSave(newProduct)
            }}>
            Save product
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost