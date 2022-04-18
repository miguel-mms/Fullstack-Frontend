import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../forms.css";

const Checkout = ({ saveCheckout }) => {

    const defaultCheckout = {
        name: "",
        address: "",
    }

    const [newCheckout, setNewCheckout] = useState(defaultCheckout);

    const handleOnChange = event => {
        const name = event.target.name;
        const value = event.target.value;
    
        setNewCheckout({ ...newCheckout, [name]: value })
    }

    return(
        <div className="container">
            <form id="checkout-form" className="checkout-form">

                <div className="input-field">
                <label>Name</label>
                <input
                    type="text"
                    name="productName"
                    placeholder="Add your name"
                />
                </div>

                <div className="input-field">
                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    placeholder="Add your address"
                    onChange={handleOnChange}
                />
                </div>

                <div className="buttons-container">
                    <Link to="/">
                        Cancel
                    </Link>
                    <button
                        type="button"
                        onClick={() => saveCheckout(newCheckout)}
                    >
                        Checkout
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Checkout;