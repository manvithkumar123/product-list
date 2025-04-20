import React, { useState } from 'react'
import "./mainpage.css"
import assest from '../../assets/assests.js'

const Container = () => {
    const increment = (index) => {
        setCounters(prev => {
            const updated = [...prev];
            updated[index] += 1;
            return updated;
        });
    };

  const decrement = (index) => {
    setCounters(prev => {
      const updated = [...prev];
      if (updated[index] > 1) updated[index] -= 1;
      return updated;
    });
  };
  const desserts = [
    { name: "Waffle with Berries", price: 6.50, img: assest.waffle },
    { name: "Vanilla Cream", price: 7.00, img: assest.cream },
    { name: "Macaron Delight", price: 8.00, img: assest.macaron },
    { name: "Tiramisu", price: 5.50, img: assest.tiramusu },
    { name: "Pistachio Treat", price: 4.00, img: assest.pistacho },
    { name: "Lemon Tart", price: 5.00, img: assest.lemon },
    { name: "Red Velvet", price: 4.50, img: assest.red },
    { name: "Brownie", price: 5.50, img: assest.browine },
    { name: "Vanilla Delight", price: 6.50, img: assest.vanila }
  ];
  const [clickedButtons, setClickedButtons] = useState([]);
  const [counters, setCounters] = useState(Array(desserts.length).fill(1));
  const handleAddToCart = (index) => {
    setClickedButtons(prev => [...prev, index]);
  };
  const handleRemoveFromCart = (removeIndex) => {
    setClickedButtons(prev => prev.filter((_, i) => i !== removeIndex));
  };

  return (
    <div>
      <div className="background">
        <div className="desserts_container">
          <h2 >Desserts</h2>
          <div className="card_container">
            {desserts.map((dessert, index) => (
              <div className="card" key={index}>
                <img src={dessert.img} alt={dessert.name} />
                {!clickedButtons.includes(index) ? (
                  <button id="add" onClick={() => handleAddToCart(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#EA3323">
                      <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                    </svg>
                    Add to Cart
                  </button>
                  
                ) :(<button id='add' style={{display:"flex",padding:"4px 10px 0 25px",backgroundColor:"red"}}>
                    <button id='plus' onClick={()=>increment(index)}>+</button>
                    <p>{counters[index]}</p>
                    <button id='minus' onClick={()=>decrement(index)}>-</button>
                </button>)}
                <div className="text">
                  <h5>{dessert.name}</h5>
                  <p>${dessert.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="checkout">
            <h1 style={{textAlign:"center"}}>Your Cart</h1>
              {clickedButtons.length === 0 ? (
                <p id='total'>No items in the cart.</p>
              ) : (
                <>
                  <ul>
                    <br />{clickedButtons.map((index, i) => (
                    <li key={i}>
                        {desserts[index].name} - X{counters[index]}- ${(
                          desserts[index].price * counters[index]
                        ).toFixed(2)}{" "}
                        <button id="remove"onClick={() => handleRemoveFromCart(i)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div className="order">
              <p id='total'>
                    <strong>Total: $
                      {clickedButtons.reduce((acc, index) => acc + desserts[index].price * counters[index], 0).toFixed(2)}
                    </strong>
                  </p>
                  <button id='confirm' onClick={() => alert("Order confirmed!")}>Confirm Order</button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Container
