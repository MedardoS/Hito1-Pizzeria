import { useState } from "react";
import { pizzaCart } from "../data/pizzas"; // 👈 Importación del archivo

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    const updated = cart.map((p) =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    );
    setCart(updated);
  };

  const decrease = (id) => {
    const updated = cart
      .map((p) =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      )
      .filter((p) => p.quantity > 0);
    setCart(updated);
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>🛒 Carrito de compras</h2>
      {cart.map((p) => (
        <div
          key={p.id}
          className="d-flex justify-content-between align-items-center border p-3 mb-2 rounded bg-white"
        >
          <div className="d-flex align-items-center gap-3">
            <img src={p.img} alt={p.name} width="80" />
            <h5>{p.name}</h5>
          </div>
          <div className="d-flex align-items-center gap-3">
            <p className="fw-bold mb-0">${p.price * p.quantity}</p>
            <button className="btn btn-outline-danger" onClick={() => decrease(p.id)}>-</button>
            <span>{p.quantity}</span>
            <button className="btn btn-outline-success" onClick={() => increase(p.id)}>+</button>
          </div>
        </div>
      ))}

      <h4 className="mt-3">Total: ${total}</h4>
      <button className="btn btn-danger mt-2">Pagar</button>
    </div>
  );
};

export default Cart;
