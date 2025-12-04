import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, increase, decrease, total } = useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="container mt-5">
      <h2>🛒 Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((p) => (
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
        ))
      )}

      <h4 className="mt-3">Total: ${total}</h4>
      <button className="btn btn-danger mt-2" disabled={!token}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;
