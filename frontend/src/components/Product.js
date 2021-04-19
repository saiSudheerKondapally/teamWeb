import React, { useState } from 'react'
import products from '../sampleProducts';

const Product = () => {
    let [qty, setQty] = useState(0);
    let [itemId, setItemID] = useState(null);

    const cartAdd = (id) => {
        console.log("ID = ", id);
        console.log("Qty = ", document.getElementById(id).value);
    }

    return (
        <div className="product-container">
            {products.map((p) => {
                return (
                    <div key={p.id} className="product-card">
                        <h1>{p.name}</h1>
                        <img src={p.image} className="product-image" />
                        <h4>{p.description}</h4>
                        <h2>
                            ${p.price}
                            <label id="qty">Quantity
                            <input 
                            className="qty-in" 
                            id={p.id}
                            type="number"
                            defaultValue='0'
                            ></input>
                            </label>
                        </h2>
                        <button onClick={()=> {cartAdd(p.id)}} className="standard-button">Add to Cart</button>
                    </div>
                )
            })}

        </div>

    )
}

export default Product
