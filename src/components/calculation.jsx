import Accommodation from "./accommodation/hotels";
import { useState } from "react";
import { MdCardTravel } from "react-icons/md";


export default function Calculation() {
  const [cart, setCart] = useState([]);
  const [clickCart, setClickCart] = useState(false);

  const handleCart = () => {
    setClickCart(!clickCart);
  };

  const addToCart = (place) => {
    console.log("Added:", place.name);
    const existing = cart.find((item) => item.id === place.id);
    if (existing) {
      const updated = cart.map((item) =>
        item.id === place.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...place, qty: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((sum, place) => sum + place.price * place.qty, 0);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: "99",
          top: "20px",
          right: "20px",
        }}
      >

        <button
          onClick={handleCart}
          style={{
            marginLeft: "95vw",
            borderRadius: "20px",
            padding: "5px",
          }}
        >
          <MdCardTravel style={{ fontSize: "30px" }} />
        </button>

        {clickCart && (
          <div
            className="cart"
            style={{
          marginLeft:'auto',  
              top: "20px",
              right: "20px",
              background: "white",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              maxWidth: "400px",
            }}
          >
            <h2>Cart</h2>
            {cart.length === 0 ? (
              <p>EMPTY PACKAGE</p>
            ) : (
              <>
                {cart.map((place) => (
                  <div key={place.id}>
                    <p>
                      {place.name} — Rs. {place.price} × {place.qty} = Rs. {place.price * place.qty}

                    </p>

                  </div>
                ))}
                <hr />
                <h3>Total: Rs. {calculateTotal()}</h3>
                <button
                  onClick={clearCart}
                  style={{
                    marginTop: "10px",
                    padding: "6px 10px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#e74c3c",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Clear Cart
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <Accommodation addToCart={addToCart} />

    </>
  );
}
